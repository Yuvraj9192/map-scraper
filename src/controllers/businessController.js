
import { categories } from "../data/categories.js";
import { searchBusinesses } from "../services/googlePlaces.js";
import { normalizeBusiness } from "../utils/normalizeBusiness.js";
import { deduplicateBusinesses } from "../utils/deduplicate.js";
import { exportBusinessesToCsv } from "../exporters/csvExporter.js";

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

    // Search all categories if category is omitted or set to "all".
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

    for (const category of selectedCategories) {
      try {
        const result = await searchBusinesses({ city, category });

        const normalized = result.businesses.map((place) =>
          normalizeBusiness(place, city, category)
        );

        allBusinesses.push(...normalized);
      } catch (error) {
        console.error(
          `Category "${category}" failed:`,
          error.message
        );

        failedCategories.push(category);
      }
    }

    const uniqueBusinesses = deduplicateBusinesses(allBusinesses);

    // Don't return an empty CSV if every category search failed.
    if (uniqueBusinesses.length === 0) {
      return res.status(502).json({
        success: false,
        message:
          "No businesses could be retrieved. Check the search service and try again.",
        failedCategories,
      });
    }

    // Generate the CSV directly in memory.
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

    return res.status(200).send(csv);
  } catch (error) {
    console.error("getBusinesses error:", error.message);

    if (!res.headersSent) {
      return res.status(500).json({
        success: false,
        message: "Failed to fetch businesses.",
      });
    }
  }
}
