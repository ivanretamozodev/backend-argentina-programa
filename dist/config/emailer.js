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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const email_template_1 = require("../templates/email.template");
const templateEmail = email_template_1.emailTemplate;
const createTransporter = () => {
    const transport = nodemailer_1.default.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASSWORD,
        },
    });
    return transport;
};
const sendMail = (email, subject) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transporter = createTransporter();
        const info = yield transporter.sendMail({
            from: `<retamozoi445@gmail.com>`,
            to: [`${email}`],
            subject,
            html: templateEmail,
        });
        console.log(`Message Sent: `, info.messageId);
        return;
    }
    catch (error) {
        console.log({ error });
    }
});
exports.sendMail = sendMail;
exports.default = exports.sendMail;
