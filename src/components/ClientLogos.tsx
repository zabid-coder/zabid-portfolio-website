'use client';
import React from 'react';

export const LOGOS = [
  {
    name: 'UNICEF',
    svg: (
      <svg className="h-5 md:h-6 w-auto" viewBox="0 0 120 32" fill="currentColor">
        <text x="0" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="22" letterSpacing="-1">unicef</text>
        <circle cx="82" cy="18" r="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M82 12 C 86 16, 86 20, 82 24 C 78 20, 78 16, 82 12 Z" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'National Geographic',
    svg: (
      <svg className="h-5 md:h-6 w-auto" viewBox="0 0 170 32" fill="currentColor">
        <rect x="0" y="4" width="16" height="24" fill="#FFCC00" stroke="none" />
        <rect x="3" y="7" width="10" height="18" fill="var(--background, #141210)" />
        <text x="24" y="16" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="10" letterSpacing="1">NATIONAL</text>
        <text x="24" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="10" letterSpacing="1">GEOGRAPHIC</text>
      </svg>
    )
  },
  {
    name: 'World Bank',
    svg: (
      <svg className="h-5 md:h-6 w-auto" viewBox="0 0 140 32" fill="currentColor">
        <circle cx="14" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="14" cy="16" rx="6" ry="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="3" y1="16" x2="25" y2="16" stroke="currentColor" strokeWidth="1.5" />
        <text x="32" y="16" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="9" letterSpacing="0.5">THE WORLD BANK</text>
        <text x="32" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="500" fontSize="7" letterSpacing="0.5">IBRD • IDA</text>
      </svg>
    )
  },
  {
    name: 'GIZ',
    svg: (
      <svg className="h-5 md:h-6 w-auto" viewBox="0 0 80 32" fill="currentColor">
        <rect x="0" y="4" width="28" height="24" fill="#E2001A" rx="2" />
        <text x="4" y="22" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="16" letterSpacing="-0.5">giz</text>
        <text x="34" y="15" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="7">Deutsche Gesellschaft</text>
        <text x="34" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="7">für Internationale</text>
      </svg>
    )
  },
  {
    name: 'UNOPS',
    svg: (
      <svg className="h-5 md:h-6 w-auto" viewBox="0 0 90 32" fill="currentColor">
        <rect x="0" y="5" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="11" cy="16" r="5" fill="currentColor" />
        <text x="28" y="23" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="18" letterSpacing="0.5">UNOPS</text>
      </svg>
    )
  },
  {
    name: 'BRAC',
    svg: (
      <svg className="h-5 md:h-6 w-auto" viewBox="0 0 75 32" fill="currentColor">
        <text x="0" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="24" letterSpacing="-1" fill="#EA1D76">brac</text>
      </svg>
    )
  },
  {
    name: 'British Council',
    svg: (
      <svg className="h-5 md:h-6 w-auto" viewBox="0 0 130 32" fill="currentColor">
        <g transform="translate(0, 7)">
          <circle cx="4" cy="4" r="3.5" fill="currentColor" />
          <circle cx="13" cy="4" r="3.5" fill="currentColor" />
          <circle cx="4" cy="13" r="3.5" fill="currentColor" />
          <circle cx="13" cy="13" r="3.5" fill="currentColor" />
        </g>
        <text x="24" y="16" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="9" letterSpacing="0.5">BRITISH</text>
        <text x="24" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="9" letterSpacing="0.5">COUNCIL</text>
      </svg>
    )
  },
  {
    name: 'Swisscontact',
    svg: (
      <svg className="h-5 md:h-6 w-auto" viewBox="0 0 130 32" fill="currentColor">
        <rect x="0" y="6" width="20" height="20" fill="#E2001A" rx="2" />
        <path d="M7 16 H13 M10 13 V19" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="square" />
        <text x="26" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="13" letterSpacing="-0.5">swisscontact</text>
      </svg>
    )
  },
  {
    name: 'WaterAid',
    svg: (
      <svg className="h-5 md:h-6 w-auto" viewBox="0 0 100 32" fill="currentColor">
        <path d="M8 8 C 8 8, 2 16, 2 20 C 2 23.5, 4.8 26, 8 26 C 11.2 26, 14 23.5, 14 20 C 14 16, 8 8, 8 8 Z" fill="#009CDE" />
        <text x="18" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="15" letterSpacing="-0.5">WaterAid</text>
      </svg>
    )
  },
  {
    name: 'UN Bangladesh',
    svg: (
      <svg className="h-5 md:h-6 w-auto" viewBox="0 0 140 32" fill="currentColor">
        <circle cx="12" cy="16" r="10" fill="none" stroke="#009EDB" strokeWidth="1.5" />
        <path d="M6 16 C 6 12, 18 12, 18 16 C 18 20, 6 20, 6 16 Z" fill="none" stroke="#009EDB" strokeWidth="1.2" />
        <text x="28" y="16" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="10" letterSpacing="0.5">UNITED NATIONS</text>
        <text x="28" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="9" letterSpacing="0.5" fill="#009EDB">BANGLADESH</text>
      </svg>
    )
  }
];

export default function ClientLogos() {
  return (
    <div className="relative w-full max-w-full md:max-w-xl overflow-hidden py-1">
      {/* Subtle fade edges for smooth entrance/exit */}
      <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-background/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-background/90 to-transparent z-10 pointer-events-none" />
      
      {/* Infinite scrolling row */}
      <div className="flex gap-8 md:gap-10 items-center animate-marquee whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity">
        {LOGOS.concat(LOGOS).map((logo, idx) => (
          <div 
            key={idx} 
            className="flex items-center shrink-0 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
            title={logo.name}
          >
            {logo.svg}
          </div>
        ))}
      </div>
    </div>
  );
}
