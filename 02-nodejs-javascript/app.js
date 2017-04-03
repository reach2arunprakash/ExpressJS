var http = require('http');
var path = __dirname ;
var module1 = require( path +'\\module1');
var module2 = require( path +'\\module2');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(module2.myVariable);
    module2.myFunction();
    response.end();
}

http.createServer(onRequest).listen(8000);