/*
|----------------------------------------------------------------------
|  Lesson - 9
|----------------------------------------------------------------------
 */

var http = require('http');
var bl = require('bl');
var argumentLength = process.argv.length - 2;
var resultArray = [];
var counter = 0;

function printResults(results) {
    results.forEach(function (index) {
        console.log(index);
    });
}

function getHttp(index) {
    http.get(process.argv[2 + index], function (response) {  // get response comes in async order...
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err);
            }
            resultArray[index] = data.toString();
            counter++;
            if (counter === argumentLength) {
                printResults(resultArray);
            }
        }));
    });
}

for (var i = 0; i < argumentLength; i++) {
    getHttp(i);
}
