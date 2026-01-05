import { AnswerAnalysis } from '../types';
import {
  XCircle,
  AlertTriangle,
  Target,
  Brain,
  MessageSquare,
  TrendingUp,
  BookOpen,
  ThumbsDown,
  Skull,
  CheckCircle,
} from 'lucide-react';

interface BrutalFeedbackProps {
  analysis: AnswerAnalysis;
  questionTitle: string;
}

export default function BrutalFeedback({ analysis, questionTitle }: BrutalFeedbackProps) {
  const getVerdictStyle = () => {
    switch (analysis.verdict) {
      case 'PASS':
        return {
          bg: 'bg-green-900/30',
          border: 'border-green-500/50',
          text: 'text-green-400',
          icon: CheckCircle,
          message: 'PASS - But barely...',
        };
      case 'WEAK_PASS':
        return {
          bg: 'bg-yellow-900/30',
          border: 'border-yellow-500/50',
          text: 'text-yellow-400',
          icon: AlertTriangle,
          message: 'WEAK PASS - They\'d be hesitant',
        };
      case 'FAIL':
      default:
        return {
          bg: 'bg-red-900/30',
          border: 'border-red-500/50',
          text: 'text-red-400',
          icon: Skull,
          message: 'NO HIRE - Here\'s why you failed',
        };
    }
  };

  const verdict = getVerdictStyle();
  const VerdictIcon = verdict.icon;

  const ScoreBar = ({ label, score, icon: Icon }: { label: string; score: number; icon: any }) => (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2 text-slate-400">
          <Icon className="w-4 h-4" />
          <span>{label}</span>
        </div>
        <span className={`font-mono ${score >= 70 ? 'text-green-400' : score >= 50 ? 'text-yellow-400' : 'text-red-400'}`}>
          {score}%
        </span>
      </div>
      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all ${
            score >= 70 ? 'bg-green-500' : score >= 50 ? 'bg-yellow-500' : 'bg-red-500'
          }`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Verdict Header */}
      <div className={`${verdict.bg} ${verdict.border} border rounded-xl p-6`}>
        <div className="flex items-center space-x-4">
          <VerdictIcon className={`w-12 h-12 ${verdict.text}`} />
          <div>
            <h3 className={`text-2xl font-bold ${verdict.text}`}>{verdict.message}</h3>
            <p className="text-slate-400">Question: {questionTitle}</p>
          </div>
          <div className="ml-auto text-right">
            <div className={`text-4xl font-bold font-mono ${verdict.text}`}>{analysis.score}</div>
            <div className="text-slate-500 text-sm">out of 100</div>
          </div>
        </div>
      </div>

      {/* Scores Breakdown */}
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h4 className="text-white font-semibold mb-4">Performance Breakdown</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ScoreBar label="Technical Accuracy" score={analysis.technicalAccuracy} icon={Target} />
          <ScoreBar label="Problem Solving" score={analysis.problemSolvingApproach} icon={Brain} />
          <ScoreBar label="Communication" score={analysis.communicationClarity} icon={MessageSquare} />
          <ScoreBar label="Depth of Knowledge" score={analysis.depthOfKnowledge} icon={BookOpen} />
        </div>
      </div>

      {/* Why You'd Get Rejected - THE BRUTAL PART */}
      {analysis.whyYoudGetRejected.length > 0 && (
        <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30">
          <h4 className="text-red-400 font-semibold mb-4 flex items-center">
            <Skull className="w-5 h-5 mr-2" />
            Why You'd Get REJECTED
          </h4>
          <ul className="space-y-3">
            {analysis.whyYoudGetRejected.map((reason, i) => (
              <li key={i} className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-red-300">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Red Flags */}
      {analysis.redFlags.length > 0 && (
        <div className="bg-orange-900/20 rounded-xl p-6 border border-orange-500/30">
          <h4 className="text-orange-400 font-semibold mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Red Flags Interviewers Noticed
          </h4>
          <ul className="space-y-2">
            {analysis.redFlags.map((flag, i) => (
              <li key={i} className="flex items-start space-x-3">
                <ThumbsDown className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1" />
                <span className="text-orange-300 text-sm">{flag}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* What a Strong Candidate Would Say */}
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h4 className="text-slate-300 font-semibold mb-4 flex items-center">
          <Target className="w-5 h-5 mr-2 text-green-500" />
          What a STRONG HIRE Candidate Would Say
        </h4>
        <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/20">
          <p className="text-green-300 text-sm leading-relaxed">{analysis.whatStrongCandidateSaid}</p>
        </div>
      </div>

      {/* Missing Concepts */}
      {analysis.missingConcepts.length > 0 && (
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h4 className="text-slate-300 font-semibold mb-4 flex items-center">
            <Brain className="w-5 h-5 mr-2 text-purple-500" />
            Concepts You Missed
          </h4>
          <div className="flex flex-wrap gap-2">
            {analysis.missingConcepts.map((concept, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Communication Issues */}
      {analysis.communicationIssues.length > 0 && (
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h4 className="text-slate-300 font-semibold mb-4 flex items-center">
            <MessageSquare className="w-5 h-5 mr-2 text-blue-500" />
            Communication Issues
          </h4>
          <ul className="space-y-2">
            {analysis.communicationIssues.map((issue, i) => (
              <li key={i} className="text-slate-400 text-sm flex items-start space-x-2">
                <span className="text-blue-500">•</span>
                <span>{issue}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Improvement Areas */}
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h4 className="text-slate-300 font-semibold mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-indigo-500" />
          How to Improve (Specific Actions)
        </h4>
        <ol className="space-y-3">
          {analysis.improvementAreas.map((area, i) => (
            <li key={i} className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                {i + 1}
              </span>
              <span className="text-slate-300 text-sm">{area}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Resources */}
      {analysis.resourcesRecommended.length > 0 && (
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h4 className="text-slate-300 font-semibold mb-4 flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-emerald-500" />
            Resources to Study
          </h4>
          <ul className="space-y-2">
            {analysis.resourcesRecommended.map((resource, i) => (
              <li key={i} className="text-emerald-400 text-sm">→ {resource}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
