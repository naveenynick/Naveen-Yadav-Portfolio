import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Target, 
  Users, 
  BarChart3, 
  Workflow, 
  Award, 
  CheckCircle, 
  Sparkles,
  Layers,
  GraduationCap
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const pillars = [
  {
    icon: FileText,
    title: "Requirements Engineering",
    description: "Deep elicitation through user stories, BPMN workflows, and functional gap analyses to translate complex stakeholder needs into concise specifications.",
    accent: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
  },
  {
    icon: BarChart3,
    title: "Data Storytelling & BI",
    description: "Architecting interactive Power BI and Tableau dashboards backed by robust SQL pipelines to turn raw operational data into executive insights.",
    accent: "text-blue-400 bg-blue-500/10 border-blue-500/20"
  },
  {
    icon: Workflow,
    title: "Agile Project Coordination",
    description: "End-to-end sprint planning, backlog grooming, risk registers (RAID), and milestone governance utilizing Zoho Projects, Jira, and Asana.",
    accent: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
  },
  {
    icon: Users,
    title: "Client & Stakeholder FPOC",
    description: "Serving as primary client liaison and first point of contact (FPOC), coordinating deliverable scope, requirements, and cross-functional alignment.",
    accent: "text-purple-400 bg-purple-500/10 border-purple-500/20"
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXECUTIVE PROFILE</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Bridging Strategy, Data & Execution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg"
          >
            Where technical information systems analysis meets rigorous cross-functional project management.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="p-8 rounded-3xl bg-[#0b1220]/90 border border-white/10 shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <Target className="w-5 h-5 text-cyan-400" />
                <span>Professional Narrative</span>
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a <strong className="text-white font-semibold">Business Analyst and Project Analyst</strong> with over 4 years of proven cross-industry experience driving business analysis, process improvements, and end-to-end delivery across <strong className="text-cyan-300">Renewable Energy, Advanced Manufacturing, and FMCG Retail</strong>.
                </p>
                <p>
                  Having earned an <strong className="text-white">MSc in Information Systems and Business Analysis from Aston University (Birmingham, UK)</strong>, I specialize in dissecting intricate operational bottlenecks, architecting KPI reporting systems using <strong className="text-slate-100">Power BI, Tableau, and SQL</strong>, and enforcing rigorous Agile/Scrum delivery.
                </p>
                <p>
                  Throughout my career—acting as the primary client FPOC on multi-stakeholder engagements including projects with <strong className="text-cyan-300">ESR, Lodha, and Welspun</strong>—I have consistently aligned technical capabilities with operational goals to ensure on-time project milestones.
                </p>
              </div>

              {/* Aston Accolades */}
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Aston University Leadership</div>
                    <div className="text-[12px] text-slate-400">Course Representative &amp; Student Mentor</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Credentials</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Core Pillars Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-6 rounded-2xl bg-[#0b1220]/70 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 group shadow-lg"
                >
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${pillar.accent} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
