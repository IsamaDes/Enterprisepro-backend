"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, Document } = mongoose_1.default;
// Define the Mongoose schema
const agentSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
    },
    businessId: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, // Add createdAt and updatedAt fields
});
// Create the model from the schema and export it
const Agent = mongoose_1.default.model('Agent', agentSchema);
exports.default = Agent;
