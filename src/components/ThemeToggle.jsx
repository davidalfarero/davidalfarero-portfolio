import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = ({isMenuOpen}) => {
  if (isMenuOpen) return null;

  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsLightMode(false);
      document.documentElement.classList.remove("light");
    } else {
      setIsLightMode(true);
      document.documentElement.classList.add("light");
    }
  }, [])

  const toggleTheme = () => {
    if (isLightMode) {
      setIsLightMode(false);
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      setIsLightMode(true);
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <div
      className="fixed top-2 left-1/2 -translate-x-1/2 w-fit rounded p-1 flex justify-center items-center
      hover:bg-hover transition-all duration-500 ease cursor-pointer z-40"
    >
      <button
        className="cursor-pointer"
        onClick={toggleTheme}>
        {isLightMode ?
          <Moon size={24} className="text-accent" /> :
          <Sun size={24} className="text-yellow-400" />}
      </button>
    </div>
  )
}