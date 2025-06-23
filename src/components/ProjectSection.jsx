import { useState } from 'react';
import { ProjectCard } from "../cards/ProjectCard";
import { projectData } from "../data/projectData";



export const ProjectSection = () => {
  const [isAllProjects, setIsAllProjects] = useState(false);
  const visibleProjects = isAllProjects ? projectData : projectData.slice(0, 3);

  return (
    <section id="projects" className="p-2 bg-base-100">
      <div className="section-container">
        <h2 className="section-title">Crafted <span className="text-primary">Work</span></h2>
        <p className="section-description mb-10 md:mb-20">Projects that reflect my commitment to clean code, responsive design, and user-first experiences.</p>

        <ProjectCard projectData={visibleProjects} />

        {/* See more button */}
        {/* <button className="secondary-btn mx-auto" onClick={() => setIsAllProjects(prev => !prev)}>
          {isAllProjects ? 'Collapse' : 'Explore More Projects'}
          {isAllProjects ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button> */}
      </div>
    </section>
  );
};