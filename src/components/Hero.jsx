import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  TrendingUp, 
  ShieldCheck, 
  Users,
  Sparkles
} from 'lucide-react';
import { LinkedinIcon, GithubIcon, YoutubeIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
    }, 4200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Ambient Glows & Mesh Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/15 to-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Left Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Availability & MSc Credentials Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{personalInfo.availability}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-800/80 text-cyan-300 border border-white/10 backdrop-blur-md">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                <span>MSc Aston University (UK)</span>
              </span>
            </div>

            {/* Name & Title */}
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight"
              >
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                  {personalInfo.name}
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl font-semibold text-slate-300 mt-3 flex items-center gap-2"
              >
                <Briefcase className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>Business Analyst &bull; Project Coordinator &bull; Project Analyst</span>
              </motion.p>
            </div>

            {/* Rotating Animated Tagline */}
            <div className="h-20 sm:h-16 flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={taglineIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-base sm:text-lg text-slate-300 font-medium pl-3 border-l-2 border-cyan-400"
                >
                  {personalInfo.taglines[taglineIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Concise Bio */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              Over 4 years of combined experience delivering multi-stakeholder projects, engineering business requirements, and designing executive KPI dashboards across <span className="text-slate-200 font-semibold">Renewable Energy</span>, <span className="text-slate-200 font-semibold">Manufacturing</span>, and <span className="text-slate-200 font-semibold">FMCG Retail</span>.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                <span>View Portfolio & Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/80 border border-white/10 hover:border-cyan-500/40 transition-all duration-200 backdrop-blur-md hover:-translate-y-0.5 shadow-md"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Direct Quick Contact Info Links */}
            <div className="flex flex-wrap items-center gap-5 pt-4 text-xs sm:text-sm text-slate-400 border-t border-white/10">
              <span className="flex items-center gap-1.5 hover:text-slate-200 transition-colors">
                <MapPin className="w-4 h-4 text-cyan-400" />
                {personalInfo.location}
              </span>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                {personalInfo.email}
              </a>
              <a 
                href={`tel:${personalInfo.phone}`} 
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                {personalInfo.phone}
              </a>
            </div>

          </motion.div>

          {/* Right Visual Floating Showcase Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing Backdrop Plate */}
            <div className="relative p-1 rounded-3xl bg-gradient-to-b from-cyan-500/20 via-indigo-500/10 to-transparent shadow-2xl backdrop-blur-xl">
              <div className="bg-[#0b101e]/90 border border-white/10 rounded-[22px] p-6 sm:p-8 flex flex-col gap-6 shadow-inner">
                
                {/* Profile Card Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-cyan-500/30">
                      NY
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base leading-tight">Naveen Yadav</h3>
                      <p className="text-xs text-cyan-400 font-medium">Aston University Graduate &bull; UK</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-semibold text-cyan-300 bg-cyan-950/60 rounded-full border border-cyan-500/30">
                    Verified Analyst
                  </span>
                </div>

                {/* Key Pillars Highlights */}
                <div className="space-y-3.5">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-cyan-500/30 transition-all flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">Data-Driven Decision Making</h4>
                      <p className="text-[12px] text-slate-400 mt-0.5 leading-normal">
                        Power BI, Tableau & SQL dashboards deployed for operational executives & C-suite.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-indigo-500/30 transition-all flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">Client &amp; Stakeholder FPOC</h4>
                      <p className="text-[12px] text-slate-400 mt-0.5 leading-normal">
                        Single point of contact coordinating project deliverables, requirement analysis, and operational workflows.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-purple-500/30 transition-all flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">Agile & Process Automation</h4>
                      <p className="text-[12px] text-slate-400 mt-0.5 leading-normal">
                        Implemented Zoho Projects, Jira workflows, Zapier APIs, and web cash flow systems.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Core Tooling Stack Tags */}
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                    Core Tooling & Analytics
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Power BI', 'SQL', 'Tableau', 'Zoho Projects', 'Jira', 'Zapier', 'Postman API', 'Agile/Scrum'].map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-slate-300 border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Connect Tray */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs text-slate-400">
                  <span>Connect with Naveen:</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
                      aria-label="LinkedIn Profile"
                      title="LinkedIn"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
                      aria-label="GitHub Profile"
                      title="GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={personalInfo.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-pink-400 hover:bg-pink-500/10 transition-all"
                      aria-label="Instagram Profile"
                      title="Instagram"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={personalInfo.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-red-400 hover:bg-red-500/10 transition-all"
                      aria-label="YouTube Channel"
                      title="YouTube"
                    >
                      <YoutubeIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Subtle Floating Highlight Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-5 bg-[#0b1329]/95 border border-cyan-500/30 rounded-2xl p-3.5 shadow-xl shadow-cyan-900/20 backdrop-blur-md hidden sm:flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm">
                4+
              </div>
              <div>
                <div className="text-xs font-bold text-white">Years of Delivery</div>
                <div className="text-[11px] text-slate-400">BA & Project Leadership</div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
