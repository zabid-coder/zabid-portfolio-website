'use client';
import React from 'react';

export const LOGOS = [
  {
    name: 'UNICEF',
    svg: (
      <svg className="h-4 md:h-4.5 w-auto" viewBox="0 0 110 28" fill="currentColor">
        <text x="0" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="20" letterSpacing="-1">unicef</text>
        <circle cx="76" cy="15" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M76 10 C 80 14, 80 17, 76 20 C 72 17, 72 14, 76 10 Z" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'National Geographic',
    svg: (
      <svg className="h-4 md:h-4.5 w-auto" viewBox="0 0 160 28" fill="currentColor">
        <rect x="0" y="3" width="14" height="22" fill="#FFCC00" />
        <rect x="3" y="6" width="8" height="16" fill="var(--background, #F4EFE6)" />
        <text x="20" y="14" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="9" letterSpacing="0.8">NATIONAL</text>
        <text x="20" y="23" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="9" letterSpacing="0.8">GEOGRAPHIC</text>
      </svg>
    )
  },
  {
    name: 'World Bank',
    svg: (
      <svg className="h-4 md:h-4.5 w-auto" viewBox="0 0 135 28" fill="currentColor">
        <circle cx="13" cy="14" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="13" cy="14" rx="5" ry="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="3" y1="14" x2="23" y2="14" stroke="currentColor" strokeWidth="1.5" />
        <text x="30" y="14" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="8.5" letterSpacing="0.5">THE WORLD BANK</text>
        <text x="30" y="23" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="7" letterSpacing="0.5" opacity="0.8">IBRD • IDA</text>
      </svg>
    )
  },
  {
    name: 'GIZ',
    svg: (
      <svg className="h-4 md:h-4.5 w-auto" viewBox="0 0 85 28" fill="currentColor">
        <rect x="0" y="3" width="24" height="22" fill="#E2001A" rx="1.5" />
        <text x="3.5" y="19" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="14" letterSpacing="-0.5">giz</text>
        <text x="29" y="13" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="6.5">Deutsche Gesellschaft</text>
        <text x="29" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="6.5">für Internationale</text>
      </svg>
    )
  },
  {
    name: 'UNOPS',
    svg: (
      <svg className="h-4 md:h-4.5 w-auto" viewBox="0 0 85 28" fill="currentColor">
        <rect x="0" y="4" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="10" cy="14" r="4.5" fill="currentColor" />
        <text x="25" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="16" letterSpacing="0.5">UNOPS</text>
      </svg>
    )
  },
  {
    name: 'BRAC',
    svg: (
      <svg className="h-4 md:h-4.5 w-auto" viewBox="0 0 70 28" fill="currentColor">
        <text x="0" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="21" letterSpacing="-1" fill="#EA1D76">brac</text>
      </svg>
    )
  },
  {
    name: 'British Council',
    svg: (
      <svg className="h-4 md:h-4.5 w-auto" viewBox="0 0 120 28" fill="currentColor">
        <g transform="translate(0, 5)">
          <circle cx="3.5" cy="3.5" r="3" fill="currentColor" />
          <circle cx="11.5" cy="3.5" r="3" fill="currentColor" />
          <circle cx="3.5" cy="11.5" r="3" fill="currentColor" />
          <circle cx="11.5" cy="11.5" r="3" fill="currentColor" />
        </g>
        <text x="20" y="14" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="8.5" letterSpacing="0.5">BRITISH</text>
        <text x="20" y="23" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="8.5" letterSpacing="0.5">COUNCIL</text>
      </svg>
    )
  },
  {
    name: 'Swisscontact',
    svg: (
      <svg className="h-4 md:h-4.5 w-auto" viewBox="0 0 125 28" fill="currentColor">
        <rect x="0" y="5" width="18" height="18" fill="#E2001A" rx="1.5" />
        <path d="M6 14 H12 M9 11 V17" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="square" />
        <text x="23" y="19" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="12" letterSpacing="-0.5">swisscontact</text>
      </svg>
    )
  },
  {
    name: 'WaterAid',
    svg: (
      <svg className="h-4 md:h-4.5 w-auto" viewBox="0 0 95 28" fill="currentColor">
        <path d="M7 6 C 7 6, 2 13, 2 17 C 2 20, 4.2 22, 7 22 C 9.8 22, 12 20, 12 17 C 12 13, 7 6, 7 6 Z" fill="#009CDE" />
        <text x="16" y="19" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="14" letterSpacing="-0.5">WaterAid</text>
      </svg>
    )
  },
  {
    name: 'UN Bangladesh',
    svg: (
      <svg className="h-4 md:h-4.5 w-auto" viewBox="0 0 135 28" fill="currentColor">
        <circle cx="11" cy="14" r="9" fill="none" stroke="#009EDB" strokeWidth="1.5" />
        <path d="M5 14 C 5 10, 17 10, 17 14 C 17 18, 5 18, 5 14 Z" fill="none" stroke="#009EDB" strokeWidth="1" />
        <text x="25" y="14" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="9" letterSpacing="0.5">UNITED NATIONS</text>
        <text x="25" y="23" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="8" letterSpacing="0.5" fill="#009EDB">BANGLADESH</text>
      </svg>
    )
  }
];

export default function ClientLogos() {
  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] overflow-hidden py-1">
      {/* Subtle fade edges for smooth entrance/exit */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      {/* Infinite scrolling row */}
      <div className="flex gap-6 md:gap-8 items-center animate-marquee whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity">
        {LOGOS.concat(LOGOS).map((logo, idx) => (
          <div 
            key={idx} 
            className="flex items-center justify-center shrink-0 h-6 px-1.5 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
            title={logo.name}
          >
            {logo.svg}
          </div>
        ))}
      </div>
    </div>
  );
}
