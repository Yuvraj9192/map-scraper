
import { categories } from "../data/categories.js";
import { searchBusinesses } from "../services/googlePlaces.js";
import { normalizeBusiness } from "../utils/normalizeBusiness.js";
import { deduplicateBusinesses } from "../utils/deduplicate.js";
import { exportBusinessesToCsv } from "../exporters/csvExporter.js";
import { prisma } from "../lib/prisma.js";

export async function getBusinesses(req, res) {
  try {
    const city = req.query.city?.trim();
    const requestedCategory = req.query.category?.trim();

    if (!city) {
      return res.status(400).json({
        success: false,
        message: "The city query parameter is required.",
      });
    }

    const selectedCategories =
      !requestedCategory ||
        requestedCategory.toLowerCase() === "all"
        ? categories
        : [
          categories.find(
            (item) =>
              item.toLowerCase() === requestedCategory.toLowerCase()
          ) || requestedCategory,
        ];

    const allBusinesses = [];
    const failedCategories = [];
    const cacheHits = [];
    const fetchedCategories = [];

    for (const category of selectedCategories) {
      try {
        // 1. Check the database for this city and category first.
        const cachedBusinesses = await prisma.business.findMany({
          where: {
            city: {
              equals: city,
              mode: "insensitive",
            },
            searchedCategory: {
              equals: category,
              mode: "insensitive",
            },
          },
          orderBy: {
            name: "asc",
          },
        });

        if (cachedBusinesses.length > 0) {
          // 2. Use saved records; do not call Google Places.
          console.log(
            `CACHE HIT: ${city} / ${category} (${cachedBusinesses.length} businesses)`
          );

          allBusinesses.push(...cachedBusinesses);
          cacheHits.push(category);
          continue;
        }

        // 3. Fetch only when no matching records are saved.
        console.log(`CACHE MISS: Fetching ${city} / ${category}`);

        const result = await searchBusinesses({ city, category });

        const normalized = deduplicateBusinesses(
          result.businesses.map((place) =>
            normalizeBusiness(place, city, category)
          )
        );

        // 4. Save this category's data before proceeding to the next category.
        const saveResults = await Promise.allSettled(
          normalized.map(async (business) => {
            const data = {
              placeId: business.placeId || null,
              name: business.name,
              address: business.address || null,
              phone: business.phone || null,
              email: business.email || null,
              website: business.website || null,
              category: Array.isArray(business.category)
                ? business.category.join(", ")
                : business.category || null,
              searchedCategory: category,
              city,
              googleMapsUrl: business.googleMapsUrl || null,
            };

            if (data.placeId) {
              return prisma.business.upsert({
                where: { placeId: data.placeId },
                create: data,
                update: {
                  name: data.name,
                  address: data.address,
                  phone: data.phone,
                  email: data.email,
                  website: data.website,
                  category: data.category,
                  searchedCategory: data.searchedCategory,
                  city: data.city,
                  googleMapsUrl: data.googleMapsUrl,
                },
              });
            }

            return prisma.business.create({ data });
          })
        );

        const savedCount = saveResults.filter(
          (result) => result.status === "fulfilled"
        ).length;

        const failedSaves = saveResults.filter(
          (result) => result.status === "rejected"
        );

        console.log(
          `SAVE REPORT: ${city} / ${category} — ` +
          `${savedCount}/${normalized.length} saved or updated`
        );

        for (const failure of failedSaves) {
          console.error("Business save failed:", failure.reason?.message);
        }

        // Only proceed once every save attempt has finished.
        if (failedSaves.length > 0) {
          throw new Error(
            `${failedSaves.length} of ${normalized.length} business records failed to save`
          );
        }

        // Add the batch to the response only after successful persistence.
        allBusinesses.push(...normalized);
        fetchedCategories.push(category);


        console.log(
          `SAVED: ${normalized.length} businesses for ${city} / ${category}`
        );
      } catch (error) {
        console.error(
          `Category "${category}" failed:`,
          error.message
        );

        failedCategories.push(category);
      }
    }

    // 5. Deduplicate the combined results from cache and API.
    const uniqueBusinesses = deduplicateBusinesses(allBusinesses);

    if (uniqueBusinesses.length === 0) {
      return res.status(
        failedCategories.length > 0 ? 502 : 404
      ).json({
        success: false,
        message:
          "No businesses were found. Check the city, category, and search service.",
        failedCategories,
        cacheHits,
        fetchedCategories,
      });
    }

    // 6. Preserve the existing CSV download feature.
    const csv = exportBusinessesToCsv(uniqueBusinesses);

    const safeCity =
      city
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "") || "businesses";

    res.setHeader("Content-Type", "text/csv; charset=utf-8");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="business_list_${safeCity}.csv"`
    );
    res.setHeader("Cache-Control", "no-store");

    // Optional diagnostic headers; CSV content remains unchanged.
    res.setHeader("X-Cache-Hits", String(cacheHits.length));
    res.setHeader("X-Categories-Fetched", String(fetchedCategories.length));

    return res.status(200).send(csv);
  } catch (error) {
    console.error("getBusinesses error:", error);

    if (!res.headersSent) {
      return res.status(500).json({
        success: false,
        message: "Failed to fetch businesses.",
      });
    }
  }
}



export async function getBusinessById(req, res) {
  try {
    const { id } = req.params;

    const business = await prisma.business.findUnique({
      where: { id },
      include: {
        reports: {
          orderBy: {
            createdAt: "desc",
          },
        },
        agentResearches: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    if (!business) {
      return res.status(404).json({
        success: false,
        message: "Business not found",
      });
    }

    return res.status(200).json({
      success: true,
      business,
    });
  } catch (error) {
    console.error("Failed to fetch business details:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch business details",
      error: error.message || "Unknown error",
    });
  }
}


export async function getBusinessesFromDb(req, res) {
  try {
    const search = req.query.search?.trim();
    const city = req.query.city?.trim();
    const category = req.query.category?.trim();
    const website = req.query.website?.trim().toLowerCase();

    const page = Math.max(
      1,
      Number.parseInt(req.query.page, 10) || 1
    );

    const limit = Math.min(
      100,
      Math.max(1, Number.parseInt(req.query.limit, 10) || 50)
    );

    // Validate website filter.
    if (
      website &&
      !["all", "missing", "existing"].includes(website)
    ) {
      return res.status(400).json({
        success: false,
        message:
          'Invalid website filter. Use "all", "missing", or "existing".',
      });
    }

    const conditions = [];

    // City filter.
    if (city) {
      conditions.push({
        city: {
          contains: city,
          mode: "insensitive",
        },
      });
    }

    // Category filter.
    if (category && category.toLowerCase() !== "all") {
      conditions.push({
        searchedCategory: {
          equals: category,
          mode: "insensitive",
        },
      });
    }

    // General search.
    if (search) {
      conditions.push({
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { city: { contains: search, mode: "insensitive" } },
          { category: { contains: search, mode: "insensitive" } },
          {
            searchedCategory: {
              contains: search,
              mode: "insensitive",
            },
          },
          { address: { contains: search, mode: "insensitive" } },
          { phone: { contains: search, mode: "insensitive" } },
          { email: { contains: search, mode: "insensitive" } },
        ],
      });
    }

    // Businesses without a website.
    if (website === "missing") {
      conditions.push({
        OR: [
          { website: null },
          { website: "" },
        ],
      });
    }

    // Businesses with a website.
    if (website === "existing") {
      conditions.push({
        AND: [
          { website: { not: null } },
          { website: { not: "" } },
        ],
      });
    }

    // No filters means return all businesses.
    const where =
      conditions.length > 0
        ? { AND: conditions }
        : {};

    const [businesses, total] = await Promise.all([
      prisma.business.findMany({
        where,
        include: {
          reports: {
            orderBy: { createdAt: "desc" },
            take: 1,
            select: {
              id: true,
              status: true,
              pdfUrl: true,
              createdAt: true,
              updatedAt: true,
            },
          },
          agentResearches: {
            orderBy: { createdAt: "desc" },
            take: 1,
            select: {
              id: true,
              status: true,
              websiteExists: true,
              createdAt: true,
              updatedAt: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),

      prisma.business.count({ where }),
    ]);

    return res.status(200).json({
      success: true,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      businesses,
    });
  } catch (error) {
    console.error("Database business search failed:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to load businesses from the database.",
      error: error.message || "Unknown error",
    });
  }
}


export function getCategories(req, res) {
  return res.status(200).json({
    success: true,
    categories,
  });
}