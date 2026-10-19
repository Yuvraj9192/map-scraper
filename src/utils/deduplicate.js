
export function deduplicateBusinesses(businesses) {
  const uniqueBusinesses = new Map();

  for (const business of businesses) {
    const key = business.placeId;

    if (!key) {
      continue;
    }

    if (!uniqueBusinesses.has(key)) {
      uniqueBusinesses.set(key, business);
    }
  }

  return [...uniqueBusinesses.values()];
}
