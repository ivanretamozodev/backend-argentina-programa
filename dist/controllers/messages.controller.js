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
exports.postItem = void 0;
const handle_http_1 = require("../utilities/handle-http");
const messages_services_1 = require("../services/messages.services");
const express_validator_1 = require("express-validator");
const postItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = (0, express_validator_1.matchedData)(req);
        const cleanData = {
            name: body.name,
            email: body.email,
            phone: body.phone,
            message: body.message,
        };
        const message = yield (0, messages_services_1.createMessage)(cleanData);
        return res.status(200).json({ success: true, message });
    }
    catch (e) {
        (0, handle_http_1.handleHttp)(res, 'ERROR_POST_MESSAGE', e);
    }
});
exports.postItem = postItem;
