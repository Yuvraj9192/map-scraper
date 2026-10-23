
import { prisma } from "../lib/prisma.js";
import { researchBusiness } from "../services/agentResearchService.js";

export async function runBusinessResearch(req, res) {
  const { id: businessId } = req.params;
  let researchId = null;

  try {
    const business = await prisma.business.findUnique({
      where: { id: businessId },
    });

    if (!business) {
      return res.status(404).json({
        success: false,
        message: "Business not found",
      });
    }

    const record = await prisma.agentResearch.create({
      data: {
        businessId: business.id,
        status: "IN_PROGRESS",
        websiteExists: Boolean(business.website?.trim()),
      },
    });

    researchId = record.id;

    const result = await researchBusiness({ business });

    const completed = await prisma.agentResearch.update({
      where: { id: researchId },
      data: {
        status: "COMPLETED",
        websiteExists: result.websiteExists,
        researchData: result,
        error: null,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Business research completed",
      researchId: completed.id,
      businessId: business.id,
      status: completed.status,
      websiteExists: completed.websiteExists,
      websitePath: result.research.websiteStrategy.path,
      sources: result.sources,
      research: result.research,
    });
  } catch (error) {
    console.error("Business research failed:", error);

    if (researchId) {
      try {
        await prisma.agentResearch.update({
          where: { id: researchId },
          data: {
            status: "FAILED",
            error: error.message || "Unknown research error",
          },
        });
      } catch (updateError) {
        console.error(
          "Failed to update research status:",
          updateError
        );
      }
    }

    return res.status(502).json({
      success: false,
      message: "Business research failed",
      researchId,
      error: error.message || "Unknown research error",
    });
  }
}

export async function getBusinessResearch(req, res) {
  try {
    const record = await prisma.agentResearch.findUnique({
      where: { id: req.params.researchId },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Research record not found",
      });
    }

    return res.status(200).json({
      success: true,
      research: record,
    });
  } catch (error) {
    console.error("Failed to fetch research:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch research",
      error: error.message || "Unknown error",
    });
  }
}

