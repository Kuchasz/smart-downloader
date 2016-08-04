var request = require('request');
var path = require('path');
var config = require('./config');

let traffic = 0;

function getExpiration(){
  request.post('http://rapidu.net/api/getAccountDetails/', { form: config.credentials.rapidu, json:true }, (err, res, body) => {
    traffic = body.userTraffic;
  });
  setTimeout(getExpiration, 5000);
};

getExpiration();

const express = require('express');
const socketio = require('socket.io');
const app = express();

// Run server to listen on port 3000.
const server = app.listen(3000, () => {
  console.log('listening on *:3000');
});

const io = new socketio(server);

app.use(express.static(path.resolve(__dirname, '../client/build')));

// io.on('connection', (socket) => {
//   console.log('a user connected');
//
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });
