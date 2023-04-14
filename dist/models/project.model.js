"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProjectSchema = new mongoose_1.Schema({
    imageUrl: { type: String, required: true },
    alt: { type: String, required: true },
}, { versionKey: false });
const ProyectModel = (0, mongoose_1.model)('Project', ProjectSchema);
exports.default = ProyectModel;
