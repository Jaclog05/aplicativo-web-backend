import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

export const Appraisal = sequelize.define("appraisals", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    stratum: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    property_type: {
      type: DataTypes.ENUM("unifamiliar", "multifamiliar"),
      allowNull: false,
    },
    estimated_value: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    calculated_value: {
      type: DataTypes.FLOAT,
      allowNull: false,
    }
  },
  {
    timestamps: true,
  }
)