import { Router } from "express";
import { loginAdminUser } from "../controllers/auth.controller.js";

const router = Router();

router.post("/login", loginAdminUser)

export default router;