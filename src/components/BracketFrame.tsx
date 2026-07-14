import React from 'react';

interface BracketFrameProps {
  children: React.ReactNode;
  className?: string;
  bracketColor?: string;
  size?: number;
  strokeWidth?: number;
  offset?: number;
}

export default function BracketFrame({ 
  children, 
  className = "", 
  bracketColor = "border-foreground",
  size = 12,
  strokeWidth = 1,
  offset = 8
}: BracketFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Top Left Bracket */}
      <div 
        className={`absolute ${bracketColor} pointer-events-none z-10`}
        style={{
          top: `-${offset}px`,
          left: `-${offset}px`,
          width: `${size}px`,
          height: `${size}px`,
          borderTopWidth: `${strokeWidth}px`,
          borderLeftWidth: `${strokeWidth}px`
        }}
      />
      
      {/* Top Right Bracket */}
      <div 
        className={`absolute ${bracketColor} pointer-events-none z-10`}
        style={{
          top: `-${offset}px`,
          right: `-${offset}px`,
          width: `${size}px`,
          height: `${size}px`,
          borderTopWidth: `${strokeWidth}px`,
          borderRightWidth: `${strokeWidth}px`
        }}
      />
      
      {/* Bottom Left Bracket */}
      <div 
        className={`absolute ${bracketColor} pointer-events-none z-10`}
        style={{
          bottom: `-${offset}px`,
          left: `-${offset}px`,
          width: `${size}px`,
          height: `${size}px`,
          borderBottomWidth: `${strokeWidth}px`,
          borderLeftWidth: `${strokeWidth}px`
        }}
      />
      
      {/* Bottom Right Bracket */}
      <div 
        className={`absolute ${bracketColor} pointer-events-none z-10`}
        style={{
          bottom: `-${offset}px`,
          right: `-${offset}px`,
          width: `${size}px`,
          height: `${size}px`,
          borderBottomWidth: `${strokeWidth}px`,
          borderRightWidth: `${strokeWidth}px`
        }}
      />

      {children}
    </div>
  );
}
