import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderKanban, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  CheckCircle, 
  Calendar, 
  MapPin, 
  X, 
  BarChart3, 
  Hammer
} from 'lucide-react';
import { flagshipProjects, businessProjects } from '../data/portfolioData';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('flagship'); // 'flagship' | 'business'
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const totalSlides = flagshipProjects.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeTab !== 'flagship') return;
      if (selectedProject) return;
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, selectedProject]);

  const activeProject = flagshipProjects[currentSlide];

  // Render Left Visual Mockup
  const renderVisual = (project) => {
    switch (project.visualType) {
      case 'news':
        return (
          <div className="rounded-2xl bg-[#080c16] border border-white/10 p-5 shadow-2xl relative overflow-hidden group">
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 font-mono text-[11px] text-slate-400 bg-black/50 px-3 py-1 rounded-md flex-1 truncate">
                https://us-news-portal.com/trending
              </span>
            </div>
            <div className="space-y-3">
              <div className="text-white font-bold text-sm tracking-wide">
                BREAKING: US Markets &amp; Tech Trends
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 w-full bg-white/15 rounded-full" />
                <div className="h-1.5 w-3/5 bg-white/15 rounded-full" />
                <div className="h-1.5 w-4/5 bg-white/15 rounded-full" />
              </div>
              <div className="mt-4 p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between">
                <div className="w-28 h-8">
                  <svg viewBox="0 0 100 30" className="w-full h-full drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">
                    <path
                      d="M0,25 Q20,10 40,20 T70,5 T100,2"
                      fill="none"
                      stroke="#00f0ff"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
                <span className="font-mono text-xs font-semibold text-cyan-400">
                  +340% Organic Traffic Growth
                </span>
              </div>
            </div>
          </div>
        );

      case 'samay':
        return (
          <div className="h-64 rounded-2xl bg-gradient-to-br from-purple-950/30 via-[#0a0d18] to-purple-900/20 border border-purple-500/20 flex flex-col items-center justify-center p-6 shadow-2xl relative overflow-hidden">
            {/* Ambient Radial Aura */}
            <div className="absolute w-40 h-40 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />
            
            {/* Glowing Vedic Clock Dial */}
            <div className="w-28 h-28 rounded-full border-2 border-purple-400/70 shadow-[0_0_25px_rgba(139,92,246,0.4)] relative flex items-center justify-center mb-4 bg-black/40">
              {/* Dial markings */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-2 bg-purple-300/50 rounded-full" />
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-2 bg-purple-300/50 rounded-full" />
              <div className="absolute left-1 top-1/2 -translate-y-1/2 w-2 h-1 bg-purple-300/50 rounded-full" />
              <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-1 bg-purple-300/50 rounded-full" />

              {/* Prahar Rotating Hand */}
              <div 
                className="prahar-hand-anim absolute bottom-1/2 left-1/2 w-0.5 h-10 bg-cyan-400 rounded-full shadow-[0_0_8px_#00f0ff]" 
                style={{ transform: 'rotate(45deg)' }}
              />

              {/* Ghati Rotating Hand */}
              <div 
                className="ghati-hand-anim absolute bottom-1/2 left-1/2 w-0.5 h-7 bg-purple-400 rounded-full shadow-[0_0_8px_#8b5cf6]" 
                style={{ transform: 'rotate(190deg)' }}
              />

              {/* Pivot Center Pin */}
              <div className="w-2.5 h-2.5 rounded-full bg-white shadow-md z-10" />
            </div>

            <div className="font-mono text-sm font-semibold text-purple-300 tracking-wider text-center">
              चतुर्थ प्रहर (4th Prahar)
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Synchronized Vedic Timekeeper
            </div>
          </div>
        );

      case 'cineaura':
        return (
          <div className="h-64 rounded-2xl bg-gradient-to-br from-blue-950/30 via-[#0a0d18] to-cyan-950/20 border border-blue-500/20 flex items-center justify-center p-6 shadow-2xl relative overflow-hidden">
            {/* Floating Glassmorphic Media Cards */}
            <div className="relative w-56 h-36">
              {/* Card 1 */}
              <div className="float-mini-1 absolute top-0 left-0 w-44 p-3.5 rounded-xl bg-slate-900/90 border border-cyan-400/40 shadow-xl backdrop-blur-md flex items-center justify-between">
                <span className="font-semibold text-white text-xs truncate mr-2">
                  Interstellar
                </span>
                <span className="font-mono font-bold text-amber-400 text-xs px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/30">
                  ★ 9.4
                </span>
              </div>

              {/* Card 2 */}
              <div className="float-mini-2 absolute bottom-0 right-0 w-44 p-3.5 rounded-xl bg-slate-900/90 border border-purple-400/40 shadow-xl backdrop-blur-md flex items-center justify-between">
                <span className="font-semibold text-white text-xs truncate mr-2">
                  Attack on Titan
                </span>
                <span className="font-mono font-bold text-amber-400 text-xs px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/30">
                  ★ 9.1
                </span>
              </div>
            </div>
          </div>
        );

      case '22scores':
        return (
          <div className="h-64 rounded-2xl bg-gradient-to-br from-emerald-950/30 via-[#0a0d18] to-cyan-950/20 border border-emerald-500/20 flex flex-col justify-between p-5 shadow-2xl relative overflow-hidden">
            {/* Ambient Green Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Header: Live Pill & League */}
            <div className="flex items-center justify-between z-10">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 live-dot-pulse inline-block" />
                <span>LIVE • 84&apos;</span>
              </div>
              <span className="font-mono text-[11px] text-slate-400">
                Premier League
              </span>
            </div>

            {/* Scoreboard Display */}
            <div className="my-auto py-2 z-10">
              <div className="flex items-center justify-around text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm font-bold text-white tracking-wider">ARS</span>
                  <span className="text-xs text-slate-400">Arsenal</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-1.5 rounded-xl bg-black/60 border border-white/10 font-mono text-2xl font-extrabold text-cyan-400">
                  <span>2</span>
                  <span className="text-slate-600">-</span>
                  <span className="text-slate-300">1</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm font-bold text-white tracking-wider">MCI</span>
                  <span className="text-xs text-slate-400">Man City</span>
                </div>
              </div>

              {/* Match Momentum Pressure Line */}
              <div className="mt-4 px-2">
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
                  <span>Possession: 62%</span>
                  <span>38%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden flex">
                  <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 w-[62%]" />
                  <div className="h-full bg-slate-700 w-[38%]" />
                </div>
              </div>
            </div>

            {/* Footer In-Development Tag */}
            <div className="flex items-center justify-center gap-2 pt-2 border-t border-white/5 z-10">
              <Hammer className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono text-[11px] font-bold text-amber-400 tracking-wider">
                ENGINEERING PHASE: IN ACTIVE DEVELOPMENT
              </span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>PROOF OF CAPABILITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Digital Marketing &amp; <span className="gradient-text">Tech Fusion Showcase</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Explore my featured projects spanning search engine domination, algorithmic web tools, watchlist data hubs, and enterprise analytics.
          </p>

          {/* Section View Tabs */}
          <div className="flex items-center gap-2 mt-8 p-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('flagship')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'flagship'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Web Apps &amp; Systems (Slide View)</span>
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'business'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Business Analysis &amp; BI Initiatives</span>
            </button>
          </div>
        </div>

        {/* TAB 1: FLAGSHIP INTERACTIVE CAROUSEL SLIDE VIEW */}
        {activeTab === 'flagship' && (
          <div className="relative">
            {/* Carousel Navigation Bar */}
            <div className="flex items-center justify-between mb-4 px-2">
              <span className="font-mono text-cyan-400 font-bold text-sm tracking-wider">
                Project {currentSlide + 1} of {totalSlides}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  aria-label="Previous project slide"
                  className="w-10 h-10 rounded-full bg-slate-900/90 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next project slide"
                  className="w-10 h-10 rounded-full bg-slate-900/90 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Slide Container */}
            <div className="relative overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className={`rounded-3xl bg-[#090e1a]/90 border ${
                    activeProject.isSpotlight 
                      ? 'border-cyan-500/30 shadow-[0_0_40px_rgba(0,240,255,0.08)]' 
                      : 'border-white/10'
                  } p-6 sm:p-10 backdrop-blur-2xl relative shadow-2xl`}
                >
                  {/* Spotlight Crown / Status Badge */}
                  {activeProject.isSpotlight && (
                    <div className="absolute top-0 left-0 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 text-black font-extrabold text-[11px] tracking-wider px-4 py-1.5 rounded-br-2xl rounded-tl-3xl shadow-lg flex items-center gap-1.5 z-20">
                      <span>★</span>
                      <span>FLAGSHIP DIGITAL ASSET</span>
                    </div>
                  )}

                  {activeProject.status === 'in_development' && (
                    <div className="absolute top-0 left-0 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-extrabold text-[11px] tracking-wider px-4 py-1.5 rounded-br-2xl rounded-tl-3xl shadow-lg flex items-center gap-1.5 z-20">
                      <span className="w-2 h-2 rounded-full bg-black live-dot-pulse" />
                      <span>IN ACTIVE DEVELOPMENT</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-2">
                    
                    {/* Left Graphic Mockup Column (5 cols) */}
                    <div className="lg:col-span-5 w-full">
                      {renderVisual(activeProject)}
                    </div>

                    {/* Right Details Column (7 cols) */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      <div>
                        {/* Meta Row */}
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-mono text-cyan-400 font-semibold text-xs sm:text-sm">
                            {activeProject.year}
                          </span>
                          <span className="font-mono text-[11px] text-slate-300 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-md">
                            {activeProject.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-3">
                          {activeProject.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                          {activeProject.description}
                        </p>

                        {/* Key Highlights */}
                        <div className="space-y-2.5 mb-6">
                          {activeProject.highlights.map((item, idx) => (
                            <div key={idx} className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2">
                              <span className="text-cyan-400 font-bold shrink-0 mt-0.5">•</span>
                              <span>
                                <strong className="text-cyan-400 font-semibold">{item.label}:</strong>{' '}
                                {item.text}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-8">
                          {activeProject.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons Row */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                        {/* Case Study / Architecture Deep Dive Button */}
                        <button
                          onClick={() => setSelectedProject(activeProject)}
                          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <span>
                            {activeProject.id === 'us-news' 
                              ? 'Read Full Case Study' 
                              : 'View Architecture Deep Dive'}
                          </span>
                          <ExternalLink className="w-4 h-4" />
                        </button>

                        {/* Live Demo Button (if available) or In Development Status Pill */}
                        {activeProject.liveUrl ? (
                          <a
                            href={activeProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                            title={`Open live ${activeProject.title}`}
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        ) : activeProject.status === 'in_development' ? (
                          <div className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-400 live-dot-pulse" />
                            <span>In Active Development</span>
                          </div>
                        ) : null}
                      </div>

                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Pagination Dots */}
            <div className="flex items-center justify-center gap-2.5 mt-6">
              {flagshipProjects.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${proj.title}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? 'w-10 bg-cyan-400 shadow-[0_0_10px_#00f0ff]'
                      : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: BUSINESS ANALYSIS & BI INITIATIVES GRID */}
        {activeTab === 'business' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {businessProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="rounded-3xl bg-[#090e1a]/90 border border-white/10 hover:border-cyan-500/40 p-7 flex flex-col justify-between backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all group relative overflow-hidden"
              >
                <div>
                  {/* Category & Metric */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300">
                      <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{project.category}</span>
                    </span>
                    <span className="text-[11px] font-mono font-bold text-cyan-400 px-2.5 py-0.5 rounded-md bg-cyan-950/60 border border-cyan-500/30">
                      {project.metric}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <div className="text-xs font-medium text-cyan-400 mt-1">
                    {project.subtitle}
                  </div>

                  {/* Meta Details */}
                  <div className="flex items-center gap-4 text-xs text-slate-400 my-4 pb-4 border-b border-white/10">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {project.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {project.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-slate-200">{item.label}:</strong> {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Tags & Action */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[11px] rounded-md bg-slate-900 text-slate-300 border border-white/5 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-slate-200 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 text-xs font-semibold transition-all"
                  >
                    <span>View Project Deep-Dive</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            ))}
          </motion.div>
        )}

        {/* MODAL FOR DEEP DIVE ARCHITECTURE & CASE STUDIES */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-[#0b101d] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Category & Date */}
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-cyan-950/60 border border-cyan-500/30">
                    {selectedProject.category}
                  </span>
                  <span>&bull;</span>
                  <span className="text-slate-400 font-mono">
                    {selectedProject.year || selectedProject.date}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-white mb-1">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-cyan-300 font-medium mb-5">
                  {selectedProject.subtitle}
                </p>

                {/* Stats Bar (if present) */}
                {selectedProject.stats && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
                    {selectedProject.stats.map((st, i) => (
                      <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="block font-mono font-bold text-cyan-400 text-sm sm:text-base">
                          {st.value}
                        </span>
                        <span className="block text-[11px] text-slate-400 mt-0.5">
                          {st.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Overview Box */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-white/5 text-sm text-slate-300 leading-relaxed mb-6">
                  {selectedProject.overview || selectedProject.description}
                </div>

                {/* Strategic / Architecture Highlights */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Strategic &amp; Technical Highlights:
                  </h4>
                  {selectedProject.strategy ? (
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                      {selectedProject.strategy.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                          <span dangerouslySetInnerHTML={{ __html: item }} />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                      {selectedProject.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                          <span><strong>{h.label}:</strong> {h.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Tags & Action CTA */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-slate-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  {selectedProject.liveUrl ? (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2"
                    >
                      <span>Open Live Application</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      onClick={() => setSelectedProject(null)}
                      className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                    >
                      Discuss Similar Use Case
                    </a>
                  )}
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

