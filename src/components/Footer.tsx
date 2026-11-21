import React from 'react';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  Code2,
  PhoneCall
} from 'lucide-react';
import { personalInfo, navItems } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 py-12 bg-slate-50 dark:bg-[#0B0D12]/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand / Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-violet-500 to-blue-500 flex items-center justify-center font-display font-bold text-white shadow-md shadow-purple-500/20">
              <span>VG</span>
            </div>
            <div className="text-left">
              <p className="font-display font-bold text-sm text-slate-900 dark:text-white">
                Vedant Sanjay Ghodeswar
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                B.Tech Computer Engineering • Pune, India
              </p>
            </div>
          </div>

          {/* Center: Quick navigation links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Social, WhatsApp & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 transition-colors"
              title="Chat on WhatsApp"
              aria-label="WhatsApp"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-700 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-xl bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-700 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-purple-600/15 hover:bg-purple-600/25 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-500/30 transition-all hover:-translate-y-0.5 ml-2"
              title="Scroll to Top"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} Vedant Sanjay Ghodeswar. B.Tech Computer Engineering.
          </p>
          <p className="flex items-center gap-1">
            <span>Built with React, TypeScript & Tailwind CSS</span>
            <Code2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
          </p>
        </div>

      </div>
    </footer>
  );
};
