var mysql = require("mysql2");

var DB = require("../config/database-config");

const conn = mysql.createPool(DB);

module.exports = conn;
