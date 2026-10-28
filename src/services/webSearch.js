const TAVILY_URL = "https://api.tavily.com/search";
const MAX_RESULTS_PER_QUERY = 5;
const REQUEST_TIMEOUT_MS = 15000;

function canonicalizeUrl(rawUrl) {
  try {
    const url = new URL(rawUrl);
    if (!["http:", "https:"].includes(url.protocol)) return null;
    if (url.username || url.password) return null;
    url.hash = "";
    // Remove common tracking parameters so duplicate pages are not counted twice.
    for (const key of [...url.searchParams.keys()]) {
      if (/^(utm_.+|gclid|fbclid|ref|source)$/i.test(key)) {
        url.searchParams.delete(key);
      }
    }
    if (url.pathname.length > 1) url.pathname = url.pathname.replace(/\/+$/, "");
    return url.toString();
  } catch {
    return null;
  }
}

async function searchTavily(query) {
  const apiKey = process.env.TAVILY_API_KEY;
  if (!apiKey) throw new Error("TAVILY_API_KEY is missing from environment variables");

  const response = await fetch(TAVILY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: apiKey,
      query,
      search_depth: "basic",
      max_results: MAX_RESULTS_PER_QUERY,
      include_answer: false,
      include_raw_content: false,
    }),
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Tavily search failed (${response.status}): ${errorText.slice(0, 250)}`);
  }

  const data = await response.json();
  return (data.results ?? []).flatMap((item) => {
    const url = canonicalizeUrl(item.url);
    if (!url) return [];
    return [{
      title: String(item.title ?? "").slice(0, 300),
      url,
      content: String(item.content ?? "").slice(0, 1800),
      score: Number.isFinite(item.score) ? item.score : null,
    }];
  });
}

export async function searchBusinessWeb({ business }) {
  if (!business?.name?.trim()) throw new Error("Business name is required for web research");
  if (!process.env.TAVILY_API_KEY) throw new Error("TAVILY_API_KEY is missing from environment variables");

  const name = business.name.trim();
  const city = (business.city ?? "").trim();
  const address = (business.address ?? "").trim();
  const category = (business.category ?? business.searchedCategory ?? "").trim();
  const location = [city, address && address !== city ? address : ""].filter(Boolean).join(", ");

  // Separate queries help distinguish identity verification from competitor discovery.
  const queries = [
    [`"${name}"`, location, "official website contact services"].filter(Boolean).join(" "),
    [`"${name}"`, category, location, "company profile services"].filter(Boolean).join(" "),
    [category || name, "competitors", location].filter(Boolean).join(" "),
    [category || name, location, "business services industry"].filter(Boolean).join(" "),
  ].filter((query, index, all) => query.trim() && all.indexOf(query) === index);

  // One failed query must not discard successful results from the others.
  const settled = await Promise.allSettled(queries.map((query) => searchTavily(query)));
  const searchErrors = [];
  const seenUrls = new Set();
  const results = [];

  settled.forEach((outcome, index) => {
    const query = queries[index];
    if (outcome.status === "rejected") {
      searchErrors.push({ query, error: outcome.reason?.message ?? "Search failed" });
      return;
    }
    for (const item of outcome.value) {
      if (seenUrls.has(item.url)) continue;
      seenUrls.add(item.url);
      results.push({ ...item, searchQuery: query });
    }
  });

  return {
    queries,
    results,
    searchErrors,
    searchStatus: results.length ? (searchErrors.length ? "partial" : "completed") : "no_results",
  };
}
