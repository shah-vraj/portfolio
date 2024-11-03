import React from 'react';

const Navbar = () => (
  <nav className="fixed w-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 shadow z-10">
    <ul className="flex justify-around">
      <li><a href="#home" className="hover:text-teal-500 dark:hover:text-teal-400">Home</a></li>
      <li><a href="#about" className="hover:text-teal-500 dark:hover:text-teal-400">About</a></li>
      <li><a href="#experience" className="hover:text-teal-500 dark:hover:text-teal-400">Experience</a></li>
      <li><a href="#projects" className="hover:text-teal-500 dark:hover:text-teal-400">Projects</a></li>
      <li><a href="#skills" className="hover:text-teal-500 dark:hover:text-teal-400">Skills</a></li>
      <li><a href="#contact" className="hover:text-teal-500 dark:hover:text-teal-400">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
