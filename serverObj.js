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
  // Use the connection
  connection.query( 'SELECT * FROM objects WHERE id=1', function(err, rows) {
	if (err) throw err;
   	else {
        	console.log('Connection was sucessful');
    }
    // And done with the connection.
    connection.release();

    // Don't use the connection here, it has been returned to the pool.
  });
});