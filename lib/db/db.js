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
 * Function getObjects
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
      connection.query(sql, function(err, result, fields) {
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
 * Function getTours
 * Lists all tours in the database 
 **/
exports.getTours = function (cb){
  pool.getConnection(function(err, connection){
    if (err) {
      console.log("There was a problem connecting to the database: " + err);
      cb(err);
    } else {
      // The sql querry
      var sql = 'select * from tour';
      connection.query(sql, function(err, result, fields) {
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
 * Function getTourDetails
 * Lists all tours in the database 

 **/
exports.getTourDetails = function (tourid, cb){
  pool.getConnection(function(err, connection){
    if (err) {
      console.log("There was a problem connecting to the database: " + err);
      cb(err);
    } else {
      // The sql querry
      var sql = 'select * from tour where id = $1;';
      var values = [tourid];
      connection.query(sql, values, function(err, result, fields) {
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
 * Function search
 * Searches the database 

 **/
exports.search = function (field, query, cb){
  pool.getConnection(function(err, connection){
    if (err) {
      console.log("There was a problem connecting to the database: " + err);
      cb(err);
    } else {
      // The sql querry
      var sql;
      if (field === objectName){
        sql = 'select * from objects where locate($1,title)';
      }
      else if (field === artistName){
        sql = 'select * from objects where locate($1,makers)';
      }
      else if (field === objectID){
        sql = 'select * from objects where locate($1,id)';
      }
      var values = [query+""];
      connection.query(sql, values, function(err, result, fields) {
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
