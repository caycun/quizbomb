import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    id: { type: String, required: true },
    rooms: { type: Array, required: false }
})

export default model('DeviceUser', userSchema);
