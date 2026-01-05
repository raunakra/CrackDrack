import axios from 'axios';
import { AnswerAnalysis } from '../types';

const API_BASE = '/api';

export interface AnalysisRequest {
  questionTitle: string;
  questionDescription: string;
  questionType: 'coding' | 'system-design' | 'behavioral' | 'technical';
  company: string;
  role: string;
  answer: string;
  timeSpent: number;
  timeLimit: number;
  expectedTopics?: string[];
}

export const api = {
  // Analyze an answer
  async analyzeAnswer(request: AnalysisRequest): Promise<AnswerAnalysis> {
    const response = await axios.post(`${API_BASE}/analyze`, request);
    return response.data;
  },

  // Quick feedback (no AI, just heuristics)
  async quickFeedback(answer: string, questionType: string) {
    const response = await axios.post(`${API_BASE}/analyze/quick`, { answer, questionType });
    return response.data;
  },

  // Sessions
  async createSession(companyId: string, categoryId: string, questionIds: string[]) {
    const response = await axios.post(`${API_BASE}/sessions`, { companyId, categoryId, questionIds });
    return response.data;
  },

  async getSession(sessionId: string) {
    const response = await axios.get(`${API_BASE}/sessions/${sessionId}`);
    return response.data;
  },

  async updateSession(sessionId: string, data: any) {
    const response = await axios.patch(`${API_BASE}/sessions/${sessionId}`, data);
    return response.data;
  },

  async completeSession(sessionId: string) {
    const response = await axios.post(`${API_BASE}/sessions/${sessionId}/complete`);
    return response.data;
  },

  async getAllSessions() {
    const response = await axios.get(`${API_BASE}/sessions`);
    return response.data;
  },

  async deleteSession(sessionId: string) {
    const response = await axios.delete(`${API_BASE}/sessions/${sessionId}`);
    return response.data;
  },

  // Health check
  async healthCheck() {
    const response = await axios.get(`${API_BASE}/health`);
    return response.data;
  },
};
