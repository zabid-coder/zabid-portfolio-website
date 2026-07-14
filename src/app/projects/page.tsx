"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, X } from "lucide-react";
import BracketFrame from "@/components/BracketFrame";
import { PROJECTS, PRODUCTS, ANIMATIONS } from "@/data";
import { motion } from "framer-motion";

export default function Projects() {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const allWork = [
    ...PROJECTS.map(p => ({ ...p, type: 'project' as const })), 
    ...PRODUCTS.map(p => ({ ...p, type: 'product' as const }))
  ];

  return (
    <div className="min-h-screen w-full max-w-[1440px] mx-auto px-8 pt-40 pb-32">
      <div className="mb-24 flex flex-col items-center text-center">
        <div className="text-[10px] font-mono tracking-widest text-secondary uppercase mb-4">SELECTED WORKS</div>
        <h1 className="text-6xl md:text-[80px] font-black tracking-tighter uppercase leading-[0.9]">THE WORK</h1>
        <motion.p 
          className="mt-8 max-w-2xl font-mono text-xs md:text-sm text-secondary leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A curated selection of visual narratives, automated workflows, and digital solutions. Blending the art of cinematography with the logic of software engineering.
        </motion.p>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <a 
            href="https://www.youtube.com/@zabidalmuttaki3482/playlists" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-accent text-white px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase hover:bg-white hover:text-accent transition-colors"
          >
            <Play size={16} fill="currentColor" />
            View Full Client Archive
          </a>
          <a 
            href="https://www.youtube.com/@shadorittu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 border-2 border-foreground text-foreground px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            <Play size={16} fill="currentColor" />
            Explore AI Channel
          </a>
        </div>
      </div>

      {/* Visual Storytelling Sub-section */}
      <div className="mb-24">
        <h3 className="text-xl font-mono font-bold tracking-widest uppercase mb-8 border-b-2 border-foreground pb-4">Visual Storytelling</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((work) => (
            <div key={work.id} onClick={() => setActiveVideoUrl((work as any).vimeoUrl || `https://www.youtube.com/embed/${work.youtubeId}?autoplay=1&rel=0&modestbranding=1`)} className="group cursor-pointer block">
              <BracketFrame className="p-4 bg-transparent transition-colors group-hover:bg-background" bracketColor="border-foreground">
                <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest mb-4">
                  <span className="text-secondary">Visual Storytelling</span>
                  <span className="text-foreground flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span> PLAY
                  </span>
                </div>
                
                <div className="relative w-full overflow-hidden bg-foreground/5 mb-4 aspect-video group-hover:opacity-80 transition-opacity">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                     <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center">
                       <Play size={24} fill="currentColor" className="ml-1" />
                     </div>
                  </div>
                </div>
                
                <div className="text-[10px] font-mono text-secondary uppercase tracking-widest mb-2">
                  {work.category} / {work.year}
                </div>
                <h3 className="text-lg font-bold tracking-tight uppercase text-foreground">
                  {work.title}
                </h3>
              </BracketFrame>
            </div>
          ))}
        </div>
      </div>

      {/* Development Sub-section */}
      <div className="mb-24">
        <h3 className="text-xl font-mono font-bold tracking-widest uppercase mb-8 border-b-2 border-foreground pb-4">Development</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map(p => ({ ...p, type: 'product' as const })).map((work, idx) => (
            <Link key={work.id} href={`/#${work.id}`} className="group cursor-pointer block">
              <BracketFrame className="p-4 bg-transparent transition-colors group-hover:bg-background" bracketColor="border-foreground">
                <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest mb-4">
                  <span className="text-secondary">Development</span>
                  <span className="text-foreground flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span> LIVE
                  </span>
                </div>
                
                <div className="relative w-full overflow-hidden bg-foreground/5 mb-4 aspect-video">
                  <Image
                    src={work.image}
                    alt={work.name}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                <div className="text-[10px] font-mono text-secondary uppercase tracking-widest mb-2">
                  SOFTWARE / {work.status}
                </div>
                <h3 className="text-lg font-bold tracking-tight uppercase text-foreground">
                  {work.name}
                </h3>
              </BracketFrame>
            </Link>
          ))}
        </div>
      </div>

      {/* AI & Animation Sub-section */}
      <div>
        <h3 className="text-xl font-mono font-bold tracking-widest uppercase mb-8 border-b-2 border-foreground pb-4">AI & Animation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ANIMATIONS.map((work) => (
            <div key={work.id} onClick={() => setActiveVideoUrl((work as any).vimeoUrl || `https://www.youtube.com/embed/${work.youtubeId}?autoplay=1&rel=0&modestbranding=1`)} className="group cursor-pointer block">
              <BracketFrame className="p-4 bg-transparent transition-colors group-hover:bg-background" bracketColor="border-foreground">
                <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest mb-4">
                  <span className="text-secondary">AI Animation</span>
                  <span className="text-foreground flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span> PLAY
                  </span>
                </div>
                
                <div className="relative w-full overflow-hidden bg-foreground/5 mb-4 aspect-video group-hover:opacity-80 transition-opacity">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                     <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center">
                       <Play size={24} fill="currentColor" className="ml-1" />
                     </div>
                  </div>
                </div>
                
                <div className="text-[10px] font-mono text-secondary uppercase tracking-widest mb-2">
                  {work.category} / {work.year}
                </div>
                <h3 className="text-lg font-bold tracking-tight uppercase text-foreground">
                  {work.title}
                </h3>
              </BracketFrame>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Video Modal */}
      {activeVideoUrl && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-12"
          onClick={() => setActiveVideoUrl(null)}
        >
          <button 
            onClick={() => setActiveVideoUrl(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-[110] bg-black/50 rounded-full p-2 text-white/70 hover:text-white hover:bg-black transition-colors"
          >
            <X size={32} />
          </button>
          
          <div 
            className="w-full max-w-6xl aspect-video bg-black shadow-2xl relative rounded-xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src={activeVideoUrl}
              title="Video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
