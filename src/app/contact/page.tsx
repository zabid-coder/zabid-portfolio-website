'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import BracketFrame from '@/components/BracketFrame';
import { 
  Mail, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  Send, 
  Sparkles,
  ArrowUpRight,
  Globe
} from 'lucide-react';

const SERVICE_OPTIONS = [
  'Documentary & Impact Film',
  'Commercials & Viral Shorts (9:16)',
  'Motion Graphics & VFX (After Effects)',
  'Web & App Development (Next.js)',
  'AI Animation & Workflows',
  'Workflow Automation (Python/DaVinci)',
  'Other / Consultation'
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Documentary & Impact Film',
    budget: '',
    timeline: '',
    description: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get('service');
    if (service === 'video' || service === 'editor') {
      setFormData(prev => ({ ...prev, type: 'Documentary & Impact Film' }));
    } else if (service === 'dev' || service === 'developer') {
      setFormData(prev => ({ ...prev, type: 'Web & App Development (Next.js)' }));
    } else if (service === 'motion') {
      setFormData(prev => ({ ...prev, type: 'Motion Graphics & VFX (After Effects)' }));
    } else if (service === 'shorts') {
      setFormData(prev => ({ ...prev, type: 'Commercials & Viral Shorts (9:16)' }));
    }
  }, []);

  const generateMessageText = () => {
    return `Hi Zabid! I am ${formData.name || 'a client'}.${formData.email ? ` (Email: ${formData.email})` : ''}

Project Type: ${formData.type}
Budget: ${formData.budget || 'To be discussed'}
Timeline: ${formData.timeline || 'Flexible'}

Project Details:
${formData.description || 'Looking forward to discussing the project.'}`;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = generateMessageText();
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/8801516108203?text=${encodedText}`, '_blank');
  };

  const handleEmailSubmit = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.type} - ${formData.name || 'New Client'}`);
    const body = encodeURIComponent(generateMessageText());
    window.location.href = `mailto:zabidalmuttaki@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full min-h-screen pt-36 md:pt-40 pb-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Value */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-secondary uppercase mb-4">04 — START A PROJECT</div>
              
              <motion.h1 
                className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-[0.9] text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                LET'S BUILD<br/>SOMETHING<br/>MEANINGFUL.
              </motion.h1>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-8 font-mono text-xs text-emerald-600 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-bold tracking-wider uppercase text-[10px]">Available for New Projects & Contracts</span>
              </div>

              <motion.p 
                className="font-mono text-xs md:text-sm text-secondary leading-relaxed mb-8 max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Whether you need a documentary film edit, viral 9:16 social campaigns, motion graphics, or a custom Next.js web application—let's discuss scope, deliverables, and timelines.
              </motion.p>

              {/* Response Time & Guarantees */}
              <div className="space-y-3 font-mono text-xs text-secondary mb-10 pb-8 border-b border-foreground/10">
                <div className="flex items-center gap-3">
                  <Clock size={15} className="text-accent shrink-0" />
                  <span>Typical Response Time: <strong className="text-foreground">Within 12 Hours</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe size={15} className="text-accent shrink-0" />
                  <span>Timezone: <strong className="text-foreground">GMT+6 (Dhaka, Bangladesh) — Global Remote</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={15} className="text-accent shrink-0" />
                  <span>Direct Communication: <strong className="text-foreground">WhatsApp, Email, or Video Call</strong></span>
                </div>
              </div>

              {/* Direct Links */}
              <div className="space-y-4 font-mono text-xs">
                <div className="text-[10px] uppercase font-bold text-foreground tracking-widest">Direct Contact Channels</div>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:zabidalmuttaki@gmail.com" 
                    className="flex items-center gap-2 px-4 py-2 bg-foreground/5 hover:bg-foreground hover:text-background border border-foreground/20 rounded-sm transition-colors text-foreground font-bold"
                  >
                    <Mail size={14} />
                    <span>Email Direct</span>
                    <ArrowUpRight size={12} />
                  </a>
                  <a 
                    href="https://wa.me/8801516108203" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-foreground/5 hover:bg-foreground hover:text-background border border-foreground/20 rounded-sm transition-colors text-foreground font-bold"
                  >
                    <MessageSquare size={14} />
                    <span>WhatsApp</span>
                    <ArrowUpRight size={12} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/zabidalmuttaki/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-foreground/5 hover:bg-foreground hover:text-background border border-foreground/20 rounded-sm transition-colors text-foreground font-bold"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>LinkedIn</span>
                    <ArrowUpRight size={12} />
                  </a>
                  <a 
                    href="https://github.com/zabid-coder" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-foreground/5 hover:bg-foreground hover:text-background border border-foreground/20 rounded-sm transition-colors text-foreground font-bold"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <BracketFrame className="p-6 md:p-10 bg-foreground/[0.02] border-transparent" bracketColor="border-foreground">
              
              <div className="flex items-center justify-between border-b border-foreground/10 pb-4 mb-8">
                <div>
                  <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight text-foreground">Project Inquiry Form</h3>
                  <p className="font-mono text-xs text-secondary mt-0.5">Fill in what you know, we'll refine the details together.</p>
                </div>
                <Sparkles size={20} className="text-accent" />
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-6">
                
                {/* 1. Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] font-mono tracking-widest uppercase font-bold text-foreground">
                      Your Name / Company <span className="text-accent">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-transparent border-b border-foreground/30 py-2.5 text-sm focus:outline-none focus:border-accent transition-colors rounded-none placeholder:text-secondary/50 font-mono"
                      placeholder="e.g. John Doe / Studio X"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] font-mono tracking-widest uppercase font-bold text-foreground">
                      Your Email (Optional)
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-transparent border-b border-foreground/30 py-2.5 text-sm focus:outline-none focus:border-accent transition-colors rounded-none placeholder:text-secondary/50 font-mono"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                {/* 2. Service Selection Chips */}
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-mono tracking-widest uppercase font-bold text-foreground">
                    Select Discipline / Service <span className="text-accent">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_OPTIONS.map((opt) => {
                      const isSelected = formData.type === opt;
                      return (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setFormData({...formData, type: opt})}
                          className={`font-mono text-xs px-3 py-1.5 rounded-sm border transition-all text-left ${
                            isSelected 
                              ? 'bg-foreground text-background border-foreground font-bold shadow-sm' 
                              : 'bg-background/80 text-secondary border-foreground/15 hover:border-foreground hover:text-foreground'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Budget & Timeline Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="budget" className="text-[10px] font-mono tracking-widest uppercase font-bold text-foreground">
                      Estimated Budget (Optional)
                    </label>
                    <input 
                      type="text" 
                      id="budget" 
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="bg-transparent border-b border-foreground/30 py-2.5 text-sm focus:outline-none focus:border-accent transition-colors rounded-none placeholder:text-secondary/50 font-mono"
                      placeholder="e.g. $500 - $3,000 / BDT"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="timeline" className="text-[10px] font-mono tracking-widest uppercase font-bold text-foreground">
                      Target Delivery / Timeline (Optional)
                    </label>
                    <input 
                      type="text" 
                      id="timeline" 
                      value={formData.timeline}
                      onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                      className="bg-transparent border-b border-foreground/30 py-2.5 text-sm focus:outline-none focus:border-accent transition-colors rounded-none placeholder:text-secondary/50 font-mono"
                      placeholder="e.g. 1-2 Weeks / Next Month"
                    />
                  </div>
                </div>

                {/* 4. Project Details */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="description" className="text-[10px] font-mono tracking-widest uppercase font-bold text-foreground">
                    Project Details & Scope <span className="text-accent">*</span>
                  </label>
                  <textarea 
                    id="description" 
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="bg-transparent border-b border-foreground/30 py-2.5 text-sm focus:outline-none focus:border-accent transition-colors rounded-none resize-none placeholder:text-secondary/50 font-mono"
                    placeholder="Describe your footage, story, website, or automation goals..."
                  />
                </div>

                {/* 5. Dual Action Buttons: WhatsApp & Email */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button 
                    type="submit" 
                    className="flex-1 flex items-center justify-center gap-2 bg-accent text-white px-6 py-4 text-xs font-mono font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors border border-accent hover:border-foreground"
                  >
                    <MessageSquare size={16} />
                    Send via WhatsApp Direct
                  </button>

                  <button 
                    type="button" 
                    onClick={handleEmailSubmit}
                    className="flex-1 flex items-center justify-center gap-2 bg-transparent text-foreground px-6 py-4 text-xs font-mono font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors border border-foreground"
                  >
                    <Mail size={16} />
                    Send via Email Client
                  </button>
                </div>

              </form>

            </BracketFrame>
          </div>

        </div>

      </div>
    </div>
  );
}
