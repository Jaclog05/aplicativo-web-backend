import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

export const SquareMeterPrice = sequelize.define('square_meter_prices', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  stratum: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 6,
    },
  },
  status: {
    type: DataTypes.ENUM('usada', 'nueva'),
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
});