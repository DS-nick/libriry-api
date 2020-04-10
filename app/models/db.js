// const mysql = require("mysql");
// const dbConfig = require("../config/db.config.js");

// var connection = mysql.createPool({
//   host: dbConfig.HOST,
//   user: dbConfig.USER,
//   password: dbConfig.PASSWORD,
//   database: dbConfig.DB
// });

const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'fiaxbrdd',
  host: 'echo.db.elephantsql.com',
  database: 'fiaxbrdd',
  password: 'ABPlw7mH0J-Mu0kJWO7gpOWf4_vx2ZzG',
  port: 5432,
})




module.exports = pool;
