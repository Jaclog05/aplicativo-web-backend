import { Router } from 'express'
import { getAppraisals, createAppraisals } from '../controllers/appraisals.controller.js';

const router = Router();

router.get('/appraisals', getAppraisals)
router.post('/appraisals', createAppraisals)

export default router;