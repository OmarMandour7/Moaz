import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
    const projects = [
        {
            id: 1,
            title: 'Eng/Mohamed Elwan',
            image: '/Images/Elwan1.jpg',
            height: '250px'
        },
        {
            id: 2,
            title: 'Eng/Mohamed Elwan',
            image: '/Images/Elwan2.jpg',
            height: '250px'
        },
        {
            id: 3,
            title: 'Eng/Mohamed Elwan',
            image: '/Images/Elwan3.jpg',
            height: '250px'
        },
        {
            id: 4,
            title: 'LAFORTUNE',
            image: '/Images/LAFORTUNE1.jpg',
            height: '400px'
        },
        {
            id: 5,
            title: 'LAFORTUNE',
            image: '/Images/LAFORTUNE2.jpg',
            height: '400px'
        },
        {
            id: 6,
            title: 'LAFORTUNE',
            image: '/Images/LAFORTUNE3.jpg',
            height: '400px'
        },
        {
            id: 7,
            title: 'Ebda3 Gate',
            image: '/Images/Ebda3Gate4.jpg',
            height: '350px'
        },
        {
            id: 8,
            title: 'Ebda3 Gate',
            image: '/Images/Ebda3Gate5.jpg',
            height: '350px'
        },
        {
            id: 9,
            title: 'Ebda3 Gate',
            image: '/Images/Ebda3Gate6.jpg',
            height: '350px'
        },
        {
            id: 10,
            title: 'Ebda3 Gate',
            image: '/Images/Ebda3Gate7.jpg',
            height: '350px'
        },
        {
            id: 11,
            title: 'Ebda3 Gate',
            image: '/Images/Ebda3Gate8.jpg',
            height: '350px'
        },
        {
            id: 12,
            title: 'Ebda3 Gate',
            image: '/Images/Ebda3Gate9.jpg',
            height: '350px'
        },
        {
            id: 13,
            title: 'Ebda3 Gate',
            image: '/Images/Ebda3Gate1.jpg',
            height: '350px'
        },
        {
            id: 14,
            title: 'Ebda3 Gate',
            image: '/Images/Ebda3Gate2.jpg',
            height: '350px'
        },
        {
            id: 15,
            title: 'Ebda3 Gate',
            image: '/Images/Ebda3Gate3.jpg',
            height: '350px'
        },
        {
            id: 16,
            title: 'UNI Line ',
            image: '/Images/ULine4.jpg',
            height: '350px'
        },
        {
            id: 17,
            title: 'UNI Line ',
            image: '/Images/ULine2.jpg',
            height: '350px'
        },
        {
            id: 18,
            title: 'UNI Line ',
            image: '/Images/ULine3.jpg',
            height: '350px'
        },
        {
            id: 19,
            title: 'UNI Line ',
            image: '/Images/ULine.jpg',
            height: '350px'
        },
        {
            id: 20,
            title: 'UNI Line ',
            image: '/Images/ULine5.png',
            height: '350px'
        },
        {
            id: 21,
            title: 'UNI Line ',
            image: '/Images/ULine66.jpg',
            height: '350px'
        },
        {
            id: 22,
            title: 'Smash In ',
            image: '/Images/Smash1.jpg',
            height: '450px'
        },
        {
            id: 23,
            title: 'Smash In ',
            image: '/Images/Smash2.jpg',
            height: '400px'
        },
        {
            id: 24,
            title: 'Smash In ',
            image: '/Images/Smash3.jpg',
            height: '450px'
        },
        {
            id: 25,
            title: 'Couch Ali ',
            image: '/Images/ALI1.png',
            height: '650px'
        },
        {
            id: 26,
            title: 'Couch Ali ',
            image: '/Images/ALI2.png',
            height: '650px'
        },
        {
            id: 27,
            title: ' Couch Ali ',
            image: '/Images/ALI3.png',
            height: '650px'
        },
        {
            id: 28,
            title: 'Couch Khaled ',
            image: '/Images/Khaled.jpg',
            height: '650px'
        },
        {
            id: 29,
            title: 'Couch Khaled ',
            image: '/Images/Khaled3.jpg',
            height: '600px'
        },
        {
            id: 30,
            title: ' Couch Khaled ',
            image: '/Images/Khaled2.png',
            height: '650px'
        },
        {
            id: 31,
            title: ' EVOLVE ',
            image: '/Images/EVOLVE.png',
            height: '350px'
        },
        {
            id: 32,
            title: ' PLAN88 ',
            image: '/Images/Hiring.jpg',
            height: '350px'
        },
        {
            id: 33,
            title: ' Eldawly ',
            image: '/Images/Dawly.jpg',
            height: '350px'
        },
        {
            id: 34,
            title: ' Double Dare ',
            image: '/Images/Double.png',
            height: '320px'
        },
        {
            id: 35,
            title: ' Perfume ',
            image: '/Images/Pefume.jpg',
            height: '300px'
        },
        {
            id: 36,
            title: ' Twist ',
            image: '/Images/Twist.png',
            height: '320px'
        }
    ];



    return (
      <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12 sm:mb-16 font-mono">
                  <p className="text-gray-400 text-sm sm:text-base mb-2 font-mono">
                      All Of My
                  </p>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-mono">
                      Work
                  </h1>
              </div>

              {/* Work Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                  {projects.map((project) => (
                      <Link key={project.id} href={project.image} className="group">
                          <div className="relative overflow-hidden rounded-2xl lg:m-5   hover:border-gray-600 transition-all duration-300">
                              <div className="relative sm:h-72 lg:h-96" style={{ height: project.height }}>
                                  <Image
                                      src={`${project.image}`}
                                      alt={project.title}
                                        layout="fill"
                                      className="transition-transform duration-300 group-hover:scale-105"
                                  />
                                  {/* Overlay */}
                                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
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


          </div>
          <div className="flex justify-center">
              <Link href="/#profile" className="group">
                  <div className="w-72 h-72 cursor-pointer">
                      <Image
                          src="/images/Logo.png"
                          alt="Moaz"
                          width={720}
                          height={720}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                  </div>

              </Link>
          </div>
      </section>
  );
}
