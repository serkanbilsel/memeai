import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Navbar bileşenini import edin
import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/About/AboutSection';
import TokenomicsSection from './components/Tokenomics/TokenomicsSection';
import RoadmapSection from './components/Roadmap/RoadmapSection';
import WhitepaperSection from './components/WhitePaper/WhitepaperSection';
import SocialLinksSection from './components/Social/SocialLinksSection';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar'ı Router'ın içine ekleyin */}
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <AboutSection />
            <TokenomicsSection />
            <RoadmapSection />
            <SocialLinksSection />
          </>
        } />
        <Route path="/whitepaper" element={<WhitepaperSection />} />
      </Routes>
    </Router>
  );
}

export default App;
