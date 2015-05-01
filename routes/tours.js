var express = require('express');
var router = express.Router();

var dblib = require('../lib/db');

// The id of the tour
var tourid;

// The id of the object
var objectid;

/*GET post*/
router.get('/post', function(req, res) {
  res.render('post', {title:'GET call', tourid:1});
});

/*POST post*/
router.post('/login',function(req,res){
  var id=req.body.id;
  //console.log("Id = "+id);
  res.end("yes");
});

/*GET tours*/
router.get('/tours', function(req, res) {
  var objects = dblib.getTours(function(error, tours) {
    if (error) {
      //req.flash('', error);
      //res.redirect('/');
    } else {
      res.render('tours', {title:'Tours', tours:tours});
    }
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

/*POST object*/
router.post('/object', function(req, res) {
  // Get the tour id
  objectid = req.body.id;
});

/*GET tourdetail*/
router.get('/object', function(req, res) {
  // Get tour details
  dblib.getObjectDetails(objectid, function(error, object) {
      res.render('object', {title:'Object Detail', object: object});
  });
});

module.exports = router;
