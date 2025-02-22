import { Question } from '../models/Question.js';

export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll()
    res.json(questions)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

export const createQuestions = async (req, res) => {
  try {
    const questionsArray = req.body;

    await Question.bulkCreate(questionsArray);

    res.json({ message: "Preguntas creadas con éxito" });
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}