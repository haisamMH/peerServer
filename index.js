const express = require('express');

const app = express();

app.get('/', (req, res, next) => res.send('Hello world!'));

const PORT = process.env.PORT || 9000;
const server = app.listen(PORT);

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/myapp'
});

app.use('/peerjs', peerServer);