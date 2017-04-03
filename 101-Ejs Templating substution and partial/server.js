
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var path 	   = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

app.get('/', function(req, res) {
    res.render("index");   
});


app.listen(7000);
console.log('Magic happens on port ' + 7000);