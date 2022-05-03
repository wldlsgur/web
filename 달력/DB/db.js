const mysql = require('mysql');
var db = mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'root',
    password: '0000',
    database : 'express.js'
});
db.connect();

module.exports = db;