import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import Projects from './components/Projects';
import SkillsMatrix from './components/SkillsMatrix';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070a13] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300 relative overflow-x-hidden font-sans">
      {/* Interactive floating particles & antigravity background */}
      <BackgroundParticles />

      {/* Background ambient lighting accents */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 left-10 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[150px]" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <ExperienceTimeline />
        <Projects />
        <SkillsMatrix />
        <EducationCertifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
