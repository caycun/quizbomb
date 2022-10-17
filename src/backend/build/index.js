"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const body_parser_1 = __importDefault(require("body-parser"));
const User_1 = __importDefault(require("./models/User"));
const http_1 = __importDefault(require("http"));
const mongoose_1 = require("mongoose");
const cors_1 = __importDefault(require("cors"));
const PORT = 3000;
const MONGOOSE_STRING = "mongodb+srv://Vcut:09196606@cluster0.uh2tu.mongodb.net/test";
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
const server = http_1.default.createServer(app);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, mongoose_1.connect)(MONGOOSE_STRING).then(() => {
            console.log("Connected to mongodb");
        });
    });
}
run();
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:19006",
        methods: ["GET", "POST"]
    }
});
io.on('connection', (socket) => {
    console.log('a user connected');
});
app.get("/device/:uniqueId/rooms", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const uniqueId = req.params.uniqueId;
    const data = yield User_1.default.find({ id: uniqueId });
    if (data.length === 0) {
        return res.send([{ key: "?", password: "", questions: [] }]);
    }
    res.send(data);
}));
server.listen(PORT, () => {
    console.log('listening on *:3000');
});
