import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-6xl bg-white/10 backdrop-blur-md rounded-lg shadow-lg z-50">
      <div className="h-16 flex items-center justify-between px-6">
        {/* Logo */}
        <a href="/nazril-portfolio/" className="flex text-3xl text-white font-extrabold items-center">
        <img
            src="aaa5a001c7d719454c3c3287df90af23.png"
            alt="Foto Profil"
            className="w-10 h-10 rounded-full object-cover border-2 border-blue-500 mr-3"
          />
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
          {/* Jam Digital */}
          <div className="hidden lg:flex items-center text-white text-lg">
            {formatTime(currentTime)}
          </div>
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
            <Link to="/contacts" className="text-white hover:text-gray-200 transition-colors">
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