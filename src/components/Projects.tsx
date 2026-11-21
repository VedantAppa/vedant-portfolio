import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Terminal, 
  Cpu, 
  FileText,
  Activity
} from 'lucide-react';
import { projects } from '../data/portfolio';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Systems & Algorithms', 'Software & Automation', 'Systems & Utilities'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Artwork helper for projects
  const renderThumbnail = (category: string) => {
    if (category.includes('Algorithms')) {
      return (
        <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-purple-100 via-indigo-50 to-slate-100 dark:from-purple-900/40 dark:via-indigo-950/40 dark:to-slate-900/60 flex flex-col items-center justify-center p-4 relative overflow-hidden border border-purple-200 dark:border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="font-mono text-xs font-bold text-purple-800 dark:text-purple-300">CareFlow • SIH 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-2.5 py-1 rounded-lg bg-white dark:bg-purple-500/20 border border-purple-200 dark:border-purple-500/30 text-purple-800 dark:text-purple-300 font-mono text-[11px] font-semibold">
              GPS Patient ETA
            </div>
            <span className="text-slate-400 font-mono">→</span>
            <div className="px-2.5 py-1 rounded-lg bg-white dark:bg-blue-500/20 border border-blue-200 dark:border-blue-500/30 text-blue-800 dark:text-blue-300 font-mono text-[11px] font-semibold">
              Queue AI
            </div>
          </div>
          <div className="mt-3 text-[10px] text-slate-500 font-mono font-medium">Connected Healthcare • Team Power Rangers</div>
        </div>
      );
    } else if (category.includes('Automation')) {
      return (
        <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-blue-100 via-cyan-50 to-slate-100 dark:from-blue-900/40 dark:via-cyan-950/40 dark:to-slate-900/60 flex flex-col items-center justify-center p-4 relative overflow-hidden border border-blue-200 dark:border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="font-mono text-xs font-bold text-blue-800 dark:text-blue-300">Civic Tech • DYPCOEI DTIL</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-2.5 py-1 rounded-lg bg-white dark:bg-blue-500/20 border border-blue-200 dark:border-blue-500/30 text-blue-800 dark:text-blue-300 font-mono text-[11px] font-semibold">
              Hazard Geotag
            </div>
            <span className="text-slate-400 font-mono">+</span>
            <div className="px-2.5 py-1 rounded-lg bg-white dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 font-mono text-[11px] font-semibold">
              Civic Rewards
            </div>
          </div>
          <div className="mt-3 text-[10px] text-slate-500 font-mono font-medium">Pothole Reporting & Tracking Portal</div>
        </div>
      );
    } else {
      return (
        <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-indigo-100 via-slate-50 to-purple-50 dark:from-violet-900/40 dark:via-slate-900/40 dark:to-slate-900/60 flex flex-col items-center justify-center p-4 relative overflow-hidden border border-indigo-200 dark:border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="w-5 h-5 text-indigo-600 dark:text-violet-400" />
            <span className="font-mono text-xs font-bold text-indigo-800 dark:text-violet-300">C & C++ Programming (Grade A+)</span>
          </div>
          <div className="px-3 py-1 rounded-lg bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-mono text-[11px] font-semibold">
            Memory Allocation • Pointers • OOP
          </div>
          <div className="mt-3 text-[10px] text-slate-500 font-mono font-medium">Modular Systems & Algorithmic Analysis</div>
        </div>
      );
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-100 dark:bg-purple-500/10 border border-purple-300 dark:border-purple-500/25 text-purple-800 dark:text-purple-300 mb-4">
            <FolderGit2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects & Lab Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300">
            Real hackathon prototypes, collegiate engineering systems, and certified programming implementations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === cat
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-6 glass-card-hover flex flex-col justify-between relative group"
            >
              <div>
                {/* Visual Thumbnail */}
                {renderThumbnail(project.category)}

                {/* Status Tag */}
                <div className="flex items-center justify-between mt-5 mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-800 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20 font-bold">
                    Project 0{index + 1}
                  </span>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                      project.status === 'Completed'
                        ? 'bg-emerald-100 dark:bg-emerald-500/15 text-emerald-800 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/30'
                        : 'bg-amber-100 dark:bg-amber-500/15 text-amber-800 dark:text-amber-400 border-amber-300 dark:border-amber-500/30'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                {/* Role / Contribution */}
                <div className="mt-1 text-xs font-mono text-purple-700 dark:text-purple-400 font-medium">
                  Role: {project.role}
                </div>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 hover:border-purple-400 dark:hover:border-purple-500/30 transition-all"
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  <Github className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>GitHub</span>
                </a>

                {project.pdfUrl && (
                  <a
                    href={project.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold bg-purple-600 text-white hover:bg-purple-500 shadow-md shadow-purple-600/25 transition-all"
                    title="View Document / Presentation PDF"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Doc</span>
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
