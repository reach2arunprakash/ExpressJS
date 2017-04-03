//How to Build an Express.js API Service in 5 Minutes 

var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hello buddy! welcome to our first api!' });   
});

router.get('/courses', function(req, res) {
    res.json({ Course_name: 'NodeJs' });   
});

app.use('/api', router);

app.listen(7000);
console.log('Magic happens on port ' + 7000);