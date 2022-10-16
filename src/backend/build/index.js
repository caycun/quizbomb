"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
const PORT = 3000;
const MONGOOSE_STRING = "";
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
//mongoose.connect(MONGOOSE_STRING).then(() => {
//  console.log("Connected to mongodb");
//})
const io = new socket_io_1.Server(server, {
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
