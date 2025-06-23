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