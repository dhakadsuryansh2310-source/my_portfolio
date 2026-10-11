import React from 'react';
import { X, ExternalLink, Download, CheckCircle2, Award, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { sound } from '../utils/audio';

export function CertificateModal({ certificate, onClose, onNext, onPrev }) {
  if (!certificate) return null;

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
      <div className="relative w-full max-w-4xl bg-[#FFFEEA] rounded-3xl border-comic-thick shadow-comic-xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header Bar */}
        <div 
          className="px-5 py-3.5 border-b-comic flex items-center justify-between text-black"
          style={{ backgroundColor: certificate.accentColor || '#F2C230' }}
        >
          <div className="flex items-center space-x-2.5 overflow-hidden">
            <span className="p-1.5 bg-white rounded-lg border-2 border-black text-xl shrink-0">
              {certificate.icon || '📜'}
            </span>
            <div className="overflow-hidden">
              <span className="font-mono text-[11px] font-black uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-black inline-block">
                {certificate.issuer}
              </span>
              <h3 className="font-bubble text-lg sm:text-xl font-black text-black truncate">
                {certificate.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <a
              href={certificate.image}
              download={`${certificate.title.toLowerCase().replace(/\s+/g, '-')}-certificate.png`}
              onClick={() => sound.playLaser()}
              className="p-2 rounded-xl bg-white text-black hover:bg-black hover:text-white border-comic shadow-comic-sm transition-all cursor-pointer hidden sm:flex items-center space-x-1 font-mono text-xs font-bold"
              title="Download Certificate"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>DOWNLOAD</span>
            </a>

            <button
              onClick={() => {
                sound.playPop();
                onClose();
              }}
              className="p-2 rounded-xl bg-white text-black hover:bg-black hover:text-white border-comic shadow-comic-sm transition-all cursor-pointer"
              title="Close Modal"
            >
              <X className="w-5 h-5 stroke-[3]" />
            </button>
          </div>
        </div>

        {/* Certificate Display Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#181818] flex flex-col items-center justify-center relative">
          
          {/* Quick Prev / Next overlay buttons */}
          {onPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                sound.playPop();
                onPrev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-2xl bg-white border-comic shadow-comic hover:bg-[#F2C230] transition-all cursor-pointer hidden sm:flex"
              title="Previous Certificate"
            >
              <ChevronLeft className="w-6 h-6 stroke-[3] text-black" />
            </button>
          )}

          {onNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                sound.playPop();
                onNext();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-2xl bg-white border-comic shadow-comic hover:bg-[#F2C230] transition-all cursor-pointer hidden sm:flex"
              title="Next Certificate"
            >
              <ChevronRight className="w-6 h-6 stroke-[3] text-black" />
            </button>
          )}

          {/* Certificate Image Frame */}
          <div className="max-w-3xl w-full bg-white p-2 sm:p-3 rounded-2xl border-comic shadow-comic-xl overflow-hidden">
            <img 
              src={certificate.image} 
              alt={certificate.title} 
              className="w-full h-auto object-contain rounded-xl select-none"
            />
          </div>

        </div>

        {/* Details & Metadata Footer */}
        <div className="px-5 py-3.5 bg-[#FFFDF0] border-t-comic flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[#121212]">
          <div className="space-y-0.5">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold">
              <span className="text-emerald-700 flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-1 stroke-[3]" />
                VERIFIED CREDENTIAL
              </span>
              <span>•</span>
              <span className="text-gray-700">Issued: {certificate.date}</span>
              {certificate.certId && (
                <>
                  <span>•</span>
                  <span className="text-gray-600">ID: {certificate.certId}</span>
                </>
              )}
            </div>
            <p className="text-xs text-gray-700 font-sans">
              Awarded to <strong className="font-bold text-black">Suryanshu Dhakad</strong>
            </p>
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
            <a
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playLaser()}
              className="btn-comic px-3.5 py-1.5 rounded-xl bg-white text-black font-bubble text-xs font-bold flex items-center space-x-1"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>OPEN FULL VIEW</span>
            </a>

            <button
              onClick={() => {
                sound.playPop();
                onClose();
              }}
              className="btn-comic px-4 py-1.5 rounded-xl bg-[#F27830] text-black font-bubble text-xs font-bold"
            >
              DONE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
