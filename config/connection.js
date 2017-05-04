/*Require mysql*/
var mysql = require("mysql");

/**
 * Check if Node environment variable is equal to production,
 * If production is set, db is equal to JAWSDB_URL env variable.
 * Otherwise, create and object with localhost env variables for MySQL.
 */
const db = process.env.NODE_ENV === 'production'
            ? process.env.JAWSDB_URL
            : { host: process.env.MYSQL_HOST,
                port: process.env.MYSQL_PORT,
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE };

/*initialize connection*/
const connection = mysql.createConnection(db);

/*Start the connection and console log the id
or log the error if there is one.*/
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

/*Export the connection so we can use it in the ORM*/
module.exports = connection;