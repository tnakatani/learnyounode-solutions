/*
|----------------------------------------------------------------------
|  Lesson - 9
|----------------------------------------------------------------------
 */

var http = require('http');
var bl = require('bl');

var urls = process.argv[2]
var resultArray = [];
var counter = 0;

function printResults(results) {
    results.forEach(function (index) {
        console.log(index);
    });
}

function getHttp(index) {
    http.get(process.argv[2] + index, function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err);
            }
            resultArray[index] = data.toString();
        }));
        response.on('end', function() {
            counter++;
            if (counter === urls.length) {
                printResults(resultArray);
            }
        });
    });
}

for (i = 0, len = urls.length; i < len; i++){
    getHttp(i);
}


// Using Promises?

// var p1 = new Promise( getMultipleHttp(urls) );

// p1.then(
//     resultArray.forEach(function (url) {
//         console.log(url);
//     })
// );

