'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Work = () => {
    const projects = [
        {
            id: 1,
            title: 'Recovery Hub',
            image: '/Images/ali.png',
            link: '/Images/ali.png'
        },
        {
            id: 2,
            title: 'Ebda3 Gate',
            image: '/Images/Ebda3Gate.png',
            link: '/Images/Ebda3Gate.png'
        },
        {
            id: 3,
            title: 'Falling - Light',
            image: '/Images/ali.png',
            link: '/Assets/Falling.png'
        }
    ];

    return (
        <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 font-mono">
                    <p className="text-gray-400 text-sm sm:text-base mb-2 font-mono">
                        Explore my
                    </p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-mono">
                        Work
                    </h1>
                </div>

                {/* Work Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                    {projects.map((project) => (
                        <Link key={project.id} href={project.link} className="group">
                            <div className="relative overflow-hidden rounded-2xl  border  hover:border-gray-600 transition-all duration-300">
                                <div className="relative h-64 sm:h-72 lg:h-80">
                                    <Image
                                        src={`${project.image}`}
                                        alt={project.title}
                                        fill
                                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                    {/* Overlay */}<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                    <div className="text-center bg-gradient-to-r from-black to-white bg-clip-text text-transparent p-4 rounded-lg">
                                        <h3 className="text-white text-lg sm:text-xl font-bold font-mono px-4">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>

                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* See More Button */}
                <div className="text-center">
                    <Link href="/Project">
                        <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium text-sm sm:text-base font-mono">
                            See more
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Work;