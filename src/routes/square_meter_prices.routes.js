import { Router } from "express";
import { getSquareMeterPrices, createSquareMeterPrices } from "../controllers/square-meter-prices.controller.js";

const router = Router();

router.get('/square-meter-prices', getSquareMeterPrices)
router.post('/square-meter-prices', createSquareMeterPrices)

export default router;