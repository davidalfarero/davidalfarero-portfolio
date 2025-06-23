import { ProjectPreview } from "../modals/ProjectPreview";
import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';


export const ProjectCard = ({ projectData }) => {
  const [selectedProject, setSelectedProject] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 cursor-pointer mb-5">
      {projectData.map((project, index) => (
        <div
          onClick={() => setSelectedProject(project)}
          key={index}
          className="relative bg-primary/40 rounded-xl border border-base-content/60 shadow-xl overflow-hidden space-y-3 pb-10 max-w-[400px] mx-auto"
        >

          <div className='relative h-40 w-full overflow-hidden group'>
            <img
              className="h-40 w-full group-hover:scale-[1.05] transition-transform duration-300 ease"
              src={project.image[0]}
              alt={project.title}
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-full
            backdrop-blur-[1px] bg-bg/30 rounded-xl p-2
            flex items-center justify-center
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <p className="text-black/80 text-sm/4 text-center px-2 font-bold">
                {project.description}
              </p>
            </div>
          </div>

          <h3 className="md:text-xl text-center text-white font-bold">{project.title}</h3>

          <div className="flex flex-wrap justify-start items-center gap-2 px-2">
            {project.Icon.slice(0, 3).map((IconComponent, index) => {
              return (
                <div key={index} className="flex items-center gap-1 p-1 border border-primary rounded-xl">
                  <IconComponent className="w-4 h-4" />
                  <p className="text-xs text-white">{project.tags[index]}</p>
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-2 left-2 flex items-center gap-2">
            <a href={project.github} target="_blank" className="hover:-translate-y-1 transition-all duration-300 ease" onClick={e => e.stopPropagation()}>
              <Github className="text-white" />
            </a>
            <a href={project.demo} target="_blank" className="hover:-translate-y-1 transition-all duration-300 ease" onClick={e => e.stopPropagation()}>
              <ExternalLink className="text-white" />
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
  );
};