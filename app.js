var express = require('express');
var bodyParser = require("body-parser");
// Regular express built-in middleware:
var path = require('path');

// Routes:
var main = require('./routes/main');
var tours = require('./routes/tours');
var objects = require('./routes/objects');


// Create the express application:
var app = express();

//?
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup the view engine:
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// Using routes:
app.use('/', main);
app.use('/', tours);
app.use('/', objects);

app.get('/', function (req, res) {
  res.redirect('/index');
});

// Export the app as the module:
module.exports = app;

