"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const businessRoutes_1 = __importDefault(require("./routes/businessRoutes"));
const agentRoutes_1 = __importDefault(require("./routes/agentRoutes"));
// import vendorRoutes from './routes/vendorRoutes';
const accountRoutes_1 = __importDefault(require("./routes/accountRoutes"));
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
setInterval(() => { if (global.gc) {
    global.gc();
}
else {
    console.warn('Garbage collection is not exposed');
} }, 60000);
// Middleware
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({ origin: ['http://localhost:5173', 'https://enterprise-pro.vercel.app'],
    // Add your Vercel frontend URL here 
    optionsSuccessStatus: 200
}));
app.use(express_1.default.json());
app.use('/api/auth', authRoutes_1.default);
app.use('/api/business', businessRoutes_1.default);
app.use('/api/agents', agentRoutes_1.default);
// app.use('/api/vendors', vendorRoutes);
app.use('/api', accountRoutes_1.default);
mongoose_1.default
    .connect("mongodb://localhost:27017/amsdb", {
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
})
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.error("MongoDB connection failed:", error));
// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
