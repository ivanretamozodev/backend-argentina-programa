"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MessageSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    message: { type: String, required: true },
});
const MessageModel = (0, mongoose_1.model)('Message', MessageSchema);
exports.default = MessageModel;
