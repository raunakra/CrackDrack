// Re-export everything from the modular questions structure
// This maintains backward compatibility with existing imports

export {
  companies,
  questions,
  getCompanyById,
  getQuestionsByCompany,
  getQuestionsByCategory,
  getQuestionById,
} from './questions/index';
