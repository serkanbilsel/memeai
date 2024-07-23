import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TokenomicsSection from './components/TokenomicsSection';
import RoadmapSection from './components/RoadmapSection';
import WhitepaperSection from './components/WhitepaperSection';
import SocialLinksSection from './components/SocialLinksSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TokenomicsSection />
      <RoadmapSection />
      <WhitepaperSection />
      <SocialLinksSection />
    </div>
  );
}

export default App;
