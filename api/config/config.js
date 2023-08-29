require("dotenv").config()
const { createPool } = require("mysql");

const connection = createPool({
  host: process.env.db_host,
  database: process.env.db_name,
  user: process.env.db_user,
  password: process.env.db_password,
  multipleStatements: true,
  connectionLimit: 30,
});
module.exports = connection;
