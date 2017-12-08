const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on('connection', function(socket) {
  console.log('socket connected');
});

server.listen(4002, () => {
  console.log(4002)
});
