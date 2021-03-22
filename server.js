
const mysql = require('mysql');
const inquirer = require('inquirer');
// const connection = require("./config/connection");
const cTable = require("console.table");
require("dotenv").config()

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: 'localhost',

  password: process.env.DB_PASSWORD,
  database: 'employee_DB',
});