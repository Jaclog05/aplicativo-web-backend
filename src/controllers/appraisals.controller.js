import { Appraisal } from "../models/Appraisal.js"

export const getAppraisals = async (req, res) => {
  try {
    const appraisals = await Appraisal.findAll()
    res.send(appraisals)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

export const createAppraisals = async (req, res) => {
  try {
    const newAppraisal = req.body;

    await Appraisal.create({...newAppraisal});

    res.json({ message: "Avalúo creado con éxito" });
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}