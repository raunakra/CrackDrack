// Company Types
export type CompanyId = 'google' | 'amazon' | 'salesforce' | 'uber';

export interface Company {
  id: CompanyId;
  name: string;
  role: string;
  level: string;
  logo: string;
  color: string;
  bgGradient: string;
  description: string;
  categories: QuestionCategory[];
}

// Question Types
export type QuestionType = 'coding' | 'system-design' | 'behavioral' | 'technical';

export interface QuestionCategory {
  id: string;
  name: string;
  type: QuestionType;
  timeLimit: number; // in minutes
  questionCount: number;
  icon: string;
}

export interface Question {
  id: string;
  companyId: CompanyId;
  categoryId: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeLimit: number;
  hints?: string[];
  expectedTopics?: string[];
  followUps?: string[];
  yearAsked?: number;
  frequency?: 'High' | 'Medium' | 'Low';
}

// Interview Session Types
export interface InterviewSession {
  id: string;
  companyId: CompanyId;
  categoryId: string;
  startedAt: Date;
  completedAt?: Date;
  questions: SessionQuestion[];
  overallScore?: number;
  verdict?: 'STRONG_HIRE' | 'HIRE' | 'LEAN_HIRE' | 'LEAN_NO_HIRE' | 'NO_HIRE' | 'STRONG_NO_HIRE';
}

export interface SessionQuestion {
  questionId: string;
  answer: string;
  timeSpent: number; // in seconds
  analysis?: AnswerAnalysis;
}

// AI Analysis Types
export interface AnswerAnalysis {
  score: number; // 0-100
  verdict: 'PASS' | 'WEAK_PASS' | 'FAIL';
  
  // The brutal parts
  whyYoudGetRejected: string[];
  redFlags: string[];
  whatStrongCandidateSaid: string;
  missingConcepts: string[];
  communicationIssues: string[];
  
  // Specific feedback
  technicalAccuracy: number;
  problemSolvingApproach: number;
  communicationClarity: number;
  depthOfKnowledge: number;
  
  // Improvement
  improvementAreas: string[];
  resourcesRecommended: string[];
}

// Timer State
export interface TimerState {
  isRunning: boolean;
  timeRemaining: number; // in seconds
  totalTime: number;
  warnings: TimerWarning[];
}

export interface TimerWarning {
  at: number; // percentage of time remaining
  message: string;
  type: 'warning' | 'critical';
}

// Store Types
export interface AppState {
  currentSession: InterviewSession | null;
  sessions: InterviewSession[];
  timerState: TimerState | null;
}
