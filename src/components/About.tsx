import React from 'react';
import { 
  Sparkles, 
  Lightbulb, 
  CheckCircle, 
  BrainCircuit
} from 'lucide-react';
import { 
  introduction, 
  whatMakesMeDifferent, 
  whatIEnjoyDoing 
} from '../data/portfolio';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-100 dark:bg-purple-500/10 border border-purple-300 dark:border-purple-500/25 text-purple-800 dark:text-purple-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>About My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering with Purpose & Curiosity
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300">
            A closer look at my mindset, academic drive, and what fuels my passion for computer engineering and systems development.
          </p>
        </div>

        {/* Part 1: Engaging Professional Introduction */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left badge & summary */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/10 pb-6 lg:pb-0 lg:pr-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-purple-700 dark:text-purple-400 font-mono font-semibold">
                  Profile Overview
                </span>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mt-2">
                  Vedant Sanjay Ghodeswar
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-400 font-semibold mt-1">
                  B.Tech Computer Engineering Student
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Dr. D. Y. Patil COEI, Varale, Pune
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                  <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400" />
                  <span>B.Tech Second Year (Semester 2)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <span>Degree Target: 2029</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                  <span>Smart India Hackathon 2026 Participant</span>
                </div>
              </div>
            </div>

            {/* Right: Detailed Story Paragraphs */}
            <div className="lg:col-span-8 space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {introduction.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 0 ? "text-base sm:text-lg font-semibold text-slate-900 dark:text-white" : ""}>
                  {p}
                </p>
              ))}
            </div>

          </div>
        </div>

        {/* Part 2: "What Makes Me Different" - Creative Split Layout */}
        <div className="mb-20">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-purple-300 dark:border-purple-500/20 relative overflow-hidden shadow-lg">
            
            {/* Subtle corner glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Quote & Deep Mindset */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-100 dark:bg-purple-500/15 border border-purple-300 dark:border-purple-500/30 text-purple-800 dark:text-purple-300 text-xs font-semibold">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span>DISTINCT MINDSET</span>
                </div>

                <blockquote className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white leading-snug">
                  "{whatMakesMeDifferent.quote}"
                </blockquote>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {whatMakesMeDifferent.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Right Column: Highlighted Keywords Grid */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {whatMakesMeDifferent.keywords.map((kw, i) => (
                    <div 
                      key={i} 
                      className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-purple-500 hover:bg-purple-50/50 dark:hover:bg-white/10 transition-all duration-200 group shadow-sm"
                    >
                      <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 flex items-center justify-center font-bold text-sm mb-3 group-hover:scale-110 transition-transform">
                        0{i + 1}
                      </div>
                      <h4 className="font-display font-bold text-base text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                        {kw.label}
                      </h4>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {kw.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Part 3: "What I Enjoy Doing" */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-400 font-mono">
                <BrainCircuit className="w-3.5 h-3.5" />
                <span>Interests & Focus Areas</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mt-1">
                What I Enjoy Doing
              </h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Tasks and engineering domains that challenge my thinking and encourage continuous practical improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatIEnjoyDoing.map((item) => (
              <div
                key={item.id}
                className="glass-card rounded-2xl p-6 glass-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-purple-100 dark:bg-purple-500/10 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20 font-semibold">
                      {item.category}
                    </span>
                    <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400/80" />
                  </div>
                  <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5 flex items-center gap-2 text-xs text-purple-700 dark:text-purple-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
                  <span>Hands-on Application</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
