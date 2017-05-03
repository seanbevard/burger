/*Require mysql*/
var mysql = require("mysql");

/*initialize connection*/
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
});

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