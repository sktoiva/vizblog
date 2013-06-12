var express = require('express');
var app = express();

app.get('/', function(req, res){
    var body = "<html><head></head><body>Tämä on testi</body></html>";
    res.send(body);
});

//Serve static files, e.g.
//GET /scripts
//GET /images
//GET /styles
app.use(express.static(__dirname + '/public'));

app.listen(8080);
console.log("Listening on port 8080");