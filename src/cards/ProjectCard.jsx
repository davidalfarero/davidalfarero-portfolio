import { useState } from 'react';
import { ProjectPreview } from "../modals/ProjectPreview";


export const ProjectCard = ({ projectData }) => {
  const [selectedProject, setSelectedProject] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 cursor-pointer mb-5">
      {projectData.map((project, index) => (
        <div
          onClick={() => setSelectedProject(project)}
          key={index}
          className="relative bg-[#1E293B] rounded-4xl shadow-lg overflow-hidden max-w-[400px] text-neutral-100"
        >

          <div className='relative h-48'>
            <img
              className="h-full w-full object-fit"
              src={project.image[0]}
              alt={project.title}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-transparent" />
          </div>

          <div className="p-4">
            <div className="h-[100px]">
              <h3 className="md:text-[17px] font-semibold">{project.title}</h3>
              <p className="text-sm mt-1 text-neutral-300">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {project.Icon.slice(0, 2).map((IconComponent, index) => {
                return (
                  <div key={index} className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full text-sm">
                    <IconComponent className="w-4 h-4" />
                    <snpan className="text-sm text-white">{project.tags[index]}</snpan>
                  </div>
                );
              })}
            </div>

            <a
              href={project.demo}
              target="_blank"
              className="block w-full mt-4 bg-neutral-100 text-neutral-900 text-center py-2 rounded-full hover:bg-neutral-300 transition"
              onClick={e => e.stopPropagation()}
            >
              View Project
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