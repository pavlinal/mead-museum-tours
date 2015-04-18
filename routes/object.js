var express = require('express');
var router = express.Router();

var dblib = require('../lib/db');

var url = require('url');


/*GET objects*/
router.get('/objFields', function(req, res) {
var url_parts = url.parse(req.url, true);
var query = req.query;

//to test
console.log("query: " + url.format(query)); 
console.log("req query('id'): " + req.query('id'));
console.log ("query.id: " + query.id);
console.log ("location: "  + location);
  var objects = dblib.getObject(query.id, function(error, object) {
    if (error) {
      //req.flash('', error);
      //res.redirect('/');
    } else {
    	//not sure..???...
      res.render('objFields', {object: object});
    }
  }); 
});

module.exports = router;
