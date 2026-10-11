import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { sound } from '../utils/audio';


export function Navbar({ soundEnabled, setSoundEnabled, activeName, setActiveName, onOpenResume }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HELLO', href: '#hello' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CERTS', href: '#certifications' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    sound.playPop();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    const nextState = sound.toggle();
    setSoundEnabled(nextState);
    if (nextState) sound.playPop();
  };

  const toggleName = () => {
    sound.playBoing();
    setActiveName(prev => prev === 'SURYANSHU' ? 'SOURAV' : 'SURYANSHU');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#121212] text-white border-b-[3.5px] border-black shadow-[0_4px_0_rgba(0,0,0,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div className="flex items-center space-x-3">
          <a 
            href="#hello" 
            onClick={() => sound.playPop()}
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-[#F2C230] border-2 border-white flex items-center justify-center font-bubble text-black text-xl font-bold shadow-[2px_2px_0_#fff] group-hover:scale-105 transition-transform">
              ⚡
            </div>
            <span className="font-bubble text-lg md:text-xl font-bold tracking-wider text-white group-hover:text-[#F294C8] transition-colors">
              SURYANSHU<span className="text-[#F2C230]">.DEV</span>
            </span>
          </a>

          {/* Persona toggle pill */}
          <button
            onClick={toggleName}
            title="Toggle between Suryanshu Dhakad and Mockup Persona (Sourav)"
            className="hidden sm:inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-[#262626] border border-[#444] text-[#F2C230] hover:border-[#F294C8] hover:text-white transition-all cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-[#F294C8]" />
            <span>NAME: {activeName}</span>
          </button>
        </div>

        {/* Center / Right: Desktop Navigation exactly as requested */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
          {navLinks.map((link, idx) => (
            <React.Fragment key={link.label}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-1.5 font-mono text-sm tracking-widest font-bold text-white hover:text-[#F2C230] hover:scale-105 transition-all focus:outline-none"
              >
                {link.label}
              </a>
              {idx < navLinks.length - 1 && (
                <span className="text-[#F27830] font-mono font-black select-none">//</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Action controls on right */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* Sound FX Button */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? "Mute comic sound effects" : "Enable comic sound effects"}
            className="p-2 rounded-lg border-2 border-white/40 bg-[#1e1e1e] text-white hover:border-[#F2C230] hover:text-[#F2C230] transition-colors cursor-pointer"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-[#F2C230]" /> : <VolumeX className="w-4 h-4 text-gray-400" />}
          </button>

          {/* Quick Resume Button */}
          <button
            onClick={() => {
              sound.playLaser();
              if (onOpenResume) onOpenResume();
            }}
            className="px-3 py-1.5 rounded-md bg-[#F27830] text-black font-bubble text-sm font-bold border-2 border-white shadow-[2px_2px_0_#fff] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#fff] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer flex items-center space-x-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={toggleSound}
            className="p-1.5 rounded border border-white/40 text-white"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-[#F2C230]" /> : <VolumeX className="w-4 h-4" />}
          </button>
          
          <button
            onClick={() => {
              sound.playPop();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-md bg-[#222] border border-white text-white hover:text-[#F2C230] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#181818] border-b-4 border-black px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-3 py-2 rounded-md text-base font-mono font-bold text-white hover:bg-[#262626] hover:text-[#F2C230]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-700 flex items-center justify-between">
            <button
              onClick={toggleName}
              className="text-xs font-mono font-bold text-[#F2C230] py-1 px-2 rounded bg-black border border-gray-600"
            >
              TOGGLE NAME: {activeName}
            </button>
            <button
              onClick={() => {
                sound.playLaser();
                setMobileMenuOpen(false);
                if (onOpenResume) onOpenResume();
              }}
              className="px-3 py-1.5 rounded bg-[#F27830] text-black font-bubble text-sm font-bold border border-white"
            >
              RESUME
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
