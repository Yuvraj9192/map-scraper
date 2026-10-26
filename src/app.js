import path from "node:path";
import cors from "cors";
import { fileURLToPath } from "node:url";
import express from "express";
import businessRoutes from "./routes/businessRoutes.js";
import auditRoutes from "./routes/auditRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import researchRoutes from "./routes/researchRoutes.js";
import { testDatabase, prisma } from "./lib/prisma.js";



const app = express();
app.use(express.json());
app.use(cors())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  "/reports",
  express.static(path.resolve(__dirname, "../reports"))
);
app.use("/api", reportRoutes);
app.use("/api/research", researchRoutes);


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
      where: {
        city: {
          equals: "panchkula",
          mode: "insensitive",
        },
        // category: {
        //   equals: "digital marketing and advertising agencies",
        //   mode: "insensitive",
        // },
      },
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

// specific business
app.use("/api/audits", auditRoutes);
app.use("/api/businesses", businessRoutes);

export default app;
