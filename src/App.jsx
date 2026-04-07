import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import AppPreview from './components/AppPreview';
import About from './components/About';
import Team from './components/Team';
import Download from './components/Download';
import Footer from './components/Footer';
import Modal from './components/Modal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar onDownloadClick={() => setModalOpen(true)} />
      <main>
        <Hero onDownloadClick={() => setModalOpen(true)} />
        <TrustBar />
        <Features />
        <HowItWorks />
        <AppPreview />
        <About />
        <Team />
        <Download onDownloadClick={() => setModalOpen(true)} />
      </main>
      <Footer />
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
