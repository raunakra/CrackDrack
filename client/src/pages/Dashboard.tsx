import { companies } from '../data/questions';
import CompanyCard from '../components/CompanyCard';
import { useInterviewStore } from '../stores/interviewStore';
import { 
  Target, 
  TrendingUp, 
  Clock, 
  Skull,
  Flame,
  Trophy
} from 'lucide-react';

export default function Dashboard() {
  const { sessions } = useInterviewStore();

  // Calculate stats
  const totalSessions = sessions.length;
  const passedSessions = sessions.filter(s => 
    s.verdict === 'STRONG_HIRE' || s.verdict === 'HIRE' || s.verdict === 'LEAN_HIRE'
  ).length;
  const passRate = totalSessions > 0 ? Math.round((passedSessions / totalSessions) * 100) : 0;
  const totalTime = sessions.reduce((acc, s) => {
    const duration = s.completedAt 
      ? (new Date(s.completedAt).getTime() - new Date(s.startedAt).getTime()) / 1000 / 60
      : 0;
    return acc + duration;
  }, 0);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-900/40 via-slate-900 to-slate-900 border border-red-500/20 p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
        <div className="relative">
          <div className="flex items-center space-x-2 text-red-400 mb-4">
            <Skull className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Brutal Mode Active</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Ready to Get <span className="text-red-500">Destroyed</span>?
          </h1>
          <p className="text-slate-400 max-w-2xl">
            No sugar-coating. No participation trophies. Just the cold, hard truth about why you'd get 
            rejected at Google, Amazon, Salesforce, and Uber. Let's find out if you're actually ready.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-500/20 rounded-lg">
              <Target className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <p className="text-slate-500 text-xs">Total Sessions</p>
              <p className="text-white text-xl font-bold">{totalSessions}</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <Trophy className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-slate-500 text-xs">Pass Rate</p>
              <p className="text-white text-xl font-bold">{passRate}%</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-500/20 rounded-lg">
              <Flame className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <p className="text-slate-500 text-xs">Rejections</p>
              <p className="text-white text-xl font-bold">{totalSessions - passedSessions}</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Clock className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-slate-500 text-xs">Time Practiced</p>
              <p className="text-white text-xl font-bold">{Math.round(totalTime)}m</p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Selection */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Choose Your Torture</h2>
            <p className="text-slate-400 text-sm">Select a company to start practicing</p>
          </div>
          <div className="text-slate-500 text-sm flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" />
            100+ questions across all companies
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>

      {/* Quick Tips */}
      <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
        <h3 className="text-white font-semibold mb-4 flex items-center">
          <Target className="w-5 h-5 mr-2 text-red-500" />
          What Gets You Rejected (Real Talk)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-slate-900/50 rounded-lg">
            <div className="text-red-400 font-medium mb-1">Google L4</div>
            <p className="text-slate-500 text-xs">Not thinking out loud, jumping to code without analyzing, missing edge cases</p>
          </div>
          <div className="p-4 bg-slate-900/50 rounded-lg">
            <div className="text-orange-400 font-medium mb-1">Amazon SDE3</div>
            <p className="text-slate-500 text-xs">Weak LP stories, not using STAR format, no metrics/data in answers</p>
          </div>
          <div className="p-4 bg-slate-900/50 rounded-lg">
            <div className="text-cyan-400 font-medium mb-1">Salesforce SMTS</div>
            <p className="text-slate-500 text-xs">Ignoring governor limits, not thinking multi-tenant, poor bulk patterns</p>
          </div>
          <div className="p-4 bg-slate-900/50 rounded-lg">
            <div className="text-slate-400 font-medium mb-1">Uber SSE</div>
            <p className="text-slate-500 text-xs">Not considering scale, ignoring real-time constraints, weak system design</p>
          </div>
        </div>
      </div>
    </div>
  );
}
