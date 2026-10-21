
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

export function exportBusinessesToCsv(businesses) {
  const header = columns.join(",");

  const rows = businesses.map((business) =>
    columns
      .map((column) => escapeCsv(business[column]))
      .join(",")
  );

  const csv = [header, ...rows].join("\r\n") + "\r\n";

  // UTF-8 BOM helps Excel display special characters correctly.
  return "\uFEFF" + csv;
}
