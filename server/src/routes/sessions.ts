import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Session } from '../types/index.js';

export const sessionsRouter = Router();

// In-memory storage (replace with database in production)
const sessions: Map<string, Session> = new Map();

// Create new session
sessionsRouter.post('/', (req: Request, res: Response) => {
  const { companyId, categoryId, questionIds } = req.body;
  
  const session: Session = {
    id: uuidv4(),
    companyId,
    categoryId,
    startedAt: new Date(),
    questions: questionIds.map((qid: string) => ({
      questionId: qid,
      answer: '',
      timeSpent: 0,
    })),
  };
  
  sessions.set(session.id, session);
  res.json(session);
});

// Get session by ID
sessionsRouter.get('/:id', (req: Request, res: Response) => {
  const session = sessions.get(req.params.id);
  if (!session) {
    return res.status(404).json({ error: 'Session not found' });
  }
  res.json(session);
});

// Update session (submit answer, add analysis)
sessionsRouter.patch('/:id', (req: Request, res: Response) => {
  const session = sessions.get(req.params.id);
  if (!session) {
    return res.status(404).json({ error: 'Session not found' });
  }
  
  const { questionId, answer, timeSpent, analysis, verdict, overallScore } = req.body;
  
  if (questionId) {
    const questionIndex = session.questions.findIndex(q => q.questionId === questionId);
    if (questionIndex !== -1) {
      if (answer !== undefined) session.questions[questionIndex].answer = answer;
      if (timeSpent !== undefined) session.questions[questionIndex].timeSpent = timeSpent;
      if (analysis !== undefined) session.questions[questionIndex].analysis = analysis;
    }
  }
  
  if (verdict !== undefined) session.verdict = verdict;
  if (overallScore !== undefined) session.overallScore = overallScore;
  
  sessions.set(session.id, session);
  res.json(session);
});

// Complete session
sessionsRouter.post('/:id/complete', (req: Request, res: Response) => {
  const session = sessions.get(req.params.id);
  if (!session) {
    return res.status(404).json({ error: 'Session not found' });
  }
  
  session.completedAt = new Date();
  
  // Calculate overall score
  const analyzedQuestions = session.questions.filter(q => q.analysis);
  if (analyzedQuestions.length > 0) {
    session.overallScore = Math.round(
      analyzedQuestions.reduce((sum, q) => sum + (q.analysis?.score || 0), 0) / analyzedQuestions.length
    );
    
    // Determine verdict based on overall score
    if (session.overallScore >= 80) session.verdict = 'STRONG_HIRE';
    else if (session.overallScore >= 70) session.verdict = 'HIRE';
    else if (session.overallScore >= 60) session.verdict = 'LEAN_HIRE';
    else if (session.overallScore >= 50) session.verdict = 'LEAN_NO_HIRE';
    else if (session.overallScore >= 30) session.verdict = 'NO_HIRE';
    else session.verdict = 'STRONG_NO_HIRE';
  }
  
  sessions.set(session.id, session);
  res.json(session);
});

// Get all sessions (for history)
sessionsRouter.get('/', (req: Request, res: Response) => {
  const allSessions = Array.from(sessions.values());
  res.json(allSessions);
});

// Delete session
sessionsRouter.delete('/:id', (req: Request, res: Response) => {
  const deleted = sessions.delete(req.params.id);
  if (!deleted) {
    return res.status(404).json({ error: 'Session not found' });
  }
  res.json({ success: true });
});

// Clear all sessions
sessionsRouter.delete('/', (req: Request, res: Response) => {
  sessions.clear();
  res.json({ success: true });
});
