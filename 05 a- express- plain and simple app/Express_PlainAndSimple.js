var express = require('express');
var app = express();

var csspath = __dirname + '\\assets';
console.log("csspath"+csspath);

app.use('/cssFiles', express.static(csspath));

app.get('/helloThere', function(request, response){
	response.send('Hello there, from express!');
});

app.listen(1337, function(){
	console.log('Listen 443');
});