const PORT = process.env.PORT || 9000;
var fs = require('fs');
var PeerServer = require('peer').PeerServer;

var server = PeerServer({
    port: PORT,
    path: '/peerjs',
    ssl: {
        key: fs.readFileSync('./cert/key.pem', 'utf8'),
        cert: fs.readFileSync('./cert/cert.pem', 'utf8')
    }
});