'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, X, ExternalLink, Film, Sparkles, Smartphone, Layers, Code, Clapperboard, Terminal, GitBranch, ArrowUpRight } from 'lucide-react';
import BracketFrame from '@/components/BracketFrame';
import { DOCUMENTARIES, PROMOS, SHORTS_REELS, UGC_VIDEOS, MOTION_GRAPHICS, WEB_PROJECTS, APPS, ANIMATIONS } from '@/data';
import { motion, AnimatePresence } from 'framer-motion';

type CategoryTab = 'all' | 'documentaries' | 'promos' | 'web-apps' | 'shorts' | 'ugc' | 'motion' | 'ai';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<CategoryTab>('all');
  const [playingId, setPlayingId] = useState<string | null>(null);

  const totalVideoCount = DOCUMENTARIES.length + PROMOS.length + SHORTS_REELS.length + UGC_VIDEOS.length + MOTION_GRAPHICS.length + ANIMATIONS.length;
  const totalDevCount = WEB_PROJECTS.length + APPS.length;

  const tabs: { id: CategoryTab; label: string; count: number; icon: any; isSpecial?: boolean }[] = [
    { id: 'all', label: 'All Works', count: totalVideoCount + totalDevCount, icon: Clapperboard },
    { id: 'documentaries', label: 'Documentaries', count: DOCUMENTARIES.length, icon: Film },
    { id: 'promos', label: 'Promos & Commercials', count: PROMOS.length, icon: Sparkles },
    { id: 'web-apps', label: '</> Web & Apps', count: totalDevCount, icon: Code, isSpecial: true },
    { id: 'shorts', label: 'Shorts & Reels (9:16)', count: SHORTS_REELS.length, icon: Smartphone },
    { id: 'ugc', label: 'UGC & Creator Content', count: UGC_VIDEOS.length, icon: Smartphone },
    { id: 'motion', label: 'Motion Graphics', count: MOTION_GRAPHICS.length, icon: Layers },
    { id: 'ai', label: 'AI Animation', count: ANIMATIONS.length, icon: Sparkles }
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

  // Generic Reusable Video Card supporting any aspect ratio (9:16, 1:1, 16:9)
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
                  
                  {/* AI Generated Badge Tag */}
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

  // Dedicated Developer Terminal Card for Software & Web Apps
  const renderDevCard = (item: any) => {
    const isGithub = item.link && item.link.includes('github.com');
    const isLive = item.link && item.link.startsWith('http') && !isGithub;

    return (
      <div key={item.id} className="group block h-full">
        <div className="border-2 border-foreground/20 group-hover:border-foreground transition-all duration-300 bg-background/95 rounded-sm overflow-hidden flex flex-col justify-between h-full shadow-sm group-hover:shadow-2xl">
          
          {/* Terminal Title Bar */}
          <div className="bg-foreground/[0.06] px-4 py-3 border-b border-foreground/15 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block"></span>
              <span className="ml-2 font-mono text-[11px] text-foreground/80 tracking-wider font-semibold">
                {item.terminal || `zabid@dev:~/${item.id}`}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider bg-foreground/10 px-2 py-0.5 rounded text-foreground font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{item.status}</span>
            </div>
          </div>

          {/* Interactive Image Container with Hover Overlay */}
          <div className="relative w-full aspect-video bg-foreground/5 overflow-hidden border-b border-foreground/15">
            <Image
              src={item.image}
              alt={item.name}
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-white bg-accent px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                  {item.category}
                </span>
              </div>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-secondary mb-2">
                <span className="text-accent font-bold">{item.category}</span>
                <span>{item.year}</span>
              </div>

              <h4 className="text-xl font-bold uppercase tracking-tight mb-3 text-foreground group-hover:text-accent transition-colors flex items-center justify-between">
                <span>{item.name}</span>
                <Terminal size={18} className="text-secondary group-hover:text-accent transition-colors" />
              </h4>

              <p className="font-mono text-xs text-secondary leading-relaxed mb-5">
                {item.description}
              </p>

              {/* Feature Highlights */}
              {item.features && item.features.length > 0 && (
                <div className="mb-5 space-y-1.5 bg-foreground/[0.03] p-3 rounded border border-foreground/10">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-secondary font-bold mb-1">Key Architecture:</div>
                  {item.features.map((feature: string, idx: number) => (
                    <div key={idx} className="font-mono text-[11px] text-foreground flex items-center gap-2">
                      <span className="text-accent font-bold">›</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack Pills */}
              {item.techStack && item.techStack.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.techStack.map((tech: string, idx: number) => (
                    <span key={idx} className="font-mono text-[10px] px-2.5 py-1 bg-foreground/5 border border-foreground/15 rounded text-foreground font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-foreground/15">
              {isGithub ? (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-foreground text-background hover:bg-accent hover:text-white px-5 py-3 rounded font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <GitBranch size={14} />
                  <span>View Source Repository</span>
                  <ArrowUpRight size={14} />
                </a>
              ) : isLive ? (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-accent text-white hover:bg-foreground hover:text-background px-5 py-3 rounded font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <span>Launch Live Platform</span>
                  <ArrowUpRight size={14} />
                </a>
              ) : (
                <div className="w-full py-2.5 text-center font-mono text-[11px] text-secondary border border-dashed border-foreground/20 rounded uppercase tracking-wider">
                  Production Client Architecture
                </div>
              )}
            </div>

          </div>

        </div>
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
          Curated visual narratives, native 9:16 vertical creator edits, 16:9 documentary stories, and full-stack software solutions.
        </motion.p>

        {/* Dual Discipline Summary & Quick Switcher */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
          <button 
            onClick={() => setActiveTab('all')}
            className={`flex items-center gap-2.5 px-4 py-2 rounded-full border text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'all' 
                ? 'bg-foreground text-background border-foreground font-bold shadow-md' 
                : 'bg-background/80 text-secondary border-foreground/20 hover:border-foreground hover:text-foreground'
            }`}
          >
            <Clapperboard size={14} />
            <span>All Works</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              activeTab === 'all' ? 'bg-accent text-white' : 'bg-foreground/10 text-foreground'
            }`}>
              {totalVideoCount + totalDevCount}
            </span>
          </button>

          <button 
            onClick={() => setActiveTab('documentaries')}
            className={`flex items-center gap-2.5 px-4 py-2 rounded-full border text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'documentaries' || activeTab === 'promos' || activeTab === 'shorts' || activeTab === 'ugc' || activeTab === 'motion' || activeTab === 'ai'
                ? 'bg-foreground/10 text-foreground border-foreground/50 font-bold' 
                : 'bg-background/80 text-secondary border-foreground/20 hover:border-foreground hover:text-foreground'
            }`}
          >
            <Film size={14} className="text-accent" />
            <span>Video Works</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-foreground/10 text-secondary font-mono">
              {totalVideoCount}
            </span>
          </button>

          <button 
            onClick={() => setActiveTab('web-apps')}
            className={`group flex items-center gap-2.5 px-4 py-2 rounded-full border text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'web-apps'
                ? 'bg-emerald-600 text-white border-emerald-600 font-bold shadow-lg shadow-emerald-600/25' 
                : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/40 hover:bg-emerald-600 hover:text-white hover:border-emerald-600'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse group-hover:bg-white inline-block"></span>
            <Code size={14} />
            <span className="font-bold">Software & Web Apps</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 group-hover:bg-white/20 font-bold">
              {totalDevCount} Live
            </span>
          </button>
        </div>
        
        {/* External Archive Links */}
        <div className="flex flex-col sm:flex-row gap-4 items-center mb-10">
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
            href="https://github.com/zabid-coder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 border-2 border-foreground text-foreground px-7 py-3.5 text-xs font-mono font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            <GitBranch size={14} />
            GitHub Profile
          </a>
        </div>

        {/* Interactive Category Filter Tabs */}
        <div className="w-full overflow-x-auto pb-4 pt-2 no-scrollbar">
          <div className="flex justify-start md:justify-center items-center gap-2 md:gap-3 min-w-max px-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const isWeb = tab.isSpecial;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-sm font-mono text-xs uppercase tracking-wider transition-all duration-300 border ${
                    isActive 
                      ? 'bg-foreground text-background border-foreground font-bold shadow-md' 
                      : isWeb
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/50 hover:bg-emerald-500 hover:text-white font-bold'
                        : 'bg-background/80 text-secondary border-foreground/20 hover:border-foreground hover:text-foreground'
                  }`}
                >
                  {isWeb && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>}
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive 
                      ? 'bg-accent text-white font-bold' 
                      : isWeb
                        ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold'
                        : 'bg-foreground/10 text-secondary'
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

          {/* 3. SOFTWARE & WEB APPLICATIONS (Promoted to Priority Position in All Works) */}
          {(activeTab === 'all' || activeTab === 'web-apps') && (
            <section className="bg-foreground/[0.02] -mx-4 md:-mx-8 px-4 md:px-8 py-10 rounded-sm border-y border-foreground/15">
              <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-8 border-b-2 border-foreground pb-4 gap-4">
                <div>
                  <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-bold mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>DEVELOPER SPOTLIGHT & OPEN SOURCE</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-mono font-black tracking-widest uppercase flex items-center gap-3">
                    <Code size={26} className="text-emerald-600 dark:text-emerald-400" />
                    Software, Web & Automation Platforms
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-secondary font-bold">[{totalDevCount} Live Platforms]</span>
                  <a 
                    href="https://github.com/zabid-coder" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs font-bold text-accent hover:underline uppercase"
                  >
                    <span>GitHub Profile</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Apps & Software */}
                {APPS.map((app) => renderDevCard(app))}
                {/* Web Projects */}
                {WEB_PROJECTS.map((web) => renderDevCard(web))}
              </div>
            </section>
          )}

          {/* 4. SHORTS & REELS (9:16 Vertical Grid) */}
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

          {/* 5. UGC & CREATOR CONTENT (Balanced Hybrid Layout) */}
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

          {/* 6. MOTION GRAPHICS & VFX (16:9 Landscape) */}
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

          {/* 7. AI ANIMATION (SHADORITTU - 16:9) */}
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

        </motion.div>
      </AnimatePresence>

    </div>
  );
}
