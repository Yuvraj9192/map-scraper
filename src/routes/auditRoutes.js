import express from "express";
import { getBusinessResearchInput } from "../services/businessResearchInput.js";
import { inspectWebsite } from "../services/websiteInspector.js";
import { analyzeBusinessWebsite } from "../services/aiBusinessAnalyst.js";
import { prisma } from "../lib/prisma.js";
import { generateReportPdf } from "../services/reportPdf.js";
import { uploadReportPdf } from "../services/uploadReportPdf.js";

const auditRouter = express.Router();

// Generate and save a business website audit and PDF.
auditRouter.post("/businesses/:id/analyze", async (req, res) => {
  let reportId = null;

  try {
    // 1. Fetch the business and prepare AI input.
    const input = await getBusinessResearchInput(req.params.id);

    if (!input?.business) {
      return res.status(404).json({
        success: false,
        message: "Business not found",
      });
    }

    const business = input.business;

    // 2. Create a pending report.
    const report = await prisma.report.create({
      data: {
        businessId: business.id,
        status: "PENDING",
      },
    });

    reportId = report.id;

    // 3. Inspect the website if one is available.
    const inspection = business.website
      ? await inspectWebsite(business.website)
      : null;

    // 4. Generate the AI analysis.
    const analysis = await analyzeBusinessWebsite({
      business,
      inspection,
    });

    // 5. Save the report data before generating the PDF.
    // Keep the report PENDING until the PDF is uploaded successfully.
    const savedReport = await prisma.report.update({
      where: {
        id: reportId,
      },
      data: {
        reportData: {
          business: {
            id: business.id,
            name: business.name ?? null,
            category: business.category ?? null,
            address: business.address ?? null,
            website: business.website ?? null,
          },
          inspection: inspection ?? null,
          analysis,
        },
      },
    });

    // 6. Generate the PDF using the saved report data.
    const pdf = await generateReportPdf(savedReport);

    if (!pdf?.filePath) {
      throw new Error("PDF generation did not return a file path");
    }

    // 7. Upload the PDF to Cloudinary.
    const cloudPdfUrl = await uploadReportPdf(
      pdf.filePath,
      reportId
    );

    if (!cloudPdfUrl) {
      throw new Error("PDF upload did not return a URL");
    }

    // 8. Save the PDF URL and mark the report completed.
    const completedReport = await prisma.report.update({
      where: {
        id: reportId,
      },
      data: {
        pdfUrl: cloudPdfUrl,
        status: "COMPLETED",
        error: null,
      },
    });

    // 9. Return the completed report.
    return res.status(200).json({
      success: true,
      message: "Business audit and PDF generated successfully",
      businessId: business.id,
      reportId: completedReport.id,
      reportStatus: completedReport.status,
      inspectionStatus: inspection?.status ?? "not_available",
      pdfUrl: completedReport.pdfUrl,
      analysis,
    });
  } catch (error) {
    console.error("Business analysis failed:", error);

    // Mark the report as failed if it was already created.
    if (reportId) {
      try {
        await prisma.report.update({
          where: {
            id: reportId,
          },
          data: {
            status: "FAILED",
            error: error.message || "Unknown analysis error",
          },
        });
      } catch (updateError) {
        console.error(
          "Failed to update report status:",
          updateError
        );
      }
    }

    return res.status(500).json({
      success: false,
      message: "Business audit or PDF generation failed",
      reportId,
      error: error.message || "Unknown error",
    });
  }
});

// Inspect a business website without generating a report.
auditRouter.get("/businesses/:id/inspect", async (req, res) => {
  try {
    const input = await getBusinessResearchInput(req.params.id);

    if (!input?.business) {
      return res.status(404).json({
        success: false,
        message: "Business not found",
      });
    }

    const business = input.business;

    if (!business.website) {
      return res.status(422).json({
        success: false,
        message: "This business does not have a website to inspect",
        businessId: business.id,
      });
    }

    const inspection = await inspectWebsite(business.website);

    return res.status(200).json({
      success: true,
      business,
      inspection,
    });
  } catch (error) {
    console.error("Website inspection failed:", error);

    return res.status(502).json({
      success: false,
      message: "Unable to inspect this website",
      error: error.message || "Unknown inspection error",
    });
  }
});

// Get the input prepared for AI analysis.
auditRouter.get("/businesses/:id/input", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Business ID is required",
      });
    }

    const input = await getBusinessResearchInput(id);

    if (!input?.business) {
      return res.status(404).json({
        success: false,
        message: "Business not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: input,
    });
  } catch (error) {
    console.error("Failed to prepare business research input:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to prepare business research input",
      error: error.message || "Unknown error",
    });
  }
});

export default auditRouter;
