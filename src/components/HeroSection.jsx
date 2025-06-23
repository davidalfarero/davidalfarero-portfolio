import { useTypewriter } from "@/Hook/useTypewriter";
import { CircleChevronDown, Phone } from 'lucide-react';
import { Button } from '../styles/UI';
import MetricCard from "../cards/MetricCard";

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
      className="min-h-[calc(100vh-4rem)] max-w-4xl mx-auto flex justify-center items-center mt-20"
    >
      <div className="space-y-5">
        <h2 className="w-fit mx-auto text-2xl text-center font-semibold p-2 rounded-xl bg-base-content/10">
          Hi, I'm David <span className="inline-block animate-wave">🤘</span></h2>
        <h1 className="h-25 md:h-auto text-5xl text-primary text-center md:text-6xl font-black">{typedText}<span className="animate-blink"> | </span></h1>
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

        <MetricCard />
      </div>
    </main>
  );
};