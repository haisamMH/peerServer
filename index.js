const PORT = process.env.PORT || 9000;
const { ExpressPeerServer } = require('peer');
const app = require('express')();
const https = require('https');

// we will pass our 'app' to 'https' server
const server = https.createServer(app).listen(PORT);
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/peerjs'
});

app.use('/peerjs', peerServer);
