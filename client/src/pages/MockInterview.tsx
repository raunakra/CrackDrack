import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useSearchParams, Link } from 'react-router-dom';
import { getCompanyById, getQuestionsByCategory, getQuestionById } from '../data/questions';
import { useInterviewStore } from '../stores/interviewStore';
import Timer from '../components/Timer';
import BrutalFeedback from '../components/BrutalFeedback';
import { AnswerAnalysis } from '../types';
import {
  ArrowLeft,
  Send,
  Loader2,
  ChevronRight,
  AlertTriangle,
  Skull,
  Brain,
  Code,
  Lightbulb,
  SkipForward,
} from 'lucide-react';

export default function MockInterview() {
  const { companyId, category } = useParams<{ companyId: string; category: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const company = getCompanyById(companyId || '');
  const categoryQuestions = getQuestionsByCategory(companyId || '', category || '');
  
  // Get specific question or random one
  const questionId = searchParams.get('q');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(() => {
    if (questionId) {
      return getQuestionById(questionId);
    }
    return categoryQuestions[0];
  });

  const [answer, setAnswer] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<AnswerAnalysis | null>(null);
  const [showHints, setShowHints] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  
  const { startTimer, stopTimer } = useInterviewStore();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (currentQuestion && hasStarted) {
      startTimer(currentQuestion.timeLimit * 60);
    }
    return () => stopTimer();
  }, [currentQuestion?.id, hasStarted]);

  if (!company || !currentQuestion) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-white mb-4">Question not found</h2>
        <Link to="/" className="text-red-400 hover:text-red-300">
          ← Back to Dashboard
        </Link>
      </div>
    );
  }

  const handleSubmit = async () => {
    if (!answer.trim()) return;
    
    setIsAnalyzing(true);
    stopTimer();

    // Simulate AI analysis (in real app, this would call the backend)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate mock brutal analysis
    const mockAnalysis: AnswerAnalysis = generateBrutalAnalysis(answer, currentQuestion.title);
    setAnalysis(mockAnalysis);
    setIsAnalyzing(false);
  };

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < categoryQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
      setCurrentQuestion(categoryQuestions[nextIndex]);
      setAnswer('');
      setAnalysis(null);
      setShowHints(false);
      setHasStarted(false);
    } else {
      navigate(`/company/${companyId}`);
    }
  };

  const handleTimeUp = () => {
    if (answer.trim()) {
      handleSubmit();
    } else {
      setAnalysis({
        score: 0,
        verdict: 'FAIL',
        whyYoudGetRejected: [
          "You didn't submit an answer. Silence is NOT golden in interviews.",
          "Even a partial answer shows problem-solving ability. Nothing shows... nothing.",
          "Interviewers can't read your mind. If you were thinking, you should have been typing."
        ],
        redFlags: [
          "Complete freeze under pressure - major red flag for senior roles",
          "No attempt at communication or clarification",
          "Time management failure"
        ],
        whatStrongCandidateSaid: "A strong candidate would have at least outlined their approach, even if incomplete. They'd say: 'Let me walk you through my initial thinking...' and provide a partial solution with clear trade-offs noted.",
        missingConcepts: ["Everything - we can't evaluate what doesn't exist"],
        communicationIssues: ["No communication at all"],
        technicalAccuracy: 0,
        problemSolvingApproach: 0,
        communicationClarity: 0,
        depthOfKnowledge: 0,
        improvementAreas: [
          "Practice under timed conditions until you're comfortable",
          "Learn to at least verbalize your thought process",
          "Start with brute force - any solution is better than no solution"
        ],
        resourcesRecommended: [
          "Mock interviews with friends to build pressure tolerance",
          "LeetCode timer practice",
          "Review basic problem-solving frameworks (understand, plan, execute)"
        ]
      });
    }
  };

  const startInterview = () => {
    setHasStarted(true);
    textareaRef.current?.focus();
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link
          to={`/company/${companyId}`}
          className="inline-flex items-center text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Exit Interview
        </Link>
        
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{company.logo}</span>
          <span className="text-slate-400">{company.name} • {category}</span>
        </div>
      </div>

      {!analysis ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Question Panel */}
          <div className="lg:col-span-2 space-y-4">
            {/* Question Card */}
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
              <div className="p-4 border-b border-slate-700 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    currentQuestion.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                    currentQuestion.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {currentQuestion.difficulty}
                  </div>
                  <span className="text-slate-400 text-sm">
                    Question {currentQuestionIndex + 1} of {categoryQuestions.length}
                  </span>
                </div>
                {currentQuestion.frequency === 'High' && (
                  <span className="text-red-400 text-xs flex items-center">
                    <Skull className="w-3 h-3 mr-1" />
                    Frequently Asked
                  </span>
                )}
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-4">{currentQuestion.title}</h2>
                <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
                  <pre className="text-slate-300 text-sm whitespace-pre-wrap font-sans leading-relaxed">
                    {currentQuestion.description}
                  </pre>
                </div>

                {/* Expected Topics */}
                {currentQuestion.expectedTopics && (
                  <div className="flex items-center flex-wrap gap-2 mb-4">
                    <Brain className="w-4 h-4 text-slate-500" />
                    {currentQuestion.expectedTopics.map((topic, i) => (
                      <span key={i} className="px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded text-xs">
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                {/* Hints Toggle */}
                {currentQuestion.hints && currentQuestion.hints.length > 0 && (
                  <button
                    onClick={() => setShowHints(!showHints)}
                    className="flex items-center space-x-2 text-yellow-400 text-sm hover:text-yellow-300"
                  >
                    <Lightbulb className="w-4 h-4" />
                    <span>{showHints ? 'Hide Hints' : 'Show Hints (penalty in real interview!)'}</span>
                  </button>
                )}

                {showHints && currentQuestion.hints && (
                  <div className="mt-3 p-3 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
                    <p className="text-yellow-400 text-xs mb-2">⚠️ Asking for hints = red flag in real interviews</p>
                    <ul className="space-y-1">
                      {currentQuestion.hints.map((hint, i) => (
                        <li key={i} className="text-yellow-300 text-sm">• {hint}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Answer Area */}
            {!hasStarted ? (
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-8 text-center">
                <Skull className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Ready to begin?</h3>
                <p className="text-slate-400 mb-6">
                  Timer starts when you click. You have {currentQuestion.timeLimit} minutes.
                  <br />
                  <span className="text-red-400">No pausing. No second chances. Just like the real thing.</span>
                </p>
                <button
                  onClick={startInterview}
                  className="px-8 py-3 bg-red-600 hover:bg-red-500 text-white rounded-lg font-medium transition-colors"
                >
                  Start Interview
                </button>
              </div>
            ) : (
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-4">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-slate-400 text-sm flex items-center">
                    <Code className="w-4 h-4 mr-2" />
                    Your Answer
                  </label>
                  <span className="text-slate-500 text-xs">
                    {answer.length} characters
                  </span>
                </div>
                <textarea
                  ref={textareaRef}
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Type your solution here... Think out loud as you would in a real interview. Explain your approach, trade-offs, and implementation."
                  className="w-full h-64 p-4 rounded-lg text-sm font-mono focus:ring-2 focus:ring-red-500"
                  disabled={isAnalyzing}
                />
                
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={handleNextQuestion}
                    className="flex items-center space-x-2 px-4 py-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <SkipForward className="w-4 h-4" />
                    <span>Skip Question</span>
                  </button>

                  <button
                    onClick={handleSubmit}
                    disabled={!answer.trim() || isAnalyzing}
                    className="flex items-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-500 disabled:bg-slate-700 disabled:text-slate-500 text-white rounded-lg font-medium transition-colors"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Analyzing...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit for Brutal Review</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Timer Panel */}
          <div className="space-y-4">
            {hasStarted && <Timer onTimeUp={handleTimeUp} />}
            
            {/* Interview Tips */}
            <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700">
              <h4 className="text-white font-medium mb-3 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2 text-yellow-500" />
                Interview Reminders
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Think out loud - silence is a red flag</li>
                <li>• Start with brute force, then optimize</li>
                <li>• Ask clarifying questions first</li>
                <li>• Discuss trade-offs and alternatives</li>
                <li>• Consider edge cases</li>
                <li>• Test your solution mentally</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        /* Analysis Results */
        <div className="space-y-6">
          <BrutalFeedback analysis={analysis} questionTitle={currentQuestion.title} />
          
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setAnswer('');
                setAnalysis(null);
                setHasStarted(false);
              }}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
            >
              Try Again
            </button>
            
            <button
              onClick={handleNextQuestion}
              className="flex items-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-lg font-medium transition-colors"
            >
              <span>Next Question</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Mock analysis generator (will be replaced with real AI)
function generateBrutalAnalysis(answer: string, _questionTitle: string): AnswerAnalysis {
  const length = answer.length;
  const hasCode = answer.includes('function') || answer.includes('def ') || answer.includes('class ') || answer.includes('{') || answer.includes('->');
  const hasComplexity = answer.toLowerCase().includes('o(') || answer.toLowerCase().includes('time complexity') || answer.toLowerCase().includes('space complexity');
  const hasEdgeCases = answer.toLowerCase().includes('edge case') || answer.toLowerCase().includes('null') || answer.toLowerCase().includes('empty');
  const hasTradeoffs = answer.toLowerCase().includes('trade-off') || answer.toLowerCase().includes('tradeoff') || answer.toLowerCase().includes('alternatively');
  
  let score = 30; // Base score
  
  if (length > 200) score += 10;
  if (length > 500) score += 10;
  if (hasCode) score += 15;
  if (hasComplexity) score += 15;
  if (hasEdgeCases) score += 10;
  if (hasTradeoffs) score += 10;
  
  // Cap at 85 for mock
  score = Math.min(score, 85);
  
  const verdict = score >= 70 ? 'PASS' : score >= 50 ? 'WEAK_PASS' : 'FAIL';

  const rejectionReasons = [];
  const redFlags = [];
  const missingConcepts = [];
  const communicationIssues = [];
  const improvements = [];

  if (!hasCode) {
    rejectionReasons.push("No actual code or pseudocode provided. Interviewers expect you to translate thoughts into implementation.");
    redFlags.push("Unable to code under pressure");
    improvements.push("Practice writing actual code, not just describing it");
  }

  if (!hasComplexity) {
    rejectionReasons.push("No complexity analysis. Senior engineers must always discuss time/space trade-offs.");
    missingConcepts.push("Big-O Analysis");
    improvements.push("Always state time and space complexity, even if estimating");
  }

  if (!hasEdgeCases) {
    rejectionReasons.push("Zero mention of edge cases. This suggests shallow problem analysis.");
    redFlags.push("Doesn't think defensively about code");
    missingConcepts.push("Edge Case Handling");
    improvements.push("Before coding, list at least 3 edge cases to handle");
  }

  if (!hasTradeoffs) {
    rejectionReasons.push("No discussion of alternative approaches or trade-offs. Senior engineers should explore the solution space.");
    missingConcepts.push("Solution Trade-offs");
    improvements.push("Discuss at least one alternative approach and why you chose your solution");
  }

  if (length < 200) {
    rejectionReasons.push("Answer is too brief. This suggests either lack of depth or poor communication.");
    communicationIssues.push("Insufficient explanation");
    improvements.push("Explain your thought process step by step");
  }

  // Always add some brutal feedback
  if (rejectionReasons.length === 0) {
    rejectionReasons.push(
      "While technically okay, your answer lacked the 'wow factor' that makes a STRONG HIRE.",
      "You solved it, but didn't demonstrate senior-level thinking."
    );
  }

  return {
    score,
    verdict,
    whyYoudGetRejected: rejectionReasons,
    redFlags: redFlags.length ? redFlags : ["Adequate but not impressive - you'd be a 'maybe' that becomes a 'no'"],
    whatStrongCandidateSaid: `A strong candidate would have: 1) Clarified requirements and edge cases upfront, 2) Discussed 2-3 possible approaches with trade-offs, 3) Chosen the optimal approach with clear reasoning, 4) Written clean, well-structured code, 5) Analyzed complexity, 6) Tested with examples, 7) Discussed potential improvements and extensions.`,
    missingConcepts: missingConcepts.length ? missingConcepts : ["Depth in core concepts"],
    communicationIssues: communicationIssues.length ? communicationIssues : ["Could be more structured"],
    technicalAccuracy: hasCode ? 65 : 35,
    problemSolvingApproach: hasTradeoffs ? 70 : 45,
    communicationClarity: length > 300 ? 65 : 40,
    depthOfKnowledge: hasComplexity ? 70 : 40,
    improvementAreas: improvements.length ? improvements : ["Practice more under timed conditions"],
    resourcesRecommended: [
      "Grokking the Coding Interview patterns",
      "System Design Interview book by Alex Xu",
      "LeetCode premium for company-specific questions",
      "Mock interviews on Pramp or Interviewing.io"
    ]
  };
}
