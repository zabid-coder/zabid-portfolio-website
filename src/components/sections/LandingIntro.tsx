'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowRight, Play, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ClientLogos from '@/components/ClientLogos';
import BracketFrame from '@/components/BracketFrame';
import { SHOWREEL } from '@/data';

export default function LandingIntro() {
  const [hovered, setHovered] = useState<'editor' | 'developer' | null>(null);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const router = useRouter();
  
  const cursorRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowreelOpen(false);
    };
    if (showreelOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [showreelOpen]);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    // Smooth variables for trailing effect
    let cursorX = mouseX;
    let cursorY = mouseY;
    let portraitX = 0;
    let portraitY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    const renderLoop = () => {
      // Ease cursor towards mouse (very fast trailing)
      cursorX += (mouseX - cursorX) * 0.25;
      cursorY += (mouseY - cursorY) * 0.25;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX - 28}px, ${cursorY - 28}px, 0)`;
      }

      // Ease portrait (slow smooth parallax, opposite direction)
      const targetPortraitX = (mouseX / window.innerWidth - 0.5) * -40; // Max 20px movement
      const targetPortraitY = (mouseY / window.innerHeight - 0.5) * -20; // Max 10px vertical movement

      portraitX += (targetPortraitX - portraitX) * 0.08;
      portraitY += (targetPortraitY - portraitY) * 0.08;

      if (portraitRef.current) {
        portraitRef.current.style.transform = `translate3d(${portraitX}px, ${portraitY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };
    renderLoop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const blackShadow = 'drop-shadow(1px 1px 0px var(--foreground)) drop-shadow(-1px -1px 0px var(--foreground)) drop-shadow(1px -1px 0px var(--foreground)) drop-shadow(-1px 1px 0px var(--foreground))';
  const redShadow = 'drop-shadow(1px 1px 0px var(--accent)) drop-shadow(-1px -1px 0px var(--accent)) drop-shadow(1px -1px 0px var(--accent)) drop-shadow(-1px 1px 0px var(--accent))';

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <section className="relative h-[100dvh] min-h-[580px] w-full bg-transparent flex flex-col items-center pt-32 md:pt-[25vh] pb-0 overflow-hidden">
      
      {/* Intro line */}
      <p className="text-[10px] md:text-xs 2xl:text-sm font-mono tracking-widest font-bold uppercase text-foreground/80 mb-3 md:mb-6 z-10">
        Hi, I’m Zabid Al Muttaki.
      </p>

      {/* Headline & Subtext Wrapper */}
      <div className="relative flex flex-col items-center w-full max-w-fit px-4">
        
        {/* Z-10 BACK LAYER (Solid text behind portrait) */}
        <div className="relative z-10 flex flex-col items-center w-full pointer-events-none">
          <h1 
            className={`font-black uppercase text-[11vw] sm:text-[10vw] md:text-[8.5vw] leading-[0.9] tracking-tight whitespace-nowrap transition-all duration-500 pointer-events-auto cursor-pointer ${
              hovered === 'editor' ? 'text-accent scale-105' : (hovered === 'developer' ? 'text-background scale-100' : 'text-foreground scale-100')
            }`}
            style={{ filter: hovered === 'developer' ? blackShadow : 'none' }}
            onMouseEnter={() => setHovered('editor')}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleNavigation('/projects')}
          >
            Video Editor
          </h1>
          <h1 
            className={`font-black uppercase text-[11vw] sm:text-[10vw] md:text-[8.5vw] leading-[0.9] tracking-normal mt-1 md:mt-4 2xl:mt-6 whitespace-nowrap transition-all duration-500 pointer-events-auto cursor-pointer ${
              hovered === 'developer' ? 'text-accent scale-105' : 'text-background scale-100'
            }`}
            style={{ filter: hovered === 'developer' ? 'none' : blackShadow }}
            onMouseEnter={() => setHovered('developer')}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleNavigation('/projects')}
          >
            & Developer
          </h1>

          {/* Subtext + client logos perfectly aligned on baseline */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center mt-2.5 md:mt-4 2xl:mt-6 gap-2 md:gap-8 pointer-events-auto">
            <p className="text-foreground/90 font-mono text-[9px] md:text-xs 2xl:text-sm tracking-widest uppercase font-bold shrink-0">
              BASED IN DHAKA, AVAILABLE WORLDWIDE.
            </p>
            <div className="w-full md:w-auto overflow-hidden flex items-center">
              <ClientLogos />
            </div>
          </div>
        </div>

        {/* Z-30 FRONT LAYER (Perfect Transparent Outline in front of portrait) */}
        <div className="absolute top-0 left-0 w-full h-full z-30 flex flex-col items-center pointer-events-none px-4 mix-blend-multiply" aria-hidden="true">
          <h1 
            className={`font-black uppercase text-[11vw] sm:text-[10vw] md:text-[8.5vw] leading-[0.9] tracking-tight whitespace-nowrap transition-all duration-500 text-white ${
              hovered === 'editor' ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{ filter: redShadow }}
          >
            Video Editor
          </h1>
          <h1 
            className={`font-black uppercase text-[11vw] sm:text-[10vw] md:text-[8.5vw] leading-[0.9] tracking-normal mt-1 md:mt-4 2xl:mt-6 whitespace-nowrap transition-all duration-500 text-white ${
              hovered === 'developer' ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{ filter: redShadow }}
          >
            & Developer
          </h1>
        </div>

      </div>

      {/* Portrait */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[72vh] sm:h-[65vh] md:h-[60vh] lg:h-[65vh] z-20 pointer-events-none overflow-visible"
        style={{ 
          maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', 
          WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' 
        }}
      >
        <div ref={portraitRef} className="relative w-full h-full scale-[1.4] sm:scale-100 origin-bottom" style={{ willChange: 'transform' }}>
          <Image
            src="/Zabid%20Al%20Muttaki.png"
            alt="Zabid Al Muttaki"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain object-bottom"
          />
        </div>
      </div>

      {/* Bottom Action Controls Group */}
      <div className="relative mt-auto mb-4 md:mb-8 z-30 pointer-events-auto flex flex-col items-center gap-2 md:gap-3 px-4 w-full">
        {/* Twin Action Pills: Watch Showreel + Explore Work (Never wrap on mobile) */}
        <div className="flex items-center gap-2 sm:gap-3 flex-nowrap justify-center max-w-full">
          {/* Watch Showreel Pill Button */}
          <button
            onClick={() => setShowreelOpen(true)}
            className="group flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 md:px-5 md:py-2 rounded-full bg-background/95 hover:bg-accent text-foreground hover:text-white border border-accent/50 md:border-2 hover:border-accent backdrop-blur-md font-mono text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent group-hover:bg-white animate-ping"></span>
            <Play size={10} fill="currentColor" className="text-accent group-hover:text-white transition-colors ml-0.5" />
            <span>Watch Showreel</span>
          </button>

          {/* Explore Work Pill Button */}
          <button
            onClick={() => handleNavigation('/projects')}
            className="group flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 md:px-5 md:py-2 rounded-full bg-background/95 hover:bg-foreground hover:text-background border border-foreground/30 md:border-2 hover:border-foreground backdrop-blur-md font-mono text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 group-hover:bg-background transition-colors"></span>
            <span>Explore Work</span>
            <ArrowRight size={11} className="text-secondary group-hover:text-background group-hover:translate-x-0.5 transition-all" />
          </button>
        </div>

        {/* Choice buttons */}
        <div className="flex flex-col sm:flex-row gap-0 shadow-2xl w-full max-w-[320px] sm:max-w-none justify-center">
          <button
            onClick={() => handleNavigation('/contact?service=video')}
            onMouseEnter={() => setHovered('editor')}
            onMouseLeave={() => setHovered(null)}
            className={`px-5 py-2.5 md:px-10 md:py-4 2xl:px-12 2xl:py-5 text-[9px] sm:text-[10px] md:text-xs 2xl:text-sm font-mono font-bold tracking-widest uppercase transition-all duration-300 border border-transparent active:scale-95 active:bg-accent active:text-white text-center ${
              hovered === 'editor' ? 'bg-accent text-white border-accent' : 'bg-foreground text-background'
            }`}
          >
            Start a video project
          </button>
          <button
            onClick={() => handleNavigation('/contact?service=dev')}
            onMouseEnter={() => setHovered('developer')}
            onMouseLeave={() => setHovered(null)}
            className={`px-5 py-2.5 md:px-10 md:py-4 2xl:px-12 2xl:py-5 text-[9px] sm:text-[10px] md:text-xs 2xl:text-sm font-mono font-bold tracking-widest uppercase transition-all duration-300 border active:scale-95 active:bg-accent active:text-white active:border-accent text-center ${
              hovered === 'developer' ? 'bg-accent text-white border-accent' : 'bg-background text-foreground border-foreground'
            }`}
          >
            Start a development project
          </button>
        </div>
      </div>

      {/* Cinematic Brutalist Showreel Modal */}
      <AnimatePresence>
        {showreelOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setShowreelOpen(false)}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-background border border-foreground/30 shadow-2xl p-4 md:p-6"
            >
              <BracketFrame className="w-full" bracketColor="border-accent">
                {/* Modal Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-foreground/15">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
                    <span className="font-mono text-[11px] md:text-xs tracking-widest uppercase font-bold text-foreground">
                      00 // SHOWREEL 2026: &ldquo;CREATIVE OS&rdquo; (4K 60FPS)
                    </span>
                  </div>
                  <button
                    onClick={() => setShowreelOpen(false)}
                    className="flex items-center gap-1 font-mono text-[10px] md:text-xs uppercase tracking-widest text-secondary hover:text-accent font-bold transition-colors cursor-pointer"
                  >
                    <span>[ESC / CLOSE]</span>
                    <X size={14} />
                  </button>
                </div>

                {/* 16:9 Video Container */}
                <div className="relative w-full aspect-video bg-black overflow-hidden rounded-sm border border-foreground/10 shadow-inner">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${SHOWREEL.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                    title="Official Showreel"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                {/* Modal Footer / Metadata */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 mt-3 border-t border-foreground/15 font-mono text-[10px] md:text-xs">
                  <span className="text-secondary tracking-widest uppercase text-center sm:text-left">
                    REMOTION (REACT) • THREE.JS • ELEVENLABS AI • 4K 60FPS
                  </span>
                  <div className="flex items-center gap-4">
                    {SHOWREEL.linkedinUrl && (
                      <a
                        href={SHOWREEL.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-accent font-bold tracking-widest uppercase flex items-center gap-1 transition-colors"
                      >
                        <span>LINKEDIN ARCHITECTURE</span>
                        <ExternalLink size={11} />
                      </a>
                    )}
                    <a
                      href={`https://www.youtube.com/watch?v=${SHOWREEL.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-accent font-bold tracking-widest uppercase flex items-center gap-1 transition-colors"
                    >
                      <span>YOUTUBE</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              </BracketFrame>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Custom Hover Cursor Tracker */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[100]"
        style={{ willChange: 'transform' }}
      >
        {/* Animated Inner Cursor (Hidden on mobile to prevent stuck hover states) */}
        <div 
          className={`hidden md:flex w-14 h-14 bg-foreground text-background rounded-full items-center justify-center transition-all duration-300 ease-out ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>

    </section>
  );
}
