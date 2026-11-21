import React from 'react';
import { 
  ArrowRight, 
  Send, 
  Linkedin, 
  Github, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Terminal,
  Sparkles,
  Download,
  PhoneCall
} from 'lucide-react';
import { personalInfo } from '../data/portfolio';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Subtle Gradient Orbs & Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft Violet Orb */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/15 dark:bg-purple-600/20 rounded-full blur-3xl" />
        {/* Soft Blue Orb */}
        <div className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] bg-blue-600/15 dark:bg-blue-600/20 rounded-full blur-3xl" />
        {/* Subtle Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Top Subtitle Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-purple-100 dark:bg-purple-500/10 border border-purple-300 dark:border-purple-500/25 text-purple-800 dark:text-purple-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>HELLO, I'M VEDANT GHODESWAR</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Building Ideas Through{' '}
              <span className="text-gradient">Code & Creativity.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 font-normal leading-relaxed max-w-2xl">
              B.Tech Computer Engineering student passionate about programming, systems architecture, problem-solving and continuous practical learning.
            </p>

            {/* Location & Institution Tags */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium">
                <GraduationCap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Dr. D. Y. Patil COEI, Varale</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Talegaon Dabhade, Pune, India</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-900 dark:text-white transition-all duration-200 shadow-sm"
              >
                <Send className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm border border-purple-300 dark:border-purple-500/30 bg-purple-50 dark:bg-purple-500/10 hover:bg-purple-100 dark:hover:bg-purple-500/20 text-purple-700 dark:text-purple-300 transition-all"
                title="View and download resume"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social & WhatsApp Icons Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <span className="text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold">
                Connect:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/15 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/15 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/15 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 transition-all flex items-center gap-1.5 text-xs font-semibold"
                  aria-label="WhatsApp Contact"
                  title="Direct WhatsApp Message"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Real Photograph Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Decorative Gradient Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-purple-600 via-violet-500 to-blue-500 opacity-30 blur-xl animate-pulse-slow" />
              
              {/* Main Card Wrapper */}
              <div className="relative rounded-3xl glass-panel p-5 sm:p-7 shadow-2xl overflow-hidden">
                
                {/* Tech Terminal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span>vedant.dev/engineer</span>
                  </div>
                </div>

                {/* Profile Photograph Visual Area */}
                <div className="my-5 relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 group shadow-lg bg-slate-900">
                  <img
                    src={personalInfo.avatar}
                    alt="Vedant Sanjay Ghodeswar"
                    className="w-full h-80 sm:h-96 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay at bottom of image */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent flex flex-col justify-end p-4 text-left">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-xs font-mono font-semibold text-emerald-300">
                        Available for Internships
                      </span>
                    </div>
                    <p className="text-base font-bold text-white mt-1">
                      Vedant Sanjay Ghodeswar
                    </p>
                    <p className="text-xs text-purple-300 font-mono">
                      B.Tech Second Year • Computer Engineering
                    </p>
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                    <div className="text-[11px] text-slate-600 dark:text-slate-400">Current Academic Stage</div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                      B.Tech Second Year
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                    <div className="text-[11px] text-slate-600 dark:text-slate-400">Core Focus</div>
                    <div className="text-xs font-bold text-purple-700 dark:text-purple-400 mt-0.5">
                      C, C++, DSA & AI
                    </div>
                  </div>
                </div>

                {/* Subtext */}
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                  <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    SIH 2026 Participant
                  </span>
                  <span>Grad: 2029</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
