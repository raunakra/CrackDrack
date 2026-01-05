import { Router, Request, Response } from 'express';
import { analyzeAnswer } from '../services/aiAnalyzer.js';
import { AnalysisRequest } from '../types/index.js';

export const analyzeRouter = Router();

analyzeRouter.post('/', async (req: Request, res: Response) => {
  try {
    const analysisRequest: AnalysisRequest = req.body;
    
    // Validate request
    if (!analysisRequest.questionTitle || !analysisRequest.answer) {
      return res.status(400).json({ 
        error: 'Missing required fields: questionTitle and answer are required' 
      });
    }
    
    // Set defaults
    analysisRequest.questionType = analysisRequest.questionType || 'coding';
    analysisRequest.company = analysisRequest.company || 'google';
    analysisRequest.role = analysisRequest.role || 'L4';
    analysisRequest.timeSpent = analysisRequest.timeSpent || 1800; // 30 min default
    analysisRequest.timeLimit = analysisRequest.timeLimit || 2700; // 45 min default
    
    console.log(`📝 Analyzing answer for: ${analysisRequest.questionTitle}`);
    console.log(`   Company: ${analysisRequest.company}, Type: ${analysisRequest.questionType}`);
    
    const analysis = await analyzeAnswer(analysisRequest);
    
    console.log(`   Score: ${analysis.score}, Verdict: ${analysis.verdict}`);
    
    res.json(analysis);
  } catch (error) {
    console.error('Analysis error:', error);
    res.status(500).json({ 
      error: 'Failed to analyze answer',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Quick feedback endpoint for real-time hints (optional)
analyzeRouter.post('/quick', async (req: Request, res: Response) => {
  try {
    const { answer, questionType } = req.body;
    
    // Quick heuristic-based feedback without AI
    const feedback = {
      hasCode: /function|def |class |const |let |=>/.test(answer),
      hasComplexity: /O\(|complexity/i.test(answer),
      hasEdgeCases: /edge|null|empty|boundary/i.test(answer),
      length: answer.length,
      suggestions: [] as string[],
    };
    
    if (questionType === 'coding' && !feedback.hasCode) {
      feedback.suggestions.push('Consider adding actual code implementation');
    }
    if (!feedback.hasComplexity) {
      feedback.suggestions.push('Don\'t forget to analyze complexity');
    }
    if (!feedback.hasEdgeCases) {
      feedback.suggestions.push('Think about edge cases');
    }
    if (feedback.length < 200) {
      feedback.suggestions.push('Your answer might be too brief');
    }
    
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ error: 'Quick feedback failed' });
  }
});
