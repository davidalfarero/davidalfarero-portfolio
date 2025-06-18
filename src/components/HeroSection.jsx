import { CircleChevronDown, Phone } from 'lucide-react';
import { useTypewriter } from "@/Hook/useTypewriter";

export const HeroSection = () => {
  const typedText = useTypewriter([
    'Front-end Developer',
    'UI Enthusiast',
    'Code Craftsman',
    'Lifelong Learner',
  ]);

  return (
    <main
      id="home"
      className="min-h-screen max-w-4xl mx-auto flex justify-center items-center px-2"
    >
      <div className="space-y-10">
        <h2 className="w-fit mx-auto text-2xl text-center font-semibold p-2 rounded bg-alter-bg">
          Hi, I'm David <span className="inline-block animate-wave">🤘</span></h2>
        <h1 className="text-5xl text-accent text-center h-25 md:text-6xl md:max-w-md mx-auto font-black">{typedText}<span className="animate-blink"> | </span></h1>
        <p className="section-description">Engineer of responsive UIs, API integrations, and interactive web applications.</p>
        <div className="flex items-center justify-center gap-4">
          <a
            className="bg-accent main-btn"
            href="#projects">
            View Projects <CircleChevronDown size={18} />
          </a>

          <a
            className="secondary-btn"
            href="#contact">
            Let's Talk <Phone size={15} />
          </a>
        </div>
      </div>
    </main>
  );
};