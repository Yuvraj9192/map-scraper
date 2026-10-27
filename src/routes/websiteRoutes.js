
import express from "express";
import {
  generateBusinessWebsite,
  getGeneratedWebsite,
  listBusinessWebsites,
  deployWebsiteToVercel,
  refreshWebsiteDeploymentStatus,
} from "../controllers/websiteController.js";

const websiteRouter = express.Router();

// Generate a website from the latest completed research,
// or pass { "researchId": "..." } in the request body.
websiteRouter.post("/businesses/:id/generate", generateBusinessWebsite);

// List all generated website versions for a business.
websiteRouter.get("/businesses/:id", listBusinessWebsites);

// Deploy a generated website to Vercel.
websiteRouter.post("/:websiteId/deploy", deployWebsiteToVercel);

// Fetch generated source files and metadata.
// Keep this after the more specific routes.
websiteRouter.get("/:websiteId", getGeneratedWebsite);

websiteRouter.get(
  "/:websiteId/deployment-status",
  refreshWebsiteDeploymentStatus
);


export default websiteRouter;
