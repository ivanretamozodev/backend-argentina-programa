"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const subscription_controller_1 = require("../controllers/subscription.controller");
const subscriptionValidators_1 = __importDefault(require("../validators/subscriptionValidators"));
const router = (0, express_1.Router)();
exports.router = router;
router.post('/', subscriptionValidators_1.default, subscription_controller_1.postItem);
