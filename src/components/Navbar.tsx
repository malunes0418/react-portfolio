import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <img
                                className="block lg:hidden h-8 w-auto"
                                src="https://via.placeholder.com/40"
                                alt="Logo"
                            />
                            <img
                                className="hidden lg:block h-8 w-auto"
                                src="https://via.placeholder.com/60"
                                alt="Logo"
                            />
                        </div>
                        <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                            <a
                                href="/about"
                                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            >
                                About
                            </a>
                            <a
                                href="/my-works"
                                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            >
                                My Works
                            </a>
                            <a
                                href="#"
                                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            >
                                My Services
                            </a>
                            <a
                                href="#"
                                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;