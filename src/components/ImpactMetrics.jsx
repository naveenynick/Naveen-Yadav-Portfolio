import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Layers, Building2, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const icons = [Clock, Layers, Building2, CheckCircle2];
const accents = [
  'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400',
  'from-indigo-500/20 to-purple-500/10 border-indigo-500/30 text-indigo-400',
  'from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400',
  'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
];

export default function ImpactMetrics() {
  return (
    <section className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalInfo.stats.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            const accent = accents[idx % accents.length];

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`p-6 rounded-2xl bg-[#0b1220]/80 border ${accent.split(' ')[2]} backdrop-blur-md relative overflow-hidden group shadow-lg shadow-black/30`}
              >
                {/* Subtle corner light */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${accent.split(' ')[0]} ${accent.split(' ')[1]} rounded-bl-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`} />

                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${accent.split(' ')[3]} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 tracking-wider">0{idx + 1}</span>
                </div>

                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {stat.value}
                </div>

                <div className="text-sm font-semibold text-slate-200 mt-1">
                  {stat.label}
                </div>

                <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {stat.subtitle}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
