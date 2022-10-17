import express from 'express';
import { Server  } from 'socket.io';
import bodyParser from 'body-parser';
import DeviceSchema from './models/User';
import http from 'http';
import { connect } from 'mongoose';
import cors from 'cors';

const PORT = 3000;
const MONGOOSE_STRING = "mongodb+srv://Vcut:09196606@cluster0.uh2tu.mongodb.net/test";

const app = express();
app.use(cors());
app.use(bodyParser.json())

const server = http.createServer(app);

async function run(): Promise<void> {
    await connect(MONGOOSE_STRING).then(() => {
    console.log("Connected to mongodb");
    })
}

run();

const io = new Server(server, {
  cors: {
    origin: "http://localhost:19006",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

app.get("/device/:uniqueId/rooms", async(req, res) => {
   const uniqueId = req.params.uniqueId;
   const data: Array<object> = await DeviceSchema.find({id: uniqueId});
  if(data.length === 0) {
      return res.send([{key: "?", password: "", questions: []}])
  }
   res.send(data)
})

server.listen(PORT, () => {
  console.log('listening on *:3000');
});
