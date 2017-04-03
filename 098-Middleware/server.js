var express    = require('express');        // call express
var app        = express();                 // define our app using express

logger = function(req,res,next){
	console.log("some one ask pinged u dear");
	next();
}

app.use(logger);

	
app.get('/', function(req, res) {
        res.send('GUVI Middleware');
    });
	


app.listen(7000);
console.log('Magic happens on port ' + 7000);