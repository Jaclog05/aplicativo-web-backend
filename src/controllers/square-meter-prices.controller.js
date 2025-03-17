import { SquareMeterPrice } from "../models/SquareMeterPrice.js";

export const getSquareMeterPrices = async (req, res) => {
  try {
    const { stratum, status } = req.query;
    const whereCondition = {};

    if (stratum) whereCondition.stratum = stratum;
    if (status) whereCondition.status = status;

    const squareMeterPrices = await SquareMeterPrice.findAll({ where: whereCondition });
    res.json(squareMeterPrices)
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

export const updateSquareMeterPrices = async (req, res) => {
  try {
    const squareMeterPrices = req.body;

    if(!Array.isArray(squareMeterPrices) || squareMeterPrices.length === 0) {
      return res.status(400).json({error: "Invalid data format" });
    }

    for (const price of squareMeterPrices) {
      const {id, price: newPrice } = price;

      if(!id || newPrice === undefined) {
        return res.status(400).json({ error: "Missing required fields"})
      }

      await SquareMeterPrice.update({ price: newPrice }, {where: {id}})
    }

    res.json({ message: "Square meter prices updated successfully" })

  } catch (error) {
    res.status(500).json({error: error.message});
  }
}
