
import { prisma } from "../lib/prisma.js";

// GET /api/businesses/:businessId/reports
export const getBusinessReports = async (req, res) => {
  try {
    const { businessId } = req.params;

    const page = Math.max(1, Number.parseInt(req.query.page, 10) || 1);
    const limit = Math.min(
      100,
      Math.max(1, Number.parseInt(req.query.limit, 10) || 10)
    );

    const business = await prisma.business.findUnique({
      where: { id: businessId },
      select: {
        id: true,
        name: true,
      },
    });

    if (!business) {
      return res.status(404).json({
        success: false,
        message: "Business not found",
      });
    }

    const [reports, total] = await prisma.$transaction([
      prisma.report.findMany({
        where: { businessId },
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          status: true,
          pdfUrl: true,
          error: true,
          createdAt: true,
          updatedAt: true,
        },
      }),
      prisma.report.count({
        where: { businessId },
      }),
    ]);

    return res.status(200).json({
      success: true,
      business,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
      reports,
    });
  } catch (error) {
    console.error("Failed to retrieve business reports:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to retrieve business reports",
    });
  }
};

// GET /api/reports/:reportId
export const getReportById = async (req, res) => {
  try {
    const { reportId } = req.params;

    const report = await prisma.report.findUnique({
      where: { id: reportId },
      include: {
        business: {
          select: {
            id: true,
            name: true,
            website: true,
            category: true,
            city: true,
          },
        },
      },
    });

    if (!report) {
      return res.status(404).json({
        success: false,
        message: "Report not found",
      });
    }

    return res.status(200).json({
      success: true,
      report,
    });
  } catch (error) {
    console.error("Failed to retrieve report:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to retrieve report",
    });
  }
};

// GET /api/reports/:reportId/pdf
export const getReportPdf = async (req, res) => {
  try {
    const { reportId } = req.params;

    const report = await prisma.report.findUnique({
      where: { id: reportId },
      select: {
        id: true,
        status: true,
        pdfUrl: true,
      },
    });

    if (!report) {
      return res.status(404).json({
        success: false,
        message: "Report not found",
      });
    }

    if (!report.pdfUrl) {
      return res.status(409).json({
        success: false,
        message: "PDF is not available yet",
        status: report.status,
      });
    }

    return res.redirect(302, report.pdfUrl);
  } catch (error) {
    console.error("Failed to retrieve report PDF:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to retrieve report PDF",
    });
  }
};
