import { Router } from "express";
import {
  getBusinesses,
  getBusinessById,
  getBusinessesFromDb,
  getCategories,
} from "../controllers/businessController.js";

const router = Router();

router.get("/categories", getCategories);
router.get("/db", getBusinessesFromDb);
router.get("/", getBusinesses);
router.get("/:id", getBusinessById);

export default router;