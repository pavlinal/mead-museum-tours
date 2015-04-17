// Module dependencies
var express = require('express');
var mysql = require('mysql');
var hbs = require('hbs');
var path = require('path');

//Require URL library
var url = require('url');
var url_parts = url.parse(request.url, true);

//var http = require('http');

//load objects route
//UPDATE FOLDERS - PLACE OBJECT.JS IN ROUTES FOLDER
//var objects = require('./routes/objects');
var objects = require('./routes/objects');

//create an app
var app = express();

// Configure MySQL parameters.
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'marylyon',
  database: 'meadmuseum'
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', hbs.__express);


app.use(express.static(path.join(__dirname, 'public')));


// Connect to database.
connection.connect(function(err){
  if(err){
    console.log("There was a problem connecting to the database: " + err);
  }
  else{
    console.log("The connection to the database was sucessful.");
  }
});


//store URL query
var query = url_parts.query;


//to test
console.log("query: " + url.format(query)); 
console.log("req query('id'): " + req.query('id'));
console.log ("query.id: " + query.id);
console.log ("location: "  + location);

// Query the database.
app.get('/objects', function(req, res){
   var urlID = query.id;
  connection.query( 'select * from objects where id=' + urlID, function(err, result, fields) {
    if (err) throw err;
    res.render('object', {page_title:"Object", object:result});
    // console.log ("error, cannot locate object");
    // End the connection.
    connection.end();
  });
});

app.get('/', function(req, res) {
  res.sendfile('./views/object.html');
});

var server = app.listen(3000, function () {
  console.log('Listening on port %d', server.address().port);
});


/*
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
  //querystring.parse?

//pull from database
//check syntax
  var obj = 'select * from objects where id=' + query.id;
  return obj;}

})