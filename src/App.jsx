import { ToastContainer } from 'react-toastify';
import { useState } from "react";
import { LoadingScreen } from "./sections/LoadingScreen";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { ProjectSection } from "./sections/ProjectSection";
import { SkillsSection } from './sections/SkillsSection';
import { HeroSection } from './sections/HeroSection';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
