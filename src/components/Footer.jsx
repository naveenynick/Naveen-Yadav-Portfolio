import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { LinkedinIcon, GithubIcon, YoutubeIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now);
      setIstTime(formatted);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#06080f] py-14 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-20 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Monogram and title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px]">
              <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 text-sm">
                NY
              </div>
            </div>
            <div>
              <div className="font-bold text-white tracking-tight text-base">
                {personalInfo.name}
              </div>
              <div className="text-xs text-slate-400">
                Business Analyst &bull; Project Coordinator &bull; Aston University MSc
              </div>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#experience" className="hover:text-cyan-300 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#education" className="hover:text-cyan-300 transition-colors">Education</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </div>

          {/* Socials & Scroll to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
              aria-label="GitHub"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-pink-400 hover:bg-pink-500/10 transition-all"
              aria-label="Instagram"
              title="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all"
              aria-label="YouTube"
              title="YouTube"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 ml-1 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 hover:scale-105 transition-all"
              title="Scroll to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Digital Clock */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          
          {/* Digital IST Live Clock Pill (Matches Screenshot 2) */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-white/10 text-xs shadow-inner">
            <span className="text-sm">🕒</span>
            <span className="font-semibold text-slate-200">IST (India):</span>
            <span className="font-mono font-bold text-cyan-400 tracking-wider text-sm">{istTime || '00:00:00'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
