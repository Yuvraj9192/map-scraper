
import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import http from "node:http";
import dns from "node:dns/promises";
import net from "node:net";
import { fileURLToPath } from "node:url";
import ipaddr from "ipaddr.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const reportsDir = path.resolve(__dirname, "../../reports");

const DEFAULT_COLOR = "#17365D";
const DEFAULT_TEXT = "#253247";
const MUTED_COLOR = "#64748B";
const LIGHT_BACKGROUND = "#F4F7FB";

fs.mkdirSync(reportsDir, { recursive: true });

function safeColor(value, fallback = DEFAULT_COLOR) {
  if (typeof value !== "string") return fallback;

  const color = value.trim();

  if (/^#[0-9a-fA-F]{6}$/.test(color)) return color;

  if (/^#[0-9a-fA-F]{3}$/.test(color)) {
    return (
      "#" +
      color
        .slice(1)
        .split("")
        .map((character) => character + character)
        .join("")
    );
  }

  return fallback;
}

function formatDate(value) {
  const date = value ? new Date(value) : new Date();

  if (Number.isNaN(date.getTime())) return "Not available";

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function cleanText(value, fallback = "Not available") {
  if (typeof value !== "string") return fallback;

  const text = value.trim();
  return text || fallback;
}

function getBusiness(data, report) {
  return (
    data.business ??
    data.analysis?.business ??
    report.business ??
    {}
  );
}

function getAnalysis(data) {
  const analysis = data.analysis ?? {};

  return analysis.report ?? analysis;
}

function getBranding(data, analysis) {
  const inspection = data.inspection ?? {};
  const firstPage = inspection.pages?.[0] ?? {};

  const inspectedBranding =
    firstPage.branding ??
    inspection.branding ??
    {};

  const analysisBranding = analysis.branding ?? {};

  // Logo detection: prefer website inspection over AI.
  const logoUrl =
    inspectedBranding.logoUrl ??
    inspectedBranding.logo ??
    firstPage.logoUrl ??
    analysisBranding.logoUrl ??
    analysisBranding.logo ??
    null;

  const faviconUrl =
    inspectedBranding.faviconUrl ??
    firstPage.faviconUrl ??
    inspection.faviconUrl ??
    analysisBranding.faviconUrl ??
    null;

  // Check possible color sources in priority order.
  const colorCandidates = [
    {
      value: inspectedBranding.primaryColor,
      source: "website inspection: primaryColor",
    },
    {
      value: inspectedBranding.themeColor,
      source: "website inspection: themeColor",
    },
    {
      value: firstPage.themeColor,
      source: "page inspection: themeColor",
    },
    {
      value: analysisBranding.primaryColor,
      source: "AI analysis",
    },
  ];

  const detectedColor = colorCandidates.find(
    ({ value }) =>
      typeof value === "string" &&
      safeColor(value, null) !== null
  );

  // Neutral fallback; do not present it as an official brand color.
  const DEFAULT_BRAND_COLOR = "#64748B";

  const primaryColor = detectedColor
    ? safeColor(detectedColor.value, DEFAULT_BRAND_COLOR)
    : DEFAULT_BRAND_COLOR;

  const primaryColorSource =
    detectedColor?.source ?? "fallback: no color detected";

  console.log("[Brand Detection]", {
    primaryColor,
    source: primaryColorSource,
    logoFound: Boolean(logoUrl),
    faviconFound: Boolean(faviconUrl),
  });

  // Secondary colors.
  const rawSecondaryColors =
    inspectedBranding.secondaryColors ??
    analysisBranding.secondaryColors ??
    [];

  const secondaryColors = Array.isArray(rawSecondaryColors)
    ? [
        ...new Set(
          rawSecondaryColors
            .map((color) => safeColor(color, null))
            .filter(Boolean)
            .filter((color) => color !== primaryColor)
        ),
      ].slice(0, 4)
    : [];

  const typography =
    inspectedBranding.typography ??
    analysisBranding.typography ??
    null;

  const notes =
    inspectedBranding.notes ??
    analysisBranding.notes ??
    null;

  return {
    logoUrl,
    faviconUrl,
    primaryColor,
    primaryColorSource,
    secondaryColors,
    typography,
    notes,
  };
}
/**
 * Reject private/local addresses before downloading a website logo.
 * The image is optional: failure never stops PDF generation.
 */
function isPublicIp(address) {
  try {
    const parsed = ipaddr.parse(address);

    if (parsed.kind() === "ipv6" && parsed.isIPv4MappedAddress()) {
      return isPublicIp(parsed.toIPv4Address().toString());
    }

    return parsed.range() === "unicast";
  } catch {
    return false;
  }
}

async function downloadPublicImage(imageUrl, redirects = 0) {
  if (redirects > 3 || typeof imageUrl !== "string") {
    return null;
  }

  let url;

  try {
    url = new URL(imageUrl);
  } catch {
    return null;
  }

  if (!["http:", "https:"].includes(url.protocol)) return null;
  if (url.username || url.password) return null;

  const hostname = url.hostname.replace(/^\[|\]$/g, "");

  if (
    hostname === "localhost" ||
    hostname.endsWith(".localhost") ||
    hostname.endsWith(".local")
  ) {
    return null;
  }

  if (net.isIP(hostname)) {
    if (!isPublicIp(hostname)) return null;
  } else {
    let addresses;

    try {
      addresses = await dns.lookup(hostname, { all: true });
    } catch {
      return null;
    }

    if (
      addresses.length === 0 ||
      addresses.some(({ address }) => !isPublicIp(address))
    ) {
      return null;
    }
  }

  return new Promise((resolve) => {
    const transport = url.protocol === "https:" ? https : http;

    const request = transport.get(
      url,
      {
        timeout: 5000,
        headers: {
          "User-Agent": "BusinessAuditReport/1.0",
          Accept: "image/png,image/jpeg,image/gif",
        },
      },
      (response) => {
        const status = response.statusCode ?? 0;

        if ([301, 302, 303, 307, 308].includes(status)) {
          const location = response.headers.location;
          response.resume();

          if (!location) return resolve(null);

          return resolve(
            downloadPublicImage(
              new URL(location, url).toString(),
              redirects + 1
            )
          );
        }

        if (status !== 200) {
          response.resume();
          return resolve(null);
        }

        const contentType = String(
          response.headers["content-type"] ?? ""
        )
          .split(";")[0]
          .trim()
          .toLowerCase();

        const supportedTypes = [
          "image/png",
          "image/jpeg",
          "image/jpg",
          "image/gif",
        ];

        if (!supportedTypes.includes(contentType)) {
          response.resume();
          return resolve(null);
        }

        const declaredLength = Number(
          response.headers["content-length"] ?? 0
        );

        if (declaredLength > 2 * 1024 * 1024) {
          response.destroy();
          return resolve(null);
        }

        const chunks = [];
        let totalBytes = 0;

        response.on("data", (chunk) => {
          totalBytes += chunk.length;

          if (totalBytes > 2 * 1024 * 1024) {
            response.destroy();
            return;
          }

          chunks.push(chunk);
        });

        response.on("end", () => {
          if (totalBytes > 2 * 1024 * 1024) {
            return resolve(null);
          }

          const buffer = Buffer.concat(chunks);

          // Check common image signatures before passing data to PDFKit.
          const isPng =
            buffer.length >= 8 &&
            buffer.subarray(0, 8).equals(
              Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
            );

          const isJpeg =
            buffer.length >= 3 &&
            buffer[0] === 0xff &&
            buffer[1] === 0xd8 &&
            buffer[2] === 0xff;

          const isGif =
            buffer.length >= 6 &&
            ["GIF87a", "GIF89a"].includes(
              buffer.subarray(0, 6).toString("ascii")
            );

          resolve(isPng || isJpeg || isGif ? buffer : null);
        });

        response.on("error", () => resolve(null));
      }
    );

    request.on("timeout", () => {
      request.destroy();
      resolve(null);
    });

    request.on("error", () => resolve(null));
  });
}

function ensureSpace(doc, requiredHeight = 80) {
  if (doc.y + requiredHeight > doc.page.height - 65) {
    doc.addPage();
  }
}

function addSectionTitle(doc, title, primaryColor) {
  ensureSpace(doc, 65);

  doc.moveDown(0.7);

  doc
    .font("Helvetica-Bold")
    .fontSize(16)
    .fillColor(primaryColor)
    .text(title);

  const lineY = doc.y + 7;

  doc
    .save()
    .strokeColor(primaryColor)
    .lineWidth(1.5)
    .moveTo(doc.page.margins.left, lineY)
    .lineTo(doc.page.width - doc.page.margins.right, lineY)
    .stroke()
    .restore();

  doc.y = lineY + 12;
}

function addLabel(doc, label, value, primaryColor) {
  if (!value) return;

  ensureSpace(doc, 35);

  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(primaryColor)
    .text(`${label}: `, { continued: true });

  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(DEFAULT_TEXT)
    .text(String(value));
}

function addBullet(doc, text, primaryColor) {
  ensureSpace(doc, 65);

  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor(primaryColor)
    .text("•", { continued: true });

  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor(DEFAULT_TEXT)
    .text(`  ${text}`, {
      width:
        doc.page.width -
        doc.page.margins.left -
        doc.page.margins.right -
        12,
      lineGap: 3,
    });

  doc.moveDown(0.35);
}

function normalizeFinding(item) {
  if (typeof item === "string") {
    return {
      title: item,
      description: "",
      evidence: "",
      recommendation: "",
      priority: "",
      expectedImpact: "",
    };
  }

  if (!item || typeof item !== "object") {
    return null;
  }

  return {
    title: cleanText(item.title, "Observation"),
    description: cleanText(item.description, ""),
    evidence: cleanText(item.evidence, ""),
    recommendation: cleanText(item.recommendation, ""),
    priority: cleanText(item.priority, ""),
    expectedImpact: cleanText(item.expectedImpact, ""),
  };
}

function renderFindings(doc, title, findings, primaryColor) {
  addSectionTitle(doc, title, primaryColor);

  if (!Array.isArray(findings) || findings.length === 0) {
    addBullet(
      doc,
      "No findings were provided for this section.",
      primaryColor
    );
    return;
  }

  findings.forEach((item) => {
    const finding = normalizeFinding(item);
    if (!finding) return;

    ensureSpace(doc, 85);

    doc
      .font("Helvetica-Bold")
      .fontSize(11)
      .fillColor(DEFAULT_TEXT)
      .text(finding.title);

    doc.moveDown(0.2);

    if (finding.description) {
      doc
        .font("Helvetica")
        .fontSize(10)
        .fillColor(DEFAULT_TEXT)
        .text(finding.description, { lineGap: 3 });

      doc.moveDown(0.25);
    }

    if (finding.evidence) {
      addLabel(doc, "Evidence", finding.evidence, primaryColor);
    }

    if (finding.priority) {
      addLabel(doc, "Priority", finding.priority, primaryColor);
    }

    if (finding.recommendation) {
      addLabel(
        doc,
        "Recommended action",
        finding.recommendation,
        primaryColor
      );
    }

    if (finding.expectedImpact) {
      addLabel(
        doc,
        "Expected impact",
        finding.expectedImpact,
        primaryColor
      );
    }

    doc.moveDown(0.55);
  });
}

function getTypographyLabel(typography) {
  if (!typography) return null;

  if (typeof typography === "string") return typography;

  if (typeof typography === "object") {
    return [
      typography.headingFont
        ? `Headings: ${typography.headingFont}`
        : null,
      typography.bodyFont
        ? `Body: ${typography.bodyFont}`
        : null,
      typography.fontFamily
        ? `Font family: ${typography.fontFamily}`
        : null,
    ]
      .filter(Boolean)
      .join(" | ");
  }

  return null;
}

export async function generateReportPdf(report) {
  const data = report.reportData ?? {};
  const business = getBusiness(data, report);
  const analysis = getAnalysis(data);
  const branding = getBranding(data, analysis);

  const companyName = cleanText(
    business.name ?? business.companyName,
    "Business"
  );

  const primaryColor = branding.primaryColor;
  const secondaryColors = branding.secondaryColors ?? [];

  const website =
    business.website ??
    data.inspection?.website ??
    data.inspection?.pages?.[0]?.url ??
    null;

  const category = business.category ?? null;
  const address = business.address ?? business.location ?? null;

  const reportId = report.id ?? `report-${Date.now()}`;
  const filename = `${reportId}.pdf`;
  const filePath = path.join(reportsDir, filename);

  const doc = new PDFDocument({
    size: "A4",
    margins: {
      top: 48,
      bottom: 55,
      left: 50,
      right: 50,
    },
    bufferPages: true,
    info: {
      Title: `${companyName} - Business Audit Report`,
      Author: "Business Audit System",
      Subject: "Business pros, cons, and improvements",
    },
  });

  const writeStream = fs.createWriteStream(filePath);
  doc.pipe(writeStream);

  // Header brand strip
  doc
    .save()
    .rect(0, 0, doc.page.width, 9)
    .fill(primaryColor)
    .restore();

  doc.y = 40;

  // Find a logo or favicon from the available branding data.
  const firstPage = data.inspection?.pages?.[0] ?? {};

  const logoUrl =
    branding.logoUrl ??
    branding.logo ??
    firstPage.branding?.logoUrl ??
    firstPage.logoUrl ??
    data.inspection?.branding?.logoUrl ??
    null;

  const faviconUrl =
    branding.faviconUrl ??
    firstPage.branding?.faviconUrl ??
    firstPage.faviconUrl ??
    data.inspection?.branding?.faviconUrl ??
    null;

  let logo = null;
  let usedLogoUrl = null;

  // Try the actual business logo first.
  for (const imageUrl of [logoUrl, faviconUrl]) {
    if (!imageUrl || typeof imageUrl !== "string") {
      continue;
    }

    try {
      const downloadedImage = await downloadPublicImage(imageUrl);

      if (downloadedImage) {
        logo = downloadedImage;
        usedLogoUrl = imageUrl;
        break;
      }
    } catch (error) {
      console.warn("Unable to load business branding image:", error.message);
    }
  }

  // Render the logo without allowing image errors to break the PDF.
  if (logo) {
    try {
      doc.image(logo, 50, doc.y, {
        fit: [100, 55],
        align: "left",
        valign: "center",
      });

      doc.y += 62;
    } catch (error) {
      console.warn("Unable to render business logo:", error.message);
      logo = null;
    }
  }

  // Business name
  doc
    .font("Helvetica-Bold")
    .fontSize(24)
    .fillColor(primaryColor)
    .text(companyName, {
      width: doc.page.width - 100,
    });

  doc.moveDown(0.2);

  doc
    .font("Helvetica")
    .fontSize(12)
    .fillColor(MUTED_COLOR)
    .text("BUSINESS AUDIT REPORT");

  doc.moveDown(0.9);

  // Brand-colored metadata panel
  const panelY = doc.y;
  const panelHeight = 100;

  doc
    .save()
    .roundedRect(50, panelY, doc.page.width - 100, panelHeight, 8)
    .fill(LIGHT_BACKGROUND)
    .restore();

  doc.y = panelY + 13;

  addLabel(doc, "Company", companyName, primaryColor);

  if (category) {
    addLabel(doc, "Category", category, primaryColor);
  }

  if (address) {
    addLabel(doc, "Location", address, primaryColor);
  }

  if (website) {
    addLabel(doc, "Website", website, primaryColor);
  }

  doc.y = panelY + panelHeight + 8;

  doc
    .font("Helvetica")
    .fontSize(8)
    .fillColor(MUTED_COLOR)
    .text(`Report ID: ${reportId}`);

  doc.text(`Generated: ${formatDate(report.createdAt)}`);

  doc.moveDown(0.7);

  // Brand identity
  addSectionTitle(doc, "Brand Identity", primaryColor);

  addLabel(doc, "Primary color", primaryColor, primaryColor);

  const colors = [...new Set([primaryColor, ...secondaryColors])]
    .filter(
      (color) =>
        typeof color === "string" &&
        /^#[0-9a-fA-F]{6}$/.test(color)
    )
    .slice(0, 5);

  const swatchY = doc.y + 8;
  let swatchX = 50;

  colors.forEach((color) => {
    doc
      .save()
      .roundedRect(swatchX, swatchY, 52, 22, 4)
      .fill(color)
      .restore();

    doc
      .font("Helvetica")
      .fontSize(7)
      .fillColor(DEFAULT_TEXT)
      .text(color, swatchX, swatchY + 26, {
        width: 65,
      });

    swatchX += 78;
  });

  doc.y = swatchY + 48;

  const typography = getTypographyLabel(branding.typography);

  if (typography) {
    addLabel(doc, "Typography", typography, primaryColor);
  }

  if (branding.notes) {
    addLabel(doc, "Branding notes", branding.notes, primaryColor);
  }

  if (!logo) {
    doc
      .font("Helvetica")
      .fontSize(8)
      .fillColor(MUTED_COLOR)
      .text(
        logoUrl || faviconUrl
          ? "The business logo was detected, but its image could not be loaded. Check the image URL and format."
          : "No company logo was detected during website inspection."
      );

    doc.moveDown(0.4);
  } else {
    console.log("Business branding image loaded:", usedLogoUrl);
  }

  // Only the three requested audit sections
  renderFindings(doc, "Pros", analysis.pros, primaryColor);
  renderFindings(doc, "Cons", analysis.cons, primaryColor);
  renderFindings(
    doc,
    "Improvements",
    analysis.improvements,
    primaryColor
  );

  // Footer and page numbers
  const range = doc.bufferedPageRange();

  for (let i = range.start; i < range.start + range.count; i++) {
    doc.switchToPage(i);

    const footerY = doc.page.height - 35;

    doc
      .save()
      .strokeColor(primaryColor)
      .lineWidth(0.7)
      .moveTo(50, footerY - 8)
      .lineTo(doc.page.width - 50, footerY - 8)
      .stroke()
      .restore();

    doc
      .font("Helvetica")
      .fontSize(8)
      .fillColor(MUTED_COLOR)
      .text(companyName, 50, footerY, {
        width: 300,
        lineBreak: false,
      });

    doc.text(`Page ${i + 1} of ${range.count}`, doc.page.width - 150, footerY, {
      width: 100,
      align: "right",
      lineBreak: false,
    });
  }

  doc.end();

  await new Promise((resolve, reject) => {
    writeStream.on("finish", resolve);
    writeStream.on("error", reject);
    doc.on("error", reject);
  });

  return {
    filename,
    filePath,
  };
}