import "dotenv/config";

export const config = {
  googleApiKey: process.env.GOOGLE_API_KEY,
};

if (!config.googleApiKey) {
  throw new Error("GOOGLE_API_KEY is missing from .env");
}
