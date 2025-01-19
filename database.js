const { Sequelize } = require('sequelize');
const { API_NAME, API_KEY, API_SECRET, API_HOST, API_DB } = require('./constants/environment-constants');

const sequelize = new Sequelize(API_NAME, API_KEY, API_SECRET, {
    host: API_HOST,
    dialect: API_DB,
});

module.exports = sequelize;


