var express = require('express');
var router = express.Router();

var dblib = require('../lib/db');

/*GET tours*/
/*router.get('/tours', function(req, res) {
  var objects = dblib.getObjects(function(error, objects) {
    if (error) {
      //req.flash('', error);
      //res.redirect('/');
    } else {
      res.render('tours', {title:'Tours', objects:objects});
    }
  }); 
});*/

/*GET tours*/
router.get('/tours', function(req, res) {
  res.render('tours', {title:'Tours'});
});

/*GET tourdetail*/
router.get('/tourdetail', function(req, res) {
  res.render('tourdetail', {title:'Name of the Tour'});
});


module.exports = router;
