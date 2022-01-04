//this is where we initialize the sequelize stuff
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('animalarena_db', 'root', 'password', {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      port: process.env.DB_PORT
});

module.exports = sequelize;