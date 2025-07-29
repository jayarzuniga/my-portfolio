import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import coolLogo from '../assets/images/cool.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-me' },
    { name: 'Projects', path: '/projects' },
    { name: 'Achievements', path: '/testimonials' },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/jonhzuniga', color: 'hover:text-accent-linkedIn' },
    { icon: <FaGithub />, href: 'https://github.com/jayarzuniga', color: 'hover:text-white' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-3 glass' : 'py-4 bg-background-darker/95'
    }`}>
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={coolLogo} 
              alt="Logo" 
              className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300"
            />
            <span className="text-2xl font-black text-text-primary tracking-wide">
              Jay-R
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {pages.map((page) => (
                <Link
                  key={page.name}
                  to={page.path}
                  className={`relative text-base font-regular transition-colors ${
                    location.pathname === page.path 
                      ? 'text-text-primary' 
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {page.name}
                  {location.pathname === page.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary animate-underline"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-4 ml-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-text-secondary text-xl transition-all duration-300 hover:-translate-y-0.5 ${link.color}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-text-primary transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isOpen 
                    ? "M6 18L18 6M6 6l12 12" 
                    : "M4 6h16M4 12h16M4 18h16"
                  } 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-96' : 'max-h-0'
      }`}>
        <div className="container py-4 space-y-2">
          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              className={`block px-4 py-3 rounded-medium text-base font-medium transition-colors ${
                location.pathname === page.path 
                  ? 'bg-background-card text-text-primary' 
                  : 'text-text-secondary hover:bg-background-card hover:text-text-primary'
              }`}
            >
              {page.name}
            </Link>
          ))}
          
          {/* Mobile Social Icons */}
          <div className="flex items-center gap-4 px-4 pt-4 border-t border-ui-border">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-text-secondary text-xl transition-colors ${link.color}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;