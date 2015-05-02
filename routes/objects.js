var express = require('express');
var router = express.Router();

var dblib = require('../lib/db');


// The id of the object
var objectid;

/*POST object*/
router.post('/object', function(req, res) {
  // Get the object id
  objectid = req.body.id;
});

/*GET object*/
router.get('/object', function(req, res) {
  // Get object details
  dblib.getObjectDetails(objectid, function(error, object) {
      res.render('object', {title:'Object Detail', object: object});
  });
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
