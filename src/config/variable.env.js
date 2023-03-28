const { config } = require("dotenv");
config();

//url no considerado
const DB_CONN = process.env.DB_CONNECTION;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_DATABASE;
const DB_USER = process.env.DB_USERNAME;
const DB_PASS = process.env.DB_PASSWORD;
const DB_PORT = process.env.DB_PORT;
const DB_URL = process.env.DB_URL;
const APP_PORT = process.env.APP_PORT;
const APP_ENV = process.env.APP_ENV;
module.exports = {
  DB_CONN,
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASS,
  DB_PORT,
  DB_URL,
  APP_PORT,
  APP_ENV,
};
