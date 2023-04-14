"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectValidator = void 0;
const express_validator_1 = require("express-validator");
const validateFields_1 = require("../middlewares/validateFields");
const projectValidator = [
    (0, express_validator_1.check)('imageUrl', 'el campo de url es obligatorio').exists().notEmpty(),
    (0, express_validator_1.check)('alt', 'el campo alt es obligatorio').exists().notEmpty(),
    (req, res, next) => (0, validateFields_1.validateFields)(req, res, next),
];
exports.projectValidator = projectValidator;
