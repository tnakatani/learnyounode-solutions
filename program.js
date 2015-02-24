



////////////////////////////////////////////////////////////
/// Lesson 3
// var fs = require('fs');

// var text = fs.readFileSync(process.argv[2]);

// console.log(text.toString().split('\n').length -1);

////////////////////////////////////////////////////////////
/// Lesson 4

// fs.readFile(file, function(err, data) {
//     if (err) {
//         console.log('error: ' + err);
//     }
//     console.log(data.toString().split('\n').length - 1);
// });

////////////////////////////////////////////////////////////
/// Lesson 5
var fs = require('fs');
var path = require('path');

var searchExt = '.' + process.argv[3];
var directory = process.argv[2];

fs.readdir(directory, function callback(err, data) {
    if (err) {
        console.log('error: ' + err);
    }
    data.forEach(function (entry) {
        if (path.extname(entry) === searchExt) {
            console.log(entry);
        }
    });
});

/* Solution for Lesson 5 */
// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })

/////////////////////////////////////////////////////////////////////////////
/// Lesson - 5 ( Martin's elegant way )

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
// });

/////////////////////////////////////////////////////////////////////////////
/// Lesson - 6

