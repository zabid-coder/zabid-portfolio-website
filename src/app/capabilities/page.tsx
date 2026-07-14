"use client";

import { motion } from "framer-motion";
import BracketFrame from "@/components/BracketFrame";

export default function Capabilities() {
  const capabilities = [
    {
      id: "visual-storytelling",
      title: "Visual Storytelling",
      description: "With over 5 years of experience cutting documentaries, commercials, and promotional materials, I believe editing is the final rewrite of any story. My workflow is deeply rooted in DaVinci Resolve, ensuring every cut has purpose and every grade sets the right mood.",
      tools: ["DaVinci Resolve Studio", "Blackmagic Fusion", "Color Grading", "Adobe Premiere Pro", "After Effects"],
      projects: ["UNICEF Documentaries", "WaterAid Campaigns", "NEWF x Drik Exchange"]
    },
    {
      id: "software-engineering",
      title: "Software Engineering",
      description: "I don't just use tools, I build them. My background in software development allows me to create custom applications, automate tedious workflows, and build interactive web experiences that bridge the gap between creative vision and technical execution.",
      tools: ["React & Next.js", "TypeScript", "Python", "Electron", "Node.js & Supabase"],
      projects: ["Clip Assassin", "EchoFlow", "Custom Web Portfolios"]
    },
    {
      id: "ai-automation",
      title: "AI & Automation",
      description: "The creative landscape is shifting, and I leverage AI to stay ahead. From generating entirely new visual landscapes using Stable Diffusion to automating repetitive editing tasks via Python scripting, I integrate cutting-edge technology into traditional workflows.",
      tools: ["Stable Diffusion", "Deforum Animation", "FFmpeg & OpenCV", "DaVinci Python API", "Workflow Automation"],
      projects: ["Synthetic Reality", "AI Dreamscape", "Editor Tooling"]
    }
  ];

  return (
    <div className="w-full min-h-screen pt-40 pb-32">
      <div className="max-w-[1440px] mx-auto px-8 w-full">
        
        <div className="mb-24">
          <div className="text-[10px] font-mono tracking-widest text-secondary uppercase mb-4">02 — CAPABILITIES</div>
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-[7rem] font-light tracking-tighter uppercase mb-8 leading-[0.9]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The technical<br/>foundation.
          </motion.h1>
          <motion.p 
            className="font-mono text-xs text-secondary leading-relaxed max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A deep dive into the disciplines, tools, and methodologies I use to bring stories to life. Combining the art of editing with the logic of code.
          </motion.p>
        </div>

        <div className="flex flex-col gap-24">
          {capabilities.map((cap, idx) => (
            <motion.div 
              key={cap.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
            >
              <div className="lg:col-span-4">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase mb-6">{cap.title}</h2>
                <div className="w-12 h-1 bg-accent mb-8"></div>
              </div>
              
              <div className="lg:col-span-8">
                <p className="font-mono text-sm text-secondary leading-loose mb-12 max-w-3xl">
                  {cap.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <BracketFrame className="p-6 bg-foreground/5 border-transparent" bracketColor="border-foreground">
                    <h4 className="text-[10px] font-bold text-foreground uppercase tracking-widest mb-6">Core Toolkit</h4>
                    <ul className="flex flex-col gap-3 font-mono text-xs text-secondary">
                      {cap.tools.map((tool, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="w-1 h-1 bg-accent rounded-full shrink-0"></span>
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </BracketFrame>

                  <BracketFrame className="p-6 bg-foreground/5 border-transparent" bracketColor="border-foreground">
                    <h4 className="text-[10px] font-bold text-foreground uppercase tracking-widest mb-6">Key Applications</h4>
                    <ul className="flex flex-col gap-3 font-mono text-xs text-secondary">
                      {cap.projects.map((project, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="w-1 h-1 bg-foreground rounded-full shrink-0"></span>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </BracketFrame>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-32 pt-24 border-t border-foreground text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase mb-8">See it in action.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/projects" className="inline-block bg-foreground text-background px-10 py-5 text-sm font-mono font-bold tracking-widest uppercase hover:bg-accent hover:text-white transition-colors border border-foreground hover:border-accent">
              View Work
            </a>
            <a href="/contact" className="inline-block bg-transparent text-foreground px-10 py-5 text-sm font-mono font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors border border-foreground">
              Start a Project
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
