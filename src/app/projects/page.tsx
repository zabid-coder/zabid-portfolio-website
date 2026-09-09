'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, X, ExternalLink, Film, Sparkles, Smartphone, Layers, Code, Clapperboard } from 'lucide-react';
import BracketFrame from '@/components/BracketFrame';
import { DOCUMENTARIES, PROMOS, SHORTS_REELS, UGC_VIDEOS, MOTION_GRAPHICS, WEB_PROJECTS, APPS, ANIMATIONS } from '@/data';
import { motion, AnimatePresence } from 'framer-motion';

type CategoryTab = 'all' | 'documentaries' | 'promos' | 'shorts' | 'ugc' | 'motion' | 'ai' | 'web-apps';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<CategoryTab>('all');
  const [playingId, setPlayingId] = useState<string | null>(null);

  const tabs: { id: CategoryTab; label: string; count: number; icon: any }[] = [
    { id: 'all', label: 'All Works', count: DOCUMENTARIES.length + PROMOS.length + SHORTS_REELS.length + UGC_VIDEOS.length + MOTION_GRAPHICS.length + ANIMATIONS.length + WEB_PROJECTS.length + APPS.length, icon: Clapperboard },
    { id: 'documentaries', label: 'Documentaries', count: DOCUMENTARIES.length, icon: Film },
    { id: 'promos', label: 'Promos & Commercials', count: PROMOS.length, icon: Sparkles },
    { id: 'shorts', label: 'Shorts & Reels', count: SHORTS_REELS.length, icon: Smartphone },
    { id: 'ugc', label: 'UGC Content', count: UGC_VIDEOS.length, icon: Smartphone },
    { id: 'motion', label: 'Motion Graphics', count: MOTION_GRAPHICS.length, icon: Layers },
    { id: 'ai', label: 'AI Animation', count: ANIMATIONS.length, icon: Sparkles },
    { id: 'web-apps', label: 'Web & Apps', count: WEB_PROJECTS.length + APPS.length, icon: Code },
  ];

  const getEmbedUrl = (item: any) => {
    if (item.vimeoUrl) return item.vimeoUrl;
    if (item.youtubeId) return `https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1`;
    return '';
  };

  const getExternalUrl = (item: any) => {
    if (item.vimeoUrl) return 'https://vimeo.com/1050677882';
    if (item.youtubeId) {
      if (item.aspectRatio === '9/16') {
        return `https://www.youtube.com/shorts/${item.youtubeId}`;
      }
      return `https://www.youtube.com/watch?v=${item.youtubeId}`;
    }
    return item.videoUrl || '';
  };

  // Generic Reusable Video Card
  const renderVideoCard = (work: any, customAspect?: '9/16' | '1/1' | '16/9') => {
    const isPlaying = playingId === work.id;
    const embedUrl = getEmbedUrl(work);
    const extUrl = getExternalUrl(work);
    const ratio = customAspect || work.aspectRatio || '16/9';
    
    const aspectClass = ratio === '9/16' 
      ? 'aspect-[9/16]' 
      : (ratio === '1/1' ? 'aspect-square' : 'aspect-video');

    return (
      <div key={work.id} className="group block">
        <BracketFrame className="p-3 md:p-4 bg-transparent transition-colors group-hover:bg-background h-full flex flex-col justify-between" bracketColor="border-foreground">
          <div>
            <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest mb-3">
              <span className="text-secondary">{work.category}</span>
              <div className="flex items-center gap-3">
                {extUrl && (
                  <a 
                    href={extUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    title="Open on YouTube"
                    className="text-secondary hover:text-accent flex items-center gap-1 transition-colors font-mono font-bold"
                  >
                    <span>EXTERNAL</span>
                    <ExternalLink size={11} />
                  </a>
                )}
                <button 
                  onClick={() => setPlayingId(isPlaying ? null : work.id)}
                  className="text-foreground flex items-center gap-1.5 font-bold hover:text-accent transition-colors font-mono"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-accent'} inline-block`}></span>
                  {isPlaying ? 'CLOSE' : 'PLAY'}
                </button>
              </div>
            </div>
            
            {/* Dynamic Native Aspect Ratio Container */}
            <div className={`relative w-full overflow-hidden bg-foreground/5 mb-4 rounded-sm ${aspectClass}`}>
              {isPlaying ? (
                <div className="relative w-full h-full bg-black">
                  <iframe
                    src={embedUrl}
                    title={work.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <button
                    onClick={() => setPlayingId(null)}
                    className="absolute top-2 right-2 bg-black/80 hover:bg-accent text-white p-1 rounded-sm z-20 transition-colors"
                    title="Close inline player"
                  >
                    <X size={14} />
                  </button>
                </div>
              ) : (
                <div 
                  onClick={() => setPlayingId(work.id)}
                  className="relative w-full h-full cursor-pointer group-hover:opacity-90 transition-opacity"
                >
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    unoptimized
                    className="object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play size={18} fill="currentColor" className="ml-0.5" />
                    </div>
                  </div>
                  
                  {/* AI Generated Badge */}
                  {work.isAiGenerated && (
                    <div className="absolute top-2 left-2 bg-accent text-white px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase shadow-md flex items-center gap-1 z-10">
                      <Sparkles size={10} />
                      <span>100% AI GENERATED</span>
                    </div>
                  )}

                  {/* Ratio badge */}
                  {ratio !== '16/9' && (
                    <div className="absolute top-2 right-2 bg-black/75 px-1.5 py-0.5 rounded text-[9px] font-mono text-white font-bold">
                      {ratio === '9/16' ? '9:16' : '1:1'}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          
          <div>
            <div className="text-[10px] font-mono text-secondary uppercase tracking-widest mb-1.5 flex items-center justify-between">
              <span>{work.category} / {work.year}</span>
              {work.isAiGenerated && (
                <span className="text-accent font-bold text-[9px] font-mono tracking-wider flex items-center gap-1">
                  <Sparkles size={10} />
                  FULL AI
                </span>
              )}
            </div>
            <h3 
              onClick={() => !isPlaying && setPlayingId(work.id)}
              className="text-base md:text-lg font-bold tracking-tight uppercase text-foreground group-hover:text-accent transition-colors cursor-pointer"
            >
              {work.title}
            </h3>
            {work.description && (
              <p className="mt-1.5 font-mono text-xs text-secondary leading-relaxed">
                {work.description}
              </p>
            )}
          </div>
        </BracketFrame>
      </div>
    );
  };

  // Clean, consistent Dev / App Card
  const renderCleanDevCard = (item: any) => {
    return (
      <div key={item.id} className="group block h-full">
        <BracketFrame className="p-4 md:p-5 bg-transparent transition-colors group-hover:bg-background h-full flex flex-col justify-between" bracketColor="border-foreground">
          <div>
            <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest mb-3">
              <span className="text-accent font-bold">{item.category}</span>
              <div className="flex items-center gap-2">
                <span className="text-secondary font-mono">{item.status}</span>
                {item.link && item.link !== '#' && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-accent flex items-center gap-1 transition-colors font-mono font-bold ml-1"
                  >
                    <span>{item.link.includes('github') ? 'GITHUB' : 'LIVE'}</span>
                    <ExternalLink size={11} />
                  </a>
                )}
              </div>
            </div>

            <div className="relative w-full aspect-video bg-foreground/5 mb-4 rounded-sm overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <h3 className="text-base md:text-lg font-bold uppercase tracking-tight mb-2 text-foreground group-hover:text-accent transition-colors">
              {item.name}
            </h3>

            <p className="font-mono text-xs text-secondary leading-relaxed mb-4">
              {item.description}
            </p>
          </div>

          <div>
            {item.techStack && item.techStack.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-foreground/10">
                {item.techStack.map((tech: string, idx: number) => (
                  <span key={idx} className="font-mono text-[10px] px-2 py-0.5 bg-foreground/5 border border-foreground/10 rounded text-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </BracketFrame>
      </div>
    );
  };

  const verticalUgc = UGC_VIDEOS.filter(v => v.aspectRatio === '9/16');
  const landscapeUgc = UGC_VIDEOS.filter(v => v.aspectRatio === '16/9');

  return (
    <div className="min-h-screen w-full max-w-[1440px] mx-auto px-4 md:px-8 pt-36 md:pt-40 pb-32">
      
      {/* Header Section */}
      <div className="mb-14 md:mb-16 flex flex-col items-center text-center">
        <div className="text-[10px] font-mono tracking-widest text-secondary uppercase mb-3">FEATURED WORK & ARCHIVE</div>
        <h1 className="text-5xl md:text-[80px] font-black tracking-tighter uppercase leading-[0.9]">THE WORK</h1>
        <motion.p 
          className="mt-6 max-w-2xl font-mono text-xs md:text-sm text-secondary leading-relaxed mb-8 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Curated visual narratives, native 9:16 vertical creator edits, 16:9 documentary stories, and software applications.
        </motion.p>
        
        {/* Top Archive & Quick Nav Action Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center mb-10">
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
            className="flex items-center gap-3 border-2 border-foreground text-foreground px-7 py-3.5 text-xs font-mono font-bold tracking-widest uppercase hover:border-accent hover:text-accent transition-colors"
          >
            <Play size={14} fill="currentColor" />
            AI Animation Channel
          </a>
          <button 
            onClick={() => setActiveTab('web-apps')}
            className={`flex items-center gap-3 px-7 py-3.5 text-xs font-mono font-bold tracking-widest uppercase transition-colors border-2 ${
              activeTab === 'web-apps'
                ? 'bg-foreground text-background border-foreground shadow-md'
                : 'border-foreground text-foreground hover:border-accent hover:text-accent'
            }`}
          >
            <Code size={14} />
            <span>Web & Apps Archive</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-colors ${
              activeTab === 'web-apps' ? 'bg-accent text-white' : 'bg-foreground/10 text-foreground'
            }`}>
              {WEB_PROJECTS.length + APPS.length}
            </span>
          </button>
        </div>

        {/* Single Clean Interactive Filter Bar with Red Hover */}
        <div className="w-full overflow-x-auto pb-4 pt-2 no-scrollbar">
          <div className="flex justify-start md:justify-center items-center gap-2 md:gap-3 min-w-max px-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group flex items-center gap-2 px-4 py-2.5 rounded-sm font-mono text-xs uppercase tracking-wider transition-all duration-300 border ${
                    isActive 
                      ? 'bg-foreground text-background border-foreground font-bold shadow-md' 
                      : 'bg-background/80 text-secondary border-foreground/20 hover:border-accent hover:text-accent'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full transition-colors ${
                    isActive ? 'bg-accent text-white font-bold' : 'bg-foreground/10 text-secondary group-hover:bg-accent group-hover:text-white'
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

          {/* 1. DOCUMENTARIES (16:9 Landscape) */}
          {(activeTab === 'all' || activeTab === 'documentaries') && (
            <section>
              <div className="flex justify-between items-end mb-8 border-b-2 border-foreground pb-4">
                <h3 className="text-xl md:text-2xl font-mono font-bold tracking-widest uppercase flex items-center gap-3">
                  <Film size={22} className="text-accent" />
                  Documentary Films & Stories (16:9 Widescreen)
                </h3>
                <span className="text-xs font-mono text-secondary">[{DOCUMENTARIES.length} Films]</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {DOCUMENTARIES.map((work) => renderVideoCard(work, '16/9'))}
              </div>
            </section>
          )}

          {/* 2. PROMOS & COMMERCIALS (16:9 Landscape) */}
          {(activeTab === 'all' || activeTab === 'promos') && (
            <section>
              <div className="flex justify-between items-end mb-8 border-b-2 border-foreground pb-4">
                <h3 className="text-xl md:text-2xl font-mono font-bold tracking-widest uppercase flex items-center gap-3">
                  <Sparkles size={22} className="text-accent" />
                  Promos & Commercial Campaigns (16:9 Widescreen)
                </h3>
                <span className="text-xs font-mono text-secondary">[{PROMOS.length} Videos]</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROMOS.map((work) => renderVideoCard(work, '16/9'))}
              </div>
            </section>
          )}

          {/* 3. SHORTS & REELS (9:16 Vertical Grid) */}
          {(activeTab === 'all' || activeTab === 'shorts') && (
            <section>
              <div className="flex justify-between items-end mb-8 border-b-2 border-foreground pb-4">
                <h3 className="text-xl md:text-2xl font-mono font-bold tracking-widest uppercase flex items-center gap-3">
                  <Smartphone size={22} className="text-accent" />
                  Shorts & Reels (9:16 Vertical)
                </h3>
                <span className="text-xs font-mono text-secondary">[{SHORTS_REELS.length} Videos]</span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {SHORTS_REELS.map((work) => renderVideoCard(work, '9/16'))}
              </div>
            </section>
          )}

          {/* 4. UGC & CREATOR CONTENT (Balanced Hybrid Layout) */}
          {(activeTab === 'all' || activeTab === 'ugc') && (
            <section>
              <div className="flex justify-between items-end mb-10 border-b-2 border-foreground pb-4">
                <h3 className="text-xl md:text-2xl font-mono font-bold tracking-widest uppercase flex items-center gap-3">
                  <Smartphone size={22} className="text-accent" />
                  UGC & Creator Content
                </h3>
                <span className="text-xs font-mono text-secondary">[{UGC_VIDEOS.length} Projects]</span>
              </div>
              
              <div className="max-w-4xl mx-auto space-y-12">
                {/* Vertical Social UGC Ads (Side by Side in 2 Columns) */}
                {verticalUgc.length > 0 && (
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-secondary mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      <span>Vertical Social UGC Ads (9:16)</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {verticalUgc.map((work) => renderVideoCard(work, '9/16'))}
                    </div>
                  </div>
                )}

                {/* Widescreen POV / UGC (Centered Below with Balanced Spacing) */}
                {landscapeUgc.length > 0 && (
                  <div className="pt-6 border-t border-foreground/10">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-secondary mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                      <span>Widescreen POV & Lifestyle Content (16:9)</span>
                    </div>
                    <div className="grid grid-cols-1 gap-8">
                      {landscapeUgc.map((work) => renderVideoCard(work, '16/9'))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* 5. MOTION GRAPHICS & VFX (16:9 Landscape) */}
          {(activeTab === 'all' || activeTab === 'motion') && (
            <section>
              <div className="flex justify-between items-end mb-8 border-b-2 border-foreground pb-4">
                <h3 className="text-xl md:text-2xl font-mono font-bold tracking-widest uppercase flex items-center gap-3">
                  <Layers size={22} className="text-accent" />
                  Motion Graphics & VFX
                </h3>
                <span className="text-xs font-mono text-secondary">[{MOTION_GRAPHICS.length} Projects]</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MOTION_GRAPHICS.map((work) => renderVideoCard(work))}
              </div>
            </section>
          )}

          {/* 6. AI ANIMATION (SHADORITTU - 16:9) */}
          {(activeTab === 'all' || activeTab === 'ai') && (
            <section>
              <div className="flex justify-between items-end mb-8 border-b-2 border-foreground pb-4">
                <h3 className="text-xl md:text-2xl font-mono font-bold tracking-widest uppercase flex items-center gap-3">
                  <Sparkles size={22} className="text-accent" />
                  Shadorittu — Original AI Narrative Series
                </h3>
                <span className="text-xs font-mono text-secondary">[{ANIMATIONS.length} Episodes]</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ANIMATIONS.map((work) => renderVideoCard(work, '16/9'))}
              </div>
            </section>
          )}

          {/* 7. WEB PLATFORMS & APPLICATIONS */}
          {(activeTab === 'all' || activeTab === 'web-apps') && (
            <section>
              <div className="flex justify-between items-end mb-8 border-b-2 border-foreground pb-4">
                <h3 className="text-xl md:text-2xl font-mono font-bold tracking-widest uppercase flex items-center gap-3">
                  <Code size={22} className="text-accent" />
                  Web Platforms & Applications
                </h3>
                <span className="text-xs font-mono text-secondary">[{WEB_PROJECTS.length + APPS.length} Projects]</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {APPS.map((app) => renderCleanDevCard(app))}
                {WEB_PROJECTS.map((web) => renderCleanDevCard(web))}
              </div>
            </section>
          )}

        </motion.div>
      </AnimatePresence>

    </div>
  );
}
