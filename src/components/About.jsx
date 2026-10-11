import React, { useState } from 'react';
import { ChevronDown, Sparkles, Award, Zap, Code, Terminal, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/audio';

export function About() {
  const [activeSpeech, setActiveSpeech] = useState(null);

  const handleScrollToTech = () => {
    sound.playBoing();
    const techSection = document.getElementById('tech-stack');
    if (techSection) {
      techSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRobotClick = (message) => {
    sound.playPop();
    setActiveSpeech(message);
    setTimeout(() => setActiveSpeech(null), 3500);
  };

  return (
    <section 
      id="about" 
      className="relative w-full bg-[#F2C230] pt-6 pb-20 px-4 sm:px-6 lg:px-8 text-[#121212] overflow-hidden"
    >
      {/* Background Comic Texture */}
      <div className="absolute inset-0 bg-comic-dots-light pointer-events-none opacity-30"></div>

      {/* Floating doodles around section */}
      <div className="absolute top-10 left-10 text-3xl font-black select-none pointer-events-none animate-comic-float">
        ⚡
      </div>
      <div className="absolute top-20 right-14 text-2xl font-black select-none pointer-events-none animate-comic-pulse">
        ★
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Grid: Isometric Robot Scene Left + Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Isometric Robot Scene matching mockup */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* Pop-up speech bubble */}
            {activeSpeech && (
              <div className="mb-3 bg-white border-comic shadow-comic px-4 py-2 rounded-xl text-black font-bubble text-sm font-bold animate-bounce speech-bubble-bottom z-30">
                {activeSpeech}
              </div>
            )}

            <div className="relative w-full max-w-[520px]">
              {/* Comic Box Container */}
              <div className="relative rounded-3xl p-3 sm:p-5 bg-[#FFFDF0] border-comic-thick shadow-comic-xl group">
                
                {/* Floating badge */}
                <div className="absolute -top-4 -left-4 bg-[#F294C8] text-black border-comic px-3 py-1 rounded-lg font-bubble text-xs font-black shadow-comic-sm z-20 flex items-center space-x-1">
                  <span>⚡</span>
                  <span>THE CODE ENGINE ROOM</span>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-[#F27830] text-black border-comic px-3 py-1 rounded-lg font-bubble text-xs font-black shadow-comic-sm z-20">
                  WIRED FOR SCALE 🔌
                </div>

                {/* The Extracted High-Resolution About Robot */}
                <div className="relative overflow-hidden rounded-2xl border-2 border-black/10 bg-[#F2C230] p-2 flex items-center justify-center">
                  <img 
                    src="/assets/about-robot-raw.png" 
                    alt="Isometric robot scene showing figures with laptops, wires, and lightning bolts" 
                    className="w-full h-auto object-contain select-none transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Hotspots on the about robot scene */}
                  <button
                    onClick={() => handleRobotClick("Laptops & Wires: Live full-stack prototyping in action! ⚡")}
                    title="Developer with Laptop"
                    className="absolute top-[48%] right-[32%] w-10 h-10 rounded-full bg-white/30 hover:bg-[#F294C8]/80 border-2 border-black flex items-center justify-center cursor-pointer transition-all hover:scale-125"
                  >
                    <span className="text-xs">⚡</span>
                  </button>

                  <button
                    onClick={() => handleRobotClick("VR Navigator: SafePath weather-routing simulation running! 🗺️")}
                    title="VR Navigator"
                    className="absolute bottom-[24%] left-[18%] w-10 h-10 rounded-full bg-white/30 hover:bg-[#F27830]/80 border-2 border-black flex items-center justify-center cursor-pointer transition-all hover:scale-125"
                  >
                    <span className="text-xs">🥽</span>
                  </button>

                  <button
                    onClick={() => handleRobotClick("Network Engineer: Cisco certified network and API pathways! 🌐")}
                    title="Network Node"
                    className="absolute bottom-[36%] right-[18%] w-9 h-9 rounded-full bg-white/30 hover:bg-[#F2C230]/80 border-2 border-black flex items-center justify-center cursor-pointer transition-all hover:scale-125"
                  >
                    <span className="text-xs">🌐</span>
                  </button>
                </div>

                {/* Card caption */}
                <div className="mt-3 flex items-center justify-between text-xs font-mono font-bold text-gray-800 px-1">
                  <span>FIGURINES AT WORK // WIRES &amp; WATTS</span>
                  <span className="text-[#F27830]">RAPID PROTOTYPING 🚀</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Content matching mockup & resume */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            
            {/* Header with hand-drawn doodle accents */}
            <div className="relative">
              <div className="inline-flex items-center space-x-1 px-3 py-1 bg-white rounded-lg border-comic-sm shadow-comic-sm font-mono text-xs font-bold text-black uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#F27830]" />
                <span>MEET THE DEVELOPER</span>
              </div>
              
              <h2 className="font-bubble text-4xl sm:text-5xl md:text-6xl text-[#121212] font-black leading-tight tracking-tight">
                The Future of <br />
                <span className="relative inline-block">
                  Web Development
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#F27830]" viewBox="0 0 200 12" fill="none">
                    <path d="M2 9C50 3 150 3 198 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>

              {/* Doodle accents around header */}
              <div className="absolute -top-3 right-4 select-none pointer-events-none text-2xl font-black text-[#F27830] animate-bounce">
                ⚡
              </div>
            </div>

            {/* Content paragraph matching prompt aesthetic & real resume information */}
            <div className="space-y-4 font-sans text-base sm:text-lg text-[#1a1a1a] font-medium leading-relaxed bg-[#FFFDF0]/90 p-5 rounded-2xl border-comic shadow-comic">
              <p>
                Need responsive frontends, robust full-stack architectures, or lightning-fast product prototypes? <strong className="font-extrabold text-black">Welcome home.</strong>
              </p>
              <p>
                I'm <strong className="text-black font-extrabold underline decoration-[#F27830] decoration-4">Suryanshu Dhakad</strong>, a 3rd-year Computer Science &amp; Engineering student at <span className="font-bold">Bansal Institute of Science &amp; Technology, Bhopal</span> (2024–2028). I'm all about delivering reliable creative engineering with smart coding, rapid prototyping, and algorithmic discipline.
              </p>
              <p className="text-sm font-sans font-normal text-gray-800">
                From conceptualizing the <strong className="font-bold text-black">Farm2Home</strong> MERN agricultural marketplace for the Smart India Hackathon to building real-time weather-aware routing algorithms with <strong className="font-bold text-black">SafePath</strong> and core transaction engines in <strong className="font-bold text-black">C++ and SQL</strong>, I build software that genuinely solves real-world pain points.
              </p>
            </div>

            {/* Academic & Hackathon Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-bubble text-center">
              <div className="p-3 bg-[#FFFDF0] rounded-xl border-comic shadow-comic-sm">
                <div className="text-2xl font-black text-[#F27830]">7.19</div>
                <div className="text-xs font-mono font-bold text-gray-700">CGPA (B.Tech CSE)</div>
              </div>
              <div className="p-3 bg-[#FFFDF0] rounded-xl border-comic shadow-comic-sm">
                <div className="text-2xl font-black text-[#F294C8]">86%</div>
                <div className="text-xs font-mono font-bold text-gray-700">CBSE Class XII &amp; X</div>
              </div>
              <div className="p-3 bg-[#FFFDF0] rounded-xl border-comic shadow-comic-sm col-span-2 sm:col-span-1">
                <div className="text-2xl font-black text-emerald-600">3+</div>
                <div className="text-xs font-mono font-bold text-gray-700">Certifications</div>
              </div>
            </div>

            {/* Flowchart Diagram Doodles (Matching bottom-right of mockup) */}
            <div className="relative pt-2 flex items-center justify-between">
              
              <div className="flex items-center space-x-2 bg-white/90 px-3 py-2 rounded-xl border-comic-sm shadow-comic-sm text-xs font-mono font-bold">
                <span className="bg-[#F27830] text-white px-2 py-0.5 rounded border border-black">IDEA</span>
                <span>➔</span>
                <span className="bg-[#F294C8] text-black px-2 py-0.5 rounded border border-black">PROTOTYPE</span>
                <span>➔</span>
                <span className="bg-[#F2C230] text-black px-2 py-0.5 rounded border border-black">DEPLOY 🚀</span>
              </div>

              {/* The extracted mockup flowchart asset */}
              <div className="hidden sm:block w-28 opacity-90 hover:opacity-100 transition-opacity">
                <img 
                  src="/assets/doodle-flowchart.png" 
                  alt="Comic flowchart diagram doodle" 
                  className="w-full h-auto object-contain rounded-lg border-2 border-black shadow-[3px_3px_0_#000]"
                />
              </div>

            </div>

          </div>

        </div>

        {/* Center Downward Chevron Pill (Directly from Mockup) */}
        <div className="mt-14 flex flex-col items-center justify-center">
          <button
            onClick={handleScrollToTech}
            title="Scroll down to Tech Stack & Process"
            className="group flex flex-col items-center focus:outline-none cursor-pointer"
          >
            <div className="w-14 h-12 rounded-2xl bg-[#FFFDF0] border-comic-thick shadow-comic flex items-center justify-center group-hover:translate-y-1 group-hover:shadow-[3px_3px_0_#000] active:translate-y-2 transition-all">
              <ChevronDown className="w-8 h-8 text-[#121212] stroke-[3.5] animate-bounce" />
            </div>
            <span className="mt-2 font-bubble text-sm font-black text-black tracking-wider uppercase">
              EXPLORE TECH STACK
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
