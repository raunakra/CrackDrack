import { Link } from 'react-router-dom';
import { useInterviewStore } from '../stores/interviewStore';
import { getCompanyById } from '../data/questions';
import {
  Trash2,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  ChevronRight,
  Skull,
  Trophy,
} from 'lucide-react';

export default function History() {
  const { sessions, clearHistory } = useInterviewStore();

  const getVerdictStyle = (verdict?: string) => {
    switch (verdict) {
      case 'STRONG_HIRE':
      case 'HIRE':
        return { bg: 'bg-green-500/20', text: 'text-green-400', icon: Trophy };
      case 'LEAN_HIRE':
        return { bg: 'bg-yellow-500/20', text: 'text-yellow-400', icon: CheckCircle };
      case 'LEAN_NO_HIRE':
        return { bg: 'bg-orange-500/20', text: 'text-orange-400', icon: AlertCircle };
      case 'NO_HIRE':
      case 'STRONG_NO_HIRE':
        return { bg: 'bg-red-500/20', text: 'text-red-400', icon: Skull };
      default:
        return { bg: 'bg-slate-500/20', text: 'text-slate-400', icon: Clock };
    }
  };

  const formatDuration = (start: Date, end?: Date) => {
    if (!end) return 'In Progress';
    const diff = new Date(end).getTime() - new Date(start).getTime();
    const minutes = Math.floor(diff / 1000 / 60);
    return `${minutes} min`;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Interview History</h1>
          <p className="text-slate-400">Track your progress and learn from failures</p>
        </div>
        {sessions.length > 0 && (
          <button
            onClick={() => {
              if (confirm('Are you sure you want to clear all history?')) {
                clearHistory();
              }
            }}
            className="flex items-center space-x-2 px-4 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            <span>Clear History</span>
          </button>
        )}
      </div>

      {/* Sessions List */}
      {sessions.length === 0 ? (
        <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-12 text-center">
          <Skull className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No Interview Sessions Yet</h3>
          <p className="text-slate-400 mb-6">
            Start practicing to build your history and track improvements
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-lg font-medium transition-colors"
          >
            <span>Start Practicing</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {[...sessions].reverse().map((session) => {
            const company = getCompanyById(session.companyId);
            const verdictStyle = getVerdictStyle(session.verdict);
            const VerdictIcon = verdictStyle.icon;

            return (
              <Link
                key={session.id}
                to={`/analysis/${session.id}`}
                className="block bg-slate-800/50 rounded-xl border border-slate-700 hover:border-slate-600 p-4 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {company && (
                      <div className={`w-12 h-12 bg-gradient-to-r ${company.bgGradient} rounded-xl flex items-center justify-center text-2xl`}>
                        {company.logo}
                      </div>
                    )}
                    <div>
                      <h3 className="text-white font-medium">
                        {company?.name} - {session.categoryId}
                      </h3>
                      <div className="flex items-center space-x-3 text-sm text-slate-400 mt-1">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(session.startedAt).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {formatDuration(session.startedAt, session.completedAt)}
                        </span>
                        <span>{session.questions.length} questions</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    {session.verdict && (
                      <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-full ${verdictStyle.bg}`}>
                        <VerdictIcon className={`w-4 h-4 ${verdictStyle.text}`} />
                        <span className={`text-sm font-medium ${verdictStyle.text}`}>
                          {session.verdict.replace(/_/g, ' ')}
                        </span>
                      </div>
                    )}
                    {session.overallScore !== undefined && (
                      <div className="text-right">
                        <div className={`text-2xl font-bold font-mono ${
                          session.overallScore >= 70 ? 'text-green-400' :
                          session.overallScore >= 50 ? 'text-yellow-400' :
                          'text-red-400'
                        }`}>
                          {session.overallScore}
                        </div>
                        <div className="text-xs text-slate-500">score</div>
                      </div>
                    )}
                    <ChevronRight className="w-5 h-5 text-slate-500" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* Stats Summary */}
      {sessions.length > 0 && (
        <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
          <h3 className="text-white font-semibold mb-4">Quick Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-slate-900/50 rounded-lg">
              <div className="text-3xl font-bold text-white">{sessions.length}</div>
              <div className="text-sm text-slate-400">Total Sessions</div>
            </div>
            <div className="text-center p-4 bg-slate-900/50 rounded-lg">
              <div className="text-3xl font-bold text-green-400">
                {sessions.filter(s => ['STRONG_HIRE', 'HIRE', 'LEAN_HIRE'].includes(s.verdict || '')).length}
              </div>
              <div className="text-sm text-slate-400">Passes</div>
            </div>
            <div className="text-center p-4 bg-slate-900/50 rounded-lg">
              <div className="text-3xl font-bold text-red-400">
                {sessions.filter(s => ['NO_HIRE', 'STRONG_NO_HIRE', 'LEAN_NO_HIRE'].includes(s.verdict || '')).length}
              </div>
              <div className="text-sm text-slate-400">Rejections</div>
            </div>
            <div className="text-center p-4 bg-slate-900/50 rounded-lg">
              <div className="text-3xl font-bold text-indigo-400">
                {sessions.reduce((sum, s) => sum + s.questions.length, 0)}
              </div>
              <div className="text-sm text-slate-400">Questions Attempted</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
