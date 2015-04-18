var express = require('express');

// Regular express built-in middleware:
var path = require('path');

// Routes:
var object = require('./routes/object');
var objects = require('./routes/objects');
var main = require('./routes/main');

// Create the express application:
var app = express();

// Setup the view engine:
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// Using routes:
app.use('/', objects);
app.use('/', object);
app.use('/', main);

app.get('/', function (req, res) {
  res.redirect('/index');
});

// Export the app as the module:
module.exports = app;

/*var server = app.listen(3000, function () {
  console.log('Listening on port %d', server.address().port);
});*/

