import { ProjectPreview } from "./ProjectPreview";
import { Github, ExternalLink } from 'lucide-react';
import React, { useState } from 'react';


export const ProjectCard = ({ projectData }) => {
  const [selectedProject, setSelectedProject] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 cursor-pointer mb-5">
      {projectData.map((project, index) => (
        <div
          onClick={() => setSelectedProject(project)}
          key={index}
          className="relative bg-card rounded-xl overflow-hidden space-y-3 pb-10"
        >
          <img
            className="h-60 w-full hover:scale-[1.05] transition-transform duration-300 ease"
            src={project.image[0]} alt={project.title} />

          <div className="flex flex-wrap justify-start items-center gap-2 px-2">
            {project.TagIcons.map((Icon, index) => (
              <div key={index} className="flex items-center gap-1 p-1 border border-accent rounded-xl">
                <Icon className="text-accent" />
                <p className="text-xs">{project.tags[index]}</p>
              </div>
            ))}

          </div>

          <h3 className="text-center font-bold">{project.title}</h3>
          <p className="text-alter-font text-sm/4 text-center px-2">{project.description}</p>

          <div className="absolute bottom-2 left-2 flex items-center gap-2">
            <a href={project.github} target="_blank" className="hover:-translate-y-1 transition-all duration-300 ease" onClick={e => e.stopPropagation()}>
              <Github />
            </a>
            <a href={project.demo} target="_blank" className="hover:-translate-y-1 transition-all duration-300 ease" onClick={e => e.stopPropagation()}>
              <ExternalLink />
            </a>
          </div>

        </div>
      ))}

      {selectedProject && (
        <ProjectPreview
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </div>
  )
}