// # Database Library

// Require mysql:
var mysql = require('mysql');

// Configure MySQL parameters:
var pool = mysql.createPool({
  connectionLimit : 10,
  host: 'localhost',
  user: 'root',
  password: 'marylyon',
  database: 'meadmuseum'
});

/**
 * Function listObjects
 * Lists all objects in the database 
 **/
exports.getObjects = function (cb){
  pool.getConnection(function(err, connection){
    if (err) {
      console.log("There was a problem connecting to the database: " + err);
      cb(err);
    } else {
      // The sql querry
      var sql = 'select * from objects';
      connection.query( sql, function(err, result, fields) {
        connection.release();
        if (err) {
          cb(err);
        } else {
          cb(undefined, result);
        }
      });
    }
  });
};
