import express from "express";
import { classifyWasteByName } from "../controllers/wasteController.js";

const router = express.Router();

router.post("/classify", classifyWasteByName);

export default router;
