
export function normalizeBusiness(place, city, category) {
  return {
    placeId: place.id ?? "",
    name: place.displayName?.text ?? "",
    address: place.formattedAddress ?? "",
    rating: place.rating ?? "",
    phone: place.nationalPhoneNumber ?? "",
    website: place.websiteUri ?? "",
    category: place.primaryTypeDisplayName?.text ?? category,
    searchedCategory: category,
    city,
    googleMapsUrl: place.googleMapsUri ?? "",
  };
}
