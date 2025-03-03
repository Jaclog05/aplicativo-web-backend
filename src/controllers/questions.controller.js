import { Question } from '../models/Question.js';
import { Op } from 'sequelize';

export const getQuestions = async (req, res) => {
  try {
    const { type } = req.query;
    const whereCondition = type === 'Unifamiliar' 
      ? { subgroup: { [Op.ne]: "Criterios Especificos" } } 
      : {};

    const questions = await Question.findAll({ where: whereCondition });

    const questionsWithNewIds = questions.map((question, index) => ({
      ...question.toJSON(),
      id: index + 1
    }))

    res.json(questionsWithNewIds);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createQuestions = async (req, res) => {
  try {
    const questionsArray = req.body;

    await Question.bulkCreate(questionsArray);

    res.json({ message: "Preguntas creadas con éxito" });
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}