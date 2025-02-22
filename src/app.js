import express from "express";
import questionRoutes from './routes/questions.routes.js';
import appraisalRoutes from './routes/appraisals.routes.js';
import squareMeterPriceRoutes from './routes/square_meter_prices.routes.js'

const app = express();

app.use(express.json())
app.use(questionRoutes)
app.use(appraisalRoutes)
app.use(squareMeterPriceRoutes)

export default app;