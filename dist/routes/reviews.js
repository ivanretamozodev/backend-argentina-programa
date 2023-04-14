"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const reviews_controller_1 = require("../controllers/reviews.controller");
const reviewsValidators_1 = __importDefault(require("../validators/reviewsValidators"));
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", reviews_controller_1.getItems);
router.post("/", reviewsValidators_1.default, reviews_controller_1.postItem);
router.delete("/:id", reviews_controller_1.deleteItem);
