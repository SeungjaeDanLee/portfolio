import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-50 h-20 flex items-center">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-xl font-bold">Seungjae's Portfolio</h1>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex space-x-6">
          <ul className="flex space-x-6 text-base">
            {["profile", "skills", "projects", "links", "career"].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="text-blue-400"
                  className="hover:text-gray-400 cursor-pointer transition-all text-base"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 모바일 네비게이션 토글 버튼 */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-2xl">{isMenuOpen ? "✖" : "☰"}</button>
        </div>
      </div>

      {/* 모바일 네비게이션 */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4 space-y-4">
          {["profile", "skills", "projects", "links", "career"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-blue-400"
              className="text-white block cursor-pointer text-base"
              onClick={toggleMenu}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
