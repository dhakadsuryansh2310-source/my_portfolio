import React, { useState } from 'react';
import { ArrowDownRight, Sparkles, Terminal, Code2, Heart, ExternalLink } from 'lucide-react';
import { sound } from '../utils/audio';

export function Hero({ activeName = 'SURYANSHU', onOpenResume }) {
  const [activeSpeech, setActiveSpeech] = useState(null);

  const handleHeroCta = () => {
    sound.playLaser();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFigureClick = (dialogue) => {
    sound.playBoing();
    setActiveSpeech(dialogue);
    setTimeout(() => {
      setActiveSpeech(null);
    }, 4000);
  };

  return (
    <section 
      id="hello" 
      className="relative w-full bg-[#F294C8] pt-10 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Comic Accents & Halftone dots */}
      <div className="absolute inset-0 bg-comic-dots-light pointer-events-none opacity-40"></div>
      
      {/* Floating Star Doodles */}
      <div className="absolute top-8 left-6 text-black select-none pointer-events-none text-2xl font-black animate-comic-float">
        ✦
      </div>
      <div className="absolute top-24 right-12 text-black select-none pointer-events-none text-3xl font-black animate-comic-pulse">
        ★
      </div>
      <div className="absolute bottom-20 left-1/4 text-white text-stroke-sm select-none pointer-events-none text-4xl animate-comic-float" style={{ animationDelay: '1s' }}>
        ⚡
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Chunky Bubble Typography & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status pill badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#FFFDF0] border-comic shadow-comic-sm font-mono text-xs font-bold uppercase tracking-wider text-black">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse border border-black"></span>
              <span>BANSAL CSE '28 • CGPA: 7.19 • OPEN FOR WORK</span>
            </div>

            {/* Bubble Typography: "hello I'M SURYANSHU" matching mockup */}
            <div className="space-y-1 select-none">
              <h1 className="bubble-heading-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
                hello I'M
              </h1>
              <div className="relative inline-block">
                <span className="bubble-heading-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-normal">
                  {activeName}
                </span>
                {/* Floating mini sticker on the name */}
                <div className="absolute -top-3 -right-6 sm:-right-8 bg-[#F2C230] text-black font-bubble text-xs sm:text-sm font-black px-2 py-0.5 rounded-md border-comic shadow-comic-sm rotate-12">
                  FULL-STACK!
                </div>
              </div>
            </div>

            {/* Sub-headline: Exactly matching prompt & mockup */}
            <div className="space-y-2 max-w-xl">
              <h2 className="font-bubble text-2xl sm:text-3xl md:text-4xl text-[#121212] font-bold leading-snug">
                A 3rd-year student &amp; <br className="hidden sm:inline"/>
                Full-Stack Developer... kinda
              </h2>
              <p className="font-sans text-base sm:text-lg md:text-xl text-[#1a1a1a] font-semibold leading-relaxed">
                building apps, web, and everything in between.
              </p>
            </div>

            {/* Resume / Profile Micro Details */}
            <div className="flex flex-wrap gap-2 text-xs font-mono font-bold">
              <span className="px-2.5 py-1 bg-white/80 rounded-md border-comic-sm shadow-comic-sm">
                ⚡ React &amp; Node.js
              </span>
              <span className="px-2.5 py-1 bg-white/80 rounded-md border-comic-sm shadow-comic-sm">
                🌿 MERN &amp; MongoDB
              </span>
              <span className="px-2.5 py-1 bg-white/80 rounded-md border-comic-sm shadow-comic-sm">
                ⚙️ C++ &amp; SQL Core
              </span>
            </div>

            {/* Buttons: Chunky Orange CTA Button + Secondary */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleHeroCta}
                className="btn-comic px-8 py-4 rounded-2xl bg-[#F27830] text-black text-lg sm:text-xl font-bubble font-black tracking-wide"
              >
                <span>VIEW MY WORK</span>
                <ArrowDownRight className="w-6 h-6 ml-2 stroke-[3]" />
              </button>

              <button
                onClick={() => {
                  sound.playPop();
                  const contact = document.getElementById('contact');
                  if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-comic px-6 py-4 rounded-2xl bg-[#FFFDF0] text-black text-base sm:text-lg font-bubble font-bold"
              >
                <span>LET'S CHAT</span>
                <span className="ml-2 text-xl">👋</span>
              </button>

              <button
                onClick={() => {
                  sound.playLaser();
                  if (onOpenResume) onOpenResume();
                }}
                className="btn-comic px-6 py-4 rounded-2xl bg-[#F2C230] text-black text-base sm:text-lg font-bubble font-bold"
              >
                <span>RESUME</span>
                <span className="ml-2 text-xl">📄</span>
              </button>
            </div>

            {/* Mini prompt about identity */}
            <p className="text-xs font-mono text-black/75 pt-1">
              💼 <span className="underline font-bold">Suryanshu Dhakad</span> (Raisen / Bhopal) • Bansal Institute of Science &amp; Technology
            </p>
          </div>

          {/* Right Column: Isometric Cartoon Coding Machine Robot */}
          <div className="lg:col-span-5 flex justify-center items-center relative mt-4 lg:mt-0">
            
            {/* Interactive Speech Bubble Popup when clicking figurine */}
            {activeSpeech && (
              <div className="absolute -top-12 z-30 bg-white border-comic shadow-comic px-4 py-2 rounded-xl text-black font-bubble text-sm font-bold animate-bounce speech-bubble-bottom">
                {activeSpeech}
              </div>
            )}

            {/* Main Robot Showcase Container */}
            <div className="relative group w-full max-w-[480px]">
              
              {/* Backing comic frame */}
              <div className="relative rounded-3xl p-3 sm:p-4 bg-[#FFFDF0] border-comic-thick shadow-comic-xl transition-all duration-300">
                
                {/* Comic corner stamp */}
                <div className="absolute -top-4 -left-4 bg-[#F2C230] text-black border-comic px-3 py-1 rounded-lg font-bubble text-xs font-black shadow-comic-sm z-20 flex items-center space-x-1">
                  <span>⚡</span>
                  <span>ISOMETRIC BOT V3.0</span>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-[#F27830] text-black border-comic px-3 py-1 rounded-lg font-bubble text-xs font-black shadow-comic-sm z-20">
                  CLICK FIGURINES! 👆
                </div>

                {/* The Extracted High-Resolution Robot Artwork */}
                <div className="relative overflow-hidden rounded-2xl border-2 border-black/10 bg-[#F294C8] flex items-center justify-center p-2">
                  <img 
                    src="/assets/hero-robot-raw.png" 
                    alt="Isometric cartoon coding machine robot populated by human figurines climbing ladders and coding" 
                    className="w-full h-auto object-contain select-none transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Interactive Figurine Hotspots directly overlaid on the robot */}
                  
                  {/* Hotspot 1: Deck Coder on Top (working on laptop) */}
                  <button
                    onClick={() => handleFigureClick("Deck Coder: Deploying MERN stack with 0 bugs! 🚀")}
                    title="Deck Coder"
                    className="absolute top-[22%] right-[24%] w-10 h-10 rounded-full bg-white/30 hover:bg-[#F2C230]/80 border-2 border-black/80 flex items-center justify-center cursor-pointer transition-all hover:scale-125"
                  >
                    <span className="text-xs">💻</span>
                  </button>

                  {/* Hotspot 2: Ladder Climber on Right */}
                  <button
                    onClick={() => handleFigureClick("Climber: Scaling up APIs and backend architecture! 🪜")}
                    title="Ladder Climber"
                    className="absolute bottom-[22%] right-[16%] w-10 h-10 rounded-full bg-white/30 hover:bg-[#F27830]/80 border-2 border-black/80 flex items-center justify-center cursor-pointer transition-all hover:scale-125"
                  >
                    <span className="text-xs">🪜</span>
                  </button>

                  {/* Hotspot 3: VR Developer on Circular Pad */}
                  <button
                    onClick={() => handleFigureClick("VR Scout: Exploring modern UI and interactive spatial 3D! 🥽")}
                    title="VR Developer on Pedestal"
                    className="absolute bottom-[26%] left-[22%] w-11 h-11 rounded-full bg-white/30 hover:bg-[#F2C230]/80 border-2 border-black/80 flex items-center justify-center cursor-pointer transition-all hover:scale-125"
                  >
                    <span className="text-xs">🥽</span>
                  </button>

                  {/* Hotspot 4: Checklist Note Badge (top-left) */}
                  <button
                    onClick={() => handleFigureClick("Checklist: ✓ React.js ✓ Node.js ✓ REST APIs ✓ DSA in C++")}
                    title="Checklist Badge"
                    className="absolute top-[16%] left-[20%] w-8 h-8 rounded-full bg-white/40 hover:bg-white border-2 border-black/80 flex items-center justify-center cursor-pointer transition-all hover:scale-125"
                  >
                    <span className="text-xs">📝</span>
                  </button>

                  {/* Hotspot 5: Thumbs-up badge (top-right) */}
                  <button
                    onClick={() => handleFigureClick("QA Bot: 100% tests passing! Ready for hackathon demo! 👍")}
                    title="Thumbs Up Badge"
                    className="absolute top-[18%] right-[10%] w-8 h-8 rounded-full bg-white/40 hover:bg-white border-2 border-black/80 flex items-center justify-center cursor-pointer transition-all hover:scale-125"
                  >
                    <span className="text-xs">👍</span>
                  </button>
                </div>

                {/* Micro Caption Bar */}
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono font-bold text-gray-700 px-1">
                  <span>STATUS: CODES RUNNING SMOOTHLY</span>
                  <span className="text-emerald-600 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block mr-1"></span>
                    ONLINE
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
