const PORT = process.env.PORT || 9000;
var PeerServer = require('peer').PeerServer;

var server = PeerServer({
    port: PORT,
    path: '/peerjs'
});