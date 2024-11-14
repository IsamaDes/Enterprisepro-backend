
import { Request, Response, NextFunction } from 'express';
import Agent from '../models/agentModel';

// Create Agent
export const createAgent = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, phoneNumber, businessId } = req.body;
  try {
    const agent = new Agent({ name, email, phoneNumber, businessId });
    await agent.save();
    res.status(201).json({ message: 'Agent created successfully', agent });
  } catch (error) {
    next(error);  // Pass error to error handling middleware
  }
};

// Get Agent
export const getAgent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params;
  try {
    const agent = await Agent.findById(id);
    if (!agent) {
       res.status(404).json({ message: 'Agent not found' });
    }
    res.status(200).json({ agent });
  } catch (error) {
    next(error);  // Pass error to error handling middleware
  }
};

// Update Agent
export const updateAgent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const agent = await Agent.findByIdAndUpdate(id, updateData, { new: true });
    if (!agent) {
       res.status(404).json({ message: 'Agent not found' });
    }
    res.status(200).json({ message: 'Agent updated successfully', agent });
  } catch (error) {
    next(error);  // Pass error to error handling middleware
  }
};

// Delete Agent
export const deleteAgent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params;
  try {
    const agent = await Agent.findByIdAndDelete(id);
    if (!agent) {
       res.status(404).json({ message: 'Agent not found' });
    }
    res.status(200).json({ message: 'Agent deleted successfully' });
  } catch (error) {
    next(error);  // Pass error to error handling middleware
  }
};
