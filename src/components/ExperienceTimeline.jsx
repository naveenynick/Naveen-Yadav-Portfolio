import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Building, 
  CheckCircle2, 
  Zap, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function ExperienceTimeline() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work Experience &amp; Impact
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Chronological delivery of high-value business analysis, digital transformation, and enterprise project coordination.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Line for Desktop */}
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-[2px] bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-600 opacity-30" />

          <div className="space-y-12">
            {experienceData.map((item, idx) => {
              const isSelected = expandedIndex === idx;

              return (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative md:pl-20"
                >
                  {/* Timeline Milestone Node (Desktop) */}
                  <div className="hidden md:flex absolute left-4 top-6 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0b1220] border-2 border-cyan-400 items-center justify-center shadow-lg shadow-cyan-500/30 z-10">
                    <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Experience Card */}
                  <div 
                    className={`rounded-3xl border transition-all duration-300 backdrop-blur-xl overflow-hidden ${
                      isSelected
                        ? 'bg-[#0b1220]/95 border-cyan-500/40 shadow-2xl shadow-cyan-500/10'
                        : 'bg-[#0b1220]/70 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {/* Card Top Header */}
                    <div className="p-6 sm:p-8 border-b border-white/5">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        
                        <div>
                          <div className="flex flex-wrap items-center gap-2.5 mb-2">
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                              {item.badge}
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-white/5">
                              {item.sector}
                            </span>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                            {item.role}
                          </h3>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300 mt-1 font-medium">
                            <span className="text-cyan-400 flex items-center gap-1.5">
                              <Building className="w-4 h-4" />
                              {item.company}
                            </span>
                            <span className="flex items-center gap-1 text-slate-400">
                              <MapPin className="w-3.5 h-3.5 text-slate-400" />
                              {item.location}
                            </span>
                          </div>
                        </div>

                        {/* Period Badge */}
                        <div className="flex items-center gap-2 self-start lg:self-center px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{item.period}</span>
                        </div>

                      </div>

                      {/* Brief Summary */}
                      <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>

                    {/* Achievements List */}
                    <div className="p-6 sm:p-8 bg-slate-950/40 space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-cyan-400" />
                        <span>Key Accomplishments &amp; Deliverables</span>
                      </h4>

                      <div className="grid grid-cols-1 gap-3 pt-1">
                        {item.achievements.map((point, pIdx) => {
                          const isPowerBI = point.includes('Power BI');
                          const isZoho = point.includes('Zoho Projects');
                          const isZapier = point.includes('Zapier');

                          return (
                            <div
                              key={pIdx}
                              className="flex items-start gap-3 p-3 rounded-xl border transition-colors bg-white/[0.02] border-white/5 text-slate-300 hover:border-white/10"
                            >
                              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                              <p className="text-xs sm:text-sm leading-relaxed">
                                {isZoho ? (
                                  <>
                                    Implemented and optimised <strong className="text-slate-100 font-semibold">Zoho Projects</strong> for project planning, workflow management, and performance tracking, and onboarded the team onto the new ways of working to lift operational efficiency.
                                  </>
                                ) : isPowerBI ? (
                                  <>
                                    Designed and deployed <strong className="text-slate-100 font-semibold">Power BI dashboards and KPI reports</strong> that enabled data-driven decision-making and ongoing operational performance monitoring.
                                  </>
                                ) : isZapier ? (
                                  <>
                                    Automated manual workflows using <strong className="text-slate-100 font-semibold">Zapier and API integrations</strong>, reducing repetitive effort and improving process efficiency.
                                  </>
                                ) : (
                                  point
                                )}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      {/* Tooling Tags */}
                      <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                        <span className="text-xs text-slate-400 font-medium mr-1">Technologies &amp; Competencies:</span>
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-slate-300 border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
