import React from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { sound } from '../utils/audio';

export function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          sound.playPop();
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-5xl bg-[#FFFEEA] rounded-3xl border-comic-thick shadow-comic-xl overflow-hidden max-h-[95vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#121212] px-5 sm:px-6 py-3.5 flex items-center justify-between text-white border-b-comic">
          <div className="flex items-center space-x-2.5">
            <span className="p-1.5 bg-[#F2C230] text-black rounded-lg border-2 border-white text-lg">
              📄
            </span>
            <div>
              <span className="font-mono text-[11px] font-bold text-[#F2C230]">OFFICIAL RESUME</span>
              <h3 className="font-bubble text-lg sm:text-xl font-bold tracking-wide text-white">
                SURYANSHU DHAKAD // SOFTWARE ENGINEER
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href="/Suryanshu_Dhakad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playLaser()}
              className="p-2 rounded-xl bg-white text-black hover:bg-[#F2C230] border-comic shadow-comic-sm transition-all cursor-pointer hidden sm:flex items-center space-x-1.5 font-mono text-xs font-bold"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>OPEN TAB</span>
            </a>

            <a
              href="/Suryanshu_Dhakad_Resume.pdf"
              download="Suryanshu_Dhakad_Resume.pdf"
              onClick={() => sound.playLaser()}
              className="p-2 rounded-xl bg-[#F27830] text-black hover:bg-white border-comic shadow-comic-sm transition-all cursor-pointer hidden sm:flex items-center space-x-1.5 font-mono text-xs font-bold"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>DOWNLOAD</span>
            </a>

            <button
              onClick={() => {
                sound.playPop();
                onClose();
              }}
              className="p-2 rounded-xl bg-white text-black hover:bg-[#F27830] border-comic shadow-comic-sm transition-all cursor-pointer"
              title="Close"
            >
              <X className="w-5 h-5 stroke-[3]" />
            </button>
          </div>
        </div>

        {/* Real PDF Embed Container */}
        <div className="flex-1 bg-[#262626] p-2 sm:p-4 overflow-hidden flex flex-col items-center justify-center">
          <iframe 
            src="/Suryanshu_Dhakad_Resume.pdf#toolbar=1"
            title="Suryanshu Dhakad Resume"
            className="w-full h-[75vh] rounded-2xl border-2 border-black bg-white shadow-comic"
          />
        </div>

        {/* Footer */}
        <div className="px-5 sm:px-6 py-3.5 bg-[#FFFDF0] border-t-comic flex items-center justify-between">
          <div className="text-xs font-mono font-bold text-gray-700 hidden sm:block">
            📍 Bansal CSE '28 • dhakadsuryanshu2310@gmail.com • +91-7747995284
          </div>

          <div className="flex items-center space-x-2.5 w-full sm:w-auto justify-end">
            <a
              href="/Suryanshu_Dhakad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playLaser()}
              className="btn-comic px-4 py-2 rounded-xl bg-[#F2C230] text-black font-bubble text-xs sm:text-sm font-bold flex items-center space-x-1.5"
            >
              <ExternalLink className="w-4 h-4" />
              <span>OPEN IN NEW TAB ↗</span>
            </a>

            <a
              href="/Suryanshu_Dhakad_Resume.pdf"
              download="Suryanshu_Dhakad_Resume.pdf"
              onClick={() => sound.playLaser()}
              className="btn-comic px-4 py-2 rounded-xl bg-[#F27830] text-black font-bubble text-xs sm:text-sm font-bold flex items-center space-x-1.5"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD PDF 📥</span>
            </a>

            <button
              onClick={() => {
                sound.playPop();
                onClose();
              }}
              className="btn-comic px-5 py-2 rounded-xl bg-[#121212] text-white font-bubble text-xs sm:text-sm font-bold"
            >
              CLOSE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
