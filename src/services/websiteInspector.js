
import axios from "axios";
import * as cheerio from "cheerio";
import dns from "node:dns";
import ipaddr from "ipaddr.js";
import http from "node:http";
import https from "node:https";

const MAX_PAGES = 8;
const MAX_HTML_BYTES = 2 * 1024 * 1024;
const MAX_REDIRECTS = 4;
const TIMEOUT_MS = 12000;

// const httpAgent = new http.Agent({ keepAlive: false });
// const httpsAgent = new https.Agent({ keepAlive: false });

function isPublicIp(address) {
  try {
    const parsed = ipaddr.parse(address);

    // Reject private, loopback, link-local, reserved, multicast,
    // IPv4-mapped IPv6, and other non-global address ranges.
    return parsed.range() === "unicast";
  } catch {
    return false;
  }
}

function createPublicLookup() {
  return (hostname, options, callback) => {
    dns.lookup(hostname, { all: true, verbatim: true }, (error, addresses) => {
      if (error) return callback(error);

      if (!addresses.length || addresses.some(
        ({ address }) => !isPublicIp(address)
      )) {
        return callback(new Error("Host resolves to a non-public IP"));
      }

      const filtered = addresses.filter(({ address }) =>
        isPublicIp(address)
      );

      if (options?.all) {
        return callback(null, filtered);
      }

      const selected = filtered[0];
      return callback(null, selected.address, selected.family);
    });
  };
}

const secureHttpAgent = new http.Agent({
  keepAlive: false,
  lookup: createPublicLookup(),
});

const secureHttpsAgent = new https.Agent({
  keepAlive: false,
  lookup: createPublicLookup(),
});

function normalizeWebsiteUrl(value) {
  if (!value) throw new Error("Website URL is missing");

  let url;

  try {
    url = new URL(value);
  } catch {
    throw new Error("Invalid website URL");
  }

  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("Only HTTP and HTTPS websites are supported");
  }

  if (url.username || url.password) {
    throw new Error("URLs containing credentials are not allowed");
  }

  if (url.port && !["80", "443"].includes(url.port)) {
    throw new Error("Custom ports are not allowed");
  }

  url.hash = "";
  return url;
}

async function validatePublicHost(url) {
  const hostname = url.hostname.replace(/^\[|\]$/g, "");

  if (hostname === "localhost" || hostname.endsWith(".localhost")) {
    throw new Error("Localhost URLs are not allowed");
  }

  if (hostname.endsWith(".local")) {
    throw new Error("Local network hostnames are not allowed");
  }

  if (ipaddr.isValid(hostname)) {
    if (!isPublicIp(hostname)) {
      throw new Error("Non-public IP addresses are not allowed");
    }

    return;
  }

  const addresses = await dns.promises.lookup(hostname, {
    all: true,
    verbatim: true,
  });

  if (
    !addresses.length ||
    addresses.some(({ address }) => !isPublicIp(address))
  ) {
    throw new Error("Website host must resolve only to public IP addresses");
  }
}

async function fetchHtml(inputUrl) {
  let currentUrl = normalizeWebsiteUrl(inputUrl);

  for (let redirect = 0; redirect <= MAX_REDIRECTS; redirect++) {
    await validatePublicHost(currentUrl);

    const response = await axios.get(currentUrl.href, {
      timeout: TIMEOUT_MS,
      maxRedirects: 0,
      maxContentLength: MAX_HTML_BYTES,
      maxBodyLength: MAX_HTML_BYTES,
      responseType: "text",
      validateStatus: () => true,
      headers: {
        "User-Agent": "BusinessWebsiteAuditBot/1.0",
        Accept: "text/html,application/xhtml+xml",
      },
      httpAgent: secureHttpAgent,
      httpsAgent: secureHttpsAgent,
      proxy: false,
    });

    if ([301, 302, 303, 307, 308].includes(response.status)) {
      const location = response.headers.location;

      if (!location) {
        throw new Error("Website returned a redirect without a location");
      }

      if (redirect === MAX_REDIRECTS) {
        throw new Error("Too many website redirects");
      }

      currentUrl = normalizeWebsiteUrl(
        new URL(location, currentUrl).href
      );

      continue;
    }

    if (response.status < 200 || response.status >= 300) {
      throw new Error(`Website returned HTTP ${response.status}`);
    }

    const contentType = response.headers["content-type"] || "";

    if (!/text\/html|application\/xhtml\+xml/i.test(contentType)) {
      throw new Error("URL did not return an HTML page");
    }

    if (Buffer.byteLength(response.data, "utf8") > MAX_HTML_BYTES) {
      throw new Error("HTML response exceeded the size limit");
    }

    return {
      html: response.data,
      finalUrl: currentUrl.href,
      status: response.status,
    };
  }

  throw new Error("Unable to fetch website");
}

function extractPage(html, pageUrl, status) {
  const $ = cheerio.load(html);

  const title = $("title").first().text().trim() || null;
  const description =
    $('meta[name="description"]').attr("content")?.trim() || null;

  const canonicalHref = $('link[rel="canonical"]').attr("href") || null;
  let canonicalUrl = null;

  if (canonicalHref) {
    try {
      const candidate = new URL(canonicalHref, pageUrl);
      if (["http:", "https:"].includes(candidate.protocol)) {
        canonicalUrl = candidate.href;
      }
    } catch {
      // Invalid canonical URLs are ignored.
    }
  }

  const headings = {};

  for (const level of [1, 2, 3]) {
    headings[`h${level}`] = $(`h${level}`)
      .map((_, element) => $(element).text().trim())
      .get()
      .filter(Boolean)
      .slice(0, 30);
  }

  const links = [];
  const navigationLinks = [];

  $("a[href]").each((_, element) => {
    const label = $(element).text().replace(/\s+/g, " ").trim();
    const href = $(element).attr("href");

    try {
      const target = new URL(href, pageUrl);

      if (!["http:", "https:"].includes(target.protocol)) return;

      target.hash = "";

      const item = {
        text: label.slice(0, 160),
        url: target.href,
      };

      links.push(item);

      if ($(element).closest("nav, header").length) {
        navigationLinks.push(item);
      }
    } catch {
      // Ignore malformed links.
    }
  });

  const images = $("img").map((_, element) => ({
    alt: $(element).attr("alt") ?? null,
    hasAlt: $(element).attr("alt") !== undefined,
  })).get();

  const forms = $("form").map((_, element) => ({
    action: $(element).attr("action") || null,
    method: ($(element).attr("method") || "get").toLowerCase(),
    inputCount: $(element).find("input, select, textarea").length,
    buttonLabels: $(element)
      .find('button, input[type="submit"]')
      .map((_, button) =>
        ($(button).text() || $(button).attr("value") || "").trim()
      )
      .get()
      .filter(Boolean)
      .slice(0, 10),
  })).get();

  const buttons = $("button, [role='button'], input[type='submit']")
    .map((_, element) =>
      ($(element).text() || $(element).attr("value") || "").trim()
    )
    .get()
    .filter(Boolean)
    .slice(0, 30);

  $("script, style, noscript, template, svg").remove();

  const visibleText = $("body")
    .text()
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 12000);

  return {
    url: pageUrl,
    status,
    title,
    metaDescription: description,
    canonicalUrl,
    headings,
    navigationLinks: navigationLinks.slice(0, 60),
    links: links.slice(0, 150),
    images: {
      total: images.length,
      withAlt: images.filter((image) => image.hasAlt && image.alt?.trim()).length,
      withoutAlt: images.filter((image) => !image.hasAlt || !image.alt?.trim()).length,
      samples: images.slice(0, 30),
    },
    forms: forms.slice(0, 15),
    buttons,
    textExcerpt: visibleText,
  };
}

function isSameOrigin(url, origin) {
  return url.origin === origin;
}

export async function inspectWebsite(websiteUrl) {
  const startedAt = new Date().toISOString();

  const startUrl = normalizeWebsiteUrl(websiteUrl);
  await validatePublicHost(startUrl);

  const origin = startUrl.origin;
  const queue = [startUrl.href];
  const visited = new Set();
  const pages = [];
  const errors = [];

  while (queue.length > 0 && pages.length < MAX_PAGES) {
    const nextUrl = queue.shift();

    if (visited.has(nextUrl)) continue;
    visited.add(nextUrl);

    try {
      const fetched = await fetchHtml(nextUrl);
      const page = extractPage(
        fetched.html,
        fetched.finalUrl,
        fetched.status
      );

      pages.push(page);

      for (const link of page.links) {
        if (queue.length + pages.length >= MAX_PAGES * 4) break;

        try {
          const candidate = normalizeWebsiteUrl(link.url);

          if (
            isSameOrigin(candidate, origin) &&
            !visited.has(candidate.href) &&
            !queue.includes(candidate.href)
          ) {
            queue.push(candidate.href);
          }
        } catch {
          // Ignore unsupported or invalid links.
        }
      }
    } catch (error) {
      errors.push({
        url: nextUrl,
        message: error.message || "Website inspection failed",
      });
    }
  }

  return {
    website: startUrl.href,
    inspectedAt: startedAt,
    pagesInspected: pages.length,
    pages,
    errors,
    limits: {
      maxPages: MAX_PAGES,
      maxHtmlBytes: MAX_HTML_BYTES,
      timeoutMs: TIMEOUT_MS,
    },
    status:
      pages.length === 0
        ? "failed"
        : errors.length > 0
          ? "partial"
          : "completed",
  };
}
