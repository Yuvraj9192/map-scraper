
import express from "express";
import businessRoutes from "./routes/businessRoutes.js";
import { testDatabase, prisma } from "./lib/prisma.js";

const app = express();

app.use(express.json());

// Test the database when the application starts
testDatabase();

app.get("/", (req, res) => {
  res.json({
    message: "Business Discovery API is running",
  });
});

// Get total businesses and database status

app.get("/home", async (req, res) => {
  try {
    const businesses = await prisma.business.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      total: businesses.length,
      businesses,
    });
  } catch (error) {
    console.error("Failed to fetch businesses:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to retrieve businesses from the database",
    });
  }
});


app.use("/api/businesses", businessRoutes);

export default app;
