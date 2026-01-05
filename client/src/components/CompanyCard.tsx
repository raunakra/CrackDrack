import { Link } from 'react-router-dom';
import { Company } from '../types';
import { ChevronRight, Code, Layout, Users, Zap, Star, Cloud, Building2 } from 'lucide-react';

interface CompanyCardProps {
  company: Company;
}

const categoryIcons: Record<string, any> = {
  'coding': Code,
  'system-design': Layout,
  'behavioral': Users,
  'leadership-principles': Star,
  'bar-raiser': Zap,
  'platform': Cloud,
  'real-time': Zap,
  'phone-screen': Building2,
  'googleyness': Star,
};

export default function CompanyCard({ company }: CompanyCardProps) {
  const totalQuestions = company.categories.reduce((sum, cat) => sum + cat.questionCount, 0);

  return (
    <Link
      to={`/company/${company.id}`}
      className="company-card block bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-slate-600 overflow-hidden group"
    >
      {/* Header with gradient */}
      <div className={`bg-gradient-to-r ${company.bgGradient} p-6`}>
        <div className="flex items-start justify-between">
          <div>
            <div className="text-4xl mb-2">{company.logo}</div>
            <h3 className="text-2xl font-bold text-white">{company.name}</h3>
            <p className="text-white/80 text-sm">{company.role}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full text-xs text-white font-medium">
              {company.level}
            </span>
          </div>
          <ChevronRight className="w-6 h-6 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-slate-400 text-sm mb-4">{company.description}</p>

        {/* Categories */}
        <div className="space-y-2">
          {company.categories.map((category) => {
            const Icon = categoryIcons[category.id] || Code;
            return (
              <div
                key={category.id}
                className="flex items-center justify-between py-2 px-3 bg-slate-900/50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-4 h-4 text-slate-500" />
                  <span className="text-sm text-slate-300">{category.name}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xs text-slate-500">{category.questionCount} Qs</span>
                  <span className="text-xs text-slate-600">•</span>
                  <span className="text-xs text-slate-500">{category.timeLimit}min</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer stats */}
        <div className="mt-4 pt-4 border-t border-slate-700 flex items-center justify-between">
          <span className="text-slate-500 text-xs">{totalQuestions} total questions</span>
          <span className="text-xs text-slate-400 group-hover:text-white transition-colors flex items-center">
            Start Practice <ChevronRight className="w-3 h-3 ml-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
