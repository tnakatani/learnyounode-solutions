/*
|----------------------------------------------------------------------
|  Lesson 10
|----------------------------------------------------------------------
 */
var net = require('net');
var strftime = require('strftime');
var server = net.createServer(function (socket) {
    var currentTime = strftime('%F %H:%M');
    socket.write(currentTime + '\n');
    socket.end();
});
server.listen(process.argv[2]);

