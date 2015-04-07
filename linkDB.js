// Require the express library:
var express = require('express');
 
// Require our database library:
var db = require('db');
 

//Require URL library
var url = require('url');
var url_parts = url.parse(request.url, true);

//store URL query
var query = url_parts.query;

// Create an app:
var app = express();

//to test
console.log("query: " + url.format(query)); 
console.log("req query" + req.query('id'));
console.log ("query.id" + query.id);
console.log ("location" + location);

// A route to list all users and provide a form to add more.
app.get('/users', function (req, res) {
//display list of users
   db.list(function(err,result){
   if (err){
       console.log(err);
      console.log ("error, cannot locate object");}
   else{
//pull title from url
 // var urlID = query.parse(...);
  var urlID = query.id;

  //querystring.parse?

//pull from database

  var obj = 'select * from objects where id=' + urlID;
  return obj;
}}    
);
});


function getObjFromUrl (query){
//pull title from url
 // var titleUrl = query.parse(...);

  //querystring.parse?

//pull from database
//check syntax
  var obj = 'select * from objects where id=' + query.id;
  return obj;}
 
//start the server
  var server = app.listen(3000, function () {
          console.log('Listening on port %d', server.address().port);
})