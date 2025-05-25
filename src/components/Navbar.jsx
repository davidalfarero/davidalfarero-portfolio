import { Menu, X } from "lucide-react";

export const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className="fixed top-0 w-full backdrop-blur-md shadow-md z-39"
    >
      <div className="max-w-4xl mx-auto flex justify-between items-center p-2">
        <a href="#home" className="">
          <img src="/logo.svg" className="h-8 w-8" />
        </a>

        <div className="hidden md:flex justify-between items-center gap-8">
          {navItems.map((item, index) => (
            <a
              className="text-font no-underline text-sm font-semibold hover:text-accent duration-500"
              key={index} href={item.href}>
              {item.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden z-60"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>


        <div
          className={`md:hidden fixed inset-0 bg-bg/95 w-screen h-screen flex justify-center items-center z-50
            transition-opacity duration-300 ease
            ${isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
            }`}
        >
          <div className="md:hidden flex flex-col justify-center items-center gap-4">
            {navItems.map((item, index) => (
              <a
                className="text-font no-underline text-2xl font-semibold hover:text-accent duration-500"
                key={index} href={item.href}>
                {item.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </nav>
  )
}