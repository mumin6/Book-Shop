import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
import { Request, Response } from 'express';

let isConnected = false;

async function connectToDatabase() {
  if (!isConnected) {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(config.database_url as string);
    isConnected = true;
    console.log('Connected to MongoDB');
  }
}

// Export serverless handler for Vercel
export default async function  handler(req: Request, res: Response): Promise<void> {
  try {
    await connectToDatabase();
    app(req, res);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
}
