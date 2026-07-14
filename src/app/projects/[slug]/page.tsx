"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PROJECTS } from "@/data";

export default function CaseStudy() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = PROJECTS.find(p => p.id === slug) || PROJECTS[0];

  return (
    <div className="w-full pt-32 pb-32">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* BACK BTN */}
        <div className="mb-16">
          <Link href="/projects" className="text-sm font-medium tracking-widest uppercase pb-1 border-b border-foreground/30 hover:border-foreground transition-colors">
            ← Back to Work
          </Link>
        </div>

        {/* HERO */}
        <div className="mb-24">
          <motion.h1 
            className="text-5xl md:text-8xl font-light tracking-tighter uppercase mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {project.title}
          </motion.h1>
          <motion.div 
            className="flex gap-8 text-sm font-medium tracking-widest uppercase text-accent border-b border-secondary/30 pb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span>{project.category}</span>
            <span>{project.year}</span>
          </motion.div>
        </div>

        {/* LARGE IMG */}
        <motion.div 
          className="relative w-full aspect-video bg-secondary/10 mb-32 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Placeholder for project hero image */}
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-32">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-light tracking-tight mb-8 sticky top-32 uppercase">The Challenge</h2>
          </div>
          <div className="lg:col-span-8 prose prose-lg dark:prose-invert prose-p:font-light prose-p:leading-relaxed prose-p:text-accent">
            <p>
              When approaching the {project.title} project, the primary challenge was bridging the gap between raw authentic storytelling and technical excellence. 
              The narrative required a delicate touch, ensuring that the human element remained front and center without being overshadowed by the production value.
            </p>
            <p>
              We needed to design a workflow that allowed for rapid iteration while maintaining a cinematic quality standard throughout the entire pipeline.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-32 border-t border-secondary/30 pt-32">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-light tracking-tight mb-8 sticky top-32 uppercase">Process & Tech</h2>
          </div>
          <div className="lg:col-span-8">
            <div className="prose prose-lg dark:prose-invert prose-p:font-light prose-p:leading-relaxed prose-p:text-accent mb-12">
              <p>
                The process was highly iterative. Starting with extensive pre-production research, moving into principal photography, and finally diving deep into post-production using a custom-built toolset.
              </p>
            </div>
            
            <h3 className="text-sm font-medium tracking-widest uppercase text-foreground mb-6">Technologies Used</h3>
            <div className="flex flex-wrap gap-4">
              {["DaVinci Resolve", "Fusion", "Python Automation", "RED Workflow"].map((tech, idx) => (
                <span key={idx} className="px-4 py-2 border border-secondary/30 rounded-full text-xs font-light tracking-wider text-accent">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* GALLERY */}
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="aspect-[4/3] bg-secondary/10"></div>
             <div className="aspect-[4/3] bg-secondary/10 md:mt-16"></div>
             <div className="col-span-1 md:col-span-2 aspect-[21/9] bg-secondary/10 mt-8"></div>
          </div>
        </div>

        {/* RESULT */}
        <div className="max-w-4xl mx-auto text-center border-y border-secondary/30 py-32">
          <h2 className="text-sm font-medium tracking-widest uppercase mb-12 text-accent">The Result</h2>
          <p className="text-3xl md:text-5xl font-light tracking-tighter leading-tight">
            An award-winning piece that resonated with audiences globally, demonstrating the power of merging technical precision with human empathy.
          </p>
        </div>

      </div>
    </div>
  );
}
