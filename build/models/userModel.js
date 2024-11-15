"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, Document } = mongoose_1.default;
// Define the Mongoose schema for the User model
const userSchema = new Schema({
    businessName: {
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
        unique: true, // Ensure emails are unique
        lowercase: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6, // You can adjust the minimum password length
    },
    role: {
        type: String,
        enum: ['admin', 'user'], // You can expand this list based on your roles
        default: 'user', // Default role is user if not specified
    },
}, {
    timestamps: true, // Add createdAt and updatedAt timestamps
});
// Create the User model
const User = mongoose_1.default.model('User', userSchema);
exports.default = User;
