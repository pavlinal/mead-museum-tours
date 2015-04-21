var express = require('express');
var router = express.Router();

var dblib = require('../lib/db');

//var tourid;

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
  var tourid = req.body.id;
 //var id = req.params.id;
  // Get tour details
  //var tour = dblib.getTourDetails(tourid, function(error, tour) {
   // if (error) {
   // } else {
      console.log("ID = " + tourid);
      res.render('tourdetail', {title:'Tour', id:tourid});
   // }
  //});
});

/*GET tourdetail*/
router.get('/tourdetail', function(req, res) {
  // Get the tour id
  //var tourid = req.params.id;
  // Get tour details
  //var tour = dblib.getTourDetails(tourid, function(error, tour) {
   // if (error) {
   // } else {
     res.render('tourdetail', {title:'Tour', id:'15'});
   // }
  //});
});

module.exports = router;
