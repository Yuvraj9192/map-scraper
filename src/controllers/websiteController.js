import { prisma } from "../lib/prisma.js";
import { deployGeneratedWebsite } from "../services/vercelDeploymentService.js";
import { generateWebsiteFiles } from "../services/websiteGenerationService.js";
import { getVercelDeploymentStatus } from "../services/vercelDeploymentService.js";

export async function generateBusinessWebsite(req, res) {
  const { id: businessId } = req.params;
  const requestedResearchId = req.body?.researchId;
  let websiteRecord;

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

    const researchRecord = requestedResearchId
      ? await prisma.agentResearch.findFirst({
          where: { id: requestedResearchId, businessId },
        })
      : await prisma.agentResearch.findFirst({
          where: { businessId, status: "COMPLETED" },
          orderBy: { createdAt: "desc" },
        });

    if (!researchRecord) {
      return res.status(409).json({
        success: false,
        message: "No saved research found. Run Agent 1 research before generating a website.",
      });
    }

    if (researchRecord.status !== "COMPLETED" || !researchRecord.researchData) {
      return res.status(409).json({
        success: false,
        message: "The selected research is not completed yet.",
        researchId: researchRecord.id,
        researchStatus: researchRecord.status,
      });
    }

    const strategy = researchRecord.researchData?.research?.websiteStrategy
      ?? researchRecord.researchData?.websiteStrategy;
    const websitePath = strategy?.path === "improve_existing" && business.website
      ? "improve_existing"
      : "build_new";

    websiteRecord = await prisma.generatedWebsite.create({
      data: {
        businessId,
        researchId: researchRecord.id,
        websitePath,
        status: "IN_PROGRESS",
      },
    });

    const generated = await generateWebsiteFiles({ business, researchRecord });

    const completed = await prisma.generatedWebsite.update({
      where: { id: websiteRecord.id },
      data: {
        status: "COMPLETED",
        websitePath: generated.workflow,
        files: generated.files,
        previewHtml: generated.previewHtml,
        summary: generated.summary,
        error: null,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Website source generated and saved. It has not been deployed.",
      website: completed,
    });
  } catch (error) {
    console.error("Website generation failed:", error);

    if (websiteRecord?.id) {
      try {
        await prisma.generatedWebsite.update({
          where: { id: websiteRecord.id },
          data: {
            status: "FAILED",
            error: error?.message || "Website generation failed",
          },
        });
      } catch (updateError) {
        console.error("Failed to update website generation status:", updateError);
      }
    }

    return res.status(502).json({
      success: false,
      message: "Website generation failed",
      websiteId: websiteRecord?.id ?? null,
      error: error?.message || "Unknown error",
    });
  }
}

export async function getGeneratedWebsite(req, res) {
  try {
    const website = await prisma.generatedWebsite.findUnique({
      where: { id: req.params.websiteId },
      include: {
        business: {
          select: { id: true, name: true, website: true, city: true, category: true },
        },
        research: {
          select: { id: true, status: true, createdAt: true },
        },
      },
    });

    if (!website) {
      return res.status(404).json({
        success: false,
        message: "Generated website record not found",
      });
    }

    return res.status(200).json({ success: true, website });
  } catch (error) {
    console.error("Failed to fetch generated website:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch generated website",
      error: error?.message || "Unknown error",
    });
  }
}

export async function listBusinessWebsites(req, res) {
  try {
    const { id: businessId } = req.params;
    const business = await prisma.business.findUnique({
      where: { id: businessId },
      select: { id: true },
    });

    if (!business) {
      return res.status(404).json({ success: false, message: "Business not found" });
    }

    const websites = await prisma.generatedWebsite.findMany({
      where: { businessId },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        researchId: true,
        status: true,
        websitePath: true,
        summary: true,
        error: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return res.status(200).json({
      success: true,
      businessId,
      total: websites.length,
      websites,
    });
  } catch (error) {
    console.error("Failed to list generated websites:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to list generated websites",
      error: error?.message || "Unknown error",
    });
  }
}


export async function deployWebsiteToVercel(req, res) {
  const { websiteId } = req.params;

  try {
    const website = await prisma.generatedWebsite.findUnique({
      where: { id: websiteId },
      include: {
        business: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!website) {
      return res.status(404).json({
        success: false,
        message: "Generated website record not found",
      });
    }

    if (website.status !== "COMPLETED") {
      return res.status(409).json({
        success: false,
        message: "Only completed websites can be deployed",
      });
    }

    await prisma.generatedWebsite.update({
      where: { id: websiteId },
      data: {
        deploymentStatus: "SUBMITTING",
        error: null,
      },
    });

    const deployment = await deployGeneratedWebsite({
      website,
      business: website.business,
    });

    const updatedWebsite = await prisma.generatedWebsite.update({
      where: { id: websiteId },
      data: {
        deploymentUrl: deployment.url,
        vercelDeploymentId: deployment.id,
        deploymentStatus: deployment.status,
        deployedAt: deployment.createdAt,
      },
      select: {
        id: true,
        status: true,
        deploymentUrl: true,
        vercelDeploymentId: true,
        deploymentStatus: true,
        deployedAt: true,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Vercel deployment submitted",
      website: updatedWebsite,
    });
  } catch (error) {
    console.error("Vercel deployment failed:", error);

    try {
      await prisma.generatedWebsite.update({
        where: { id: websiteId },
        data: {
          deploymentStatus: "ERROR",
          error: error.message || "Vercel deployment failed",
        },
      });
    } catch (updateError) {
      console.error("Could not save deployment error:", updateError);
    }

    return res.status(502).json({
      success: false,
      message: "Vercel deployment failed",
      error: error.message || "Unknown deployment error",
    });
  }
}


export const refreshWebsiteDeploymentStatus = async (req, res) => {
  try {
    const { websiteId } = req.params;

    const website = await prisma.generatedWebsite.findUnique({
      where: { id: websiteId },
      select: {
        id: true,
        vercelDeploymentId: true,
        deploymentUrl: true,
        deploymentStatus: true,
      },
    });

    if (!website) {
      return res.status(404).json({
        success: false,
        message: "Generated website not found",
      });
    }

    if (!website.vercelDeploymentId) {
      return res.status(400).json({
        success: false,
        message: "This website has no Vercel deployment ID yet",
      });
    }

    const deployment = await getVercelDeploymentStatus(
      website.vercelDeploymentId
    );

    const state = String(deployment.status).toUpperCase();

    let deploymentStatus = state;

    if (state === "READY") deploymentStatus = "DEPLOYED";
    else if (state === "ERROR") deploymentStatus = "FAILED";
    else if (state === "CANCELED" || state === "CANCELLED") {
      deploymentStatus = "CANCELED";
    } else if (state === "QUEUED" || state === "INITIALIZING") {
      deploymentStatus = "QUEUED";
    } else if (state === "BUILDING") {
      deploymentStatus = "BUILDING";
    }

    const updatedWebsite = await prisma.generatedWebsite.update({
      where: { id: websiteId },
      data: {
        deploymentStatus,
        ...(deployment.url ? { deploymentUrl: deployment.url } : {}),
        ...(deployment.ready
          ? { deployedAt: new Date(deployment.ready) }
          : {}),
      },
      select: {
        id: true,
        deploymentUrl: true,
        vercelDeploymentId: true,
        deploymentStatus: true,
        deployedAt: true,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Deployment status refreshed",
      website: updatedWebsite,
      vercel: deployment,
    });
  } catch (error) {
    console.error("Refresh deployment status error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to refresh deployment status",
      error: error.message,
    });
  }
};
