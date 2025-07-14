import { motion } from 'framer-motion';
import { ArrowDownToLine, CodeXml, Palette, Rocket, UsersRound } from 'lucide-react';
import { Button } from '../components/UI';

export const AboutSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const aboutCard = [
    {
      Icon: CodeXml,
      title: 'Front-End Skills',
      detail: 'I build responsive, accessible UIs using modern tools with clean, maintainable code — always optimized for user experience.',
    },
    {
      Icon: Palette,
      title: 'Design-Savvy',
      detail: 'I care about layout, spacing, and visual harmony to ensure every interface looks polished and performs smoothly.',
    },
    {
      Icon: Rocket,
      title: 'Always Learning',
      detail: 'I stay sharp by exploring new frameworks, design systems, and coding patterns that improve my workflow and output.',
    },
    {
      Icon: UsersRound,
      title: 'Team-First Developer',
      detail: 'I thrive in team environments, communicate clearly, and believe in building with feedback, shared goals, and collaboration.',
    },
  ];

  return (
    <section id="about" className="p-2 bg-base-300">
      <div className="section-container">
        <h2 className="section-title">Behind The <span className="text-primary">Code</span></h2>
        <p className="section-description mb-10 md:mb-20">A brief introduction highlighting my background, skills, and passions as a web developer</p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="space-y-3">
            <h2 className="text-center text-base-content text-lg font-bold max-w-xs mx-auto">
              🧰 Clean Code & Smart Design
            </h2>
            <p className="text-base-content/80 text-sm md:text-base">
              With a solid foundation in IT and a strong focus on web development, I build responsive, user-friendly interfaces and full-stack applications. I enjoy solving real problems through clean code, intuitive design, and efficient logic,always staying sharp by learning new tools and best practices.
            </p>
            <Button
              href='/David-Alfarero-Web-Developer-CV.pdf'
              target="_blank"
              className='w-fit bg-primary text-white mx-auto mt-10 '>
              Download CV
              <ArrowDownToLine />
            </Button>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col justify-start items-start gap-2"
          >
            {aboutCard.map(({ Icon, title, detail }, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                transition={{ duration: 0.5 }}
                className="max-w-[450px] mx-auto bg-primary/20 rounded-2xl p-3 flex items-center gap-3 shadow-lg"
              >
                <div className="p-3 rounded-full bg-primary flex items-center justify-center">
                  <Icon className="text-white size-8" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm text-base-content font-bold">{title}</h3>
                  <p className="text-base-content/60 text-sm/4">{detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};