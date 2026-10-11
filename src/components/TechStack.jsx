import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Zap, Send, Eye, Check, Sparkles, Layers, Star } from 'lucide-react';
import { sound } from '../utils/audio';

export function TechStack() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const cards = [
    {
      id: 'frontend',
      title: 'Frontend',
      iconType: 'lightning',
      bannerAsset: '/assets/card-1-lightning.png',
      technologies: 'React, Javascript, HTML/CSS',
      extraPills: ['Tailwind CSS', 'Vite', 'Responsive Design', 'DOM Manipulation'],
      note: 'Hand-crafted component designs, fluid responsive layouts, snappy state transitions, and accessible UX.',
      color: '#F294C8'
    },
    {
      id: 'backend',
      title: 'Backend',
      iconType: 'airplane',
      bannerAsset: '/assets/card-2-airplane.png',
      technologies: 'Node.js, Express, MongoDB, SQL',
      extraPills: ['REST APIs', 'JWT Auth', 'MERN Architecture', 'Database Schema'],
      note: 'Scalable Express micro-routes, resilient MongoDB document models, structured SQL tables, and airtight auth.',
      color: '#F294C8'
    },
    {
      id: 'mobile-ai',
      title: 'Mobile & AI',
      iconType: 'eye',
      bannerAsset: '/assets/card-3-eye.png',
      technologies: 'Flutter, AI Prototyping',
      extraPills: ['Google Veo', 'Lovable', 'v0 Prototyping', 'Maps & Weather APIs'],
      note: 'Cross-platform mobile apps, spatial awareness with Maps/Weather APIs, and next-gen AI prototyping tools.',
      color: '#F294C8'
    },
    {
      id: 'dsa-cpp',
      title: 'Problem Solving & DSA',
      iconType: 'code',
      bannerAsset: '/assets/card-4-dsa.png',
      technologies: 'C++, Data Structures, Algorithms',
      extraPills: ['Time/Space Complexity', 'Trees & Graphs', 'Dynamic Programming', 'OOP & STL', 'Memory Optimization'],
      note: 'Algorithmic rigor, optimal asymptotic complexity, clean C++ STL implementations, and competitive coding.',
      color: '#F294C8'
    }
  ];

  const handleNext = () => {
    sound.playPop();
    setActiveCardIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    sound.playPop();
    setActiveCardIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section 
      id="tech-stack" 
      className="relative w-full bg-[#F2C230] pt-6 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden text-[#121212]"
    >
      {/* Background Comic Dots */}
      <div className="absolute inset-0 bg-comic-dots-light pointer-events-none opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Centered Header with Doodle Accents */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 relative">
          
          {/* Floating Doodles */}
          <div className="absolute -top-6 left-4 sm:left-12 text-[#F27830] text-3xl font-black select-none pointer-events-none animate-comic-float">
            ⚡
          </div>
          <div className="absolute -top-4 right-6 sm:right-16 text-black text-2xl font-black select-none pointer-events-none animate-bounce">
            ★
          </div>
          <div className="absolute top-1/2 -left-6 hidden sm:block text-black text-xl font-mono select-none">
            ➔➔➔
          </div>
          <div className="absolute top-1/2 -right-6 hidden sm:block text-black text-xl font-mono select-none">
            ✦ ✦
          </div>

          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#FFFDF0] rounded-full border-comic-sm shadow-comic-sm font-mono text-xs font-bold uppercase mb-3 text-black">
            <Layers className="w-3.5 h-3.5 text-[#F27830]" />
            <span>ARCHITECTED FOR REAL IMPACT</span>
          </div>

          <h2 className="font-bubble text-4xl sm:text-5xl md:text-6xl text-[#121212] font-black tracking-tight">
            My Tech Stack &amp; Process
          </h2>

          <p className="mt-3 font-sans text-base sm:text-lg text-[#262626] font-semibold max-w-xl mx-auto">
            Battle-tested technologies and battle-hardened full-stack engineering tools.
          </p>
        </div>

        {/* The 3 Vertical Cream-Colored Skill Cards Grid */}
        <div className="relative">
          
          {/* Flanking Chevron Navigation Arrows (matching Mockup) */}
          <button
            onClick={handlePrev}
            aria-label="Previous card"
            className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-2xl bg-[#FFFDF0] border-comic shadow-comic flex items-center justify-center hover:bg-[#F294C8] hover:translate-x-[-2px] active:translate-x-[2px] transition-all cursor-pointer hidden md:flex"
          >
            <ChevronLeft className="w-7 h-7 text-[#121212] stroke-[3.5]" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next card"
            className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-2xl bg-[#FFFDF0] border-comic shadow-comic flex items-center justify-center hover:bg-[#F294C8] hover:translate-x-[2px] active:translate-x-[-2px] transition-all cursor-pointer hidden md:flex"
          >
            <ChevronRight className="w-7 h-7 text-[#121212] stroke-[3.5]" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {cards.map((card, idx) => (
              <div
                key={card.id}
                onClick={() => {
                  sound.playPop();
                  setActiveCardIndex(idx);
                }}
                className={`card-comic rounded-3xl bg-[#FFFEEA] p-5 sm:p-6 flex flex-col justify-between cursor-pointer transition-all duration-200 ${
                  activeCardIndex === idx 
                    ? 'ring-4 ring-black scale-[1.02] shadow-comic-xl' 
                    : 'opacity-95 hover:opacity-100'
                }`}
              >
                <div>
                  {/* Pink Header Banner with Central Icon - Exactly Matching Mockup */}
                  <div className="relative w-full rounded-2xl border-comic overflow-hidden bg-[#F294C8] h-28 sm:h-32 mb-6 flex items-center justify-center group shadow-comic-sm">
                    <img 
                      src={card.bannerAsset} 
                      alt={card.title} 
                      className="w-full h-full object-cover select-none transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Card Title: Frontend / Backend / Mobile & AI */}
                  <h3 className="font-bubble text-2xl sm:text-3xl text-[#121212] font-black mb-2">
                    {card.title}
                  </h3>

                  {/* Tech Summary Line matching mockup */}
                  <p className="font-bubble text-lg text-[#262626] font-bold leading-snug mb-3">
                    {card.technologies}
                  </p>

                  {/* Hand-drawn process note */}
                  <p className="font-sans text-sm text-gray-700 font-medium leading-relaxed mb-5">
                    {card.note}
                  </p>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {card.extraPills.map((pill) => (
                      <span 
                        key={pill}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-[#FFFDF0] text-black border border-black shadow-[2px_2px_0_#121212]"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom status badge */}
                <div className="mt-6 pt-3 border-t-2 border-black/15 flex items-center justify-between text-xs font-mono font-bold text-gray-800">
                  <span className="flex items-center space-x-1">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                    <span>PRODUCTION READY</span>
                  </span>
                  <span className="text-[#F27830]">MODULE 0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Doodle Accents at Bottom: Star Speech Bubble & Sparkles (Mockup Match) */}
        <div className="mt-12 flex items-center justify-between">
          
          {/* Bottom Left: Star Speech Bubble from Mockup */}
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 hover:rotate-6 transition-transform cursor-pointer select-none" onClick={() => sound.playBoing()}>
              <img 
                src="/assets/doodle-star-bubble.png" 
                alt="Speech bubble with star doodle" 
                className="w-full h-auto object-contain drop-shadow-[4px_4px_0_#000]"
              />
            </div>
            <div className="bg-[#FFFDF0] px-3.5 py-1.5 rounded-xl border-comic shadow-comic text-xs font-bubble font-black text-black hidden sm:block">
              "NEO-BRUTALIST ARCHITECTURE"
            </div>
          </div>

          {/* Bottom Right: Star Sparkle */}
          <div className="flex items-center space-x-2 text-xs font-mono font-bold text-black bg-[#FFFDF0] px-4 py-2 rounded-xl border-comic shadow-comic">
            <span className="text-xl">✦</span>
            <span>END-TO-END MASTERY // CSE '28</span>
          </div>

        </div>

      </div>
    </section>
  );
}
