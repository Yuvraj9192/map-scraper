
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
