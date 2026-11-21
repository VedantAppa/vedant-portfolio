import React from 'react';
import { 
  Sparkles, 
  Users, 
  MessageSquare, 
  GraduationCap, 
  Wrench, 
  Brain, 
  Shuffle, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';
import { professionalStrengths } from '../data/portfolio';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5 text-amber-500" />,
  Users: <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  MessageSquare: <MessageSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
  Wrench: <Wrench className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
  Brain: <Brain className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
  Shuffle: <Shuffle className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />
};

export const Strengths: React.FC = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-100 dark:bg-purple-500/10 border border-purple-300 dark:border-purple-500/25 text-purple-800 dark:text-purple-300 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Professional Strengths</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Core Qualities & Work Ethic
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300">
            Professional traits that shape how I collaborate, analyze engineering tasks, and deliver practical outcomes.
          </p>
        </div>

        {/* 8 Strengths Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {professionalStrengths.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-6 glass-card-hover group relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 transition-all duration-200">
                {iconMap[item.iconName] || <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />}
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                {item.title}
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
