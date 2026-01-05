import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import ServicesList from './components/ServicesList';
import ProjectGallery from './components/ProjectGallery';
import Legacy from './components/Legacy';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import Partners from './components/Partners';
import LegalDocuments from './components/LegalDocuments';

const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showLegalDocs, setShowLegalDocs] = useState(false);
  const [legalTab, setLegalTab] = useState<'privacy' | 'terms'>('privacy');

  // Show Legal Documents page
  if (showLegalDocs) {
    return <LegalDocuments onClose={() => setShowLegalDocs(false)} initialTab={legalTab} />;
  }

  // Show main site
  return (
    <div className="bg-saper-bg min-h-screen font-sans text-saper-black w-full w-full  mx-auto ">
      <Header onOpenContact={() => setIsContactOpen(true)} />

      <main>
        <Hero />
        <Intro />
        <ServicesList />
        <ProjectGallery />
        <Legacy />
        <Partners />
      </main>

      <Footer
        onOpenContact={() => setIsContactOpen(true)}
        onOpenLegal={(tab) => {
          setLegalTab(tab);
          setShowLegalDocs(true);
        }}
      />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

export default App;