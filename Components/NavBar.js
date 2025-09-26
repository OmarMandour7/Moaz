'use client';

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex justify-between items-center py-4 bg-transparent">
                <div className="logo h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28">
                    <Link href="/" className="text-xl font-bold tracking-wider font-mono">
                        <Image
                            src="/Images/Logo.png"
                            height={112}
                            width={112}
                            alt={"Logo"}
                            className="w-full h-full object-contain"
                        />
                    </Link>
                </div>
                <ul className="flex space-x-4 lg:space-x-6 xl:space-x-8 font-mono">
                    <li>
                        <Link href="/Project" className="text-sm sm:text-base lg:text-lg font-medium hover:text-blue-600 transition-colors">
                            Project
                        </Link>
                    </li>
                    <li>
                        <Link href="#about" className="text-sm sm:text-base lg:text-lg font-medium hover:text-blue-600 transition-colors">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" className="text-sm sm:text-base lg:text-lg font-medium hover:text-blue-600 transition-colors">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile Navigation */}
            <nav className="md:hidden flex justify-between items-center py-3 bg-transparent">
                <div className="logo h-14 w-14 sm:h-16 sm:w-16">
                    <Link href="/" className="text-lg sm:text-xl font-bold tracking-wider font-mono">
                        <Image
                            src="/Images/Logo.png"
                            height={64}
                            width={64}
                            alt={"Logo"}
                            className="w-full h-full object-contain"
                        />
                    </Link>
                </div>
                <div className="relative">
                    <div
                        className="flex flex-col space-y-1 cursor-pointer p-2"
                        onClick={toggleMenu}
                    >
                        <span className={`block w-5 sm:w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block w-5 sm:w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-5 sm:w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </div>

                    {/* Mobile Menu Links */}
                    <div className={`absolute top-full right-0 mt-2 w-44 sm:w-48 bg-white shadow-lg rounded-md py-2 transition-all duration-300 z-50 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <Link
                            href="/Project"
                            onClick={toggleMenu}
                            className="block px-4 py-3 text-sm sm:text-base text-gray-800 hover:bg-gray-100 transition-colors font-mono"
                        >
                            Project
                        </Link>
                        <Link
                            href="#About"
                            onClick={toggleMenu}
                            className="block px-4 py-3 text-sm sm:text-base text-gray-800 hover:bg-gray-100 transition-colors font-mono"
                        >
                            About
                        </Link>
                        <Link
                            href="#contact"
                            onClick={toggleMenu}
                            className="block px-4 py-3 text-sm sm:text-base text-gray-800 hover:bg-gray-100 transition-colors font-mono"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
