import { SquareMeterPrice } from "../models/SquareMeterPrice.js";

export const getSquareMeterPrices = async (req, res) => {
  try {
    const squareMeterPrices = await SquareMeterPrice.findAll()
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

//ES NECESARIO UN EDIT? O SIMPLEMENTE CREAR LOS REGISTROS DE CERO?

/* export const editSquareMeterPrices = async (req, res) => {
  await SquareMeterPrice.
  res.send('editing square meter prices');
} */

