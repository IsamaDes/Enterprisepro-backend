"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const corsMiddleware = (0, cors_1.default)({
    origin: [
        'http://localhost:5173',
        'https://enterprisepro-frontend-demo.vercel.app',
        'https://enterprisepro-frontend.onrender.com',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200, // Successful status code for OPTIONS pre-flight requests
});
exports.default = corsMiddleware;
