import React, { useState } from 'react';
import { 
  Code2, 
  CheckCircle2, 
  Clock, 
  Info,
  Award
} from 'lucide-react';
import { technicalSkills } from '../data/portfolio';

export const Skills: React.FC = () => {
  const [selectedRoadmapTab, setSelectedRoadmapTab] = useState<number>(0);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-100 dark:bg-purple-500/10 border border-purple-300 dark:border-purple-500/25 text-purple-800 dark:text-purple-300 mb-4">
            <Code2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Learning Trajectory
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300">
            A transparent and realistic view of my current technical competencies, certifications, and upcoming curriculum milestones.
          </p>
        </div>

        {/* Honest Transparency Notice Banner */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-500/20 flex items-start gap-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <Info className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-semibold text-slate-900 dark:text-white">
              Proficiency & Verification Note:
            </span>{' '}
            As a second-year B.Tech engineering student, my verified skills are backed by certified coursework (including C/C++ Grade A+ and NPTEL Python for Data Science). Skills are honestly categorized into clear stages (Beginner & Intermediate), while upcoming tools are marked as future roadmap milestones.
          </div>
        </div>

        {/* Part 1: Verified Active Skills */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
              Verified Technical Skills
            </h3>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/15 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30 font-medium">
              Certified & Active
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalSkills.verified.map((skill) => {
              const isIntermediate = skill.level === 'Intermediate';
              return (
                <div
                  key={skill.name}
                  className="glass-card rounded-2xl p-6 glass-card-hover relative"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                          {skill.name}
                        </h4>
                        {skill.badge && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-500/20 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30">
                            <Award className="w-3 h-3" />
                            {skill.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-purple-700 dark:text-purple-400 font-mono">
                        {skill.category === 'languages' ? 'Programming Language' : 'Core Computer Science'}
                      </span>
                    </div>

                    <span
                      className={`text-xs px-3 py-1 rounded-full font-semibold border ${
                        isIntermediate
                          ? 'bg-blue-100 dark:bg-blue-500/15 text-blue-800 dark:text-blue-400 border-blue-300 dark:border-blue-500/30'
                          : 'bg-amber-100 dark:bg-amber-500/15 text-amber-800 dark:text-amber-400 border-amber-300 dark:border-amber-500/30'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Visual Stage Indicator (honest 3-stage bar: Foundations -> Applied -> Advanced) */}
                  <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/5">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-1.5 font-mono">
                      <span>Foundations</span>
                      <span className={isIntermediate ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-amber-600 dark:text-amber-400 font-semibold'}>
                        {isIntermediate ? 'Applied Competency' : 'Foundational Mastery'}
                      </span>
                      <span>Advanced</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden flex gap-1 p-0.5">
                      {/* Step 1: Foundations */}
                      <div className="h-full rounded-full flex-1 bg-purple-600" />
                      {/* Step 2: Applied / Intermediate */}
                      <div
                        className={`h-full rounded-full flex-1 ${
                          isIntermediate ? 'bg-blue-600' : 'bg-transparent'
                        }`}
                      />
                      {/* Step 3: Advanced */}
                      <div className="h-full rounded-full flex-1 bg-transparent" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Future Skills & Learning Roadmap */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                Curriculum Roadmap & Upcoming Domains
              </h3>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-800 dark:text-purple-400 border border-purple-300 dark:border-purple-500/20 font-mono">
              B.Tech Learning Trajectory
            </span>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {technicalSkills.futureRoadmap.map((category, idx) => (
              <button
                key={category.categoryName}
                onClick={() => setSelectedRoadmapTab(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedRoadmapTab === idx
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5'
                }`}
              >
                {category.categoryName}
              </button>
            ))}
          </div>

          {/* Active Category Content */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8">
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
              {technicalSkills.futureRoadmap[selectedRoadmapTab].description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {technicalSkills.futureRoadmap[selectedRoadmapTab].items.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-purple-400 dark:hover:border-purple-500/30 transition-colors shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display font-semibold text-sm text-slate-900 dark:text-white">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-500/10 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20 font-medium">
                      {item.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
