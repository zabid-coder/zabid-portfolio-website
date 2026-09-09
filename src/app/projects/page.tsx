'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, X, ExternalLink, Film, Sparkles, Smartphone, Layers, Code, Clapperboard } from 'lucide-react';
import BracketFrame from '@/components/BracketFrame';
import { DOCUMENTARIES, PROMOS, SHORTS_REELS, UGC_VIDEOS, MOTION_GRAPHICS, WEB_PROJECTS, APPS, ANIMATIONS } from '@/data';
import { motion, AnimatePresence } from 'framer-motion';

type CategoryTab = 'all' | 'documentaries' | 'promos' | 'shorts' | 'ugc' | 'motion' | 'web-apps' | 'ai';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<CategoryTab>('all');
  const [playingId, setPlayingId] = useState<string | null>(null);

  const tabs: { id: CategoryTab; label: string; count: number; icon: any }[] = [
    { id: 'all', label: 'All Works', count: DOCUMENTARIES.length + PROMOS.length + SHORTS_REELS.length + UGC_VIDEOS.length + MOTION_GRAPHICS.length + WEB_PROJECTS.length + APPS.length + ANIMATIONS.length, icon: Clapperboard },
    { id: 'documentaries', label: 'Documentaries', count: DOCUMENTARIES.length, icon: Film },
    { id: 'promos', label: 'Promos & Commercials', count: PROMOS.length, icon: Sparkles },
    { id: 'shorts', label: 'Shorts & Reels (9:16)', count: SHORTS_REELS.length, icon: Smartphone },
    { id: 'ugc', label: 'UGC & Creator Content', count: UGC_VIDEOS.length, icon: Smartphone },
    { id: 'motion', label: 'Motion Graphics', count: MOTION_GRAPHICS.length, icon: Layers },
    { id: 'web-apps', label: 'Web & Apps', count: WEB_PROJECTS.length + APPS.length, icon: Code },
    { id: 'ai', label: 'AI Animation', count: ANIMATIONS.length, icon: Sparkles }
  ];

  const getEmbedUrl = (item: any) => {
    if (item.vimeoUrl) return item.vimeoUrl;
    if (item.youtubeId) return `https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1`;
    return '';
  };

  const getExternalUrl = (item: any) => {
    if (item.vimeoUrl) return 'https://vimeo.com/1050677882';
    if (item.youtubeId) return `https://www.youtube.com/watch?v=${item.youtubeId}`;
    return item.videoUrl || '';
  };

  return (
    <div className="min-h-screen w-full max-w-[1440px] mx-auto px-4 md:px-8 pt-36 md:pt-40 pb-32">
      
      {/* Header Section */}
      <div className="mb-16 md:mb-20 flex flex-col items-center text-center">
        <div className="text-[10px] font-mono tracking-widest text-secondary uppercase mb-4">FEATURED WORK & ARCHIVE</div>
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
                {DOCUMENTARIES.map((work) => {
                  const isPlaying = playingId === work.id;
                  const embedUrl = getEmbedUrl(work);
                  const extUrl = getExternalUrl(work);
                  return (
                    <div key={work.id} className="group block">
                      <BracketFrame className="p-4 bg-transparent transition-colors group-hover:bg-background h-full flex flex-col justify-between" bracketColor="border-foreground">
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
                                  title="Open in new tab"
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
                                {isPlaying ? 'CLOSE' : 'PLAY INLINE'}
                              </button>
                            </div>
                          </div>
                          
                          {/* Media Box: Thumbnail vs Inline Video */}
                          <div className="relative w-full overflow-hidden bg-foreground/5 mb-4 aspect-video rounded-sm">
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
                                  <div className="w-13 h-13 rounded-full bg-accent text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                    <Play size={20} fill="currentColor" className="ml-0.5" />
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-[10px] font-mono text-secondary uppercase tracking-widest mb-1.5">
                            {work.category} / {work.year}
                          </div>
                          <h3 
                            onClick={() => !isPlaying && setPlayingId(work.id)}
                            className="text-base md:text-lg font-bold tracking-tight uppercase text-foreground group-hover:text-accent transition-colors cursor-pointer"
                          >
                            {work.title}
                          </h3>
                        </div>
                      </BracketFrame>
                    </div>
                  );
                })}
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
                {PROMOS.map((work) => {
                  const isPlaying = playingId === work.id;
                  const embedUrl = getEmbedUrl(work);
                  const extUrl = getExternalUrl(work);
                  return (
                    <div key={work.id} className="group block">
                      <BracketFrame className="p-4 bg-transparent transition-colors group-hover:bg-background h-full flex flex-col justify-between" bracketColor="border-foreground">
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
                                  title="Open in new tab"
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
                                {isPlaying ? 'CLOSE' : 'PLAY INLINE'}
                              </button>
                            </div>
                          </div>
                          
                          <div className="relative w-full overflow-hidden bg-foreground/5 mb-4 aspect-video rounded-sm">
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
                                  <div className="w-13 h-13 rounded-full bg-accent text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                    <Play size={20} fill="currentColor" className="ml-0.5" />
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-[10px] font-mono text-secondary uppercase tracking-widest mb-1.5">
                            {work.category} / {work.year}
                          </div>
                          <h3 
                            onClick={() => !isPlaying && setPlayingId(work.id)}
                            className="text-base md:text-lg font-bold tracking-tight uppercase text-foreground group-hover:text-accent transition-colors cursor-pointer"
                          >
                            {work.title}
                          </h3>
                        </div>
                      </BracketFrame>
                    </div>
                  );
                })}
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
                {SHORTS_REELS.map((work) => {
                  const isPlaying = playingId === work.id;
                  const embedUrl = getEmbedUrl(work);
                  const extUrl = getExternalUrl(work);
                  return (
                    <div key={work.id} className="group block">
                      <BracketFrame className="p-2.5 md:p-3 bg-transparent transition-colors group-hover:bg-background h-full flex flex-col justify-between" bracketColor="border-foreground">
                        <div>
                          <div className="relative aspect-[9/16] w-full overflow-hidden bg-foreground/5 mb-3 rounded-sm">
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
                                  title="Close player"
                                >
                                  <X size={12} />
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
                                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                  sizes="(max-width: 768px) 50vw, 20vw"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                  <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <Play size={16} fill="currentColor" className="ml-0.5" />
                                  </div>
                                </div>
                                <div className="absolute top-2 right-2 bg-black/70 px-1.5 py-0.5 rounded text-[9px] font-mono text-white">
                                  9:16
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between items-center text-[9px] font-mono text-secondary mb-1">
                            <span>{work.year}</span>
                            {extUrl && (
                              <a 
                                href={extUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-accent transition-colors font-mono"
                                title="Watch on YouTube"
                              >
                                <ExternalLink size={10} />
                              </a>
                            )}
                          </div>
                          <h4 
                            onClick={() => !isPlaying && setPlayingId(work.id)}
                            className="font-bold text-xs uppercase tracking-tight text-foreground line-clamp-2 group-hover:text-accent transition-colors cursor-pointer"
                          >
                            {work.title}
                          </h4>
                        </div>
                      </BracketFrame>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* 4. UGC & CREATOR CONTENT */}
          {(activeTab === 'all' || activeTab === 'ugc') && (
            <section>
              <div className="flex justify-between items-end mb-8 border-b-2 border-foreground pb-4">
                <h3 className="text-xl md:text-2xl font-mono font-bold tracking-widest uppercase flex items-center gap-3">
                  <Smartphone size={22} className="text-accent" />
                  UGC & Creator Content
                </h3>
                <span className="text-xs font-mono text-secondary">[{UGC_VIDEOS.length} Projects]</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {UGC_VIDEOS.map((work) => {
                  const isPlaying = playingId === work.id;
                  const embedUrl = getEmbedUrl(work);
                  const extUrl = getExternalUrl(work);
                  return (
                    <div key={work.id} className="group block">
                      <BracketFrame className="p-4 bg-transparent transition-colors group-hover:bg-background h-full flex flex-col justify-between" bracketColor="border-foreground">
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
                                  title="Open in new tab"
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
                                {isPlaying ? 'CLOSE' : 'PLAY INLINE'}
                              </button>
                            </div>
                          </div>
                          
                          <div className="relative w-full overflow-hidden bg-foreground/5 mb-4 aspect-video rounded-sm">
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
                                  <div className="w-13 h-13 rounded-full bg-accent text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                    <Play size={20} fill="currentColor" className="ml-0.5" />
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-[10px] font-mono text-secondary uppercase tracking-widest mb-1.5">
                            {work.category} / {work.year}
                          </div>
                          <h3 
                            onClick={() => !isPlaying && setPlayingId(work.id)}
                            className="text-base md:text-lg font-bold tracking-tight uppercase text-foreground group-hover:text-accent transition-colors cursor-pointer"
                          >
                            {work.title}
                          </h3>
                        </div>
                      </BracketFrame>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* 5. MOTION GRAPHICS & VFX */}
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
                {MOTION_GRAPHICS.map((work) => {
                  const isPlaying = playingId === work.id;
                  const embedUrl = getEmbedUrl(work);
                  const extUrl = getExternalUrl(work);
                  return (
                    <div key={work.id} className="group block">
                      <BracketFrame className="p-4 bg-transparent transition-colors group-hover:bg-background h-full flex flex-col justify-between" bracketColor="border-foreground">
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
                                  title="Open in new tab"
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
                                {isPlaying ? 'CLOSE' : 'PLAY INLINE'}
                              </button>
                            </div>
                          </div>
                          
                          <div className="relative w-full overflow-hidden bg-foreground/5 mb-4 aspect-video rounded-sm">
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
                                  <div className="w-13 h-13 rounded-full bg-accent text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                    <Play size={20} fill="currentColor" className="ml-0.5" />
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-[10px] font-mono text-secondary uppercase tracking-widest mb-1.5">
                            {work.category} / {work.year}
                          </div>
                          <h3 
                            onClick={() => !isPlaying && setPlayingId(work.id)}
                            className="text-base md:text-lg font-bold tracking-tight uppercase text-foreground group-hover:text-accent transition-colors cursor-pointer"
                          >
                            {work.title}
                          </h3>
                        </div>
                      </BracketFrame>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* 6. WEB & APP DEVELOPMENT */}
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
                {/* Apps & Software */}
                {APPS.map((app) => (
                  <div key={app.id} className="group block">
                    <BracketFrame className="p-6 bg-foreground/5 transition-colors group-hover:bg-background h-full flex flex-col justify-between border-transparent" bracketColor="border-foreground">
                      <div>
                        <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest mb-3">
                          <span className="text-accent font-bold">App & Automation</span>
                          <span className="text-secondary">{app.status}</span>
                        </div>
                        
                        <div className="relative w-full aspect-video bg-foreground/5 mb-4 rounded-sm overflow-hidden border border-foreground/10">
                          <Image
                            src={app.image}
                            alt={app.name}
                            fill
                            unoptimized
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>

                        <h4 className="text-xl font-bold uppercase tracking-tight mb-2 text-foreground group-hover:text-accent transition-colors">
                          {app.name}
                        </h4>
                        <p className="font-mono text-xs text-secondary leading-relaxed mb-4">
                          {app.description}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {app.features.map((f, idx) => (
                            <span key={idx} className="font-mono text-[10px] px-2 py-0.5 bg-foreground/5 border border-foreground/10 rounded text-foreground">
                              {f}
                            </span>
                          ))}
                        </div>
                        {app.link && (
                          <a 
                            href={app.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-accent hover:underline"
                          >
                            <span>View Source</span>
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </BracketFrame>
                  </div>
                ))}

                {/* Web Projects */}
                {WEB_PROJECTS.map((web) => (
                  <div key={web.id} className="group block">
                    <BracketFrame className="p-6 bg-foreground/5 transition-colors group-hover:bg-background h-full flex flex-col justify-between border-transparent" bracketColor="border-foreground">
                      <div>
                        <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest mb-3">
                          <span className="text-accent font-bold">{web.category}</span>
                          <span className="text-secondary">{web.status}</span>
                        </div>
                        
                        <div className="relative w-full aspect-video bg-foreground/5 mb-4 rounded-sm overflow-hidden border border-foreground/10">
                          <Image
                            src={web.image}
                            alt={web.name}
                            fill
                            unoptimized
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>

                        <h4 className="text-xl font-bold uppercase tracking-tight mb-2 text-foreground group-hover:text-accent transition-colors">
                          {web.name}
                        </h4>
                        <p className="font-mono text-xs text-secondary leading-relaxed mb-4">
                          {web.description}
                        </p>
                      </div>

                      <div>
                        {web.link && (
                          <a 
                            href={web.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-accent hover:underline"
                          >
                            <span>Live Preview</span>
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </BracketFrame>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 7. AI ANIMATION (SHADORITTU) */}
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
                {ANIMATIONS.map((work) => {
                  const isPlaying = playingId === work.id;
                  const embedUrl = getEmbedUrl(work);
                  const extUrl = getExternalUrl(work);
                  return (
                    <div key={work.id} className="group block">
                      <BracketFrame className="p-4 bg-transparent transition-colors group-hover:bg-background h-full flex flex-col justify-between" bracketColor="border-foreground">
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
                                  title="Open in new tab"
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
                                {isPlaying ? 'CLOSE' : 'PLAY INLINE'}
                              </button>
                            </div>
                          </div>
                          
                          <div className="relative w-full overflow-hidden bg-foreground/5 mb-4 aspect-video rounded-sm">
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
                                  <div className="w-13 h-13 rounded-full bg-accent text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                    <Play size={20} fill="currentColor" className="ml-0.5" />
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-[10px] font-mono text-secondary uppercase tracking-widest mb-1.5">
                            {work.category} / {work.year}
                          </div>
                          <h3 
                            onClick={() => !isPlaying && setPlayingId(work.id)}
                            className="text-base md:text-lg font-bold tracking-tight uppercase text-foreground group-hover:text-accent transition-colors cursor-pointer"
                          >
                            {work.title}
                          </h3>
                        </div>
                      </BracketFrame>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

        </motion.div>
      </AnimatePresence>

    </div>
  );
}
