import React, { useState } from 'react';
import { Award, ExternalLink, Eye, CheckCircle2, ShieldCheck, Sparkles, Filter, Calendar } from 'lucide-react';
import { sound } from '../utils/audio';

export function Certifications({ onSelectCertificate }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const certificates = [
    {
      id: 'sheryians-mern',
      title: 'MERN Fullstack Web Development',
      subtitle: 'Certificate of Excellence (Bootcamp Training)',
      issuer: 'Sheryians Coding School',
      date: '27 July 2026',
      duration: 'Aug 25, 2025 - Jul 24, 2026',
      category: 'FULLSTACK',
      image: '/certificates/sheryians-mern-stack.png',
      accentColor: '#F294C8',
      icon: '⚛️',
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Fullstack Architecture'],
      description: 'Comprehensive year-long intensive bootcamp covering end-to-end fullstack development, asynchronous JavaScript, database schema modeling, and production deployment.'
    },
    {
      id: 'bgi-hackathon',
      title: 'BGI Hackathon 2026 – Vision 2047',
      subtitle: 'Theme: Agriculture, FoodTech & Rural Innovation',
      issuer: 'Bansal Group of Institutes / AICTE',
      date: '14 May 2026',
      duration: '13-14 May 2026',
      category: 'HACKATHON',
      image: '/certificates/bgi-hackathon-cert.png',
      accentColor: '#F2C230',
      icon: '🏆',
      skills: ['National Hackathon', '600+ Teams', '2800+ Innovators', 'AgroTech Platform', 'Rapid Prototyping'],
      description: 'National-Level Innovation Platform uniting top engineering teams across India to build high-impact technological solutions for agricultural and rural progress.'
    },
    {
      id: 'cisco-js',
      title: 'JavaScript Essentials 1',
      subtitle: 'Cisco Networking Academy Program',
      issuer: 'Cisco Networking Academy',
      date: '15 May 2025',
      category: 'LANGUAGES',
      image: '/certificates/cisco-js-essentials.png',
      accentColor: '#F27830',
      icon: '⚡',
      skills: ['ES6+ JavaScript', 'Algorithms', 'DOM & Events', 'Data Structures', 'Scope & Closures'],
      description: 'Foundational certification demonstrating mastery of core JavaScript programming paradigms, memory models, functions, and algorithmic data manipulation.'
    },
    {
      id: 'hackerrank-python',
      title: 'Python (Basic) Certification',
      subtitle: 'HackerRank Skill Certification Test',
      issuer: 'HackerRank',
      date: '03 July 2026',
      certId: 'AA7E728F4C53',
      category: 'LANGUAGES',
      image: '/certificates/hackerrank-python.png',
      accentColor: '#FFFDF0',
      icon: '🐍',
      skills: ['Python Data Types', 'Algorithms', 'OOP Concepts', 'Functional Python', 'List Comprehensions'],
      description: 'Rigorous standardized technical evaluation certifying verified proficiency in Python algorithms, data structures, and object-oriented programming.'
    },
    {
      id: 'cisco-cybersecurity',
      title: 'Introduction to Cybersecurity',
      subtitle: 'Information Defense & Network Security',
      issuer: 'Cisco Networking Academy',
      date: '24 May 2026',
      certId: 'f58a6f17-0819-4b1a-823e-7b7fb6097ebc',
      category: 'SECURITY',
      image: '/certificates/cisco-cybersecurity.png',
      accentColor: '#F2C230',
      icon: '🛡️',
      skills: ['Network Defense', 'Data Privacy', 'Threat Mitigation', 'Cryptography', 'Cyber Hygiene'],
      description: 'Industry credential certifying understanding of global cyber threat landscapes, confidentiality/integrity models, network vulnerabilities, and defensive security posture.'
    }
  ];

  const categories = [
    { label: 'ALL CERTS', value: 'ALL', count: 5 },
    { label: 'FULL-STACK', value: 'FULLSTACK', count: 1 },
    { label: 'HACKATHONS', value: 'HACKATHON', count: 1 },
    { label: 'LANGUAGES', value: 'LANGUAGES', count: 2 },
    { label: 'CYBERSECURITY', value: 'SECURITY', count: 1 }
  ];

  const filteredCertificates = activeFilter === 'ALL'
    ? certificates
    : certificates.filter(c => c.category === activeFilter);

  return (
    <section 
      id="certifications" 
      className="relative w-full bg-[#FFFDF2] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-[#121212] overflow-hidden"
    >
      {/* Background Comic Dots */}
      <div className="absolute inset-0 bg-comic-dots-light pointer-events-none opacity-25"></div>

      {/* Floating Accent Doodles */}
      <div className="absolute top-12 left-10 text-3xl font-black select-none pointer-events-none animate-comic-float text-[#F27830]">
        ★
      </div>
      <div className="absolute top-20 right-12 text-3xl font-black select-none pointer-events-none animate-comic-pulse text-[#F294C8]">
        ✦
      </div>
      <div className="absolute bottom-16 right-20 text-4xl font-black select-none pointer-events-none animate-comic-float text-[#F2C230]">
        ⚡
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#F2C230] rounded-full border-comic-sm shadow-comic-sm font-mono text-xs font-black uppercase text-black mb-3">
              <Award className="w-4 h-4 text-[#121212]" />
              <span>ACCREDITED CREDENTIALS</span>
            </div>

            <h2 className="font-bubble text-4xl sm:text-5xl md:text-6xl text-[#121212] font-black tracking-tight">
              Certifications &amp; Accreditations 📜
            </h2>

            <p className="mt-2.5 font-sans text-base sm:text-lg text-gray-800 font-semibold max-w-2xl">
              Industry certifications, national hackathons, and comprehensive bootcamps validating full-stack engineering and computer science capabilities.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => {
                  sound.playPop();
                  setActiveFilter(cat.value);
                }}
                className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold border-comic cursor-pointer transition-all flex items-center space-x-1.5 ${
                  activeFilter === cat.value
                    ? 'bg-[#121212] text-white shadow-comic-sm translate-x-[-1px] translate-y-[-1px]'
                    : 'bg-white text-black hover:bg-[#F294C8] shadow-[2px_2px_0_#121212]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.2 rounded-md text-[10px] font-mono ${activeFilter === cat.value ? 'bg-[#F2C230] text-black font-black' : 'bg-gray-100 text-gray-700'}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredCertificates.map((cert, idx) => (
            <div
              key={cert.id}
              className="card-comic rounded-3xl bg-[#FFFEEA] p-5 sm:p-6 flex flex-col justify-between relative group hover:scale-[1.01] transition-transform duration-200"
            >
              <div>
                
                {/* Certificate Preview Frame with Badge */}
                <div 
                  onClick={() => {
                    sound.playLaser();
                    onSelectCertificate(cert);
                  }}
                  className="relative w-full rounded-2xl border-comic overflow-hidden mb-5 cursor-pointer bg-white group/thumb shadow-comic-sm aspect-[4/3] flex items-center justify-center p-2"
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-contain rounded-xl select-none group-hover/thumb:scale-105 transition-transform duration-300"
                  />

                  {/* Hover Overlay with "CLICK TO VIEW" pill */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <div className="btn-comic px-4 py-2 rounded-xl bg-[#F2C230] text-black font-bubble text-sm font-black flex items-center space-x-1.5 shadow-comic-sm">
                      <Eye className="w-4 h-4 stroke-[3]" />
                      <span>VIEW FULL CERTIFICATE</span>
                    </div>
                  </div>

                  {/* Top Corner Icon */}
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-lg bg-white/95 border-2 border-black font-mono text-xs font-black shadow-[2px_2px_0_#121212] flex items-center space-x-1">
                    <span>{cert.icon}</span>
                    <span>{cert.category}</span>
                  </div>
                </div>

                {/* Issuer Badge & Date */}
                <div className="flex items-center justify-between mb-2">
                  <span 
                    className="px-2.5 py-0.5 rounded-md font-mono text-[11px] font-black border border-black shadow-[1.5px_1.5px_0_#121212] uppercase"
                    style={{ backgroundColor: cert.accentColor }}
                  >
                    {cert.issuer}
                  </span>

                  <span className="font-mono text-xs font-bold text-gray-700 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {cert.date}
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="font-bubble text-xl sm:text-2xl font-black text-[#121212] mb-1 leading-snug group-hover:text-[#F27830] transition-colors">
                  {cert.title}
                </h3>

                <p className="font-mono text-xs font-bold text-gray-700 mb-3">
                  // {cert.subtitle}
                </p>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-gray-800 font-medium leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Skill Capsules */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cert.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono font-bold bg-[#FFFDF0] text-black border border-black shadow-[1.5px_1.5px_0_#121212]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Card Footer: Button to View */}
              <div className="pt-3 border-t-2 border-black/15 flex items-center justify-between">
                <span className="flex items-center space-x-1 text-xs font-mono font-bold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                  <span>VERIFIED</span>
                </span>

                <button
                  onClick={() => {
                    sound.playLaser();
                    onSelectCertificate(cert);
                  }}
                  className="btn-comic px-4 py-2 rounded-xl bg-[#F27830] text-black font-bubble text-xs sm:text-sm font-black flex items-center space-x-1.5"
                >
                  <Eye className="w-4 h-4 stroke-[3]" />
                  <span>VIEW CERTIFICATE ↗</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-[#FFFEEA] border-comic shadow-comic flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">🏅</span>
            <div>
              <h4 className="font-bubble text-lg font-black text-black">
                Continuously Expanding Core Competencies
              </h4>
              <p className="font-sans text-xs sm:text-sm text-gray-700 font-medium">
                All certificates represent rigorous hands-on assessments and verified completions.
              </p>
            </div>
          </div>

          <div className="font-mono text-xs font-bold text-black bg-white px-3 py-1.5 rounded-xl border border-black shadow-[2px_2px_0_#121212] shrink-0">
            5 VERIFIED BADGES
          </div>
        </div>

      </div>
    </section>
  );
}
