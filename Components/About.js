'use client';

import React from 'react';
import Image from 'next/image';
import { MdOutlineCastForEducation } from "react-icons/md";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const About = () => {
    return (
        <section id="about" className="py-12 sm:py-16 lg:py-28 px-4 sm:px-6 lg:px-8 w-full flex justify-center font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <p className="text-gray-400 text-sm sm:text-base mb-2 font-mono">Get To Know</p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-mono">
                        About Me
                    </h1>
                </div>

                {/* Main Content Container */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center lg:items-start">
                    {/* Profile Picture */}
                    <div className="flex-shrink-0 mb-8 lg:mb-0">
                        <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                            <Image
                                src="/Images/Moaz-Hero.jpg"
                                alt="Moaz Ali"
                                fill
                                className="object-cover rounded-full drop-shadow-lg"
                                priority
                            />
                        </div>
                    </div>

                    {/* Details Container */}
                    <div className="flex-1 max-w-2xl">
                        {/* Cards Container */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            {/* Experience Card */}
                            <div className="bg-transparent border border-gray-700 hover:border-fuchsia-700 rounded-2xl p-6 text-center hover:bg-gray-750 transition-colors duration-300">
                                <div className="w-12 h-12 mx-auto mb-4">
                                    <MdOutlineWorkspacePremium size={50} />

                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 font-mono">
                                    Experience
                                </h3>
                                <p className="text-gray-300 text-sm sm:text-base">
                                    <span className="font-bold ">2+ years</span><br />
                                    Graphic Designing<br />

                                </p>
                            </div>

                            {/* Education Card */}
                            <div className="bg-transparent border border-gray-700 hover:border-fuchsia-700 rounded-2xl p-6 text-center hover:bg-gray-750 transition-colors duration-300">
                                <div className="w-12 h-12 mx-auto mb-4">
                                    <MdOutlineCastForEducation size={50} />

                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 font-mono">
                                    Education
                                </h3>
                                <p className="text-gray-300 text-sm sm:text-base">
                                    <span className="font-bold">IIT Gandhinagar</span><br />
                                    B.Tech - M.Tech (Dual Degree)<br />
                                    CSE '23-28
                                </p>
                            </div>
                        </div>

                        {/* Text Container */}
                        <div className="bg-gray-700 border border-gray-700  rounded-2xl p-6 lg:p-8">
                            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-mono">
                                I'm a sophomore at IIT Gandhinagar and the Design Coordinator
                                of Blithchron, IITGN's cultural fest. With six years of
                                experience in graphic design and video editing, I am proficient
                                in Adobe Photoshop, Illustrator, Premiere Pro, and After Effects,
                                with skills in basic 3D modeling using Blender. I thrive in
                                collaborative projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;