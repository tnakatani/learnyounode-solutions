/*
|----------------------------------------------------------------------
|  Lesson 11
|----------------------------------------------------------------------
 */
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {

    // open the file as a readable stream
    var stream = fs.createReadStream(process.argv[3]);

    // stream the file as a response
    stream.pipe(res);

});

server.listen(process.argv[2]);
