
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'postgres', 
  host: process.env.DB_HOST,
  port: process.env.PORT || 5432,  // Use the specified port or the default PostgreSQL port
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

module.exports = sequelize;



