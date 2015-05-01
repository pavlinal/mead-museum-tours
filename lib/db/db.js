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
exports.getObjects = function (tourid, cb){
  pool.getConnection(function(err, connection){
    if (err) {
      console.log("There was a problem connecting to the database: " + err);
      cb(err);
    } else {
      // The sql querry
      var sql = 'select * from objects where tour="'+tourid+'"';
      connection.query(sql, function(err, result, fields) {
        console.log(JSON.stringify(result));
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
 * Gets details of a specific tour

 **/
exports.getTourDetails = function (tourid, cb){
  pool.getConnection(function(err, connection){
    if (err) {
      console.log("There was a problem connecting to the database: " + err);
      cb(err);
    } else {
      // The sql querry
      var sql = 'select * from tour where id="'+tourid+'"';
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
 * Function getObjectDetails
 * Lists all tours in the database 

 **/
exports.getObjectDetails = function (objectid, cb){
  pool.getConnection(function(err, connection){
    if (err) {
      console.log("There was a problem connecting to the database: " + err);
      cb(err);
    } else {
      // The sql querry
      var sql = 'select * from objects where id="'+objectid+'"';
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
      if (field === 'Object name'){
        sql = 'select * from objects where title like "%'+query+'%"';
      }
      else if (field === 'Artist name'){
        sql = 'select * from objects where makers like "%'+query+'%"';
      }
      else if (field === 'Tour name'){
        sql = 'select * from objects where tour like "%'+query+'%"';
      }
      else if (field === 'Culture'){
        sql = 'select * from objects where culture like "%'+query+'%"';
      }
      else if (field === 'Object ID'){
        sql = 'select * from objects where id like "%'+query+'%"';
      }
      var values = [query+""];
      connection.query(sql, values, function(err, result, fields) {
        console.log("Results: "+JSON.stringify(result));
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
