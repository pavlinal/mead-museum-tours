var express = require('express');
var router = express.Router();

/*GET index*/
router.get('/index', function(req, res) {
  res.render('index', {title:'Mead Art Museum'});
});

module.exports = router;
