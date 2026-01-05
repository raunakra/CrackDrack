import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { InterviewSession, TimerState, AnswerAnalysis } from '../types';

interface InterviewStore {
  // Current session
  currentSession: InterviewSession | null;
  
  // All sessions history
  sessions: InterviewSession[];
  
  // Timer state
  timerState: TimerState | null;
  
  // Actions
  startSession: (companyId: string, categoryId: string, questionIds: string[]) => void;
  endSession: () => void;
  
  submitAnswer: (questionId: string, answer: string, timeSpent: number) => void;
  addAnalysis: (questionId: string, analysis: AnswerAnalysis) => void;
  
  startTimer: (totalSeconds: number) => void;
  updateTimer: (remaining: number) => void;
  pauseTimer: () => void;
  resumeTimer: () => void;
  stopTimer: () => void;
  
  setSessionVerdict: (verdict: InterviewSession['verdict'], score: number) => void;
  
  clearHistory: () => void;
}

export const useInterviewStore = create<InterviewStore>()(
  persist(
    (set, get) => ({
      currentSession: null,
      sessions: [],
      timerState: null,

      startSession: (companyId, categoryId, questionIds) => {
        const session: InterviewSession = {
          id: `session-${Date.now()}`,
          companyId: companyId as any,
          categoryId,
          startedAt: new Date(),
          questions: questionIds.map(qid => ({
            questionId: qid,
            answer: '',
            timeSpent: 0,
          })),
        };
        set({ currentSession: session });
      },

      endSession: () => {
        const { currentSession, sessions } = get();
        if (currentSession) {
          const completedSession = {
            ...currentSession,
            completedAt: new Date(),
          };
          set({
            currentSession: null,
            sessions: [...sessions, completedSession],
            timerState: null,
          });
          return completedSession.id;
        }
      },

      submitAnswer: (questionId, answer, timeSpent) => {
        set(state => {
          if (!state.currentSession) return state;
          
          const updatedQuestions = state.currentSession.questions.map(q =>
            q.questionId === questionId
              ? { ...q, answer, timeSpent }
              : q
          );
          
          return {
            currentSession: {
              ...state.currentSession,
              questions: updatedQuestions,
            },
          };
        });
      },

      addAnalysis: (questionId, analysis) => {
        set(state => {
          if (!state.currentSession) return state;
          
          const updatedQuestions = state.currentSession.questions.map(q =>
            q.questionId === questionId
              ? { ...q, analysis }
              : q
          );
          
          return {
            currentSession: {
              ...state.currentSession,
              questions: updatedQuestions,
            },
          };
        });
      },

      startTimer: (totalSeconds) => {
        set({
          timerState: {
            isRunning: true,
            timeRemaining: totalSeconds,
            totalTime: totalSeconds,
            warnings: [
              { at: 50, message: 'Half time remaining!', type: 'warning' },
              { at: 20, message: 'Only 20% time left!', type: 'warning' },
              { at: 10, message: 'FINAL MINUTES!', type: 'critical' },
            ],
          },
        });
      },

      updateTimer: (remaining) => {
        set(state => ({
          timerState: state.timerState
            ? { ...state.timerState, timeRemaining: remaining }
            : null,
        }));
      },

      pauseTimer: () => {
        set(state => ({
          timerState: state.timerState
            ? { ...state.timerState, isRunning: false }
            : null,
        }));
      },

      resumeTimer: () => {
        set(state => ({
          timerState: state.timerState
            ? { ...state.timerState, isRunning: true }
            : null,
        }));
      },

      stopTimer: () => {
        set({ timerState: null });
      },

      setSessionVerdict: (verdict, score) => {
        set(state => {
          if (!state.currentSession) return state;
          return {
            currentSession: {
              ...state.currentSession,
              verdict,
              overallScore: score,
            },
          };
        });
      },

      clearHistory: () => {
        set({ sessions: [] });
      },
    }),
    {
      name: 'crackdrack-interview-store',
      partialize: (state) => ({ sessions: state.sessions }),
    }
  )
);
