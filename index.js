const express = require('express');

const app = express();

app.get('/', (req, res, next) => res.send('Hello world!'));

const server = app.listen(3000);

// const peerServer = ExpressPeerServer(server, {
//   debug: true,
//   path: '/myapp'
// });

// app.use('/peerjs', peerServer);