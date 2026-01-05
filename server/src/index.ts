import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { analyzeRouter } from './routes/analyze.js';
import { sessionsRouter } from './routes/sessions.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Routes
app.use('/api/analyze', analyzeRouter);
app.use('/api/sessions', sessionsRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'CrackDrack API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🔥 CrackDrack server running on port ${PORT}`);
  console.log(`   Ready to deliver brutal feedback...`);
});
