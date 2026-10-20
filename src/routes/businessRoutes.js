import { Router } from "express";
import { getBusinesses } from "../controllers/businessController.js";

const router = Router();

router.get("/", getBusinesses);

export default router;
