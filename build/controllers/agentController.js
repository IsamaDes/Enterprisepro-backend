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
exports.deleteAgent = exports.updateAgent = exports.getAgent = exports.createAgent = void 0;
const agentModel_1 = __importDefault(require("../models/agentModel"));
// Create Agent
const createAgent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, phoneNumber, businessId } = req.body;
    try {
        const agent = new agentModel_1.default({ name, email, phoneNumber, businessId });
        yield agent.save();
        res.status(201).json({ message: 'Agent created successfully', agent });
    }
    catch (error) {
        next(error); // Pass error to error handling middleware
    }
});
exports.createAgent = createAgent;
// Get Agent
const getAgent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const agent = yield agentModel_1.default.findById(id);
        if (!agent) {
            res.status(404).json({ message: 'Agent not found' });
        }
        res.status(200).json({ agent });
    }
    catch (error) {
        next(error); // Pass error to error handling middleware
    }
});
exports.getAgent = getAgent;
// Update Agent
const updateAgent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const agent = yield agentModel_1.default.findByIdAndUpdate(id, updateData, { new: true });
        if (!agent) {
            res.status(404).json({ message: 'Agent not found' });
        }
        res.status(200).json({ message: 'Agent updated successfully', agent });
    }
    catch (error) {
        next(error); // Pass error to error handling middleware
    }
});
exports.updateAgent = updateAgent;
// Delete Agent
const deleteAgent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const agent = yield agentModel_1.default.findByIdAndDelete(id);
        if (!agent) {
            res.status(404).json({ message: 'Agent not found' });
        }
        res.status(200).json({ message: 'Agent deleted successfully' });
    }
    catch (error) {
        next(error); // Pass error to error handling middleware
    }
});
exports.deleteAgent = deleteAgent;
