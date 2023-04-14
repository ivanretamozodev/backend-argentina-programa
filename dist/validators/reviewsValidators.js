"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validateFields_1 = require("../middlewares/validateFields");
const reviewValidator = [
    (0, express_validator_1.check)('title', 'el titulo es requerido').not().isEmpty(),
    (0, express_validator_1.check)('image', 'la imagen es requerida').not().isEmpty(),
    (0, express_validator_1.check)('name', 'el nombre es requerido').not().isEmpty(),
    (0, express_validator_1.check)('calification', 'la calificacion es requerida').not().isEmpty(),
    (0, express_validator_1.check)('description', 'la descripcion es requerida').not().isEmpty(),
    (req, res, next) => {
        (0, validateFields_1.validateFields)(req, res, next);
    },
];
exports.default = reviewValidator;
