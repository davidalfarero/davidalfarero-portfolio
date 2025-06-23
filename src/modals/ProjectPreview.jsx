import { useEffect, useRef, useState } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SwiperNavButtons } from '../styles/UI';

export const ProjectPreview = ({ project, onClose }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-100"
    >
      <div className="bg-black w-[90%] h-[90%] z-40 rounded-3xl overflow-hidden">

        <div className="relative h-full w-full grid-responsive overflow-y-auto">

          <div className="absolute top-3 right-3 p-1 z-50 rounded-2xl bg-hover">
            <X onClick={onClose} className="text-gray-300" />
          </div>

          <div className="relative flex items-center justify-center">

            {swiperReady && (
              <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={1}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                onSlideChange={(swiper) => {
                  setCurrentSlide(swiper.realIndex + 1);
                }}
              >
                {project.image.map((imgSrc, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      className=" w-full max-h-[60vh] sm:max-h-[70vh] object-contain z-10"
                      src={imgSrc}
                      alt={`${project.title} slide ${idx + 1}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}


            <SwiperNavButtons prevRef={prevRef} nextRef={nextRef} />

            <div className='absolute bottom-6 left-4 h-5 w-11 bg-gray-300 text-neutral-800 px-2 py-4 rounded flex items-center z-20'>
              <p className='text-sm font-semibold'>{currentSlide}/{project.image.length}</p>
            </div>
          </div>


          <div className="relative bg-neutral-900 px-5 py-10 h-full">
            <h1 className="text-xl text-white sm:text-2xl md:text-3xl font-bold mb-5">{project.title}</h1>

            <div className="max-h-[250px] overflow-y-auto pr-2 scrollbox mb-6">
              {project.details.split('\n\n').map((para, index) => (
                <p key={index} className="text-sm text-neutral-400 mb-4">
                  {para}
                </p>
              ))}
            </div>

            <p className='font-bold mb-2'>Technologies</p>

            <div className="flex flex-wrap justify-start items-center gap-2 mb-8">
              {project.Icon.map((IconComponent, index) => {
                return (
                  <div key={index} className="flex items-center gap-1 p-1 border border-primary rounded-xl">
                    <IconComponent className="w-4 h-4" />
                    <p className="text-xs text-white ">{project.tags[index]}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a href={project.github} target="_blank" className="w-full sm:w-auto p-2 rounded bg-primary text-white flex items-center justify-center gap-1">
                Visit <Github size={20} />
              </a>
              <a href={project.demo} target="_blank" className="w-full sm:w-auto p-2 rounded border border-primary text-primary flex items-center justify-center gap-1">
                Demo <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};