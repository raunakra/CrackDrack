import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Analysis() {
  const { sessionId } = useParams<{ sessionId: string }>();

  return (
    <div className="space-y-6 animate-fade-in">
      <Link
        to="/history"
        className="inline-flex items-center text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to History
      </Link>

      <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Session Analysis</h2>
        <p className="text-slate-400">
          Session ID: {sessionId}
        </p>
        <p className="text-slate-500 mt-4">
          Detailed analysis view coming in Phase 2
        </p>
      </div>
    </div>
  );
}
