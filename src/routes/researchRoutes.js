import express from "express";
import {
  runBusinessResearch,
  getBusinessResearch,
} from "../controllers/researchController.js";

const researchRouter = express.Router();

// Run Agent 1 for a business.
researchRouter.post(
  "/businesses/:id",
  runBusinessResearch
);

// Retrieve a previously saved research result.
researchRouter.get(
  "/:researchId",
  getBusinessResearch
);

export default researchRouter;
