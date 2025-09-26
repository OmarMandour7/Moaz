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
                    <p className="text-gray-400 text-3xl sm:text-base mb-2 font-mono">Get To Know</p>
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white font-mono">
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

                            {/* Education Card */}

                            <div className="bg-transparent border border-gray-700 hover:border-fuchsia-700 rounded-2xl p-6 text-center hover:bg-gray-750 transition-colors duration-300">
                                <div className="w-12 h-12 mx-auto mb-4">
                                    <MdOutlineCastForEducation size={50} />

                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 font-mono">
                                    Education
                                </h3>
                                <p className="text-gray-300 text-sm sm:text-base">
                                    <span className="font-bold">Port Said University</span><br />
                                    B.Sc. in Production Engineering
                                    <br />
                                    Second Year (2023 – 2027)
                                </p>
                            </div>
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

                        </div>

                        {/* Text Container */}
                        <div className="bg-gray-700 border border-gray-700  rounded-2xl p-6 lg:p-8">
                            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-mono">
                                I am a second-year undergraduate student in Production Engineering with a strong passion for graphic design. Over the past two years, I have gained extensive hands-on experience working with real clients on diverse design projects. I am highly skilled in Adobe Photoshop and Adobe Illustrator, and I enjoy turning creative concepts into professional visual outputs. My journey so far has allowed me to build a growing body of work, which I am now curating into a professional portfolio to showcase both my technical expertise and creative approach.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;