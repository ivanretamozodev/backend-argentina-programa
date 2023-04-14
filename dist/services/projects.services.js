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
exports.createProject = exports.getProjects = void 0;
const project_model_1 = __importDefault(require("../models/project.model"));
const getProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield project_model_1.default.find({});
    return data;
});
exports.getProjects = getProjects;
const createProject = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield project_model_1.default.create(body);
    return data;
});
exports.createProject = createProject;
