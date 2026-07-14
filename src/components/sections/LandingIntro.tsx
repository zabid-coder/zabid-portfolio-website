'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LandingIntro() {
  const [hovered, setHovered] = useState<'editor' | 'developer' | null>(null);
  const router = useRouter();
  
  const cursorRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

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
    <section className="relative h-[100dvh] min-h-[600px] w-full bg-transparent flex flex-col items-center pt-[15vh] md:pt-[20vh] 2xl:pt-[25vh] pb-0 overflow-hidden">
      
      {/* Intro line */}
      <p className="text-[10px] md:text-xs 2xl:text-sm font-mono tracking-widest font-bold uppercase text-foreground/80 mb-6 z-10">
        Hi I am Zabid Al Muttaki
      </p>

      {/* Headline & Subtext Wrapper */}
      <div className="relative flex flex-col items-center w-full max-w-fit px-4">
        
        {/* Z-10 BACK LAYER (Solid text behind portrait) */}
        <div className="relative z-10 flex flex-col items-center w-full pointer-events-none">
          <h1 
            className={`font-black uppercase text-[12vw] md:text-[8.5vw] leading-[0.9] tracking-tight whitespace-nowrap transition-colors duration-500 pointer-events-auto cursor-pointer ${
              hovered === 'editor' ? 'text-accent' : (hovered === 'developer' ? 'text-background' : 'text-foreground')
            }`}
            style={{ filter: hovered === 'developer' ? blackShadow : 'none' }}
            onMouseEnter={() => setHovered('editor')}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleNavigation('/projects')}
          >
            Video Editor
          </h1>
          <h1 
            className={`font-black uppercase text-[12vw] md:text-[8.5vw] leading-[0.9] tracking-normal mt-2 md:mt-4 2xl:mt-6 whitespace-nowrap transition-all duration-500 pointer-events-auto cursor-pointer ${
              hovered === 'developer' ? 'text-accent scale-105' : 'text-background scale-100'
            }`}
            style={{ filter: hovered === 'developer' ? 'none' : blackShadow }}
            onMouseEnter={() => setHovered('developer')}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleNavigation('/projects')}
          >
            & Developer
          </h1>

          {/* Subtext + client logos */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end mt-2 2xl:mt-4 gap-4 md:gap-0 pointer-events-auto">
            <p className="text-foreground/80 font-mono text-[10px] md:text-xs 2xl:text-sm tracking-widest bg-background/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none px-2 md:px-0 rounded">
              FREELANCE, IN BANGLADESH.
            </p>
            <div className="flex items-center gap-3 md:gap-6 2xl:gap-8 opacity-60 text-[10px] md:text-xs 2xl:text-sm font-bold uppercase tracking-widest bg-background/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none px-2 md:px-0 rounded">
              <span>UNICEF</span>
              <span>World Bank</span>
              <span>BRAC</span>
              <span>WaterAid</span>
            </div>
          </div>
        </div>

        {/* Z-30 FRONT LAYER (Perfect Transparent Outline in front of portrait) */}
        <div className="absolute top-0 left-0 w-full h-full z-30 flex flex-col items-center pointer-events-none px-4 mix-blend-multiply" aria-hidden="true">
          <h1 
            className={`font-black uppercase text-[12vw] md:text-[8.5vw] leading-[0.9] tracking-tight whitespace-nowrap transition-all duration-500 text-white ${
              hovered === 'editor' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ filter: redShadow }}
          >
            Video Editor
          </h1>
          <h1 
            className={`font-black uppercase text-[12vw] md:text-[8.5vw] leading-[0.9] tracking-normal mt-2 md:mt-4 2xl:mt-6 whitespace-nowrap transition-all duration-500 text-white ${
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
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[55vh] md:h-[60vh] lg:h-[65vh] z-20 pointer-events-none"
        style={{ 
          maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)', 
          WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)' 
        }}
      >
        <div ref={portraitRef} className="relative w-full h-full" style={{ willChange: 'transform' }}>
          <Image
            src="/Zabid%20Al%20Muttaki.png"
            alt="Zabid Al Muttaki"
            fill
            priority
            className="object-contain object-bottom"
          />
        </div>
      </div>

      {/* Choice buttons */}
      <div className="relative flex flex-col sm:flex-row gap-0 mt-auto z-20 pointer-events-auto shadow-2xl">
        <button
          onClick={() => handleNavigation('/projects')}
          onMouseEnter={() => setHovered('editor')}
          onMouseLeave={() => setHovered(null)}
          className={`px-8 py-4 md:px-10 2xl:px-12 2xl:py-5 text-[10px] md:text-xs 2xl:text-sm font-mono font-bold tracking-widest uppercase transition-all duration-300 border border-transparent active:scale-95 active:bg-accent active:text-white ${
            hovered === 'editor' ? 'bg-accent text-white border-accent' : 'bg-foreground text-background'
          }`}
        >
          You need an editor
        </button>
        <button
          onClick={() => handleNavigation('/projects')}
          onMouseEnter={() => setHovered('developer')}
          onMouseLeave={() => setHovered(null)}
          className={`px-8 py-4 md:px-10 2xl:px-12 2xl:py-5 text-[10px] md:text-xs 2xl:text-sm font-mono font-bold tracking-widest uppercase transition-all duration-300 border active:scale-95 active:bg-accent active:text-white active:border-accent ${
            hovered === 'developer' ? 'bg-accent text-white border-accent' : 'bg-background text-foreground border-foreground'
          }`}
        >
          You need a developer
        </button>
      </div>
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
