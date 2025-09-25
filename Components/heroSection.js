'use client';

import React from 'react';
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";

const HeroSection = () => {
    const handleContactClick = () => {
        window.location.href = './#contact';
    };

    const handleBehanceClick = () => {
        window.location.href = 'https://www.behance.net/moaz_ali';
    };

    const handleInstagramClick = () => {
        window.location.href = 'https://www.instagram.com/_moaz.ali_/';
    };

    return (
        <section id="profile" className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
            {/* Profile Picture Container */}
            <div className="flex-shrink-0 mb-6 sm:mb-8 lg:mb-0 lg:mr-8 xl:mr-12">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 ">
                    <Image
                        src="/Images/Moaz-Hero.jpg"
                        alt="Moaz Ali"
                        fill
                        className="object-cover rounded-full drop-shadow-lg"
                        priority
                    />
                </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left max-w-2xl font-mono">
                <p className="text-base sm:text-lg text-gray-300 mb-2">Hello there, I'm</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
                    Moaz Ali
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
                    Graphic Designer
                </p>

                {/* Button Container */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
                    <button
                        onClick={handleContactClick}
                        className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-gray-900 rounded-full hover:bg-gray-200 transition-all duration-300 font-medium text-sm sm:text-base"
                    >
                        Get in touch
                    </button>
                </div>

                {/* Socials Container */}
                <div className="flex gap-4 sm:gap-6 justify-center lg:justify-start">
                    <div
                        onClick={handleBehanceClick}
                        className="w-10 h-10 sm:w-12 sm:h-12 relative cursor-pointer hover:scale-110 transition-transform duration-300 flex items-center justify-center"
                    >
                        <FaBehance
                            size={32}
                            className="sm:w-10 sm:h-10 object-contain text-white"
                        />
                    </div>
                    <div
                        onClick={handleInstagramClick}
                        className="w-10 h-10 sm:w-12 sm:h-12 relative cursor-pointer hover:scale-110 transition-transform duration-300 flex items-center justify-center"
                    >
                        <FaInstagram
                            size={32}
                            className="sm:w-10 sm:h-10 object-contain text-white rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
