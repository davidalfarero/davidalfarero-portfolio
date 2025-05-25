import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import React, { useState, useEffect } from 'react';
import { AboutSection } from "@/components/AboutSection";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div>
        <ThemeToggle isMenuOpen={isMenuOpen} />
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <HeroSection  />
        <AboutSection />
      </div>
    </>
  )
}

export default App
