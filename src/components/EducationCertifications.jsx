import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  CheckCircle, 
  Sparkles,
  ExternalLink,
  Users
} from 'lucide-react';
import { educationData, certificationsData, leadershipData } from '../data/portfolioData';

export default function EducationCertifications() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>CREDENTIALS &amp; ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education &amp; Certifications
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Rigorous postgraduate training in information systems combined with certified industry credentials.
          </p>
        </div>

        {/* Top: Degrees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-8 rounded-3xl bg-[#0b1220]/85 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl shadow-xl transition-all relative overflow-hidden group"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300">
                  <Calendar className="w-3 h-3 text-cyan-400" />
                  {edu.date}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {edu.degree}
              </h3>

              <div className="flex flex-wrap items-center gap-3 text-sm text-cyan-400 font-medium mt-1">
                <span>{edu.institution}</span>
                <span>&bull;</span>
                <span className="text-slate-400 flex items-center gap-1 text-xs">
                  <MapPin className="w-3 h-3" />
                  {edu.location}
                </span>
              </div>

              {edu.honors && (
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300">
                  <Award className="w-3.5 h-3.5" />
                  <span>{edu.honors}</span>
                </div>
              )}

              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Middle: Certifications Matrix */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                <span>Professional Certifications &amp; Accreditations</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Continuous learning across Business Intelligence, API testing, DAX modeling, and project management.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-[#0b1220]/70 border border-white/10 hover:border-cyan-500/30 transition-all backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                      {cert.issuer}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white leading-snug">
                    {cert.title}
                  </h4>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[10px] rounded bg-white/5 text-slate-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom: Leadership & Student Mentorship */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-950/30 via-slate-900/60 to-cyan-950/30 border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Academic Leadership &amp; Mentorship</h3>
              <p className="text-xs text-slate-400">Aston University &bull; Peer Mentorship &bull; Operational Leadership</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadershipData.map((item, idx) => (
              <div key={item.role} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-xs font-bold text-cyan-400">{item.role}</div>
                <div className="text-[11px] font-medium text-slate-300 mb-2">{item.organization}</div>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
