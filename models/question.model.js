require("dotenv").config();
const mongoose = require("mongoose");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

const QuestionSchema = sequelize.define("Problems", {
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  ikibazo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  proof: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  urwego: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  indangamuntu: {
    type: DataTypes.STRING, //this is to be gotten after login of the user
    allowNull: false,
  },
  cloudinaryId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "PENDING"
  }
});

// Sync the model with the database to create the table
sequelize
  .sync()
  .then(() => {
    console.log("Table created successfully.");
  })
  .catch((err) => {
    console.error("Error creating table:", err);
  });

module.exports = QuestionSchema;
