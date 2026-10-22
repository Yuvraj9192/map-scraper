
import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const reportsDir = path.resolve(__dirname, "../../reports");

function formatHeading(key) {
  return key
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]/g, " ")
    .replace(/^./, (char) => char.toUpperCase());
}

function formatText(value) {
  if (value === null || value === undefined) return "Not available";

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  if (typeof value !== "object") return String(value);

  return null;
}

function addSectionTitle(doc, title, level = 1) {
  if (doc.y > 680) doc.addPage();

  doc.moveDown(0.6);

  doc
    .font("Helvetica-Bold")
    .fontSize(level === 1 ? 16 : 12)
    .fillColor(level === 1 ? "#17365D" : "#333333")
    .text(title, { width: 495 });

  doc
    .moveDown(0.25)
    .strokeColor("#D8DEE8")
    .moveTo(50, doc.y)
    .lineTo(545, doc.y)
    .stroke();

  doc.moveDown(0.4);
  doc.fillColor("#222222");
}

function addParagraph(doc, text, options = {}) {
  const value = String(text);

  doc.font("Helvetica").fontSize(10).fillColor("#333333");

  doc.text(value, {
    width: 495,
    lineGap: 3,
    ...options,
  });

  doc.moveDown(0.35);
}

function renderValue(doc, value, key, depth = 0) {
  const heading = formatHeading(key);

  if (value === null || value === undefined) {
    addParagraph(doc, `${heading}: Not available`);
    return;
  }

  const primitive = formatText(value);

  if (primitive !== null) {
    // Show simple fields as readable labels and values.
    doc.font("Helvetica-Bold").fontSize(10).text(`${heading}:`, {
      continued: true,
    });

    doc.font("Helvetica").text(` ${primitive}`);
    doc.moveDown(0.3);
    return;
  }

  if (Array.isArray(value)) {
    addSectionTitle(doc, heading, 2);

    if (value.length === 0) {
      addParagraph(doc, "No items available.");
      return;
    }

    for (const item of value) {
      if (doc.y > 700) doc.addPage();

      if (item !== null && typeof item === "object") {
        renderObject(doc, item, depth + 1);
        doc.moveDown(0.4);
      } else {
        doc.font("Helvetica").fontSize(10)
          .text(`• ${formatText(item) ?? "Not available"}`, {
            width: 480,
            indent: 10,
          });
        doc.moveDown(0.25);
      }
    }

    return;
  }

  addSectionTitle(doc, heading, 2);
  renderObject(doc, value, depth + 1);
}

function renderObject(doc, object, depth = 0) {
  for (const [key, value] of Object.entries(object)) {
    if (doc.y > 700) doc.addPage();

    renderValue(doc, value, key, depth);
  }
}

export async function generateReportPdf(report) {
  await fs.promises.mkdir(reportsDir, { recursive: true });

  const filename = `${report.id}.pdf`;
  const filePath = path.join(reportsDir, filename);

  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: "A4",
      margins: { top: 48, bottom: 50, left: 50, right: 50 },
      bufferPages: true,
      info: {
        Title: "Business Website Audit Report",
        Author: "Business Audit System",
        Subject: "Website inspection and business analysis",
      },
    });

    const stream = fs.createWriteStream(filePath);

    stream.on("error", reject);
    doc.on("error", reject);
    doc.pipe(stream);

    // Cover heading
    doc
      .font("Helvetica-Bold")
      .fontSize(23)
      .fillColor("#17365D")
      .text("BUSINESS WEBSITE AUDIT", { width: 495 });

    doc.moveDown(0.5);

    doc
      .font("Helvetica")
      .fontSize(10)
      .fillColor("#666666")
      .text(`Report ID: ${report.id}`)
      .text(`Business ID: ${report.businessId}`)
      .text(
        `Generated: ${new Date(report.createdAt).toLocaleDateString("en-IN")}`
      );

    doc.moveDown();
    doc.strokeColor("#17365D")
      .lineWidth(2)
      .moveTo(50, doc.y)
      .lineTo(545, doc.y)
      .stroke();

    doc.moveDown();

    const data = report.reportData ?? {};

    // Business analysis and inspection as separate readable sections.
    if (data.analysis !== undefined) {
      addSectionTitle(doc, "Business Analysis");
      if (data.analysis && typeof data.analysis === "object") {
        renderObject(doc, data.analysis);
      } else {
        addParagraph(doc, data.analysis);
      }
    }

    if (data.inspection !== undefined) {
      addSectionTitle(doc, "Website Inspection");
      if (data.inspection && typeof data.inspection === "object") {
        renderObject(doc, data.inspection);
      } else {
        addParagraph(doc, data.inspection);
      }
    }

    // Handle other top-level report fields.
    for (const [key, value] of Object.entries(data)) {
      if (key === "analysis" || key === "inspection") continue;

      addSectionTitle(doc, formatHeading(key));
      if (value && typeof value === "object") {
        renderObject(doc, value);
      } else {
        addParagraph(doc, formatText(value) ?? "Not available");
      }
    }

    // Add page numbers.
    const range = doc.bufferedPageRange();

    for (let i = range.start; i < range.start + range.count; i++) {
      doc.switchToPage(i);

      doc.font("Helvetica")
        .fontSize(8)
        .fillColor("#777777")
        .text(
          `Business Website Audit | Page ${i + 1 - range.start}`,
          50,
          760,
          { width: 495, align: "center", lineBreak: false }
        );
    }

    doc.end();

    stream.on("finish", () => {
      resolve({ filename, filePath });
    });
  });
}
