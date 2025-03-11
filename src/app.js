import express from "express";
import cors from "cors";
import questionRoutes from './routes/questions.routes.js';
import appraisalRoutes from './routes/appraisals.routes.js';
import authRoutes from './routes/auth.routes.js';
import squareMeterPriceRoutes from './routes/square_meter_prices.routes.js'

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json())
app.use(questionRoutes)
app.use(appraisalRoutes)
app.use(squareMeterPriceRoutes)
app.use(authRoutes)

export default app;