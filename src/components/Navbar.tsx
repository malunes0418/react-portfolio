import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full transition duration-600 bg-red-700 z-10">
      <div className="container flex justify-between items-center py-5 px-10">
        <a href="#" className="logo font-bold text-white text-2xl">
          <span>OM</span>EGA
        </a>
        <i
          className="fas fa-bars text-white text-2xl cursor-pointer md:hidden"
          onClick={toggleMenu}
        ></i>
        <ul
          className={`${
            isOpen ? "right-0" : "right-full"
          } transition duration-500 bg-red-700 fixed top-0 w-64 h-screen py-10 md:static md:bg-transparent md:w-auto md:h-auto md:p-0 md:flex md:items-center md:space-x-8`}
        >
          <li>
            <a href="#header" className="text-white font-medium">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-white font-medium">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="text-white font-medium">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="text-white font-medium">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white font-medium">
              Contact Me
            </a>
          </li>
          <i
            className="fas fa-times text-white text-2xl absolute top-4 right-4 cursor-pointer md:hidden"
            onClick={toggleMenu}
          ></i>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
