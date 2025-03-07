import { SquareMeterPrice } from "../models/SquareMeterPrice.js";

export const getSquareMeterPrices = async (req, res) => {
  try {
    const { stratum, status } = req.query;
    const whereCondition = {};

    if (stratum) whereCondition.stratum = stratum;
    if (status) whereCondition.status = status;

    const squareMeterPrices = await SquareMeterPrice.findAll({ where: whereCondition });
    res.json(squareMeterPrices[0])
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

export const createSquareMeterPrices = async (req, res) => {
  try {
    const squareMeterPrices = req.body

    await SquareMeterPrice.bulkCreate(squareMeterPrices)

    res.send('square meter prices created successfully')
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

