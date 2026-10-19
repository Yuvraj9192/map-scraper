import fs from 'fs';

const API_KEY = "AIzaSyBQcJKiYrLKK8VYJXbGV2-0CHV0w602nCc";
const url = "https://places.googleapis.com/v1/places:searchText";

const city = "Dera Bassi";

export const categories = [
  // Food & Dining
  "restaurants",
  "cafes, bakeries and dessert shops",
  "fast food and takeaway restaurants",
  "bars and pubs",
  "catering services",

  // Retail & Shopping
  "grocery stores and supermarkets",
  "clothing, footwear and jewelry stores",
  "electronics and mobile phone stores",
  "furniture and home decor stores",
  "hardware, paint and building material stores",
  "pharmacies and medical stores",
  "optical stores",
  "bookstores and stationery shops",
  "shopping malls",

  // Healthcare
  "hospitals and medical clinics",
  "dental clinics",
  "diagnostic laboratories",
  "physiotherapy and rehabilitation centers",
  "veterinary clinics",

  // Beauty, Fitness & Wellness
  "gyms and fitness centers",
  "yoga and dance studios",
  "beauty salons and barbershops",
  "spas and wellness centers",

  // Education
  "schools and preschools",
  "colleges and universities",
  "coaching and tuition centers",
  "computer and vocational training institutes",
  "daycare centers",

  // IT & Digital Services
  "software and IT companies",
  "web and mobile app development companies",
  "digital marketing and advertising agencies",
  "graphic design and branding agencies",
  "IT support and computer repair services",

  // Professional Services
  "chartered accountants and tax consultants",
  "lawyers and law firms",
  "business consultants",
  "recruitment and staffing agencies",
  "event management companies",
  "coworking spaces",

  // Real Estate & Construction
  "real estate agents and property dealers",
  "builders and construction companies",
  "architects and interior designers",
  "plumbers and electricians",
  "cleaning and pest control services",
  "solar panel installers",

  // Automotive & Transport
  "car and motorcycle dealerships",
  "auto repair and service centers",
  "car washing and detailing services",
  "car rental agencies",
  "courier, logistics and packers and movers",

  // Hospitality & Travel
  "hotels, guest houses and hostels",
  "banquet halls and wedding venues",
  "travel agencies and tour operators",

  // Finance
  "banks and ATMs",
  "insurance agencies",
  "loan and financial service providers",

  // Industrial & Wholesale
  "manufacturers and factories",
  "industrial suppliers and wholesalers",
  "warehouses and logistics facilities",

  // Personal & Home Services
  "laundry and dry cleaning services",
  "photography studios",
  "mobile and appliance repair services",
  "internet service providers",
  "security and CCTV installation services",


  // Entertainment & Recreation
  "cinemas and theaters",
  "gaming centers and indoor play zones",
  "sports clubs and academies",
];

// Helper function to pause execution (to respect rate limits)
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchBusinessData() {
    let allPlaces = [];

    console.log("Starting batch search across categories...\n");

    for (const category of categories) {
        const queryText = `${category} in ${city}`;
        console.log(`Fetching: ${queryText}`);

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Goog-Api-Key": API_KEY,
                    // Added places.websiteUri to the field mask
                    "X-Goog-FieldMask": "places.displayName,places.formattedAddress,places.rating,places.googleMapsUri,places.websiteUri"
                },
                body: JSON.stringify({
                    textQuery: queryText
                })
            });

            if (response.ok) {
                const data = await response.json();
                const places = data.places || [];
                console.log(` -> Found ${places.length} results.`);

                for (const place of places) {
                    allPlaces.push({
                        Category: category,
                        City: city,
                        Name: place.displayName?.text || "N/A",
                        Address: place.formattedAddress || "N/A",
                        Rating: place.rating || "No rating",
                        Website: place.websiteUri || "N/A", // Captured website data
                        GoogleMapsLink: place.googleMapsUri || "N/A"
                    });
                }
            } else {
                const errorText = await response.text();
                console.error(` -> Error ${response.status}: ${errorText}`);
            }
        } catch (error) {
            console.error(` -> Network/Parsing error:`, error.message);
        }

        // Wait 30 seconds after each category
        console.log("Waiting 2 seconds before the next category...");
        await sleep(2000);
    }

    // Convert data to CSV format (added Website to header and rows)
    const csvHeader = "Category,City,Name,Address,Rating,Website,Google Maps Link\n";
    const csvRows = allPlaces.map(p => {
        // Escape commas and quotes for CSV safety
        const name = `"${p.Name.replace(/"/g, '""')}"`;
        const address = `"${p.Address.replace(/"/g, '""')}"`;
        const website = `"${p.Website.replace(/"/g, '""')}"`;
        return `${p.Category},${p.City},${name},${address},${p.Rating},${website},${p.GoogleMapsLink}`;
    });

    const csvContent = csvHeader + csvRows.join("\n");
    const filename = `business_list_${city.toLowerCase()}.csv`;

    fs.writeFileSync(filename, csvContent, "utf-8");
    console.log(`\nDone! Successfully saved ${allPlaces.length} total records to ${filename}`);
}

fetchBusinessData();