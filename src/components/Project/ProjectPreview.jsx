import { useEffect } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

export const ProjectPreview = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
    >
      <div className="bg-bg w-[90%] h-[90%] z-40 rounded-3xl overflow-hidden">

        <div className="relative h-full w-full grid-responsive overflow-y-auto">

          <div className="absolute top-3 right-3 p-1 z-50 rounded-2xl bg-hover">
            <X onClick={onClose} className="text-font" />
          </div>

          <div className="flex bg-alter-bg items-center justify-center">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              speed={1000}
            >
              {project.image.map((imgSrc, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    className=" w-full max-h-[60vh] sm:max-h-[70vh] object-contain"
                    src={imgSrc}
                    alt={`${project.title} slide ${idx + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>


          <div className="relative bg-bg px-5 py-10 h-full">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5">{project.title}</h1>

            <p className="text-sm text-alter-font mb-10">{project.details}</p>

            <div className="flex flex-wrap justify-start items-center gap-2 mb-8">
              {project.TagIcons.map((Icon, index) => (
                <div key={index} className="flex items-center gap-1 p-1 border border-accent rounded-xl text-xs">
                  <Icon className="text-accent" />
                  <p>{project.tags[index]}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a href={project.github} target="_blank" className="w-full sm:w-auto p-2 rounded bg-accent text-white flex items-center justify-center gap-1">
                Visit <Github size={20} />
              </a>
              <a href={project.demo} target="_blank" className="w-full sm:w-auto p-2 rounded border border-accent text-accent flex items-center justify-center gap-1">
                Demo <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};