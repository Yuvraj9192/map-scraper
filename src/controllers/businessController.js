import path from "node:path";
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

    const selectedCategories =
  !requestedCategory || requestedCategory.toLowerCase() === "all"
    ? categories
    : [
        categories.find(
          (item) =>
            item.toLowerCase() === requestedCategory.toLowerCase()
        ) || requestedCategory,
      ];

    if (selectedCategories.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Unknown category.",
        availableCategories: categories,
      });
    }

    const allBusinesses = [];

    for (const category of selectedCategories) {
      try {
        const result = await searchBusinesses({ city, category });

        const normalized = result.businesses.map((place) =>
          normalizeBusiness(place, city, category)
        );

        allBusinesses.push(...normalized);
      } catch (error) {
        console.error(`Category "${category}" failed:`, error.message);
      }
    }

    const uniqueBusinesses = deduplicateBusinesses(allBusinesses);

    const filePath = await exportBusinessesToCsv(uniqueBusinesses, city);

    return res.download(filePath, path.basename(filePath), (error) => {
      if (error) {
        console.error("CSV download failed:", error.message);
      }
    });
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