// Module dependencies
var express = require('express');
var mysql = require('mysql');
var hbs = require('hbs');
var path = require('path');

//var http = require('http');

//load objects route
var objects = require('./routes/objects');

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
//app.use(express.bodyParser());

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

// Query the database.
app.get('/objects', function(req, res){
  connection.query( 'select * from objects', function(err, result, fields) {
    if (err) throw err;
    res.render('objects', {page_title:"Objects", objects:result});
		
    // End the connection.
    connection.end();
  });
});

app.get('/', function(req, res) {
  res.sendfile('./views/index.html');
});

/*app.get('/objects', function(req, res) {
  res.render('objects', {title: "Objects", objects:objects.getObjects()});
});*/

var server = app.listen(3000, function () {
  console.log('Listening on port %d', server.address().port);
});
