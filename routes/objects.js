var express = require('express');
var router = express.Router();

var dblib = require('../lib/db');

/*GET objects*/
router.get('/list', function(req, res) {
  var objects = dblib.getObjects(function(error, objects) {
    if (error) {
      //req.flash('', error);
      //res.redirect('/');
    } else {
      res.render('list', {title:'List of Objects', objects:objects});
    }
  }); 
});

/*GET test*/
router.get('/basictest', function(req, res) {
  res.render('basictest', {title:'Basic Test'});
});


module.exports = router;
