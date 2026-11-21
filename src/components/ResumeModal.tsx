import React, { useEffect } from 'react';
import { 
  X, 
  FileText, 
  Download, 
  CheckCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { generateResumePdf } from '../utils/generateResumePdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    generateResumePdf();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-2xl rounded-3xl glass-panel bg-white dark:bg-[#0B0D12] border border-slate-200 dark:border-white/15 shadow-2xl p-6 sm:p-8 z-10 my-8 text-left">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                Official Developer Resume
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                {personalInfo.resumeFileName} (ATS-Optimized PDF)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="my-6 space-y-4 max-h-[60vh] overflow-y-auto pr-1">
          
          {/* Candidate Profile Summary */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs uppercase tracking-wider text-purple-700 dark:text-purple-400 font-mono font-bold">
                Resume Overview
              </span>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/20">
                Ready for B.Tech Internships
              </span>
            </div>

            <div className="text-sm space-y-1">
              <p className="font-bold text-base text-slate-900 dark:text-white">
                {personalInfo.fullName}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {personalInfo.role} • {personalInfo.location}
              </p>
              <p className="text-xs text-purple-700 dark:text-purple-400 font-medium">
                Phone: {personalInfo.phone} • Email: {personalInfo.email}
              </p>
            </div>

            {/* Quick Badges Included in Resume */}
            <div className="pt-2 border-t border-slate-200 dark:border-white/5 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 font-medium">
                C & C++ (Grade A+ Certified)
              </span>
              <span className="px-2.5 py-1 rounded bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 font-medium">
                Python for Data Science (NPTEL Certified)
              </span>
              <span className="px-2.5 py-1 rounded bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 font-medium">
                AI Specialist (NASSCOM Certified)
              </span>
              <span className="px-2.5 py-1 rounded bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 font-medium">
                Smart India Hackathon 2026 (CareFlow)
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-500/20 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
            <p>
              Clicking <strong>"Download Official PDF Resume"</strong> generates a clean, single-page, ATS-compliant PDF with all your verified projects, hackathons, and certifications included.
            </p>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
          >
            Close
          </button>

          <button
            onClick={handleDownload}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-600/30 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Official PDF Resume</span>
          </button>
        </div>

      </div>
    </div>
  );
};
