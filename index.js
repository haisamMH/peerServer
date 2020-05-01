const PORT = process.env.PORT || 9000;
const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();

const http = require('http');

const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/peerjs'
});

app.use('/peerjs', peerServer);

server.listen(PORT);