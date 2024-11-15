import mongoose from 'mongoose';

const { Schema, Document } = mongoose;


// Define the TypeScript interface for the agent (document)
export interface IAgent extends Document {
  name: string;
  email: string;
  phoneNumber: string;
  businessId: string;
}

// Define the Mongoose schema
const agentSchema: typeof Schema = new Schema(  {
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
  },
  {
    timestamps: true, // Add createdAt and updatedAt fields
  }
);

// Create the model from the schema and export it
const Agent = mongoose.model<IAgent>('Agent', agentSchema);

export default Agent;
