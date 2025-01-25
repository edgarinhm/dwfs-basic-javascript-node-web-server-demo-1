const { Sequelize } = require('sequelize');
const { API_NAME, API_KEY, API_SECRET, API_HOST, API_DB, API_PORT } = require('./constants/environment-constants');

const sequelize = new Sequelize(API_NAME, API_KEY, API_SECRET, {
    define: {
        timestamps: false,
    },
    host: API_HOST,
    port: API_PORT,
    dialect: API_DB,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // <<<<<<< YOU NEED THIS
        }
    }
});

module.exports = sequelize;