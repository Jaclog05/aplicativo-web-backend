import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

export const Question = sequelize.define("questions", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  indicator: DataTypes.STRING,
  subgroup: DataTypes.STRING,
  parameter: DataTypes.STRING,
  explanation: DataTypes.TEXT,
  question: DataTypes.TEXT,
  options: DataTypes.JSONB,
});