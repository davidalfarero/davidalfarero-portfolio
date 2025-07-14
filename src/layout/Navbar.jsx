import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme === 'night' : true;
  });

  useEffect(() => {
    const theme = isDarkMode ? 'night' : 'corporate';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // stop bg scrolling
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);
  return (
    <>
      <nav className={`fixed top-0 w-full h-15 md:h-20 flex items-center z-50 border-b border-base-200
      ${scrolled
          ? 'bg-base-100/60 backdrop-blur-md shadow-sm'
          : 'bg-base-100'}
      }
      `}
      >
        {/* logo */}
        <div className='relative max-w-4xl mx-auto w-full flex items-center justify-between gap-4 px-5 md:px-0'>
          <a href='#home' className="text-lg">
            <div className="w-10">
              <img src="/logo.svg" alt="Logo" />
            </div>
          </a>

          {/* theme toggle button */}
          <div
            onClick={() => setIsDarkMode((prev) => !prev)}
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-xl cursor-pointer
           hover:bg-base-300 transition-colors'
          >
            {isDarkMode ? <Sun className='size-5 text-yellow-400' /> : <Moon className='size-5 text-base-content/80' />}
          </div>

          {/* large screen navlinks */}
          <div className="hidden md:block space-x-4">
            {navLinks.map(({ name, href }, index) => (
              <a
                key={index}
                href={href}
                className='font-semibold text-sm cursor-pointer
              hover:text-primary hover:border-b-3 transition-colors duration-200'
              >
                {name}
              </a>
            ))}
          </div>

        </div>
      </nav>

      {/* mobile menu button */}
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="text-base-content md:hidden fixed top-5 right-5 z-60"
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      {/* mobile navlinks */}
      <div className={`md:hidden fixed inset-0 bg-black/80 flex justify-center items-center z-50
            transition-opacity duration-300 ease
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div className='flex flex-col gap-8'>

          {navLinks.map(({ name, href }, index) => (
            <a
              key={index}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className='cursor-pointer font-semibold text-xl text-center
                hover:text-primary hover:border-b-3 transition-colors'
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
export default Navbar;