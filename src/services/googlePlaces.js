
import { config } from "../config/env.js";

const PLACES_URL =
  "https://places.googleapis.com/v1/places:searchText";

const FIELD_MASK = [
  "places.id",
  "places.displayName",
  "places.formattedAddress",
  "places.nationalPhoneNumber",
  "places.websiteUri",
  "places.primaryTypeDisplayName",
  "places.googleMapsUri",
  "nextPageToken",
].join(",");

export async function searchBusinesses({
  city,
  category,
  pageToken,
}) {
  const body = {
    textQuery: `${category} in ${city}`,
    pageSize: 20,
    languageCode: "en",
    regionCode: "IN",
  };

  if (pageToken) {
    body.pageToken = pageToken;
  }

  const response = await fetch(PLACES_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": config.googleApiKey,
      "X-Goog-FieldMask": FIELD_MASK,
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      `Google Places API error (${response.status}): ${
        data.error?.message ?? "Unknown error"
      }`
    );
  }

  return {
    businesses: data.places ?? [],
    nextPageToken: data.nextPageToken ?? null,
  };
}
