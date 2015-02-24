/*
|----------------------------------------------------------------------
|  Lesson 12
|----------------------------------------------------------------------
 */
var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (req, res) {
    var reqType = req.method.toUpperCase();
    
    if (reqType !== 'POST') {
        return 'Sorry, send me a POST request';
    }

    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);

});

server.listen(process.argv[2]);
