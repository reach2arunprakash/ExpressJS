
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var path 	   = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

var courses = 	['Mongo', 'Express', 'Ejs'] ;

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');


var url = 'mongodb://localhost:27017/course_content';


MongoClient.connect(url, (err, db) => {
    
    assert.equal(null, err);
           
    db.listCollections().toArray((err, collections) => {
        
        assert.equal(err, null);

        console.log(collections);
        
        db.close();
    });
});


MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  var cursor =db.collection('sample_course').find( );
  cursor.toArray (function(err, doc){

    //.... error code not included.....
    console.log(doc);
});



  
  db.close();
});

app.get('/', function(req, res) {
	  
    res.render("index",{"courses":courses});   
});


app.listen(7000);
console.log('Magic happens on port ' + 7000);