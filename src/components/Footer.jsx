import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';


export function Footer() {
  const scrollToTop = () => {
    sound.playLaser();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#121212] text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t-[4px] border-black relative overflow-hidden">
      
      {/* Decorative Stars */}
      <div className="absolute top-8 left-12 text-[#F2C230] text-2xl font-black select-none pointer-events-none animate-comic-float">
        ✦
      </div>
      <div className="absolute top-12 right-20 text-[#F294C8] text-3xl font-black select-none pointer-events-none animate-comic-pulse">
        ★
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-gray-800">
          
          {/* Brand Info Left */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 rounded-lg bg-[#F2C230] border-2 border-white flex items-center justify-center font-bubble text-black text-lg font-bold">
                ⚡
              </span>
              <span className="font-bubble text-2xl font-bold tracking-wider">
                SURYANSHU <span className="text-[#F294C8]">DHAKAD</span>
              </span>
            </div>
            
            <p className="font-sans text-sm text-gray-400 font-medium max-w-sm">
              3rd-year CSE Student at Bansal Institute of Science &amp; Technology, Bhopal. Crafting high-performance web apps, scalable backends, and creative interfaces.
            </p>
          </div>

          {/* Social Links in Vibrant Colors */}
          <div className="md:col-span-5 flex flex-wrap gap-3 sm:gap-4 items-center">
            <a
              href="https://github.com/dhakadsuryansh2310-source"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playPop()}
              className="px-4 py-2 rounded-xl bg-[#222] border-2 border-white/20 text-[#F2C230] hover:text-black hover:bg-[#F2C230] font-mono text-xs sm:text-sm font-bold transition-all shadow-[2px_2px_0_#444] hover:shadow-[3px_3px_0_#fff] hover:translate-x-[-1px] hover:translate-y-[-1px]"
            >
              // GITHUB
            </a>

            <a
              href="https://www.linkedin.com/in/suryanshu-dhakad"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playPop()}
              className="px-4 py-2 rounded-xl bg-[#222] border-2 border-white/20 text-[#F294C8] hover:text-black hover:bg-[#F294C8] font-mono text-xs sm:text-sm font-bold transition-all shadow-[2px_2px_0_#444] hover:shadow-[3px_3px_0_#fff] hover:translate-x-[-1px] hover:translate-y-[-1px]"
            >
              // LINKEDIN
            </a>

            <a
              href="mailto:dhakadsuryanshu2310@gmail.com"
              onClick={() => sound.playPop()}
              className="px-4 py-2 rounded-xl bg-[#222] border-2 border-white/20 text-[#F27830] hover:text-black hover:bg-[#F27830] font-mono text-xs sm:text-sm font-bold transition-all shadow-[2px_2px_0_#444] hover:shadow-[3px_3px_0_#fff] hover:translate-x-[-1px] hover:translate-y-[-1px]"
            >
              // EMAIL
            </a>
          </div>

          {/* Scroll to Top Rocket Button */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="group p-3 rounded-2xl bg-[#FFFDF0] text-black border-2 border-white shadow-[3px_3px_0_#fff] hover:bg-[#F27830] hover:translate-y-[-2px] active:translate-y-[2px] transition-all cursor-pointer flex items-center space-x-2"
            >
              <ArrowUp className="w-5 h-5 stroke-[3] group-hover:animate-bounce" />
              <span className="font-bubble text-xs font-black">TOP 🚀</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-400 space-y-3 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} Suryanshu Dhakad.</span>
            <span>•</span>
            <span className="text-[#F2C230]">All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-1">
            <span>Built with</span>
            <span className="text-[#F294C8]">♥</span>
            <span>in React &amp; Neo-Brutalist Comic CSS.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
