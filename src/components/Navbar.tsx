import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faBars}
          className="text-white text-2xl cursor-pointer md:hidden"
          onClick={toggleMenu}
        />
        <ul
          className={`${
            isOpen ? "right-0" : "right-full"
          } transition duration-500 bg-red-700 fixed top-0 w-64 h-screen py-10 md:static md:bg-transparent md:w-auto md:h-auto md:p-0 md:flex md:items-center md:space-x-8`}
        >
          <li className="md:mr-4">
            <a
              href="#header"
              className="text-white font-medium py-2 px-4 block hover:text-red-300 hover:border-b-2 border-red-300 transition-all"
            >
              Home
            </a>
          </li>
          <li className="md:mr-4">
            <a
              href="#about"
              className="text-white font-medium py-2 px-4 block hover:text-red-300 hover:border-b-2 border-red-300 transition-all"
            >
              About
            </a>
          </li>
          <li className="md:mr-4">
            <a
              href="#services"
              className="text-white font-medium py-2 px-4 block hover:text-red-300 hover:border-b-2 border-red-300 transition-all"
            >
              Services
            </a>
          </li>
          <li className="md:mr-4">
            <a
              href="#portfolio"
              className="text-white font-medium py-2 px-4 block hover:text-red-300 hover:border-b-2 border-red-300 transition-all"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white font-medium py-2 px-4 block hover:text-red-300 hover:border-b-2 border-red-300 transition-all"
            >
              Contact Me
            </a>
          </li>
          <FontAwesomeIcon
            icon={faTimes}
            className="text-white text-2xl absolute top-4 right-4 cursor-pointer md:hidden"
            onClick={toggleMenu}
          />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
