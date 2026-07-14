'use client';

interface LogoProps {
  /** 'light' = cream background context (default nav), 'dark' = black background context (footer) */
  variant?: 'light' | 'dark';
  /** Show only the "Z" mark, no wordmark — useful for compact/mobile nav */
  markOnly?: boolean;
  className?: string;
}

export default function Logo({ variant = 'light', markOnly = false, className = '' }: LogoProps) {
  const isDark = variant === 'dark';

  const markBg = isDark ? '#F5F0E8' : '#141210';
  const markText = isDark ? '#141210' : '#F5F0E8';
  const wordmarkColor = isDark ? '#F5F0E8' : '#141210';
  const subColor = isDark ? 'rgba(245,240,232,0.6)' : 'rgba(20,18,16,0.6)';

  return (
    <a href="/" className={`flex items-center gap-3 group ${className}`} aria-label="Zabid Al Muttaki — Home">
      {/* Monogram mark */}
      <div
        className="relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundColor: markBg }}
      >
        <span
          className="font-black leading-none"
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: '1.15rem',
            color: markText,
          }}
        >
          Z
        </span>
        {/* red accent square */}
        <span
          className="absolute"
          style={{
            bottom: '4px',
            right: '4px',
            width: '5px',
            height: '5px',
            backgroundColor: '#E8402C',
          }}
        />
      </div>

      {/* Wordmark */}
      {!markOnly && (
        <div className="leading-tight">
          <div
            className="font-black uppercase tracking-tight"
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: '0.95rem',
              color: wordmarkColor,
              letterSpacing: '0.02em',
            }}
          >
            Zabid
          </div>
          <div
            className="uppercase"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: subColor,
              marginTop: '1px',
            }}
          >
            Al Muttaki
          </div>
        </div>
      )}
    </a>
  );
}
