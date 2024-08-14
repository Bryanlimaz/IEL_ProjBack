const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const connection = new Pool({
  connectionString: process.env.URL_DB,
  ssl: true,
});

module.exports = connection;