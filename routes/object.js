var express = require('express');
var router = express.Router();

var dblib = require('../lib/db');

var url = require('url');
var url_parts = url.parse(request.url, true);

/*GET objects*/
router.get('/list', function(req, res) {
  var objects = dblib.getObject(function(error, objects) {
    if (error) {
      //req.flash('', error);
      //res.redirect('/');
    } else {
    	//not sure..???...
      res.render('Object', {title: object.title , object: object});
    }
  }); 
});

module.exports = router;
