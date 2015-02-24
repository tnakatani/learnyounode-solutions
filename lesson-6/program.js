/*
|----------------------------------------------------------------------
|  Lesson 6
|----------------------------------------------------------------------
 */

var mymodule = require('./mymodule');
var pathName = process.argv[2];
var extension = process.argv[3];

function mycall(err, data){
    if (err) {
        return console.error('There was an error: ' + err);
    }
    for (i=0, len=data.length; i < len; i++){
        console.log(data[i]);
    }
}
mymodule(pathName, extension, mycall);
