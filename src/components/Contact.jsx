import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Copy, 
  Check, 
  Sparkles,
  Clock,
  ShieldCheck,
  Key
} from 'lucide-react';
import { LinkedinIcon, GithubIcon, YoutubeIcon, InstagramIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Opportunity / Collaboration Discussion',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedField, setCopiedField] = useState(null);

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '5747e9ba-49bc-4850-9843-cadcd7f341b0';
  const isKeyPlaceholder = !accessKey || accessKey === 'your_web3forms_access_key_here';

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Please enter your full name (minimum 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please provide a message with at least 10 characters.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmissionStatus('loading');
    setStatusMessage('');

    try {
      if (isKeyPlaceholder) {
        await new Promise((res) => setTimeout(res, 1000));
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
        setSubmissionStatus('success');
        setStatusMessage("Message recorded in local preview mode! To send emails directly to your inbox, insert your free Web3Forms key into the .env file.");
        setFormData({ name: '', email: '', subject: 'Opportunity / Collaboration Discussion', message: '' });
        return;
      }

      const payload = {
        access_key: accessKey,
        name: formData.name,
        email: formData.email,
        subject: `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`,
        message: formData.message,
        from_name: `${formData.name} via Portfolio`
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (data.success) {
        // Trigger celebratory confetti
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
        setSubmissionStatus('success');
        setStatusMessage('Thank you! Your message has been sent directly to Naveen. I will get back to you within 24 hours.');
        setFormData({ name: '', email: '', subject: 'Opportunity / Collaboration Discussion', message: '' });
      } else {
        setSubmissionStatus('error');
        setStatusMessage(data.message || 'There was an issue sending your message. Please reach out directly via email or phone.');
      }
    } catch (err) {
      setSubmissionStatus('error');
      setStatusMessage('Network error occurred. Please verify your connection or email naveenyuk97@gmail.com directly.');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-t from-cyan-600/10 via-indigo-600/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Initiate a Conversation
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Seeking a seasoned Business Analyst or Project Coordinator? Let's discuss how my expertise can streamline your delivery.
          </p>
        </div>

        {/* Notice for Web3Forms Configuration if placeholder */}
        {isKeyPlaceholder && (
          <div className="mb-10 max-w-4xl mx-auto p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-start gap-3 backdrop-blur-md">
            <Key className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-300">
              <span className="font-semibold text-cyan-300">Web3Forms Configuration:</span> Your contact form is fully wired up! To deliver incoming messages to <strong className="text-white">naveenyuk97@gmail.com</strong>, generate a free key at <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="underline text-cyan-400 hover:text-cyan-300 font-medium">web3forms.com</a> and paste it into <code className="px-1.5 py-0.5 bg-black/40 rounded text-cyan-200">.env</code> as <code className="text-cyan-200">VITE_WEB3FORMS_ACCESS_KEY</code>.
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-8"
          >
            <div className="p-8 rounded-3xl bg-[#0b1220]/80 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Direct Contact Channels</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Feel free to contact me directly for full-time opportunities, consulting engagements, or project inquiries.
                </p>
              </div>

              {/* Contact Items with Copy Feature */}
              <div className="space-y-4">
                {/* Email */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between group hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Email Address</div>
                      <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between group hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Phone / WhatsApp</div>
                      <a href={`tel:${personalInfo.phone}`} className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                    className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between group hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Base Location</div>
                      <div className="text-sm font-semibold text-white">{personalInfo.location}</div>
                    </div>
                  </div>
                  <span className="text-[11px] text-cyan-400 bg-cyan-950/60 px-2 py-1 rounded-md border border-cyan-500/30">
                    Open to Relocation
                  </span>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="pt-2 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Standard response turnaround: <strong className="text-slate-200 font-semibold">&lt; 24 business hours</strong>.</span>
              </div>
            </div>

            {/* Social Connect Tile */}
            <div className="p-6 rounded-3xl bg-slate-900/50 border border-white/5 backdrop-blur-md flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-white">Professional Networks</div>
                <div className="text-xs text-slate-400">Connect via LinkedIn &amp; GitHub</div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 text-slate-200 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 text-slate-200 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 text-slate-200 hover:text-pink-400 hover:bg-pink-500/10 transition-all"
                  aria-label="Instagram Profile"
                  title="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 text-slate-200 hover:text-red-400 hover:bg-red-500/10 transition-all"
                  aria-label="YouTube Channel"
                  title="YouTube"
                >
                  <YoutubeIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right: Polished Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0b1220]/90 border border-white/10 backdrop-blur-xl shadow-2xl relative">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-8">
                Fill in the details below. This form directly delivers your inquiry to Naveen's verified inbox.
              </p>

              {/* Status Alert Banner */}
              <AnimatePresence>
                {submissionStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-sm flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                    <div>
                      <div className="font-bold">Message Transmitted Successfully!</div>
                      <div className="text-xs text-emerald-200/90 mt-0.5">{statusMessage}</div>
                    </div>
                  </motion.div>
                )}

                {submissionStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-400" />
                    <div>
                      <div className="font-bold">Submission Failed</div>
                      <div className="text-xs text-rose-200/90 mt-0.5">{statusMessage}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Your Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                        formErrors.name 
                          ? 'border-rose-500 focus:ring-rose-500/40' 
                          : 'border-white/10 focus:border-cyan-400 focus:ring-cyan-500/20'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Your Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. eleanor@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                        formErrors.email 
                          ? 'border-rose-500 focus:ring-rose-500/40' 
                          : 'border-white/10 focus:border-cyan-400 focus:ring-cyan-500/20'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Inquiry Topic / Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  >
                    <option value="Full-time Role Opportunity">Full-time Role Opportunity (BA / Project Coordinator)</option>
                    <option value="Consulting or Freelance Engagement">Consulting or Freelance Engagement</option>
                    <option value="Data Visualization / Power BI Project">Data Visualization / Power BI Project</option>
                    <option value="General Professional Networking">General Professional Networking</option>
                    <option value="Other Inquiry">Other Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Your Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe your project, team requirements, or discussion points..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                      formErrors.message 
                        ? 'border-rose-500 focus:ring-rose-500/40' 
                        : 'border-white/10 focus:border-cyan-400 focus:ring-cyan-500/20'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submissionStatus === 'loading'}
                  className="w-full group py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-all duration-200 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submissionStatus === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-slate-500 pt-2">
                  🔒 Encrypted and spam-protected via Web3Forms API. No backend credentials exposed.
                </p>
              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
