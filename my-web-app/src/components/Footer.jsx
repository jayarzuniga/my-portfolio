import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#295F98] text-gray-800 py-10">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-center md:text-left">

        {/* Column 1: About & Contact */}
        <div className="space-y-3">
          <h3 className="font-semibold">About</h3>
          <a href="#about" className="block hover:underline">Learn more about us</a>
          
          <h3 className="font-semibold mt-4">Contact</h3>
          <a href="#contact" className="block hover:underline">Get in touch</a>
        </div>

        {/* Column 2: Projects */}
        <div className="space-y-3">
          <h3 className="font-semibold">Projects</h3>
          <p>View my work</p>
          <ul className="space-y-1"> 
            <li><a href="#project1" className="hover:underline">Project 1</a></li>
            <li><a href="#project2" className="hover:underline">Project 2</a></li>
            <li><a href="#project3" className="hover:underline">Project 3</a></li>
          </ul>
        </div>

        {/* Column 3: Modules */}
        <div className="space-y-3">
          <h3 className="font-semibold">Modules</h3>
          <ul className="space-y-1">
            <li><a href="#module1" className="hover:underline">Module 1</a></li>
            <li><a href="#module2" className="hover:underline">Module 2</a></li>
            <li><a href="#module3" className="hover:underline">Module 3</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
