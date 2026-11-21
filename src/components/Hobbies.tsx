import React from 'react';
import { 
  Compass, 
  Heart, 
  TrendingUp, 
  Activity, 
  Globe2, 
  Sparkles 
} from 'lucide-react';
import { hobbies } from '../data/portfolio';

const hobbyIcons: Record<string, React.ReactNode> = {
  Trophy: <Activity className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  Compass: <Compass className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
  MapPin: <Globe2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
};

export const Hobbies: React.FC = () => {
  return (
    <section id="interests" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-100 dark:bg-purple-500/10 border border-purple-300 dark:border-purple-500/25 text-purple-800 dark:text-purple-300 mb-4">
            <Heart className="w-3.5 h-3.5 text-rose-500" />
            <span>Beyond Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Interests & Personal Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300">
            How my personal passions contribute to physical well-being, strategic thinking, and intellectual resilience.
          </p>
        </div>

        {/* 3 Hobbies Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hobbies.map((hobby) => (
            <div
              key={hobby.id}
              className="glass-card rounded-3xl p-8 glass-card-hover flex flex-col justify-between relative group"
            >
              <div>
                {/* Icon Badge */}
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {hobbyIcons[hobby.iconName] || <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
                </div>

                {/* Name */}
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {hobby.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {hobby.description}
                </p>
              </div>

              {/* Personal Growth Impact Box */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-1.5 text-xs font-bold text-purple-700 dark:text-purple-400 font-mono mb-2 uppercase tracking-wider">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Growth Impact</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {hobby.growthImpact}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
