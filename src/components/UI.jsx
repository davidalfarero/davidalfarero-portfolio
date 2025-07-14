import { ArrowLeft, ArrowRight } from "lucide-react";

export const Button = ({
  children,
  className = "",
  ...props }) => (
  <a
    {...props}
    className={`flex items-center gap-2 rounded shadow-md text-xs md:text-sm font-medium p-2 md:p-5 cursor-pointer hover:scale-105 hover:shadow-lg transition
      ${className}`}
  >
    {children}
  </a>
);

export const SwiperNavLeft = ({ prevRef }) => (
  <div className="hidden md:flex absolute top-1/2 left-1 -translate-y-1/2 justify-center gap-4 mt-6 z-20">
    <button
      ref={prevRef}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-500 cursor-pointer"
      aria-label="Previous Image"
    >
      <ArrowLeft className="w-5 h-5" />
    </button>
  </div>
);

export const SwiperNavRight = ({ nextRef }) => (
  <div className="hidden md:flex absolute top-1/2 right-1 -translate-y-1/2 justify-center gap-4 mt-6 z-20">
    <button
      ref={nextRef}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white cursor-pointer"
      aria-label="Next Image"
    >
      <ArrowRight className="w-5 h-5" />
    </button>
  </div>
);