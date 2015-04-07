/*exports.list = function(req, res) {
  req.getConnection(function(err, connection){
    var query = connection.query( 'select * from objects', function(err, result) {
	if (err) throw err;
        res.render('objects', {page_title:"Objects", data:result});
    });
  });
};*/

/*
var objects = [
{"id":1, "title":"chimu whistling vessel with humanoid monkey"},
{"id":2, "title":"Confidence and Admiration"},
{"id":3, "title":"The Poet(Le poete)"},
{"id":4, "title":"Belt (nkody makwoom)"},
{"id":5, "title":"The Triumph of Amphitrite"},
{"id":6, "title":" Landscape with Overturned Wagon in a Storm"}];
 
 
exports.getObjects = function() {
    return objects;
}
 
exports.getObject = function(id) {
    for(var i=0; i < objects.length; i++) {
        if(object[i].id == id) return objects[i];
    }
}*/
