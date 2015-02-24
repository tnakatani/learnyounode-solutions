/*
|----------------------------------------------------------------------
|  Lesson 4
|----------------------------------------------------------------------
 */
var fs = require('fs');
var path = process.argv[2];
var myfunc = function (err, data) {
    var lines = data.toString().split('\n').length - 1;
    console.log(lines);
};

fs.readFile(path, myfunc);