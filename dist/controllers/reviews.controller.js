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
exports.deleteItem = exports.postItem = exports.getItems = void 0;
const handle_http_1 = require("../utilities/handle-http");
const reviews_services_1 = require("../services/reviews.services");
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviews = yield (0, reviews_services_1.getAllReviews)();
        return res.status(200).json({ success: true, reviews });
    }
    catch (e) {
        (0, handle_http_1.handleHttp)(res, "ERROR_GET_ITEMS", e);
    }
});
exports.getItems = getItems;
const postItem = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield (0, reviews_services_1.createReview)(body);
        return res.status(200).json({ success: true, review });
    }
    catch (e) {
        (0, handle_http_1.handleHttp)(res, "ERROR_GET_ITEMS", e);
    }
});
exports.postItem = postItem;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const review = yield (0, reviews_services_1.deleteReview)(id);
        return res
            .status(200)
            .json({ success: true, message: "testimonio borrado correctamente" });
    }
    catch (e) {
        (0, handle_http_1.handleHttp)(res, "ERROR_DELETE_ITEM", e);
    }
});
exports.deleteItem = deleteItem;
