var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "student" with a password,
// and to the database "chat".

var dbConnection = mysql.createConnection({
    user: 'student',
    password: 'student',
    database: 'chat'
  });

dbConnection.connect();

module.exports.dbConnection = dbConnection;