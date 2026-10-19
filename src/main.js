// import readline from "node:readline/promises";
// import { stdin, stdout } from "node:process";
import { categories } from "./data/categories.js";
import { searchBusinesses } from "./services/googlePlaces.js";
import { normalizeBusiness } from "./utils/normalizeBusiness.js";
import { deduplicateBusinesses } from "./utils/deduplicate.js";
import { exportBusinessesToCsv } from "./exporters/csvExporter.js";

// const rl = readline.createInterface({ input: stdin, output: stdout });

// async function ask(question) {
//   return (await rl.question(question)).trim();
// }

async function fetchCategoryBusinesses(city, category) {
  const results = [];
  let pageToken;

  do {
    const page = await searchBusinesses({
      city,
      category,
      pageToken,
    });

    results.push(...page.businesses);

    console.log(
      `  ${category}: fetched ${page.businesses.length} businesses`
    );

    pageToken = page.nextPageToken;

    // Avoid exceeding API limits or making requests too quickly.
    if (pageToken) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  } while (pageToken);

  return results.map((place) =>
    normalizeBusiness(place, city, category)
  );
}

async function main() {
  try {
    // const city = await ask("Enter city or area: ");
    const city = ludhiana;

    if (!city) {
      console.log("Please enter a city or area.");
      return;
    }

    const allBusinesses = [];

    for (const category of categories) {
      console.log(`\nSearching: ${category}`);

      try {
        const businesses = await fetchCategoryBusinesses(city, category);
        allBusinesses.push(...businesses);
      } catch (error) {
        console.error(`Failed category "${category}": ${error.message}`);
      }
    }

    const uniqueBusinesses = deduplicateBusinesses(allBusinesses);

    console.log(`\nTotal fetched: ${allBusinesses.length}`);
    console.log(`Unique businesses: ${uniqueBusinesses.length}`);

    await exportBusinessesToCsv(uniqueBusinesses, city);
  } finally {
    // rl.close();
    console.log("fetching completed");
  }
}

main().catch((error) => {
  console.error("Business discovery failed:", error.message);
  process.exitCode = 1;
});
