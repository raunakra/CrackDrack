import { Company } from '../../types';

export const companies: Company[] = [
  {
    id: 'google',
    name: 'Google',
    role: 'Software Engineer',
    level: 'L4 (Senior)',
    logo: '🔵',
    color: '#4285F4',
    bgGradient: 'from-blue-600 to-blue-800',
    description: 'System design at scale, algorithmic thinking, and Googleyness',
    categories: [
      { id: 'coding', name: 'Coding', type: 'coding', timeLimit: 45, questionCount: 70, icon: '💻' },
      { id: 'system-design', name: 'System Design', type: 'system-design', timeLimit: 60, questionCount: 10, icon: '🏗️' },
      { id: 'behavioral', name: 'Googleyness & Leadership', type: 'behavioral', timeLimit: 30, questionCount: 12, icon: '🎯' },
      { id: 'phone-screen', name: 'Phone Screen', type: 'coding', timeLimit: 45, questionCount: 8, icon: '📱' },
    ]
  },
  {
    id: 'amazon',
    name: 'Amazon',
    role: 'Software Dev Engineer',
    level: 'SDE3 (Senior)',
    logo: '🟠',
    color: '#FF9900',
    bgGradient: 'from-orange-500 to-orange-700',
    description: 'Leadership Principles obsession, customer focus, system design',
    categories: [
      { id: 'coding', name: 'Coding', type: 'coding', timeLimit: 45, questionCount: 20, icon: '💻' },
      { id: 'system-design', name: 'System Design', type: 'system-design', timeLimit: 60, questionCount: 10, icon: '🏗️' },
      { id: 'leadership-principles', name: 'Leadership Principles', type: 'behavioral', timeLimit: 45, questionCount: 16, icon: '⭐' },
      { id: 'bar-raiser', name: 'Bar Raiser', type: 'behavioral', timeLimit: 45, questionCount: 8, icon: '📊' },
    ]
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    role: 'Member of Technical Staff',
    level: 'SMTS (Senior)',
    logo: '☁️',
    color: '#00A1E0',
    bgGradient: 'from-cyan-500 to-blue-600',
    description: 'Multi-tenant architecture, platform thinking, Apex expertise',
    categories: [
      { id: 'coding', name: 'Coding & Apex', type: 'coding', timeLimit: 45, questionCount: 12, icon: '💻' },
      { id: 'system-design', name: 'System Design', type: 'system-design', timeLimit: 60, questionCount: 8, icon: '🏗️' },
      { id: 'platform', name: 'Platform Knowledge', type: 'technical', timeLimit: 30, questionCount: 10, icon: '☁️' },
      { id: 'behavioral', name: 'Behavioral', type: 'behavioral', timeLimit: 30, questionCount: 8, icon: '🤝' },
    ]
  },
  {
    id: 'uber',
    name: 'Uber',
    role: 'Software Engineer',
    level: 'SSE (Senior)',
    logo: '⬛',
    color: '#000000',
    bgGradient: 'from-gray-800 to-black',
    description: 'Real-time systems, distributed computing, geo-spatial problems',
    categories: [
      { id: 'coding', name: 'Coding', type: 'coding', timeLimit: 45, questionCount: 15, icon: '💻' },
      { id: 'system-design', name: 'System Design', type: 'system-design', timeLimit: 60, questionCount: 10, icon: '🏗️' },
      { id: 'real-time', name: 'Real-time Systems', type: 'technical', timeLimit: 45, questionCount: 8, icon: '⚡' },
      { id: 'behavioral', name: 'Behavioral', type: 'behavioral', timeLimit: 30, questionCount: 8, icon: '🎯' },
    ]
  }
];
