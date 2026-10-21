
import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaNeon } from "@prisma/adapter-neon";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is missing from your .env file");
}

const adapter = new PrismaNeon({
  connectionString,
});

export const prisma = new PrismaClient({ adapter });

export async function testDatabase() {
  try {
    await prisma.$connect();

    const count = await prisma.business.count();

    console.log("DATABASE CONNECTED");
    console.log("TOTAL BUSINESSES IN DB:", count);
  } catch (error) {
    console.error("DATABASE TEST FAILED:", error);
  }
}
