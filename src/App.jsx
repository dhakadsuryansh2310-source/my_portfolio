import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import CodingProjects from './components/CodingProjects';
import { WavyDivider, WavyDividerInverted } from './components/WavyDivider';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { TickerBar } from './components/TickerBar';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { CertificateModal } from './components/CertificateModal';
import { ExtraMile } from './components/ExtraMile';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { AtmSimulatorModal } from './components/AtmSimulatorModal';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeName, setActiveName] = useState('SURYANSHU');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [isAtmOpen, setIsAtmOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // All 5 uploaded certificates list for sequential modal navigation
  const allCertificates = [
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
      icon: '⚛️'
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
      icon: '🏆'
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
      icon: '⚡'
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
      icon: '🐍'
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
      icon: '🛡️'
    }
  ];

  const handleNextCert = () => {
    if (!selectedCert) return;
    const currentIndex = allCertificates.findIndex(c => c.id === selectedCert.id);
    const nextIndex = (currentIndex + 1) % allCertificates.length;
    setSelectedCert(allCertificates[nextIndex]);
  };

  const handlePrevCert = () => {
    if (!selectedCert) return;
    const currentIndex = allCertificates.findIndex(c => c.id === selectedCert.id);
    const prevIndex = (currentIndex - 1 + allCertificates.length) % allCertificates.length;
    setSelectedCert(allCertificates[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF0] flex flex-col selection:bg-[#F2C230] selection:text-black">
      
      {/* 1. Navigation Header Bar (Solid Black) */}
      <Navbar 
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        activeName={activeName}
        setActiveName={setActiveName}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main className="flex-grow">
        {/* 1. Hero Section (Bubblegum Pink #F294C8) */}
        <Hero 
          activeName={activeName}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Transition: Organic Wavy boundary from Pink (#F294C8) to Mustard Yellow (#F2C230) */}
        <WavyDivider 
          topColor="#F294C8" 
          bottomColor="#F2C230" 
        />

        {/* 2. About Me Section (Mustard Yellow #F2C230) */}
        <About />

        {/* 3. My Tech Stack & Process Grid (Mustard Yellow #F2C230) */}
        <TechStack />

        {/* Infinite Comic Scrolling Ticker */}
        <TickerBar />

        {/* Transition: Wavy boundary from Yellow (#F2C230) to Cream (#FFFDF2) */}
        <WavyDividerInverted 
          topColor="#121212" 
          bottomColor="#FFFDF2" 
        />

        {/* 4. Featured Work (Recent Projects) */}
        <Projects 
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenAtmSimulator={() => setIsAtmOpen(true)}
        />

        {/* Transition to Coding Platforms */}
        <WavyDivider 
          topColor="#FFFDF2" 
          bottomColor="#30ecf2" 
        />

        {/* Coding Practice Showcase */}
        <CodingProjects 
          onSelectProject={(project) => setSelectedProject(project)} 
          onOpenAtmSimulator={() => setIsAtmOpen(true)} 
        />

        {/* Transition to Certifications */}
        <WavyDivider 
          topColor="#30ecf2" 
          bottomColor="#FFFDF2" 
          reverse={true}
        />

        {/* Dedicated Certifications Section */}
        <Certifications 
          onSelectCertificate={(cert) => setSelectedCert(cert)} 
        />

        {/* Transition: Wavy boundary from Cream to Yellow */}
       

        {/* 5. The Extra Mile (Gangs of Memepur & Social Branding) */}
      

        {/* Transition: Wavy boundary from Yellow to Bubblegum Pink */}
        <WavyDivider 
          topColor="FFFDF2" 
          bottomColor="#F294C8" 
        />

        {/* 5. Contact Section & "LET'S CHAT!" Form */}
        <Contact />
      </main>

      {/* Solid Black Footer */}
      <Footer />

      {/* Modals */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <AtmSimulatorModal 
        isOpen={isAtmOpen} 
        onClose={() => setIsAtmOpen(false)} 
      />

      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      {/* Certificate Viewer Modal */}
      <CertificateModal 
        certificate={selectedCert} 
        onClose={() => setSelectedCert(null)} 
        onNext={handleNextCert}
        onPrev={handlePrevCert}
      />

    </div>
  );
}

export default App;
