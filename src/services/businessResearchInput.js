
import { prisma } from "../lib/prisma.js";

export async function getBusinessResearchInput(businessId) {
  const business = await prisma.business.findUnique({
    where: {
      id: businessId,
    },
  });

  if (!business) {
    return null;
  }

  const website = business.website?.trim() || null;

  return {
    business: {
      id: business.id,
      name: business.name,
      category: business.category ?? null,
      searchedCategory: business.searchedCategory ?? null,
      address: business.address ?? null,
      city: business.city ?? null,
      phone: business.phone ?? null,
      email: business.email ?? null,
      website,
      googleMapsUrl: business.googleMapsUrl ?? null,
    },

    researchRequirements: {
      businessOverview: true,
      targetAudience: true,
      servicesAndProducts: true,
      competitorResearch: true,
    },

    websiteAuditRequirements: {
      enabled: Boolean(website),
      uiUx: true,
      mobileExperience: true,
      navigation: true,
      conversionJourney: true,
      accessibility: true,
      seo: true,
      performance: true,
    },

    readiness: {
      hasName: Boolean(business.name?.trim()),
      hasCategory: Boolean(business.category?.trim()),
      hasLocation: Boolean(
        business.address?.trim() || business.city?.trim()
      ),
      hasWebsite: Boolean(website),
    },

    metadata: {
      source: "business_database",
      businessId: business.id,
      createdAt: business.createdAt,
      updatedAt: business.updatedAt,
    },
  };
}
