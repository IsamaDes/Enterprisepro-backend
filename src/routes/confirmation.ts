// routes/confirmation.ts
import express, { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import User from '../entity/User';

const router = express.Router();

router.get('/confirmation/:token', async (req: Request, res: Response) => {
  try {
    console.log('Confirmation route hit'); // Log for debugging
    const { token } = req.params;
    console.log('Token:', token); // Log token for debugging

    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error('JWT_SECRET is not defined');
    }

    const decoded = jwt.verify(token, secret) as JwtPayload;
    const userId = decoded.id;

    if (!userId) {
      console.error('Invalid token');
      return res.status(400).send('Invalid token');
    }

    await User.findByIdAndUpdate(userId, { isVerified: true });
    console.log('User verified:', userId); // Log user ID for debugging
    return res.status(200).send('Email confirmed');
  } catch (err) {
    console.error('Error during confirmation:', err); // Log error for debugging
    return res.status(400).send('Invalid token');
  }
});

export default router;
