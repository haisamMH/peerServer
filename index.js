const express = require('express')
const PORT = process.env.PORT || 9000
const { ExpressPeerServer } = require('peer');

var app = express()

// const options = {
//     key: fs.readFileSync('./cert/key.pem'),
//     cert: fs.readFileSync('./cert/cert.pem')
//   };



const server = app.listen(9000);

const peerServer = ExpressPeerServer(server, {
    path: '/'
  });

app.use('/peerjs', peerServer);