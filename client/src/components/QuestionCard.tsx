import { Question } from '../types';
import { Clock, Flame, TrendingUp, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface QuestionCardProps {
  question: Question;
  index: number;
  onStart?: () => void;
  showFull?: boolean;
}

const difficultyColors = {
  Easy: 'bg-green-500/20 text-green-400 border-green-500/30',
  Medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Hard: 'bg-red-500/20 text-red-400 border-red-500/30',
};

const frequencyColors = {
  High: 'text-red-400',
  Medium: 'text-yellow-400',
  Low: 'text-slate-400',
};

export default function QuestionCard({ question, index, onStart, showFull = false }: QuestionCardProps) {
  const [expanded, setExpanded] = useState(showFull);

  return (
    <div className="bg-slate-800/50 rounded-xl border border-slate-700 hover:border-slate-600 transition-all overflow-hidden">
      {/* Header */}
      <div
        className="p-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 font-mono text-sm">
              {index + 1}
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium mb-2">{question.title}</h3>
              <div className="flex items-center flex-wrap gap-2">
                {/* Difficulty */}
                <span className={`px-2 py-0.5 rounded-full text-xs border ${difficultyColors[question.difficulty]}`}>
                  {question.difficulty}
                </span>
                
                {/* Time */}
                <span className="flex items-center text-xs text-slate-400">
                  <Clock className="w-3 h-3 mr-1" />
                  {question.timeLimit}min
                </span>

                {/* Frequency */}
                {question.frequency && (
                  <span className={`flex items-center text-xs ${frequencyColors[question.frequency]}`}>
                    <Flame className="w-3 h-3 mr-1" />
                    {question.frequency} frequency
                  </span>
                )}

                {/* Year */}
                {question.yearAsked && (
                  <span className="text-xs text-slate-500">
                    Asked {question.yearAsked}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {onStart && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onStart();
                }}
                className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Start
              </button>
            )}
            {expanded ? (
              <ChevronUp className="w-5 h-5 text-slate-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-500" />
            )}
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div className="px-4 pb-4 border-t border-slate-700">
          <div className="pt-4">
            {/* Description */}
            <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
              <pre className="text-slate-300 text-sm whitespace-pre-wrap font-sans leading-relaxed">
                {question.description}
              </pre>
            </div>

            {/* Expected Topics */}
            {question.expectedTopics && question.expectedTopics.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs uppercase text-slate-500 font-semibold mb-2 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Expected Topics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {question.expectedTopics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Hints */}
            {question.hints && question.hints.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs uppercase text-slate-500 font-semibold mb-2 flex items-center">
                  <HelpCircle className="w-3 h-3 mr-1" />
                  Hints (Reveal only if stuck!)
                </h4>
                <div className="space-y-1">
                  {question.hints.map((hint, i) => (
                    <details key={i} className="group">
                      <summary className="cursor-pointer text-sm text-slate-400 hover:text-slate-300">
                        Hint {i + 1}
                      </summary>
                      <p className="mt-1 text-sm text-slate-500 pl-4">{hint}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* Follow-ups */}
            {question.followUps && question.followUps.length > 0 && (
              <div>
                <h4 className="text-xs uppercase text-slate-500 font-semibold mb-2">
                  Follow-up Questions
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  {question.followUps.map((followUp, i) => (
                    <li key={i} className="text-sm text-slate-400">{followUp}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
