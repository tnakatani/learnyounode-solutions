/*
|----------------------------------------------------------------------
|  Lesson - 7
|----------------------------------------------------------------------
 */

var http = require('http');
var request = process.argv[2];

http.get(request, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
        console.log(data.toString());
    });
    response.on('error', function (err) {
        console.error('Oops, something went wrong: ' + err);
    });
});

// Official Solution
// http.get(process.argv[2], function (response) {
//     response.setEncoding('utf8');
//     response.on('data', console.log);
//     response.on('error', console.error);
// });