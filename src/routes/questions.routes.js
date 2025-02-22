import { Router } from "express";
import { getQuestions, createQuestions } from "../controllers/questions.controller.js";

const router = Router();

router.get('/questions', getQuestions)
router.post('/questions', createQuestions)

export default router;