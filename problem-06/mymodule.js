/*
|----------------------------------------------------------------------
|  Lesson 6
|----------------------------------------------------------------------
 */

var fs = require('fs');
var path = require('path');

module.exports = function (directory, extension, callback) {
    var finalArray = [];
    fs.readdir(directory, function (err, list) {
        if (err) {
            return callback(err);
        }

        list.forEach(function (file) {
            if (path.extname(file) === '.' + extension) {
                finalArray.push(file);
            }
        });

        callback(null, finalArray);
    });
};