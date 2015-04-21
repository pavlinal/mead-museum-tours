var express = require('express');
var router = express.Router();

var dblib = require('../lib/db');

/*GET object*/
router.get('/object', function(req, res) {
  res.render('object', {title:'Name of the Object'});
});

/*GET search*/
router.get('/search', function(req, res) {
  // Get the field and query
  var field = document.getElementById("searchBy");
  var query = req.body.query;
  var searchRes = dblib.search(field, query, function(error, result) {
    if (error) {
      //req.flash('', error);
      //res.redirect('/');
    } else {
      res.render('search', {title:'Search', result:result});
    }
  });
});



module.exports = router;
