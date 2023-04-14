"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ReviewSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    calification: { type: Number, default: 4 },
    description: { type: String, required: true },
    costumer: { type: String, default: 'Cliente Satisfecho' },
}, { versionKey: false });
const ReviewModel = (0, mongoose_1.model)('Review', ReviewSchema);
exports.default = ReviewModel;
