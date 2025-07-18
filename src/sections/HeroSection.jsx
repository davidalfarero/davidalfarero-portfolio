import { CircleChevronDown, Phone } from 'lucide-react';
import { Button } from "../components/UI";
import MetricCard from "../components/MetricCard";
import { useTypewriter } from '../hooks/useTypewriter';

export const HeroSection = () => {
  const typedText = useTypewriter([
    'Full Stack Developer',
    'UI Enthusiast',
    'Code Craftsman',
    'Lifelong Learner',
  ]);

  return (
    <main
      id="home"
      className="min-h-screen bg-base-100 max-w-4xl mx-auto flex justify-center items-center pt-15 md:pt-20"
    >
      <div className="space-y-5">
        <h2 className="w-fit mx-auto text-2xl text-base-content text-center font-semibold p-2 rounded-xl bg-base-content/10">
          Hi, I'm David <span className="inline-block animate-wave">🤘</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <h1 className="h-25 md:h-35 max-w-[400px] mx-auto text-5xl text-primary text-center md:text-6xl font-black">{typedText}<span className="animate-blink"> | </span></h1>
            <p className="section-description">Engineer of responsive UIs, API integrations, and interactive web applications.</p>
            <div className="flex items-center justify-center gap-4">
              <Button
                className="bg-primary text-white"
                href='#projects'
              >
                View Projects
                <CircleChevronDown size={20} />
              </Button>

              <Button
                className="border border-primary text-primary"
                href='#contact'
              >
                Let's Talk
                <Phone size={20} />
              </Button>
            </div>
          </div>

          <div className="hero-logo-wrapper">
            <img src="/hero-logo.webp" alt="Hero Logo" className="hero-logo" />
          </div>
        </div>

        <MetricCard />
      </div>
    </main>
  );
};