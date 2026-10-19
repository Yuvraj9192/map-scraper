
import fs from "node:fs/promises";
import path from "node:path";

const OUTPUT_DIR = path.resolve("output");

const columns = [
  "placeId",
  "name",
  "address",
  "phone",
  "website",
  "category",
  "searchedCategory",
  "city",
  "googleMapsUrl",
];

function escapeCsv(value) {
  const text = String(value ?? "");

  // Escape quotes and protect commas/newlines.
  return `"${text.replace(/"/g, '""')}"`;
}

export async function exportBusinessesToCsv(businesses, city) {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const safeCity = city
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");

  const filePath = path.join(
    OUTPUT_DIR,
    `business_list_${safeCity}.csv`
  );

  const header = columns.join(",");

  const rows = businesses.map((business) =>
    columns.map((column) => escapeCsv(business[column])).join(",")
  );

  const csv = [header, ...rows].join("\n") + "\n";

  await fs.writeFile(filePath, "\uFEFF" + csv, "utf8");

  console.log(`Exported ${businesses.length} businesses to: ${filePath}`);

  return filePath;
}
