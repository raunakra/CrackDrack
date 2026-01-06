import { Company, Question } from '../../types';
import { companies } from './companies';
import { googleQuestions } from './google';
import { amazonQuestions } from './amazon';
import { salesforceQuestions } from './salesforce';
import { uberQuestions } from './uber';

// Combine all questions
export const questions: Question[] = [
  ...googleQuestions,
  ...amazonQuestions,
  ...salesforceQuestions,
  ...uberQuestions,
];

// Re-export companies
export { companies };

// Helper functions
export function getCompanyById(id: string): Company | undefined {
  return companies.find(c => c.id === id);
}

export function getQuestionsByCompany(companyId: string): Question[] {
  return questions.filter(q => q.companyId === companyId);
}

export function getQuestionsByCategory(companyId: string, categoryId: string): Question[] {
  return questions.filter(q => q.companyId === companyId && q.categoryId === categoryId);
}

export function getQuestionById(id: string): Question | undefined {
  return questions.find(q => q.id === id);
}
