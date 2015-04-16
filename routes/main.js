var express = require('express');
var router = express.Router();

/*GET index*/
router.get('/index', function(req, res) {
  res.render('index', {title:'Mead Art Museum'});
});

/*GET index*/
router.get('/basictest', function(req, res) {
  res.render('basictest', {title:'Basic Test'});
});

module.exports = router;
