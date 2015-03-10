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
          console.log (result.title  + result.makers + result.culture + result.date + 
      result.materials+ result.measurements+ result.asc_num+ result.credit_line
      + result.desc + result.room+ result.pic + result.sound + result.video + result.tour + result.tour_order)
    }
    // And done with the connection.
    connection.release();

    // Don't use the connection here, it has been returned to the pool.
  });
});