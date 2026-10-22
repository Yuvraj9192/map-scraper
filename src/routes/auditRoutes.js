
import express from "express";
import {
  getBusinessResearchInput,
} from "../services/businessResearchInput.js";
import { inspectWebsite } from "../services/websiteInspector.js";
import {
  analyzeBusinessWebsite,
} from "../services/aiBusinessAnalyst.js";
import { prisma } from "../lib/prisma.js";
import { generateReportPdf } from "../services/reportPdf.js";
import { uploadReportPdf } from "../services/uploadReportPdf.js";

const auditRouter = express.Router();

// Generate and save a business website audit and PDF

auditRouter.post("/businesses/:id/analyze", async (req, res) => {
  let reportId = null;

  try {
    const input = await getBusinessResearchInput(req.params.id);

    if (!input) {
      return res.status(404).json({
        success: false,
        message: "Business not found",
      });
    }

    if (!input.business.website) {
      return res.status(422).json({
        success: false,
        message: "Business has no website to analyze",
      });
    }

    // 1. Create a pending report.
    const report = await prisma.report.create({
      data: {
        businessId: input.business.id,
        status: "PENDING",
      },
    });

    reportId = report.id;

    // 2. Inspect the business website.
    const inspection = await inspectWebsite(
      input.business.website
    );

    // 3. Generate AI business analysis.
    const analysis = await analyzeBusinessWebsite({
      business: input.business,
      inspection,
    });

    // 4. Save the JSON report in Neon first.
    const savedReport = await prisma.report.update({
      where: {
        id: reportId,
      },
      data: {
        reportData: {
          inspection,
          analysis,
        },
      },
    });

    // 5. Generate the PDF locally.
    const pdf = await generateReportPdf(savedReport);

    // 6. Upload the PDF to Cloudinary.
    const cloudPdfUrl = await uploadReportPdf(
      pdf.filePath,
      savedReport.id
    );

    // 7. Save the Cloudinary URL and mark report completed.
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

    // 8. Return the completed report.
    return res.status(200).json({
      success: true,
      message: "Business audit and PDF generated successfully",
      businessId: input.business.id,
      reportId: completedReport.id,
      reportStatus: completedReport.status,
      inspectionStatus: inspection.status,
      pdfUrl: completedReport.pdfUrl,
      analysis,
    });
  } catch (error) {
    console.error("Business analysis failed:", error);

    // Mark the report as failed if it was created.
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

    if (!input) {
      return res.status(404).json({
        success: false,
        message: "Business not found",
      });
    }

    const website = input.business.website;

    if (!website) {
      return res.status(422).json({
        success: false,
        message: "This business does not have a website to inspect",
        businessId: input.business.id,
      });
    }

    const inspection = await inspectWebsite(website);

    return res.status(200).json({
      success: true,
      business: input.business,
      inspection,
    });
  } catch (error) {
    console.error("Website inspection failed:", error.message);

    return res.status(502).json({
      success: false,
      message: "Unable to inspect this website",
      error: error.message,
    });
  }
});

// Get the input prepared for AI research.
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

    if (!input) {
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
    console.error(
      "Failed to prepare business research input:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to prepare business research input",
    });
  }
});

export default auditRouter;
