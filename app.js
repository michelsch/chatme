'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//set up express routing and local port
app.use(express.static(__dirname));
app.set('port', 3000);

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

//start server
http.listen(app.get('port'), function (){
    console.log('listening on port %d', app.get('port'));
});

module.exports = app;