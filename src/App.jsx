import React, { useState, useEffect } from 'react';
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectSection } from "@/components/Project/ProjectSection";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
        <ThemeToggle isMenuOpen={isMenuOpen} />
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <HeroSection  />
        <AboutSection />
        <ProjectSection />
    </>
  )
}

export default App
