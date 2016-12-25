'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//set up express routing and local port
app.use(express.static(__dirname));
app.set('port', 3000);

var numUsers = 0;


io.on('connection', function(socket){
    console.log('a user connected');
    numUsers += 1
    socket.broadcast.emit('user:joined', numUsers);

    socket.on('client:message', data => {
        // message received from client, now broadcast it to everyone else
        socket.broadcast.emit('server:message', data);
    });

    socket.on('user:startedTyping', () => {
        socket.broadcast.emit('user:startedTyping');
    });

    socket.on('user:stoppedTyping', () => {
        socket.broadcast.emit('user:stoppedTyping');
    });

    socket.on('disconnect', () => {
        numUsers -= 1
        socket.broadcast.emit('user:left', numUsers);
        console.log('a user disconnected');
    });

});

//start server
http.listen(app.get('port'), function (){
    console.log('listening on port %d', app.get('port'));
});

module.exports = app;