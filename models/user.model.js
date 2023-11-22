require("dotenv").config();
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

const User = sequelize.define("Users", {
  amazina: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "umuturage",
  },
  intara: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  akarere: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  umurenge: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  akagari: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  umudugudu: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  indangamuntu: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  ijambobanga: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  verified: {
    type: DataTypes.STRING,
    defaultValue: false,
  },
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

module.exports = User;
