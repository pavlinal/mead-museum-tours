var express = require('express');
var router = express.Router();

var dblib = require('../lib/db');

/*GET object*/
router.get('/object', function(req, res) {
  res.render('object', {title:'Name of the Object'});
});

/*GET search*/
router.get('/search', function(req, res) {
  res.render('search', {title:'Search'});
});

//POST search query 
router.post('/searchquery',function(req, res) {
  field = req.body.f;
  query = req.body.q;
res.end("");

});

//GET search query
router.get('/searchquery', function(req, res){

  dblib.search(field, query, function(error, results) {
   if (error) {
    } 
    else {
      res.render('searchresults', {title: 'Search Results', results: results});
    }
  });
});


module.exports = router;
