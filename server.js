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
  connection.query( 'select id, title from objects', function(err, result, fields) {
	if (err) throw err;
   	else {
        	console.log('Connection was sucessful');
		console.log('Number of objects: ' + result.length);
		for (var i in result) {
            		var object = result[i];
            		console.log(object.id +': '+ object.title);
       		}
    }
    // And done with the connection.
    connection.release();

    // Don't use the connection here, it has been returned to the pool.
  });
});
