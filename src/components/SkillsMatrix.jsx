import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart2, 
  Kanban, 
  Database, 
  Layers, 
  Cpu, 
  Sparkles,
  TrendingUp,
  Search,
  CheckCircle2
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Competencies', icon: Layers },
    { id: 'ba', label: 'Business Analysis & Digital Marketing', icon: BarChart2 },
    { id: 'pm', label: 'Project Management', icon: Kanban },
    { id: 'tools', label: 'Tools & Technologies', icon: Database },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>CORE COMPETENCIES &amp; TOOLING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp; Technical Capabilities
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            A comprehensive matrix of business analysis, digital marketing strategy, project governance frameworks, and data tools.
          </p>

          {/* Tab Selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/25'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Skill Grids */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Business Analysis & Digital Marketing */}
          {(activeTab === 'all' || activeTab === 'ba') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`rounded-3xl bg-[#090e1a]/90 border border-white/10 p-7 backdrop-blur-xl shadow-xl hover:border-cyan-500/30 transition-all ${
                activeTab === 'ba' ? 'lg:col-span-3 max-w-5xl mx-auto w-full' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Business Analysis &amp; Digital Marketing</h3>
                  <p className="text-xs text-slate-400">Strategy, BPMN, SEO, Ads &amp; Requirements</p>
                </div>
              </div>

              <div className={`space-y-3 ${activeTab === 'ba' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-0' : ''}`}>
                {skillsData.businessAnalysis.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-white/5 hover:border-cyan-500/40 transition-all duration-200 group flex items-center justify-between gap-3 shadow-sm hover:shadow-cyan-500/10 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:shadow-[0_0_8px_#00f0ff] shrink-0 transition-all" />
                      <div className="truncate">
                        <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors truncate">
                          {skill.name}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5 truncate">
                          {skill.category}
                        </div>
                      </div>
                    </div>

                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                      {skill.tag}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Column 2: Project Coordination */}
          {(activeTab === 'all' || activeTab === 'pm') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className={`rounded-3xl bg-[#090e1a]/90 border border-white/10 p-7 backdrop-blur-xl shadow-xl hover:border-indigo-500/30 transition-all ${
                activeTab === 'pm' ? 'lg:col-span-3 max-w-5xl mx-auto w-full' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                  <Kanban className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Project Coordination</h3>
                  <p className="text-xs text-slate-400">Agile, Risk, Governance &amp; Clients</p>
                </div>
              </div>

              <div className={`space-y-3 ${activeTab === 'pm' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-0' : ''}`}>
                {skillsData.projectManagement.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-white/5 hover:border-indigo-500/40 transition-all duration-200 group flex items-center justify-between gap-3 shadow-sm hover:shadow-indigo-500/10 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-indigo-400 group-hover:shadow-[0_0_8px_#818cf8] shrink-0 transition-all" />
                      <div className="truncate">
                        <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-indigo-300 transition-colors truncate">
                          {skill.name}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5 truncate">
                          {skill.category}
                        </div>
                      </div>
                    </div>

                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                      {skill.tag}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Column 3: Tools & Technologies */}
          {(activeTab === 'all' || activeTab === 'tools') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className={`rounded-3xl bg-[#090e1a]/90 border border-white/10 p-7 backdrop-blur-xl shadow-xl hover:border-purple-500/30 transition-all ${
                activeTab === 'tools' ? 'lg:col-span-3 max-w-5xl mx-auto w-full' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Tools &amp; Technologies</h3>
                  <p className="text-xs text-slate-400">SEMrush, SEO, GA4, Ads, BI, SQL &amp; APIs</p>
                </div>
              </div>

              <div className={`space-y-3 ${activeTab === 'tools' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-0' : ''}`}>
                {skillsData.toolsAndData.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-white/5 hover:border-purple-500/40 transition-all duration-200 group flex items-center justify-between gap-3 shadow-sm hover:shadow-purple-500/10 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-purple-400 group-hover:shadow-[0_0_8px_#c084fc] shrink-0 transition-all" />
                      <div className="truncate">
                        <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-purple-300 transition-colors truncate">
                          {skill.name}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5 truncate">
                          {skill.category}
                        </div>
                      </div>
                    </div>

                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                      {skill.tag}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
