'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, X, ExternalLink, Film, Sparkles, Smartphone, Layers, Code, Clapperboard } from 'lucide-react';
import BracketFrame from '@/components/BracketFrame';
import { DOCUMENTARIES, PROMOS, SHORTS_REELS, MOTION_GRAPHICS, WEB_PROJECTS, APPS, ANIMATIONS } from '@/data';
import { motion, AnimatePresence } from 'framer-motion';

type CategoryTab = 'all' | 'documentaries' | 'promos' | 'shorts' | 'motion' | 'web-apps' | 'ai';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<CategoryTab>('all');
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const tabs: { id: CategoryTab; label: string; count: number; icon: any }[] = [
    { id: 'all', label: 'All Works', count: DOCUMENTARIES.length + PROMOS.length + SHORTS_REELS.length + MOTION_GRAPHICS.length + WEB_PROJECTS.length + APPS.length + ANIMATIONS.length, icon: Clapperboard },
    { id: 'documentaries', label: 'Documentaries', count: DOCUMENTARIES.length, icon: Film },
    { id: 'promos', label: 'Promos & Commercials', count: PROMOS.length, icon: Sparkles },
    { id: 'shorts', label: 'Shorts & Reels (9:16)', count: SHORTS_REELS.length, icon: Smartphone },
    { id: 'motion', label: 'Motion Graphics', count: MOTION_GRAPHICS.length, icon: Layers },
    { id: 'web-apps', label: 'Web & Apps', count: WEB_PROJECTS.length + APPS.length, icon: Code },
    { id: 'ai', label: 'AI Animation', count: ANIMATIONS.length, icon: Sparkles }
  ];

  return (
    <div className="min-h-screen w-full max-w-[1440px] mx-auto px-4 md:px-8 pt-36 md:pt-40 pb-32">
      
      {/* Header Section */}
      <div className="mb-16 md:mb-20 flex flex-col items-center text-center">
        <div className="text-[10px] font-mono tracking-widest text-secondary uppercase mb-4">SELECTED WORKS & ARCHIVE</div>
        <h1 className="text-5xl md:text-[80px] font-black tracking-tighter uppercase leading-[0.9]">THE WORK</h1>
        <motion.p 
          className="mt-6 max-w-2xl font-mono text-xs md:text-sm text-secondary leading-relaxed mb-10 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Curated visual narratives, high-retention vertical edits, motion graphics, and full-stack software solutions.
        </motion.p>
        
        {/* External Archive Links */}
        <div className="flex flex-col sm:flex-row gap-4 items-center mb-12">
          <a 
            href="https://www.youtube.com/@zabidalmuttaki3482/playlists" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-accent text-white px-7 py-3.5 text-xs font-mono font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            <Play size={14} fill="currentColor" />
            Full YouTube Playlists
          </a>
          <a 
            href="https://www.youtube.com/@shadorittu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 border-2 border-foreground text-foreground px-7 py-3.5 text-xs font-mono font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            <Play size={14} fill="currentColor" />
            AI Animation Channel
          </a>
        </div>

        {/* Interactive Category Filter Tabs */}
        <div className="w-full overflow-x-auto pb-4 pt-2 no-scrollbar">
          <div className="flex justify-start md:justify-center items-center gap-2 md:gap-3 min-w-max px-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-sm font-mono text-xs uppercase tracking-wider transition-all duration-300 border ${
                    isActive 
                      ? 'bg-foreground text-background border-foreground font-bold shadow-md' 
                      : 'bg-background/80 text-secondary border-foreground/20 hover:border-foreground hover:text-foreground'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-accent text-white font-bold' : 'bg-foreground/10 text-secondary'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Content Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="space-y-24"
        >

          {/* 1. DOCUMENTARIES */}
          {(activeTab === 'all' || activeTab === 'documentaries') && (
            <section>
              <div className="flex justify-between items-end mb-8 border-b-2 border-foreground pb-4">
                <h3 className="text-xl md:text-2xl font-mono font-bold tracking-widest uppercase flex items-center gap-3">
                  <Film size={22} className="text-accent" />
                  Documentary Films & Stories
                </h3>
                <span className="text-xs font-mono text-secondary">[{DOCUMENTARIES.length} Films]</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {DOCUMENTARIES.map((work) => (
                  <div key={work.id} onClick={() => setActiveVideoUrl((work as any).vimeoUrl || `https://www.youtube.com/embed/${work.youtubeId}?autoplay=1&rel=0&modestbranding=1`)} className="group cursor-pointer block">
                    <BracketFrame className="p-4 bg-transparent transition-colors group-hover:bg-background" bracketColor="border-foreground">
                      <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest mb-4">
                        <span className="text-secondary">{work.category}</span>
                        <span className="text-foreground flex items-center gap-1.5 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span> PLAY FILM
                        </span>
                      </div>
                      
                      <div className="relative w-full overflow-hidden bg-foreground/5 mb-4 aspect-video group-hover:opacity-85 transition-opacity">
                        <Image
                          src={work.image}
                          alt={work.title}
                          fill
                          className="object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-xl">
                            <Play size={20} fill="currentColor" className="ml-1" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-[10px] font-mono text-secondary uppercase tracking-widest mb-2">
                        {work.category} / {work.year}
                      </div>
                      <h3 className="text-lg font-bold tracking-tight uppercase text-foreground group-hover:text-accent transition-colors">
                        {work.title}
                      </h3>
                    </BracketFrame>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 2. PROMOS & COMMERCIALS */}
          {(activeTab === 'all' || activeTab === 'promos') && (
            <section>
              <div className="flex justify-between items-end mb-8 border-b-2 border-foreground pb-4">
                <h3 className="text-xl md:text-2xl font-mono font-bold tracking-widest uppercase flex items-center gap-3">
                  <Sparkles size={22} className="text-accent" />
                  Promos & Commercial Campaigns
                </h3>
                <span className="text-xs font-mono text-secondary">[{PROMOS.length} Videos]</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROMOS.map((work) => (
                  <div key={work.id} onClick={() => setActiveVideoUrl(`https://www.youtube.com/embed/${work.youtubeId}?autoplay=1&rel=0&modestbranding=1`)} className="group cursor-pointer block">
                    <BracketFrame className="p-4 bg-transparent transition-colors group-hover:bg-background" bracketColor="border-foreground">
                      <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest mb-4">
                        <span className="text-secondary">{work.category}</span>
                        <span className="text-foreground flex items-center gap-1.5 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span> PLAY
                        </span>
                      </div>
                      
                      <div className="relative w-full overflow-hidden bg-foreground/5 mb-4 aspect-video group-hover:opacity-85 transition-opacity">
                        <Image
                          src={work.image}
                          alt={work.title}
                          fill
                          className="object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-xl">
                            <Play size={20} fill="currentColor" className="ml-1" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-[10px] font-mono text-secondary uppercase tracking-widest mb-2">
                        {work.category} / {work.year}
                      </div>
                      <h3 className="text-lg font-bold tracking-tight uppercase text-foreground group-hover:text-accent transition-colors">
                        {work.title}
                      </h3>
                    </BracketFrame>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 3. SHORTS & REELS (9:16 Vertical Phone Aspect Ratio) */}
          {(activeTab === 'all' || activeTab === 'shorts') && (
            <section>
              <div className="flex justify-between items-end mb-8 border-b-2 border-foreground pb-4">
                <h3 className="text-xl md:text-2xl font-mono font-bold tracking-widest uppercase flex items-center gap-3">
                  <Smartphone size={22} className="text-accent" />
                  Shorts & Viral Reels (9:16 Vertical)
                </h3>
                <span className="text-xs font-mono text-secondary">[{SHORTS_REELS.length} Reels]</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {SHORTS_REELS.map((work) => (
                  <div key={work.id} onClick={() => setActiveVideoUrl(`https://www.youtube.com/embed/${work.youtubeId}?autoplay=1&rel=0&modestbranding=1`)} className="group cursor-pointer block">
                    <BracketFrame className="p-3 bg-transparent transition-colors group-hover:bg-background" bracketColor="border-foreground">
                      <div className="flex justify-between items-center text-[9px] font-mono uppercase tracking-widest mb-3">
                        <span className="text-secondary">9:16 Vertical</span>
                        <span className="text-accent font-bold">REEL</span>
                      </div>
                      
                      <div className="relative w-full overflow-hidden bg-foreground/5 mb-3 aspect-[9/16] rounded-sm group-hover:opacity-85 transition-opacity">
                        <Image
                          src={work.image}
                          alt={work.title}
                          fill
                          className="object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-xl">
                            <Play size={18} fill="currentColor" className="ml-0.5" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-[9px] font-mono text-secondary uppercase tracking-widest mb-1">
                        {work.category} / {work.year}
                      </div>
                      <h3 className="text-sm font-bold tracking-tight uppercase text-foreground group-hover:text-accent transition-colors truncate">
                        {work.title}
                      </h3>
                    </BracketFrame>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 4. MOTION GRAPHICS & VFX */}
          {(activeTab === 'all' || activeTab === 'motion') && (
            <section>
              <div className="flex justify-between items-end mb-8 border-b-2 border-foreground pb-4">
                <h3 className="text-xl md:text-2xl font-mono font-bold tracking-widest uppercase flex items-center gap-3">
                  <Layers size={22} className="text-accent" />
                  Motion Graphics & VFX (After Effects)
                </h3>
                <span className="text-xs font-mono text-secondary">[{MOTION_GRAPHICS.length} Projects]</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MOTION_GRAPHICS.map((work) => (
                  <div key={work.id} onClick={() => setActiveVideoUrl(`https://www.youtube.com/embed/${work.youtubeId}?autoplay=1&rel=0&modestbranding=1`)} className="group cursor-pointer block">
                    <BracketFrame className="p-4 bg-transparent transition-colors group-hover:bg-background" bracketColor="border-foreground">
                      <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest mb-4">
                        <span className="text-secondary">{work.category}</span>
                        <span className="text-foreground flex items-center gap-1.5 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span> PLAY
                        </span>
                      </div>
                      
                      <div className="relative w-full overflow-hidden bg-foreground/5 mb-4 aspect-video group-hover:opacity-85 transition-opacity">
                        <Image
                          src={work.image}
                          alt={work.title}
                          fill
                          className="object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-xl">
                            <Play size={20} fill="currentColor" className="ml-1" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-[10px] font-mono text-secondary uppercase tracking-widest mb-2">
                        {work.category} / {work.year}
                      </div>
                      <h3 className="text-lg font-bold tracking-tight uppercase text-foreground group-hover:text-accent transition-colors">
                        {work.title}
                      </h3>
                    </BracketFrame>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 5. WEB & APP DEVELOPMENT */}
          {(activeTab === 'all' || activeTab === 'web-apps') && (
            <section>
              <div className="flex justify-between items-end mb-8 border-b-2 border-foreground pb-4">
                <h3 className="text-xl md:text-2xl font-mono font-bold tracking-widest uppercase flex items-center gap-3">
                  <Code size={22} className="text-accent" />
                  Web & App Development
                </h3>
                <span className="text-xs font-mono text-secondary">[{WEB_PROJECTS.length + APPS.length} Platforms]</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Web Projects */}
                {WEB_PROJECTS.map((work) => (
                  <a key={work.id} href={work.link} target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
                    <BracketFrame className="p-4 bg-transparent transition-colors group-hover:bg-background" bracketColor="border-foreground">
                      <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest mb-4">
                        <span className="text-secondary">Web Development</span>
                        <span className="text-foreground flex items-center gap-1.5 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span> {work.status.toUpperCase()}
                        </span>
                      </div>
                      
                      <div className="relative w-full overflow-hidden bg-foreground/5 mb-4 aspect-video shadow-md">
                        <Image
                          src={work.image}
                          alt={work.name}
                          fill
                          className="object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      
                      <div className="text-[10px] font-mono text-secondary uppercase tracking-widest mb-2">
                        {work.category}
                      </div>
                      <h3 className="text-lg font-bold tracking-tight uppercase text-foreground group-hover:text-accent transition-colors flex items-center justify-between">
                        {work.name}
                        <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                    </BracketFrame>
                  </a>
                ))}

                {/* Software Apps */}
                {APPS.map((work) => (
                  <a key={work.id} href={work.link} target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
                    <BracketFrame className="p-4 bg-transparent transition-colors group-hover:bg-background" bracketColor="border-foreground">
                      <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest mb-4">
                        <span className="text-secondary">App Development</span>
                        <span className="text-foreground flex items-center gap-1.5 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span> {work.status.toUpperCase()}
                        </span>
                      </div>
                      
                      <div className="relative w-full overflow-hidden bg-foreground/5 mb-4 aspect-video shadow-md">
                        <Image
                          src={work.image}
                          alt={work.name}
                          fill
                          className="object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      
                      <div className="text-[10px] font-mono text-secondary uppercase tracking-widest mb-2">
                        SOFTWARE / {work.status.toUpperCase()}
                      </div>
                      <h3 className="text-lg font-bold tracking-tight uppercase text-foreground group-hover:text-accent transition-colors flex items-center justify-between">
                        {work.name}
                        <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                    </BracketFrame>
                  </a>
                ))}

              </div>
            </section>
          )}

          {/* 6. AI & ANIMATION */}
          {(activeTab === 'all' || activeTab === 'ai') && (
            <section>
              <div className="flex justify-between items-end mb-8 border-b-2 border-foreground pb-4">
                <h3 className="text-xl md:text-2xl font-mono font-bold tracking-widest uppercase flex items-center gap-3">
                  <Sparkles size={22} className="text-accent" />
                  AI & Generative Animation
                </h3>
                <span className="text-xs font-mono text-secondary">[{ANIMATIONS.length} Films]</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ANIMATIONS.map((work) => (
                  <div key={work.id} onClick={() => setActiveVideoUrl(`https://www.youtube.com/embed/${work.youtubeId}?autoplay=1&rel=0&modestbranding=1`)} className="group cursor-pointer block">
                    <BracketFrame className="p-4 bg-transparent transition-colors group-hover:bg-background" bracketColor="border-foreground">
                      <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest mb-4">
                        <span className="text-secondary">AI Animation</span>
                        <span className="text-foreground flex items-center gap-1.5 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span> PLAY
                        </span>
                      </div>
                      
                      <div className="relative w-full overflow-hidden bg-foreground/5 mb-4 aspect-video group-hover:opacity-85 transition-opacity">
                        <Image
                          src={work.image}
                          alt={work.title}
                          fill
                          className="object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-xl">
                            <Play size={20} fill="currentColor" className="ml-1" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-[10px] font-mono text-secondary uppercase tracking-widest mb-2">
                        {work.category} / {work.year}
                      </div>
                      <h3 className="text-lg font-bold tracking-tight uppercase text-foreground group-hover:text-accent transition-colors">
                        {work.title}
                      </h3>
                    </BracketFrame>
                  </div>
                ))}
              </div>
            </section>
          )}

        </motion.div>
      </AnimatePresence>

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
            className="w-full max-w-5xl aspect-video bg-black shadow-2xl relative rounded-xl overflow-hidden border border-white/10"
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
