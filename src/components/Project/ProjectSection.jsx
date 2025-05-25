import { ProjectCard } from "./ProjectCard";
import { projectData } from "./projectData";
import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from "lucide-react";



export const ProjectSection = () => {
  const [isAllProjects, setIsAllProjects] = useState(false);
  const visibleProjects = isAllProjects ? projectData : projectData.slice(0, 3);

  return (
    <section id="projects" className="p-2">
      <div className="section-container">
        <h2 className="section-title">Crafted <span className="text-accent">Work</span></h2>
        <p className="section-description mb-10 md:mb-20">Projects that reflect my commitment to clean code, responsive design, and user-first experiences.</p>

        <ProjectCard projectData={visibleProjects} />

        <button className="secondary-btn mx-auto" onClick={() => setIsAllProjects(prev => !prev)}>
          {isAllProjects ? 'Collapse' : 'Explore More Projects'}
          {isAllProjects ? <ChevronUp size={18}/> : <ChevronDown size={18} />}
        </button>
      </div>
    </section>
  )
}