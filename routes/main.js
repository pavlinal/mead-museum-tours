var express = require('express');
var router = express.Router();

/*GET index*/
router.get('/index', function(req, res) {
  res.render('index', {title:'Mead Art Museum'});
});

/*GET about*/
router.get('/about', function(req, res) {
  res.render('about', {title:'About'});
});

/*GET feedback*/
router.get('/feedback', function(req, res) {
  res.render('feedback', {title:'Feedback'});
});

module.exports = router;
