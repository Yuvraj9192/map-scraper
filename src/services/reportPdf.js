
import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const reportsDir = path.resolve(__dirname, "../../reports");

fs.mkdirSync(reportsDir, { recursive: true });

const ACCENT = "#0c131d";
const TEXT = "#2c202000";
const MUTED = "#64748B";
const LIGHT = "#F4F7FB";
const BORDER = "#DCE4EE";

function text(value, fallback = "Not available") {
  if (value === null || value === undefined) return fallback;

  if (typeof value === "string") {
    return value.trim() || fallback;
  }

  return String(value);
}

function list(value) {
  return Array.isArray(value)
    ? value.filter(
        (item) =>
          item !== null &&
          item !== undefined &&
          String(item).trim() !== ""
      )
    : [];
}

function dateLabel(value) {
  const date = value ? new Date(value) : new Date();

  if (Number.isNaN(date.getTime())) {
    return "Not available";
  }

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function getBusiness(data, report) {
  return (
    data.business ??
    data.analysis?.business ??
    data.report?.business ??
    report.business ??
    {}
  );
}

function getAnalysis(data) {
  const analysis = data.analysis ?? data;
  return analysis.report ?? analysis;
}

function safeUrl(url) {
  return typeof url === "string" && /^https?:\/\//i.test(url);
}

function ensureSpace(doc, needed = 45) {
  const bottom = doc.page.height - doc.page.margins.bottom;

  if (doc.y + needed > bottom) {
    doc.addPage();
  }
}

function sectionTitle(doc, title) {
  ensureSpace(doc, 34);

  doc.moveDown(0.08);
  doc
    .font("Helvetica-Bold")
    .fontSize(11.5)
    .fillColor(ACCENT)
    .text(title, { lineGap: 0 });

  const y = doc.y + 2;

  doc
    .save()
    .strokeColor(BORDER)
    .lineWidth(1)
    .moveTo(doc.page.margins.left, y)
    .lineTo(
      doc.page.width - doc.page.margins.right,
      y
    )
    .stroke()
    .restore();

  doc.y = y + 4;
}

function paragraph(doc, value, opts = {}) {
  if (
    value === null ||
    value === undefined ||
    !String(value).trim()
  ) {
    return;
  }

  const {
    bold = false,
    size = 9.5,
    color = TEXT,
    ...otherOptions
  } = opts;

  doc
    .font(bold ? "Helvetica-Bold" : "Helvetica")
    .fontSize(size)
    .fillColor(color)
    .text(String(value), {
      lineGap: 1,
      paragraphGap: 0,
      ...otherOptions,
    });
}

function bulletList(doc, values, emptyMessage = "") {
  const items = list(values);

  if (!items.length) {
    if (emptyMessage) {
      paragraph(doc, emptyMessage, {
        color: MUTED,
        size: 8.5,
      });
    }

    return;
  }

  for (const item of items) {
    ensureSpace(doc, 24);

    doc
      .font("Helvetica")
      .fontSize(9.2)
      .fillColor(ACCENT)
      .text("•", { continued: true });

    doc
      .font("Helvetica")
      .fontSize(9.2)
      .fillColor(TEXT)
      .text(`  ${String(item)}`, {
        indent: 8,
        lineGap: 1,
      });
  }
}

function labelValue(doc, label, value) {
  if (
    value === undefined ||
    value === null ||
    value === ""
  ) {
    return;
  }

  ensureSpace(doc, 22);

  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(ACCENT)
    .text(`${label}: `, { continued: true });

  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(TEXT)
    .text(String(value), { lineGap: 1 });
}

function panel(doc, title, body, options = {}) {
  const x = doc.page.margins.left;
  const width =
    doc.page.width -
    doc.page.margins.left -
    doc.page.margins.right;

  const bodyText = text(body, "");

  const bodyHeight = doc.heightOfString(bodyText, {
    width: width - 24,
    font: "Helvetica",
    fontSize: 8.7,
    lineGap: 1,
  });

  const titleHeight = 15;
  const estimatedHeight = Math.max(
    42,
    titleHeight + bodyHeight + 24
  );

  // Avoid forcing a fixed-height panel across pages.
  ensureSpace(doc, Math.min(estimatedHeight, 180));

  const y = doc.y;

  doc
    .save()
    .roundedRect(x, y, width, estimatedHeight, 6)
    .fill(options.background ?? LIGHT)
    .restore();

  doc
    .font("Helvetica-Bold")
    .fontSize(9.5)
    .fillColor(options.titleColor ?? ACCENT)
    .text(title, x + 12, y + 9, {
      width: width - 24,
      lineGap: 0,
    });

  const bodyY = doc.y + 3;

  doc
    .font("Helvetica")
    .fontSize(8.7)
    .fillColor(TEXT)
    .text(bodyText, x + 12, bodyY, {
      width: width - 24,
      lineGap: 1,
    });

  doc.y = Math.max(
    doc.y,
    y + estimatedHeight
  ) + 3;
}

function findingCard(doc, item, heading) {
  if (!item || typeof item !== "object") return;

  ensureSpace(doc, 65);

  doc
    .font("Helvetica-Bold")
    .fontSize(9.5)
    .fillColor(TEXT)
    .text(text(item.title, heading || "Insight"), {
      lineGap: 1,
    });

  const meta = [
    item.priority ? `Priority: ${item.priority}` : null,
    item.confidence ? `Confidence: ${item.confidence}` : null,
    item.category ? `Category: ${item.category}` : null,
  ]
    .filter(Boolean)
    .join("  •  ");

  if (meta) {
    paragraph(doc, meta, {
      color: MUTED,
      size: 8,
    });
  }

  if (item.description) {
    paragraph(doc, item.description);
  }

  if (item.evidence) {
    labelValue(doc, "Evidence", item.evidence);
  }

  if (item.recommendation) {
    labelValue(
      doc,
      "Recommended action",
      item.recommendation
    );
  }

  if (item.expectedImpact) {
    labelValue(
      doc,
      "Expected impact",
      item.expectedImpact
    );
  }

  const urls = list(item.sourceUrls).filter(safeUrl);

  if (urls.length) {
    labelValue(doc, "Sources", urls.join(" | "));
  }
}

function actionCard(doc, action) {
  if (!action) return;

  ensureSpace(doc, 55);

  const timeframe = text(
    action.timeframe,
    "Timeframe"
  )
    .replaceAll("_", " ")
    .toUpperCase();

  doc
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor(ACCENT)
    .text(
      `${timeframe} — ${text(action.action, "Action")}`
    );

  labelValue(
    doc,
    "Why this matters",
    action.rationale
  );

  labelValue(
    doc,
    "Success metric",
    action.successMetric
  );

  labelValue(
    doc,
    "Dependency",
    action.dependency
  );

  labelValue(
    doc,
    "Priority",
    action.priority
  );
}

export async function generateReportPdf(report) {
  const data = report.reportData ?? {};
  const analysis = getAnalysis(data);
  const business = getBusiness(data, report);

  const research =
    data.research ??
    data.analysis?.research ??
    analysis.research ??
    {};

  const companyName = text(
    business.name ?? business.companyName,
    "Business Intelligence Report"
  );

  const category = text(
    business.category ?? business.searchedCategory,
    ""
  );

  const address = text(
    business.address ?? business.location,
    ""
  );

  const website = text(business.website, "");

  const intelligence = analysis.executiveSummary
    ? analysis
    : analysis.report ?? {};

  const generatedAt =
    analysis.generatedAt ??
    report.createdAt ??
    new Date();

  const reportId =
    report.id ?? `report-${Date.now()}`;

  const filename = `${reportId}.pdf`;
  const filePath = path.join(reportsDir, filename);

  const doc = new PDFDocument({
    size: "A4",
    margins: {
      top: 42,
      bottom: 42,
      left: 42,
      right: 42,
    },
    bufferPages: true,
    info: {
      Title: `${companyName} - Business Intelligence & Growth Report`,
      Author: "Business Intelligence Report System",
      Subject:
        "Business profile, local market, digital presence, and growth opportunities",
    },
  });

  const stream = fs.createWriteStream(filePath);

  doc.pipe(stream);

  // Cover and executive brief.
  doc.save().rect(0, 0, doc.page.width, 10).fill(ACCENT).restore();

  doc.y = 44;

  paragraph(doc, "BUSINESS INTELLIGENCE", {
    bold: true,
    size: 9,
    color: MUTED,
  });

  doc
    .font("Helvetica-Bold")
    .fontSize(22)
    .fillColor(ACCENT)
    .text(companyName, {
      width: doc.page.width - 96,
      lineGap: 2,
    });

  doc.moveDown(0.3);

  doc
    .font("Helvetica")
    .fontSize(12)
    .fillColor(MUTED)
    .text("Growth Opportunities & Market Position Report");

  doc.moveDown(0.4);

  const meta = [
    category && `Category: ${category}`,
    address && `Location: ${address}`,
    website && `Website: ${website}`,
    `Report ID: ${reportId}`,
    `Generated: ${dateLabel(generatedAt)}`,
  ].filter(Boolean);

  panel(
    doc,
    "BUSINESS PROFILE",
    meta.join("\n") ||
      "Business profile details were not supplied."
  );

  sectionTitle(doc, "01  Executive intelligence brief");

  const exec = intelligence.executiveSummary ?? {};

  panel(
    doc,
    "Executive summary",
    exec.overview ??
      "An executive summary could not be generated from the available evidence."
  );

  labelValue(doc, "Current position", exec.currentPosition);
  labelValue(
    doc,
    "Biggest opportunity",
    exec.biggestOpportunity
  );
  labelValue(doc, "Confidence", exec.confidence);

  if (list(exec.keyRisks).length) {
    paragraph(doc, "Key risks", {
      bold: true,
      color: ACCENT,
    });

    bulletList(doc, exec.keyRisks);
  }

  sectionTitle(
    doc,
    "02  Business model & customer acquisition"
  );

  const profile = intelligence.businessProfile ?? {};

  labelValue(doc, "Business model", profile.businessModel);

  const profileSections = [
    ["Products and services", profile.productsAndServices],
    ["Target audiences", profile.targetAudiences],
    [
      "Customer acquisition channels",
      profile.customerAcquisitionChannels,
    ],
    ["Verified facts", profile.verifiedFacts],
    ["Assumptions to validate", profile.assumptions],
  ];

  for (const [heading, values] of profileSections) {
    if (!list(values).length) continue;

    paragraph(doc, heading, {
      bold: true,
      color: ACCENT,
    });

    bulletList(doc, values);
  }

  sectionTitle(doc, "03  Local market & positioning");

  const market = intelligence.marketPosition ?? {};

  paragraph(
    doc,
    market.summary ??
      "Market position could not be established from the supplied evidence."
  );

  const marketSections = [
    ["Local market signals", market.localMarketSignals],
    [
      "Differentiation opportunities",
      market.differentiationOpportunities,
    ],
    ["Evidence gaps", market.evidenceGaps],
  ];

  for (const [heading, values] of marketSections) {
    if (!list(values).length) continue;

    paragraph(doc, heading, {
      bold: true,
      color: ACCENT,
    });

    bulletList(doc, values);
  }

  sectionTitle(doc, "04  Competitor intelligence");

  const competitors = list(
    intelligence.competitorBenchmark
  );

  if (!competitors.length) {
    panel(
      doc,
      "No verified competitor comparison",
      "The supplied research did not establish enough relevant, location-matched competitor evidence. This is a research limitation, not proof that competitors do not exist."
    );
  } else {
    for (const competitor of competitors) {
      ensureSpace(doc, 100);

      doc
        .font("Helvetica-Bold")
        .fontSize(11)
        .fillColor(TEXT)
        .text(text(competitor.name, "Competitor"));

      labelValue(
        doc,
        "Location relevance",
        competitor.locationRelevance
      );

      if (safeUrl(competitor.website)) {
        labelValue(doc, "Website", competitor.website);
      }

      if (list(competitor.observableStrengths).length) {
        paragraph(doc, "Observable strengths", {
          bold: true,
          color: ACCENT,
        });

        bulletList(
          doc,
          competitor.observableStrengths
        );
      }

      labelValue(
        doc,
        "Comparison",
        competitor.comparisonToBusiness
      );

      labelValue(
        doc,
        "Confidence",
        competitor.confidence
      );

      const urls = list(
        competitor.sourceUrls
      ).filter(safeUrl);

      if (urls.length) {
        labelValue(doc, "Sources", urls.join(" | "));
      }
    }
  }

  sectionTitle(
    doc,
    "05  Digital presence & customer journey"
  );

  const digital = intelligence.digitalPresence ?? {};

  labelValue(doc, "Website status", digital.websiteStatus);

  paragraph(
    doc,
    digital.customerJourneyAssessment ??
      "Customer journey assessment was not available."
  );

  const digitalSections = [
    ["Channels found", digital.channelsFound],
    ["Visibility gaps", digital.visibilityGaps],
    [
      "Trust and conversion gaps",
      digital.trustAndConversionGaps,
    ],
  ];

  for (const [heading, values] of digitalSections) {
    if (!list(values).length) continue;

    paragraph(doc, heading, {
      bold: true,
      color: ACCENT,
    });

    bulletList(doc, values);
  }

  sectionTitle(doc, "06  Strategic insights");

  const insights = list(
    intelligence.strategicInsights
  );

  if (!insights.length) {
    paragraph(
      doc,
      "No sufficiently supported strategic insights were returned. Review the evidence gaps before making business-specific decisions.",
      { color: MUTED }
    );
  }

  insights.forEach((item) => findingCard(doc, item));

  sectionTitle(doc, "07  Prioritized growth opportunities");

  const opportunities = list(
    intelligence.growthOpportunities
  );

  if (!opportunities.length) {
    paragraph(
      doc,
      "No evidence-backed growth opportunities could be prioritized from the current research.",
      { color: MUTED }
    );
  }

  opportunities.forEach((item) => findingCard(doc, item));

  sectionTitle(doc, "08  30 / 60 / 90-day action plan");

  const actions = list(intelligence.actionPlan);

  if (!actions.length) {
    paragraph(
      doc,
      "An action plan could not be grounded in the available evidence.",
      { color: MUTED }
    );
  }

  actions.forEach((item) => actionCard(doc, item));

  sectionTitle(doc, "09  Measurement plan");

  const metrics = list(intelligence.measurementPlan);

  if (!metrics.length) {
    paragraph(doc, "No measurement plan was returned.", {
      color: MUTED,
    });
  }

  for (const metric of metrics) {
    ensureSpace(doc, 55);

    doc
      .font("Helvetica-Bold")
      .fontSize(10)
      .fillColor(TEXT)
      .text(text(metric.metric, "Metric"));

    if (metric.whyItMatters) {
      paragraph(doc, metric.whyItMatters, {
        size: 9,
      });
    }

    labelValue(
      doc,
      "How to measure",
      metric.howToMeasure
    );

    labelValue(
      doc,
      "Baseline",
      metric.baselineStatus
    );
  }

  sectionTitle(doc, "10  Supporting findings");

  const supportingSections = [
    ["Strengths supported by evidence", "pros"],
    ["Risks and weaknesses", "cons"],
    ["Recommended improvements", "improvements"],
  ];

  for (const [heading, key] of supportingSections) {
    const items = list(intelligence[key]);

    if (!items.length) continue;

    paragraph(doc, heading, {
      bold: true,
      color: ACCENT,
      size: 10,
    });

    items.forEach((item) => findingCard(doc, item));
  }

  sectionTitle(
    doc,
    "11  Sources, confidence & limitations"
  );

  const sources = list(
    research.sources ?? analysis.research?.sources
  );

  if (sources.length) {
    const uniqueSources = new Map();

    for (const source of sources) {
      if (safeUrl(source.url)) {
        uniqueSources.set(source.url, source);
      }
    }

    for (const source of uniqueSources.values()) {
      ensureSpace(doc, 24);

      paragraph(
        doc,
        text(source.title, source.url),
        {
          bold: true,
          size: 8.5,
        }
      );

      paragraph(doc, source.url, {
        size: 8,
        color: MUTED,
      });
    }
  } else {
    paragraph(
      doc,
      "No source URLs were attached to this report. Treat market and competitor statements as unverified until sources are collected.",
      { color: MUTED }
    );
  }

  const limitations = [
    ...list(intelligence.limitations),
    ...list(research.qualityWarnings),
  ];

  if (limitations.length) {
    paragraph(doc, "Limitations", {
      bold: true,
      color: ACCENT,
    });

    bulletList(doc, [...new Set(limitations)]);
  }

  paragraph(
    doc,
    "Interpretation note: This report distinguishes supplied evidence from assumptions. Qualitative impact statements are hypotheses to validate; no revenue, traffic, or conversion lift is guaranteed.",
    {
      size: 8,
      color: MUTED,
    }
  );

  // IMPORTANT:
  // Capture the actual page count BEFORE adding footers.
  // Temporarily disable bottom-margin overflow checks so
  // footer text cannot create additional pages.
  const range = doc.bufferedPageRange();
  const totalPages = range.count;

  for (
    let i = range.start;
    i < range.start + totalPages;
    i++
  ) {
    doc.switchToPage(i);

    const page = doc.page;
    const originalBottomMargin = page.margins.bottom;

    try {
      page.margins.bottom = 0;

      const footerY = page.height - 36;
      const left = page.margins.left;
      const right = page.width - page.margins.right;

      doc
        .save()
        .strokeColor(BORDER)
        .lineWidth(0.7)
        .moveTo(left, footerY - 8)
        .lineTo(right, footerY - 8)
        .stroke()
        .restore();

      doc
        .font("Helvetica")
        .fontSize(7.5)
        .fillColor(MUTED)
        .text(
          `${companyName} | Business Intelligence Report`,
          left,
          footerY,
          {
            width: 330,
            lineBreak: false,
          }
        );

      doc
        .font("Helvetica")
        .fontSize(7.5)
        .fillColor(MUTED)
        .text(
          `Page ${i + 1} of ${totalPages}`,
          page.width - 145,
          footerY,
          {
            width: 97,
            align: "right",
            lineBreak: false,
          }
        );
    } finally {
      page.margins.bottom = originalBottomMargin;
    }
  }

  doc.end();

  await new Promise((resolve, reject) => {
    stream.on("finish", resolve);
    stream.on("error", reject);
    doc.on("error", reject);
  });

  return {
    filename,
    filePath,
  };
}
