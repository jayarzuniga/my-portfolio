import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ColorPalette from './ColorPalette';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about-me' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact Me', path: '/contact-me' },
    { name: 'Pesonal Guides', path: '/pesonal-guides' }, // typo?
  ];

  return (
    <nav className="sticky top-0 z-50 text-white px-6 py-4 shadow-md" style={{ backgroundColor: ColorPalette.primary }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo/Brand */}
        <div className="text-2xl font-bold">MyPortfolio</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              className="hover:text-blue-400 transition-colors"
            >
              {page.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-2">
          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              className="block py-2 px-4 rounded hover:bg-gray-800"
            >
              {page.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
