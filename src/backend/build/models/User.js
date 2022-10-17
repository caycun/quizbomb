"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    rooms: { type: Array, required: false }
});
exports.default = (0, mongoose_1.model)('DeviceUser', userSchema);
