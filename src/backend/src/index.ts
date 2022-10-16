import express from 'express';
import { Server  } from 'socket.io';
import http from 'http';
import mongoose from 'mongoose';

const PORT = 3000;
const MONGOOSE_STRING = "";

const app = express();

const server = http.createServer(app);

//mongoose.connect(MONGOOSE_STRING).then(() => {
  //  console.log("Connected to mongodb");
//})

const io = new Server(server, {
  cors: {
    origin: "http://localhost:19006",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(PORT, () => {
  console.log('listening on *:3000');
});
