import { skillsData } from "../data/skillsData";

export const SkillsSection = () => {

  return (
    <section id="skills" className="bg-base-300">
      <div className="section-container">
        <h2 className="section-title">What I <span className="text-primary">Use</span></h2>
        <p className="section-description mb-10 md:mb-20">A showcase of the tools, technologies, and languages I use to build responsive, user-friendly web applications.</p>

        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-4">
          <div className="space-y-3">
            <h2 className="text-center text-base-content text-lg font-bold max-w-xs mx-auto">
              Technologies and Tools 💻
            </h2>
            <p className="text-base-content/80 text-sm md:text-base">
              I build full-stack web applications with a focus on responsive design, clean architecture, and smooth user experience. <br /><br />
              I'm confident working across both frontend and backend, implementing real-time features, authentication, and external integrations. <br /><br />
              I follow modern development workflows, use version control, and deploy projects with continuous updates in mind.
            </p>
          </div>

          <div className="place-self-start flex flex-wrap gap-2 justify-start items-center">
            {skillsData.map((skill, index) => (
              <div key={index} className="group relative rounded-xl bg-[#0F172A] h-20 w-20 overflow-hidden">
                <span
                  className="absolute top-1 left-1/2 -translate-x-1/2 text-white text-xs/2.5 font-semibold opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300 ease"
                >
                  {skill.name}
                </span>
                <span
                  className="absolute top-6 left-1/2 -translate-x-1/2 text-primary text-xs font-bold opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300 ease"
                >
                  {skill.percent}
                </span>
                <div
                  className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[80%] w-[80%] group-hover:-translate-y-0.25 transition-transform duration-300"
                >
                  <skill.Icon fill={skill.color} className="h-full w-full" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};