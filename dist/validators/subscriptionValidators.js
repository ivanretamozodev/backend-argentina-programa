"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validateFields_1 = require("../middlewares/validateFields");
const subcriptionValidator = [
    (0, express_validator_1.check)('email', 'el campo email no puede estar vacio').not().isEmpty(),
    (0, express_validator_1.check)('email', 'ingrese un email valido').isEmail(),
    (req, res, next) => {
        (0, validateFields_1.validateFields)(req, res, next);
    },
];
exports.default = subcriptionValidator;
