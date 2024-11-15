"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, Document } = mongoose_1.default;
// Define the Mongoose schema for KYC Document
const kycDocumentSchema = new Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    documents: [
        {
            fileType: { type: String, required: true },
            filePath: { type: String, required: true }
        }
    ],
}, {
    timestamps: true,
});
// Create the KYC Document model
const KycDocument = mongoose_1.default.model('KycDocument', kycDocumentSchema);
exports.default = KycDocument;
