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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItems = exports.postItem = void 0;
const handle_http_1 = require("../utilities/handle-http");
const projects_services_1 = require("../services/projects.services");
const express_validator_1 = require("express-validator");
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, projects_services_1.getProjects)();
        return res.status(200).json({ success: true, projects: data });
    }
    catch (e) {
        (0, handle_http_1.handleHttp)(res, 'ERROR_GET_ITEMS', e);
    }
});
exports.getItems = getItems;
const postItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = (0, express_validator_1.matchedData)(req);
        const cleanData = { imageUrl: body.imageUrl, alt: body.alt };
        const data = yield (0, projects_services_1.createProject)(cleanData);
        return res.status(201).json({ success: true, project: data });
    }
    catch (e) {
        (0, handle_http_1.handleHttp)(res, 'ERROR_CREATE_ITEM', e);
    }
});
exports.postItem = postItem;
