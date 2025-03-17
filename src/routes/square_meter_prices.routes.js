import { Router } from "express";
import {
  getSquareMeterPrices,
  createSquareMeterPrices,
  updateSquareMeterPrices,
} from "../controllers/square-meter-prices.controller.js";

const router = Router();

router.get("/square-meter-prices", getSquareMeterPrices);
router.post("/square-meter-prices", createSquareMeterPrices);
router.put('/square-meter-prices', updateSquareMeterPrices);

export default router;
