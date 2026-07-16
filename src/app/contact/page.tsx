"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    type: "Visual Storytelling",
    budget: "",
    description: ""
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");
    if (service === "video") {
      setFormData(prev => ({ ...prev, type: "Visual Storytelling" }));
    } else if (service === "dev") {
      setFormData(prev => ({ ...prev, type: "Software Development" }));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Zabid! I am ${formData.name}.\n\nI want to start a ${formData.type} project.\nBudget: ${formData.budget || 'Not specified'}\n\nProject details: ${formData.description}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/8801516108203?text=${encodedText}`, "_blank");
  };

  return (
    <div className="w-full min-h-screen pt-40 pb-32 flex flex-col justify-center">
      <div className="max-w-[1440px] mx-auto px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="text-[10px] font-mono tracking-widest text-secondary uppercase mb-4">04 — START A PROJECT</div>
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-[6rem] font-light tracking-tighter uppercase mb-12 leading-[0.9]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Let's build<br/>something<br/>meaningful.
            </motion.h1>

            <motion.div 
              className="font-mono text-xs text-secondary leading-relaxed space-y-6 max-w-md mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p>
                Whether you need a cinematic video edit, a custom React application, or an automated DaVinci Resolve workflow, I am ready to collaborate. 
              </p>
              <p>
                Fill out the form with your project details, and it will automatically prepare a WhatsApp message for direct communication.
              </p>
            </motion.div>

            <motion.div 
              className="flex gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="mailto:zabidalmuttaki@gmail.com" className="text-xs font-bold uppercase tracking-widest hover:text-secondary transition-colors border-b border-foreground pb-1">Email</a>
              <a href="https://www.linkedin.com/in/zabidalmuttaki/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest hover:text-secondary transition-colors border-b border-foreground pb-1">LinkedIn</a>
              <a href="https://github.com/zabid-coder" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest hover:text-secondary transition-colors border-b border-foreground pb-1">GitHub</a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 bg-foreground/5 p-8 md:p-12 border border-foreground/10">
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[10px] font-mono tracking-widest uppercase font-bold text-foreground">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-transparent border-b border-foreground/30 py-3 text-sm focus:outline-none focus:border-accent transition-colors rounded-none"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="type" className="text-[10px] font-mono tracking-widest uppercase font-bold text-foreground">Project Type</label>
                <select 
                  id="type"
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  className="bg-transparent border-b border-foreground/30 py-3 text-sm focus:outline-none focus:border-accent transition-colors rounded-none appearance-none cursor-pointer"
                >
                  <option value="Visual Storytelling" className="bg-background text-foreground">Visual Storytelling (Video Editing/Color)</option>
                  <option value="Software Development" className="bg-background text-foreground">Software Development (React/Web/Desktop)</option>
                  <option value="AI Animation" className="bg-background text-foreground">AI Animation (Stable Diffusion)</option>
                  <option value="Workflow Automation" className="bg-background text-foreground">Workflow Automation (DaVinci/Python)</option>
                  <option value="Other" className="bg-background text-foreground">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className="text-[10px] font-mono tracking-widest uppercase font-bold text-foreground">Estimated Budget (Optional)</label>
                <input 
                  type="text" 
                  id="budget" 
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="bg-transparent border-b border-foreground/30 py-3 text-sm focus:outline-none focus:border-accent transition-colors rounded-none"
                  placeholder="e.g. $1000 - $3000"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-[10px] font-mono tracking-widest uppercase font-bold text-foreground">Project Details</label>
                <textarea 
                  id="description" 
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="bg-transparent border-b border-foreground/30 py-3 text-sm focus:outline-none focus:border-accent transition-colors rounded-none resize-none"
                  placeholder="Tell me a bit about what you're looking to build..."
                />
              </div>

              <button 
                type="submit" 
                className="mt-4 bg-accent text-white px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors self-start border border-accent hover:border-foreground"
              >
                Send via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
