"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = require("./routes/index");
const mongodb_1 = __importDefault(require("./config/mongodb"));
const app = (0, express_1.default)();
const PORT = process.env.PORT;
/*
 *MIDDLEWARES
 */
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
/*
 * ROUTES
 */
app.use(index_1.router);
/*
 * DB_CONNECT
 */
(0, mongodb_1.default)().then(() => console.log('ONLINE_DB'));
/*
 * SERVER
 */
app.listen(PORT, () => console.log('ONLINE_SERVER_ON_PORT:', PORT));
