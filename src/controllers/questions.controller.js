import { Question } from '../models/Question.js';
import { Op } from 'sequelize';

export const getQuestions = async (req, res) => {
  try {
    const { type } = req.query;
    const whereCondition = type === 'unifamiliar' 
      ? { subgroup: { [Op.ne]: "Criterios Especificos" } } 
      : {};

    const questions = await Question.findAll({
      where: whereCondition,
      order: [['id', 'ASC']],
      raw: true
    });

    const sequenced = questions.map((q, index) => ({
      ...q,
      id: index + 1
    }));

    res.json(sequenced);
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