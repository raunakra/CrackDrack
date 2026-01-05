export interface AnalysisRequest {
  questionTitle: string;
  questionDescription: string;
  questionType: 'coding' | 'system-design' | 'behavioral' | 'technical';
  company: string;
  role: string;
  answer: string;
  timeSpent: number; // seconds
  timeLimit: number; // seconds
  expectedTopics?: string[];
}

export interface AnalysisResponse {
  score: number;
  verdict: 'PASS' | 'WEAK_PASS' | 'FAIL';
  whyYoudGetRejected: string[];
  redFlags: string[];
  whatStrongCandidateSaid: string;
  missingConcepts: string[];
  communicationIssues: string[];
  technicalAccuracy: number;
  problemSolvingApproach: number;
  communicationClarity: number;
  depthOfKnowledge: number;
  improvementAreas: string[];
  resourcesRecommended: string[];
}

export interface Session {
  id: string;
  companyId: string;
  categoryId: string;
  startedAt: Date;
  completedAt?: Date;
  questions: SessionQuestion[];
  overallScore?: number;
  verdict?: string;
}

export interface SessionQuestion {
  questionId: string;
  answer: string;
  timeSpent: number;
  analysis?: AnalysisResponse;
}
