import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="relative w-full bg-white shadow-md">
      <div className="px-5 py-5 flex items-center justify-between text-secondary text-xl">
        <div className="flex items-center">
          <Link to="/home" className="flex items-center">
            <img
              src="assets/icons/person-dark.png"
              className="scale-50 cursor-pointer h-10 w-10"
              alt="Home Icon"
            />
            <span className="ml-2 hidden sm:inline">Home</span>
          </Link>
        </div>
        <button
          className="sm:hidden flex flex-col space-y-1 cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
        >
          <span className="block w-6 h-1 bg-secondary"></span>
          <span className="block w-6 h-1 bg-secondary"></span>
          <span className="block w-6 h-1 bg-secondary"></span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex sm:items-center sm:gap-10">
          <Link to="/cv" className="hover:text-primary">
            CV
          </Link>
          <Link to="/teaching" className="hover:text-primary">
            Teaching
          </Link>
          <Link to="/contact" className="hover:text-primary">
            Contact
          </Link>
        </nav>
      </div>
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-start z-10">
          <Link
            to="/cv"
            className="block w-full px-5 py-3 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            CV
          </Link>
          <Link
            to="/teaching"
            className="block w-full px-5 py-3 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Teaching
          </Link>
          <Link
            to="/contact"
            className="block w-full px-5 py-3 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
