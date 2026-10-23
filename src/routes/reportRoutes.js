
import express from "express";

import {
  getBusinessReports,
  getReportById,
  getReportPdf,
} from "../controllers/reportController.js";

const router = express.Router();

router.get("/businesses/:businessId/reports", getBusinessReports);

router.get("/reports/:reportId/pdf", getReportPdf);
router.get("/reports/:reportId", getReportById);

export default router;
