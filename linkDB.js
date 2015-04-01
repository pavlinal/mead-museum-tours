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
  /*
//display db content in table
        result.forEach( function(user){
           table+= '<tr>';
       //console.log(user.uid);
       //console.log(user.fname);;
           table+= '<td>' + user.uid + '</td>';
           table+= '<td>' + user.fname + '</td>';
           table+= '<td>' + user.lname + '</td>';
           table+= '<td>' + user.password + '</td>';
           table+= '<td>' + user.age + '</td>';
           table+= '</tr>';
   });
 */
}}    
);
});
 
 
//add user data from form to database
app.get('/users/add', function (req, res) {
//db.add (function(err,result){

}
});
 
 
//start the server
  var server = app.listen(3000, function () {
          console.log('Listening on port %d', server.address().port);
})