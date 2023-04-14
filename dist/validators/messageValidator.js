"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messagetValidator = void 0;
const express_validator_1 = require("express-validator");
const validateFields_1 = require("../middlewares/validateFields");
const messagetValidator = [
    (0, express_validator_1.check)('email', 'debes introducir un email').exists().notEmpty(),
    (0, express_validator_1.check)('email', 'debes introducir un email valido').isEmail(),
    (0, express_validator_1.check)('name', 'debes introducir un nombre').exists().notEmpty(),
    (0, express_validator_1.check)('phone', 'debes introducir un telefono').exists().notEmpty(),
    (0, express_validator_1.check)('phone', 'debes introducir un numero de telefono valido').isNumeric(),
    (0, express_validator_1.check)('message', 'debes introducir un mensaje').exists().notEmpty(),
    (req, res, next) => (0, validateFields_1.validateFields)(req, res, next),
];
exports.messagetValidator = messagetValidator;
