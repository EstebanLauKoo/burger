// Set up MySQL connection.
var mysql = require("mysql");


var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "4801",
    database: "burger_db"
});

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

/*****************************************************************
 * Creates and exports connection object using mysql package so we
 * will be able to handle communications between us and MySQL DB.
 *****************************************************************/

///**
// * Dependencies
// */
//const mysql = require("mysql");
//
///**
// * Check if Node environment variable is equal to production,
// * If production is set, db is equal to JAWSDB_URL env variable.
// * Otherwise, create and object with localhost env variables for MySQL.
// */
//const db = process.env.NODE_ENV === 'production'
//    ? process.env.JAWSDB_URL
//    : { host: process.env.MYSQL_HOST,
//        port: process.env.MYSQL_PORT,
//        user: process.env.MYSQL_USER,
//        password: process.env.MYSQL_PASSWORD,
//        database: process.env.MYSQL_DATABASE };
//
///**
// * Call mysql.createConnection using db options and save to connection variable for export.
// */
//const connection = mysql.createConnection(db);
//
///**
// * Connect to mysql server, otherwise console error.
// *
// * TODO Better implement mysql error handling.
// */
//connection.connect(function(err) {
//    if (err) {
//        console.error("error connecting: " + err.stack);
//        return;
//    }
//    console.log("connected as id " + connection.threadId);
//});

/**
 * Export connection object for use in ORM.
 */
//module.exports = connection;