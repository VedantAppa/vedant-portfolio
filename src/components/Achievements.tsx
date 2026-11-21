import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  FileCheck2, 
  Trophy, 
  FileText,
  CheckCircle2
} from 'lucide-react';
import { certifications, achievements } from '../data/portfolio';

export const Achievements: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'certifications' | 'achievements'>('certifications');

  return (
    <section id="credentials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-100 dark:bg-purple-500/10 border border-purple-300 dark:border-purple-500/25 text-purple-800 dark:text-purple-300 mb-4">
            <Award className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Honors & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Verified Certifications & Achievements
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300">
            Official industry certifications, national hackathons, and collegiate project presentations.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'certifications'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-slate-700 dark:text-slate-400 hover:text-purple-700 dark:hover:text-white'
              }`}
            >
              <FileCheck2 className="w-4 h-4" />
              <span>Certifications ({certifications.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'achievements'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-slate-700 dark:text-slate-400 hover:text-purple-700 dark:hover:text-white'
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>Achievements ({achievements.length})</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Certifications */}
        {activeTab === 'certifications' && (
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="glass-card rounded-2xl p-6 glass-card-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/20">
                        {cert.grade || 'Verified Credential'}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        {cert.date}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-purple-700 dark:text-purple-400 font-semibold mt-1">
                      {cert.issuer}
                    </p>

                    {cert.credentialId && (
                      <div className="mt-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        ID: <span className="text-slate-700 dark:text-slate-300 font-medium">{cert.credentialId}</span>
                      </div>
                    )}

                    {cert.score && (
                      <div className="mt-1 text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                        {cert.score}
                      </div>
                    )}

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Verified Document</span>
                    </span>
                    {cert.pdfUrl && (
                      <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-500/20 transition-all border border-purple-200 dark:border-purple-500/20"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>View PDF</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Achievements */}
        {activeTab === 'achievements' && (
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((item) => (
                <div
                  key={item.id}
                  className="glass-card rounded-2xl p-6 glass-card-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-500/10 text-blue-800 dark:text-blue-400 border border-blue-300 dark:border-blue-500/20">
                        Achievement
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-blue-700 dark:text-blue-400 font-semibold mt-1">
                      {item.organization}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      Official Record
                    </span>
                    {item.pdfUrl && (
                      <a
                        href={item.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-all border border-blue-200 dark:border-blue-500/20"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>View Document</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
