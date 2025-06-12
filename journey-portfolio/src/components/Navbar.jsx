import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pages = ['Home', 'About', 'Contact'];

  return (
    <nav className="bg-gray-900 text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">Portfolio</div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          {pages.map((page) => (
            <a key={page} href={`#${page.toLowerCase()}`} className="block mt-2 md:mt-0 hover:text-gray-400">
              {page}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
