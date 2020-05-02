const PORT = process.env.PORT || 9000;
var PeerServer = require('peer').PeerServer;
var fs = require('fs')

var server = PeerServer({
    port: PORT,
    path: '/peerjs',
    ssl: {
        key: fs.readFileSync('./key.pem', 'utf8'),
        cert: fs.readFileSync('./cert.pem', 'utf8')
    }
});

console.log('server on...')