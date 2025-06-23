import { ArrowLeft, ArrowRight } from "lucide-react";

export const Button = ({
  children,
  className = "",
  ...props }) => (
  <a
    {...props}
    className={`flex items-center gap-2 rounded-full shadow-md text-xs md:text-sm font-medium p-2 md:p-5 cursor-pointer hover:scale-105 hover:shadow-lg transition
      ${className}`}
  >
    {children}
  </a>
);

export const SwiperNavButtons = ({ prevRef, nextRef }) => (
  <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 justify-center gap-4 mt-6 ">
    <button
      ref={prevRef}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-300 text-gray-600 hover:bg-gray-100 transition cursor-pointer"
      aria-label="Previous testimonial"
    >
      <ArrowLeft className="w-5 h-5" />
    </button>
    <button
      ref={nextRef}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition cursor-pointer"
      aria-label="Next testimonial"
    >
      <ArrowRight className="w-5 h-5" />
    </button>
  </div>
);