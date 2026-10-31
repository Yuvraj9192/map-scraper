
import path from "node:path";
import cors from "cors";
import { fileURLToPath } from "node:url";
import express from "express";

import businessRoutes from "./routes/businessRoutes.js";
import auditRoutes from "./routes/auditRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import researchRoutes from "./routes/researchRoutes.js";
import websiteRoutes from "./routes/websiteRoutes.js";

import { testDatabase, prisma } from "./lib/prisma.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// =====================================
// CORS CONFIGURATION
// =====================================

const allowedOrigins = [
  "http://localhost:5173",
  "https://your-actual-frontend.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.error("Blocked by CORS:", origin);
        callback(null, false);
      }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.options("*", cors());

// =====================================
// MIDDLEWARE
// =====================================

app.use(express.json());

// =====================================
// STATIC FILES
// =====================================

app.use(
  "/reports",
  express.static(path.resolve(__dirname, "../reports"))
);

// =====================================
// API ROUTES
// =====================================

app.use("/api", reportRoutes);
app.use("/api/research", researchRoutes);
app.use("/api/websites", websiteRoutes);
app.use("/api/audits", auditRoutes);
app.use("/api/businesses", businessRoutes);

// =====================================
// DATABASE
// =====================================

testDatabase().catch((error) => {
  console.error("Database connection failed:", error);
});

// =====================================
// HOME
// =====================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Business Discovery API is running",
  });
});

// =====================================
// DATABASE BUSINESS SUMMARY
// =====================================

app.get("/home", async (req, res) => {
  try {
    const businesses = await prisma.business.findMany({
      where: {
        city: {
          equals: "panchkula",
          mode: "insensitive",
        },
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

export default app;
