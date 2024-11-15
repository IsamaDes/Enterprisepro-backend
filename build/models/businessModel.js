"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, Document } = mongoose_1.default;
// Define the Mongoose schema for the Business model
const businessSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    contactPerson: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure the email is unique
        lowercase: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});
// Create the Business model
const Business = mongoose_1.default.model('Business', businessSchema);
exports.default = Business;
