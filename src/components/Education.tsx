import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle
} from 'lucide-react';
import { educationTimeline } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-100 dark:bg-purple-500/10 border border-purple-300 dark:border-purple-500/25 text-purple-800 dark:text-purple-300 mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education Timeline
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300">
            Current B.Tech engineering coursework and academic foundation.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical connecting line */}
          <div className="absolute top-4 bottom-4 left-4 md:left-1/2 -ml-px w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-slate-400 dark:to-slate-700" />

          <div className="space-y-12">
            {educationTimeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Node Point */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center border-4 ${
                        item.isCurrent
                          ? 'bg-purple-600 border-white dark:border-[#0B0D12] text-white shadow-lg shadow-purple-500/50'
                          : 'bg-slate-200 dark:bg-slate-800 border-white dark:border-[#0B0D12] text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {item.isCurrent ? (
                        <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                      ) : (
                        <CheckCircle className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                      )}
                    </div>
                  </div>

                  {/* Spacer for mobile indent */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div
                      className={`glass-card rounded-3xl p-6 sm:p-8 border glass-card-hover relative ${
                        item.isCurrent
                          ? 'border-purple-300 dark:border-purple-500/40 shadow-xl shadow-purple-500/5'
                          : 'border-slate-200 dark:border-white/10'
                      }`}
                    >
                      {/* Badge header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span
                          className={`text-xs px-3 py-1 rounded-full font-bold ${
                            item.isCurrent
                              ? 'bg-purple-100 dark:bg-purple-500/20 text-purple-800 dark:text-purple-300 border border-purple-300 dark:border-purple-500/30'
                              : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10'
                          }`}
                        >
                          {item.isCurrent ? 'Current Degree' : 'Completed'}
                        </span>
                        
                        <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white">
                        {item.degree}
                      </h3>

                      {/* Institution & Location */}
                      <div className="mt-2 space-y-1 text-xs sm:text-sm">
                        <p className="font-semibold text-purple-700 dark:text-purple-400">
                          {item.institution}
                        </p>
                        {item.location && (
                          <p className="text-slate-600 dark:text-slate-400 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-500" />
                            <span>{item.location}</span>
                          </p>
                        )}
                        <p className="font-mono text-xs text-emerald-700 dark:text-emerald-400 font-bold pt-1">
                          Status: {item.status}
                        </p>
                      </div>

                      {/* Details / Bullets */}
                      {item.details && (
                        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 space-y-2">
                          {item.details.map((detail, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                            >
                              <span className="text-purple-600 dark:text-purple-400 font-bold mt-0.5">•</span>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Placeholder note if applicable */}
                      {item.isPlaceholder && (
                        <div className="mt-3 pt-2 text-[11px] text-slate-500 italic">
                          * Unverified placeholder entry. Official marks/school details can be populated in <code className="text-purple-600 dark:text-purple-300">src/data/portfolio.ts</code>.
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
