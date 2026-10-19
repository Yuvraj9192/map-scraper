
import { categories } from "../data/categories.js";
import { searchBusinesses } from "../services/googlePlaces.js";
import { normalizeBusiness } from "../utils/normalizeBusiness.js";
import { deduplicateBusinesses } from "../utils/deduplicate.js";

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
        : categories.filter(
            (item) =>
              item.toLowerCase() === requestedCategory.toLowerCase()
          );

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

    return res.status(200).json({
      success: true,
      city,
      categoriesSearched: selectedCategories.length,
      totalFetched: allBusinesses.length,
      uniqueCount: uniqueBusinesses.length,
      data: uniqueBusinesses,
    });
  } catch (error) {
    console.error("getBusinesses error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch businesses.",
    });
  }
}
