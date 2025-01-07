import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-6xl bg-white/10 backdrop-blur-md rounded-lg shadow-lg z-50">
      <div className="h-16 flex items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="text-3xl text-white font-extrabold">
          D'NAZRILL
        </a>

        {/* Hamburger Menu Button (Mobile) */}
        <button onClick={toggleMenu} className="text-white focus:outline-none lg:hidden">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Menu (Desktop) */}
        <ul className="hidden lg:flex space-x-8 text-lg">
          <li>
            <Link to="/" className="text-white hover:text-gray-200 transition-colors">
              Tentang Saya
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-white hover:text-gray-200 transition-colors">
              Proyek
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-200 transition-colors">
              Kontak
            </Link>
          </li>
        </ul>
      </div>

      {/* Menu (Mobile) */}
      <div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col space-y-4 p-6 bg-white/10 backdrop-blur-md rounded-b-lg">
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-200 transition-colors"
              onClick={toggleMenu}
            >
              Tentang Saya
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-white hover:text-gray-200 transition-colors"
              onClick={toggleMenu}
            >
              Proyek
            </Link>
          </li>
          <li>
            <Link
              to="/contacts"
              className="text-white hover:text-gray-200 transition-colors"
              onClick={toggleMenu}
            >
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}