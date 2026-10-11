import React from 'react';
import { sound } from '../utils/audio';
import { ArrowUpRight, Terminal } from 'lucide-react';

const codingProjects = [
  {
    id: 'leetcode',
    title: 'LeetCode Solutions',
    subtitle: 'Algorithm Practice & Problem Solving',
    category: 'CODING',
    tagBadge: 'ALGO PRACTICE',
    github: 'https://leetcode.com/u/vSGV1e2NHQ/',
    description: 'Curated collection of clean, well-documented solutions for LeetCode problems across data structures and algorithms.',
    metrics: ['150+ problems solved', 'Optimized O(N) solutions', 'Detailed explanations'],
    stack: ['JavaScript', 'Node.js'],
    accentColor: '#F294C8', // Pink
    shadowColor: '#121212',
    featured: true,
    icon: '🧩',
    hasSimulator: false,
  },
  {
    id: 'hackerrank',
    title: 'HackerRank Challenges',
    subtitle: 'Skill Building & Certifications',
    category: 'CODING',
    tagBadge: 'SKILL BUILDING',
    github: 'https://www.hackerrank.com/profile/dhakadsuryansh21',
    description: 'Repository of solved HackerRank challenges focusing on algorithms, SQL, and AI.',
    metrics: ['200+ challenges', 'SQL mastery', 'AI tracks'],
    stack: ['Python', 'SQL'],
    accentColor: '#F2C230', // Mustard
    shadowColor: '#121212',
    featured: true,
    icon: '🔧',
    hasSimulator: false,
  },
  {
    id: 'codechef',
    title: 'CodeChef Contest Archive',
    subtitle: 'Competitive Programming Portfolio',
    category: 'CODING',
    tagBadge: 'COMPETITIVE',
    github: 'https://www.codechef.com/users/for_world_66',
    description: 'Archive of CodeChef contest solutions with focus on performance and readability.',
    metrics: ['500+ problems', 'Top 10% rankings', 'Efficient code'],
    stack: ['C++', 'Java'],
    accentColor: '#F27830', // Orange
    shadowColor: '#121212',
    featured: true,
    icon: '🏆',
    hasSimulator: false,
  },
];

function redirect(url) {
  window.open(url, '_blank');
}

export function CodingProjects({ onSelectProject, onOpenAtmSimulator }) {
  return (
    <section id="coding-projects" className="relative w-full bg-[#30ecf2] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-[#121212] overflow-hidden">
      {/* Comic Halftone texture */}
      <div className="absolute inset-0 bg-comic-dots-light pointer-events-none opacity-20" />

      {/* Floating Stars */}
      <div className="absolute top-12 right-12 text-[#F27830] text-3xl font-black select-none pointer-events-none animate-comic-float">✦</div>
      <div className="absolute bottom-20 left-8 text-[#F294C8] text-4xl font-black select-none pointer-events-none animate-comic-pulse">★</div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#F2C230] rounded-lg border-comic-sm shadow-comic-sm font-mono text-xs font-bold text-black uppercase mb-3">
              <span className="w-3.5 h-3.5 bg-white rounded-full" />
              <span>CODING PLATFORMS</span>
            </div>
            <h2 className="font-bubble text-4xl sm:text-5xl md:text-6xl text-[#121212] font-black tracking-tight">
              Coding Practice Showcase
            </h2>
            <p className="mt-2 font-sans text-base sm:text-lg text-gray-700 font-medium">
              Highlights of algorithmic problem solving and competitive programming work across popular coding platforms.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {codingProjects.map((project, idx) => (
            <div
              key={project.id}
              className="card-comic rounded-xl bg-[#FFFEEA] p-6 sm:p-8 flex flex-col justify-between relative group"
              style={{ transform: idx % 2 === 0 ? 'rotate(-0.5deg)' : 'rotate(0.5deg)' }}
            >
              <div className='w-[300px] h-[200px]'>
                <div className="flex items-center gap-6 justify-center mb-2">
                  <span className="text-2xl p-1 bg-white rounded-lg border-2 border-black shadow-[2px_2px_0_#121212]">{project.icon}</span>
                  <h3 className="font-bubble text-2xl sm:text-3xl font-black text-[#121212] mb-1">{project.title}</h3>
                </div>
                <div className="pt-4 border-t-2 border-black/15 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => { sound.playLaser(); redirect(project.github) }}
                    className="btn-comic px-5 py-2.5 rounded-xl bg-[#F27830] text-black font-bubble text-sm sm:text-base font-black flex items-center space-x-1.5"
                  >
                    <span>VISIT</span>
                    <ArrowUpRight className="w-5 h-5 stroke-[3]" />
                  </button>
                </div>
              </div>



            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CodingProjects;
