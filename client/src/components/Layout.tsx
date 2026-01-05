import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, History, Flame, Target, Skull } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Dashboard' },
    { path: '/history', icon: History, label: 'History' },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/20 group-hover:shadow-red-500/40 transition-shadow">
                <Skull className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white tracking-tight">
                  Crack<span className="text-red-500">Drack</span>
                </h1>
                <p className="text-[10px] text-slate-500 -mt-1 tracking-wider uppercase">
                  Brutal Interview Prep
                </p>
              </div>
            </Link>

            {/* Nav */}
            <nav className="flex items-center space-x-1">
              {navItems.map(({ path, icon: Icon, label }) => {
                const isActive = location.pathname === path;
                return (
                  <Link
                    key={path}
                    to={path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                      isActive
                        ? 'bg-slate-800 text-white'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Motivational Quote */}
            <div className="hidden lg:flex items-center space-x-2 text-slate-500">
              <Flame className="w-4 h-4 text-orange-500" />
              <span className="text-xs italic">"Rejection builds character"</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-slate-500 text-sm">
            <div className="flex items-center space-x-2">
              <Target className="w-4 h-4" />
              <span>Target: Google L4 • Amazon SDE3 • Salesforce SMTS • Uber SSE</span>
            </div>
            <div>
              Built for those who want the <span className="text-red-500 font-semibold">brutal truth</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
