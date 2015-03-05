// Create a pool of connections with the database.
var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit : 10,
    host: 'localhost',
    user: 'root',
    password: 'marylyon',
    database: 'meadmuseum'
});

// Connect to the database
pool.getConnection(function(err, connection) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
    }
    
     console.log('connected as id ' + connection.threadId);
});

