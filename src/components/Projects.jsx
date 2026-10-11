import React, { useState } from 'react';
import { ExternalLink, Terminal, ArrowUpRight, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { sound } from '../utils/audio';


export function Projects({ onSelectProject, onOpenAtmSimulator }) {
  const [filter, setFilter] = useState('ALL');

  const projects = [
    {
      id: 'farm2home',
      title: 'AgroBridge (Farm2Home)',
      subtitle: 'Digital Farmer-to-Consumer Marketplace',
      category: 'MERN',
      tagBadge: 'SMART INDIA HACKATHON',
      description: 'A full-stack agricultural e-commerce platform that enables farmers to sell produce directly to consumers without middleman markups. Features secure authentication, dynamic product catalog, shopping cart, and order processing.',
      metrics: ['Zero Middlemen', 'Role-Based Auth', 'Real-time Cart & Orders'],
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      accentColor: '#F294C8', // Pink
      shadowColor: '#121212',
      github: 'https://github.com/dhakadsuryansh2310-source/farm2home.git',
      featured: true,
      icon: '🌾'
    },
    {
      id: 'safepath',
      title: 'SafePath Navigation App',
      subtitle: 'Travel & Municipal Reporting Application',
      category: 'MOBILE',
      tagBadge: 'HACKATHON PROJECT',
      description: 'A smart route planning & municipal reporting application utilizing Maps and Weather APIs to analyze real-time atmospheric conditions, road hazards, and municipal issues to recommend safer journey routes.',
      metrics: ['Live Hazard Warning', 'Weather Integration', 'Municipal Tracking'],
      stack: ['Flutter', 'React.js', 'Maps API', 'Weather API', 'MongoDB', 'AWS'],
      accentColor: '#F2C230', // Mustard Yellow
      shadowColor: '#121212',
      github: 'https://github.com/dhakadsuryansh2310-source/safepath.git',
      featured: true,
      icon: '🗺️'
    },
    {
      id: 'atm-system',
      title: 'ATM Account Management System',
      subtitle: 'Core Banking & Transaction Ledger',
      category: 'SYSTEMS',
      tagBadge: 'CORE SYSTEMS',
      description: 'High-performance core banking and account management system built in C++ and SQL. Engineered with robust transaction handling, PIN encryption, account balance management, and ACID-compliant transactional consistency.',
      metrics: ['ACID Compliant', 'PIN Encryption', 'Sub-millisecond Queries'],
      stack: ['C++', 'SQL', 'Data Structures', 'OOP', 'File Systems'],
      accentColor: '#F27830', // Orange
      shadowColor: '#121212',
      hasSimulator: true,
      featured: true,
      icon: '🏧'
    },
    {
      id: 'amul-redesign',
      title: 'Front-End UI Redesign (Amul)',
      subtitle: 'Desktop Layout Redesign for FMCG Brand',
      category: 'FRONTEND',
      github: 'https://github.com/dhakadsuryansh2310-source/amul.git',
      tagBadge: 'UI/UX SHOWCASE',
      description: 'Comprehensive desktop layout redesign and user experience modernization for India\'s legendary FMCG dairy brand (Amul). Optimized category discovery, responsive grid layouts, and buttery cart animations.',
      metrics: ['Modern UX', 'Responsive Grid', 'Fast Asset Loading'],
      stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
      accentColor: '#FFFDF0', // Cream
      shadowColor: '#121212',
      featured: true,
      icon: '🥛'
    },

    ];

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const categories = [
    { label: 'ALL', value: 'ALL' },
    { label: 'FULL-STACK MERN', value: 'MERN' },
    { label: 'MOBILE & MAPS', value: 'MOBILE' },
    { label: 'C++ & SYSTEMS', value: 'SYSTEMS' },
    { label: 'UI REDESIGN', value: 'FRONTEND' }
  ];

  return (
    <section 
      id="projects" 
      className="relative w-full bg-[#FFFDF2] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-[#121212] overflow-hidden"
    >
      {/* Comic Halftone texture */}
      <div className="absolute inset-0 bg-comic-dots-light pointer-events-none opacity-20"></div>

      {/* Floating Stars */}
      <div className="absolute top-12 right-12 text-[#F27830] text-3xl font-black select-none pointer-events-none animate-comic-float">
        ✦
      </div>
      <div className="absolute bottom-20 left-8 text-[#F294C8] text-4xl font-black select-none pointer-events-none animate-comic-pulse">
        ★
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#F2C230] rounded-lg border-comic-sm shadow-comic-sm font-mono text-xs font-bold text-black uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>HAND-CRAFTED BUILDS</span>
            </div>

            <h2 className="font-bubble text-4xl sm:text-5xl md:text-6xl text-[#121212] font-black tracking-tight">
              Featured Work
            </h2>
            <p className="mt-2 font-sans text-base sm:text-lg text-gray-700 font-medium">
              Real-world systems, hackathon winners, and high-impact web architectures.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => {
                  sound.playPop();
                  setFilter(cat.value);
                }}
                className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold border-comic cursor-pointer transition-all ${
                  filter === cat.value
                    ? 'bg-[#121212] text-white shadow-comic-sm translate-x-[-1px] translate-y-[-1px]'
                    : 'bg-white text-black hover:bg-[#F294C8] shadow-[2px_2px_0_#121212]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2x2 Offset Grid with Thick Border Drop Shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="card-comic rounded-3xl bg-[#FFFEEA] p-6 sm:p-8 flex flex-col justify-between relative group"
              style={{
                // Subtle alternating angle for neo-brutalist misaligned box effect
                transform: idx % 2 === 0 ? 'rotate(-0.5deg)' : 'rotate(0.5deg)'
              }}
            >
              {/* Top Accent Strip & Category Badge */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Thick Tag Capsule */}
                  <span 
                    className="px-3.5 py-1 rounded-full text-xs font-mono font-black border-comic shadow-comic-sm tracking-wider uppercase"
                    style={{ backgroundColor: project.accentColor }}
                  >
                    {project.tagBadge}
                  </span>

                  <span className="text-2xl p-1 bg-white rounded-lg border-2 border-black shadow-[2px_2px_0_#121212]">
                    {project.icon}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-bubble text-2xl sm:text-3xl font-black text-[#121212] mb-1 group-hover:text-[#F27830] transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm font-bold text-gray-700 mb-4">
                  // {project.subtitle}
                </p>

                {/* Description */}
                <p className="font-sans text-sm sm:text-base text-gray-800 font-medium leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlight Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {project.metrics.map((m, mIdx) => (
                    <div 
                      key={mIdx} 
                      className="bg-white/80 p-2 rounded-xl border border-black/80 text-center shadow-[2px_2px_0_#121212]"
                    >
                      <span className="text-[11px] font-mono font-bold text-gray-900 block truncate">
                        {m}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Thick Tag Capsules for Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-[#FFFDF0] text-black border-2 border-black shadow-[2px_2px_0_#121212]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Bold Click/Link Button "VISIT ↗" */}
              <div className="pt-4 border-t-2 border-black/15 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  {/* Chunky VISIT ↗ button */}
                  <button
                    onClick={() => {
                      sound.playLaser();
                      if (onSelectProject) onSelectProject(project);
                    }}
                    className="btn-comic px-5 py-2.5 rounded-xl bg-[#F27830] text-black font-bubble text-sm sm:text-base font-black flex items-center space-x-1.5"
                  >
                    <span>VISIT</span>
                    <ArrowUpRight className="w-5 h-5 stroke-[3]" />
                  </button>

                  {/* ATM Simulator button for Project 3 */}
                  {project.hasSimulator && (
                    <button
                      onClick={() => {
                        sound.playBoing();
                        if (onOpenAtmSimulator) onOpenAtmSimulator();
                      }}
                      className="btn-comic px-4 py-2.5 rounded-xl bg-[#F2C230] text-black font-bubble text-sm font-black flex items-center space-x-1"
                    >
                      <Terminal className="w-4 h-4 stroke-[2.5]" />
                      <span>SIMULATOR</span>
                    </button>
                  )}
                </div>

                {/* GitHub link if available */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playPop()}
                    className="p-2.5 rounded-xl bg-white border-comic shadow-comic-sm text-black hover:bg-black hover:text-white transition-all flex items-center space-x-1 font-mono text-xs font-bold"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>CODE</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
