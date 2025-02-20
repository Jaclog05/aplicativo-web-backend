import Sequelize from "sequelize";

const sequelize = new Sequelize("appraisals_db", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
