import React from 'react';

export function WavyDivider({ 
  topColor = "#F294C8", 
  bottomColor = "#F2C230", 
  reverse = false,
  className = "" 
}) {
  return (
    <div 
      className={`relative w-full overflow-hidden leading-none z-10 ${className}`} 
      style={{ backgroundColor: topColor }}
    >
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        className={`relative block w-full h-12 md:h-20 lg:h-24 ${reverse ? 'scale-x-[-1]' : ''}`}
      >
        {/* Background wave fill */}
        <path 
          d="M0,0 C150,90 350,-40 550,60 C750,150 950,20 1200,80 L1200,120 L0,120 Z" 
          fill={bottomColor} 
        />
        {/* Thick Comic Line Outline */}
        <path 
          d="M0,0 C150,90 350,-40 550,60 C750,150 950,20 1200,80" 
          fill="none" 
          stroke="#121212" 
          strokeWidth="6" 
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function WavyDividerInverted({ 
  topColor = "#F2C230", 
  bottomColor = "#FFFDF2", 
  className = "" 
}) {
  return (
    <div 
      className={`relative w-full overflow-hidden leading-none z-10 ${className}`} 
      style={{ backgroundColor: topColor }}
    >
      <svg 
        viewBox="0 0 1200 100" 
        preserveAspectRatio="none" 
        className="relative block w-full h-10 md:h-16"
      >
        <path 
          d="M0,40 C300,110 600,-20 900,80 C1050,110 1150,70 1200,50 L1200,100 L0,100 Z" 
          fill={bottomColor} 
        />
        <path 
          d="M0,40 C300,110 600,-20 900,80 C1050,110 1150,70 1200,50" 
          fill="none" 
          stroke="#121212" 
          strokeWidth="5" 
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
