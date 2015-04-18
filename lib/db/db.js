// # Database Library

// Require mysql:
var mysql = require('mysql');

//Require URL library
//var url = require('url');
//var url_parts = url.parse(req.url, true);

/*
//store URL query
var query = url_parts.query;
var query = req.query;

//to test
console.log("query: " + url.format(query)); 
console.log("req query('id'): " + req.query('id'));
console.log ("query.id: " + query.id);
console.log ("location: "  + location);
*/

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

/**
 * 
 * Lists chosen objeccts with fields in the database 
 **/
exports.getObject = function (urlID, cb){
  var urlID = urlID;
  pool.getConnection(function(err, connection){
    if (err) {
      console.log("There was a problem connecting to the database: " + err);
      cb(err);
    } else {
      // The sql query
      var sql = 'select * from objects where id=' + urlID;
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

