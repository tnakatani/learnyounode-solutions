/*
|----------------------------------------------------------------------
|  Lesson 5
|----------------------------------------------------------------------
 */

var fs = require('fs');
var path = require('path');
var fileExtension = '.' + process.argv[3];

fs.readdir(process.argv[2], function callback(err, list) {
    if (err) {
        console.log('error: ' + err);
    }
    if (err)
        callback(err)

    list.forEach(function(file) {
        if (path.extname(file) === fileExtension) {
            console.log(file);
        }
    });
});

// ( Martin's solution )

// var fs = require('fs');
// var path = require('path');

// function directoryFilter(directory, searchExt, callback) {
//     fs.readdir(directory, function (err, data) {
//         if (err) return callback(err);
//         callback(null, data.filter(function (entry) {
//             return path.extname(entry) === searchExt;
//         }));
//     });
// }
// function log(entry) {
//     console.log(entry)
// }

// directoryFilter(process.argv[2],  '.' + process.argv[3], function (err, list) {
//     list.forEach(log);