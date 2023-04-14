"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const messages_controller_1 = require("../controllers/messages.controller");
const messageValidator_1 = require("../validators/messageValidator");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/', messageValidator_1.messagetValidator, messages_controller_1.postItem);
