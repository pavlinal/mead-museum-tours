var express = require('express');
var router = express.Router();

var dblib = require('../lib/db');

// The id of the tour
var tourid;

/*GET tours*/
router.get('/tours', function(req, res) {
  var objects = dblib.getTours(function(error, tours) {
      res.render('tours', {title:'Tours', tours:tours});
  }); 
});

/*POST tourdetail*/
router.post('/tourdetail', function(req, res) {
  // Get the tour id
  tourid = req.body.id;
});

/*GET tourdetail*/
router.get('/tourdetail', function(req, res) {
  // Get tour details
  dblib.getTourDetails(tourid, function(error, tour) {
    // Get objects in the tour
    dblib.getObjects(tourid, function(error, objects){
      res.render('tourdetail', {title:'Tour Detail', tour: tour, objects: objects});
    });
  });
});



module.exports = router;
