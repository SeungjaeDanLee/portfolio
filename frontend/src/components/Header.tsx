import { useState } from "react";
import HeaderLink from "./HeaderLink";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const sections = ["profile", "skills", "projects", "career"];

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg text-gray-800 dark:text-white p-4 fixed top-0 left-0 w-full z-50 h-20 flex items-center border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex justify-between items-center w-full">
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Seungjae's Portfolio
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <ul className="flex space-x-6 text-base">
            {sections.map((section) => (
              <li key={section}>
                <HeaderLink
                  to={section}
                  activeClassName="text-blue-600 dark:text-blue-400 font-semibold"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </HeaderLink>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg"
        >
          <div className="container mx-auto py-4">
            {sections.map((section) => (
              <HeaderLink
                key={section}
                to={section}
                activeClassName="text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-800"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={toggleMenu}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </HeaderLink>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;