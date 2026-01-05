import { useParams, Link, useNavigate } from 'react-router-dom';
import { getCompanyById, getQuestionsByCategory } from '../data/questions';
import QuestionCard from '../components/QuestionCard';
import { 
  ArrowLeft, 
  Play, 
  Clock, 
  Target,
  Shuffle,
  Flame
} from 'lucide-react';

export default function CompanyQuestions() {
  const { companyId } = useParams<{ companyId: string }>();
  const navigate = useNavigate();
  const company = getCompanyById(companyId || '');

  if (!company) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-white mb-4">Company not found</h2>
        <Link to="/" className="text-red-400 hover:text-red-300">
          ← Back to Dashboard
        </Link>
      </div>
    );
  }

  const startMockRound = (categoryId: string) => {
    navigate(`/mock/${company.id}/${categoryId}`);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Dashboard
      </Link>

      {/* Company Header */}
      <div className={`bg-gradient-to-r ${company.bgGradient} rounded-2xl p-8 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative">
          <div className="text-5xl mb-4">{company.logo}</div>
          <h1 className="text-3xl font-bold text-white mb-2">{company.name}</h1>
          <p className="text-white/80">{company.role} • {company.level}</p>
          <p className="text-white/60 mt-2 max-w-xl">{company.description}</p>
        </div>
      </div>

      {/* Categories */}
      {company.categories.map((category) => {
        const questions = getQuestionsByCategory(company.id, category.id);
        
        return (
          <div key={category.id} className="space-y-4">
            {/* Category Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{category.icon}</span>
                <div>
                  <h2 className="text-xl font-bold text-white">{category.name}</h2>
                  <div className="flex items-center space-x-3 text-sm text-slate-400">
                    <span className="flex items-center">
                      <Target className="w-3 h-3 mr-1" />
                      {questions.length} questions
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {category.timeLimit} min each
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {/* Random Question */}
                <button
                  onClick={() => startMockRound(category.id)}
                  className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  <Shuffle className="w-4 h-4" />
                  <span>Random</span>
                </button>

                {/* Start Full Mock */}
                <button
                  onClick={() => startMockRound(category.id)}
                  className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  <Play className="w-4 h-4" />
                  <span>Start Mock Round</span>
                </button>
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-3">
              {questions.length > 0 ? (
                questions.map((question, index) => (
                  <QuestionCard
                    key={question.id}
                    question={question}
                    index={index}
                    onStart={() => navigate(`/mock/${company.id}/${category.id}?q=${question.id}`)}
                  />
                ))
              ) : (
                <div className="bg-slate-800/30 rounded-xl p-8 text-center border border-slate-700">
                  <Flame className="w-8 h-8 text-slate-600 mx-auto mb-3" />
                  <p className="text-slate-500">Questions coming soon for this category</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
