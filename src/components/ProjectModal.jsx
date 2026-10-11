import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Globe } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { sound } from '../utils/audio';


export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FFFEEA] rounded-3xl border-comic-thick shadow-comic-xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header Strip with Comic Color */}
        <div 
          className="px-6 py-4 border-b-comic flex items-center justify-between"
          style={{ backgroundColor: project.accentColor || '#F294C8' }}
        >
          <div className="flex items-center space-x-2">
            <span className="text-2xl p-1 bg-white rounded-lg border-2 border-black shadow-[2px_2px_0_#121212]">
              {project.icon}
            </span>
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-wider text-black bg-white px-2 py-0.5 rounded border border-black inline-block">
                {project.tagBadge}
              </span>
              <h3 className="font-bubble text-2xl font-black text-black">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playPop();
              onClose();
            }}
            className="p-2 rounded-xl bg-white text-black hover:bg-black hover:text-white border-comic shadow-comic-sm transition-all cursor-pointer"
          >
            <X className="w-5 h-5 stroke-[3]" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#121212]">
          
          <div>
            <h4 className="font-bubble text-lg font-bold text-gray-900 mb-1">
              // Overview &amp; Problem Statement
            </h4>
            <p className="font-sans text-base text-gray-800 leading-relaxed bg-[#FFFDF0] p-4 rounded-2xl border-comic shadow-comic-sm">
              {project.description}
            </p>
          </div>

          {/* Key Engineering Accomplishments */}
          <div>
            <h4 className="font-bubble text-lg font-bold text-gray-900 mb-2">
              // Key Highlights &amp; System Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="flex items-center space-x-2 bg-white p-3 rounded-xl border border-black shadow-[2px_2px_0_#121212]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 stroke-[3] shrink-0" />
                  <span className="font-mono text-xs font-bold text-gray-900">{m}</span>
                </div>
              ))}
              <div className="flex items-center space-x-2 bg-white p-3 rounded-xl border border-black shadow-[2px_2px_0_#121212]">
                <Cpu className="w-4 h-4 text-[#F27830] stroke-[3] shrink-0" />
                <span className="font-mono text-xs font-bold text-gray-900">Optimized Execution &amp; Latency</span>
              </div>
            </div>
          </div>

          {/* Tech Stack Breakdown */}
          <div>
            <h4 className="font-bubble text-lg font-bold text-gray-900 mb-2">
              // Tech Stack &amp; Tools Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-[#FFFDF0] text-black border-2 border-black shadow-[2px_2px_0_#121212]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#FFFDF0] border-t-comic flex items-center justify-between">
          <div className="text-xs font-mono font-bold text-gray-600">
            SURYANSHU DHAKAD • PORTFOLIO
          </div>

          <div className="flex items-center space-x-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playLaser()}
                className="btn-comic px-4 py-2 rounded-xl bg-white text-black font-bubble text-sm font-bold flex items-center space-x-1.5"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GITHUB REPO</span>
              </a>
            )}

            <button
              onClick={() => {
                sound.playPop();
                onClose();
              }}
              className="btn-comic px-5 py-2 rounded-xl bg-[#F27830] text-black font-bubble text-sm font-bold"
            >
              CLOSE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
