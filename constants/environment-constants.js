const API_HOST = process.env.API_HOST || 'localhost';
const API_DB = process.env.API_DB || 'mysql';
const API_NAME = process.env.API_NAME || 'myapp_db';
const API_KEY = process.env.API_KEY || 'root';
const API_SECRET = process.env.API_SECRET;
const API_PORT = process.env.API_PORT || 3306;
const API_MONGODB_CONNECTION = process.env.API_MONGODB_CONNECTION || "";


module.exports = { API_HOST, API_DB, API_NAME, API_KEY, API_SECRET, API_PORT, API_MONGODB_CONNECTION };