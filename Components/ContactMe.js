'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ContactMe = () => {
    const contactInfo = [
        {
            id: 1,
            icon: '/images/email.png',
            alt: 'Email icon',
            text: 'Moaz@gmail.com',
            href: '/'
        },
        {
            id: 2,
            icon: '/images/behance-.png',
            alt: 'behance',
            text: 'Connect with me on Behance',
            href: 'https://www.behance.net/moaz_ali'
        },
        {
            id: 3,
            icon: '/images/insta.png',
            alt: 'My Instagram Handle',
            text: 'DM me on Instagram',
            href: 'https://www.instagram.com/_moaz.ali_/'
        }
    ];

    return (
        <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-4xl mx-auto text-center">
                {/* Section Header */}
                <div className="mb-12 sm:mb-16">
                    <p className="text-gray-400 text-sm sm:text-base mb-2 font-mono">
                        Get In Touch
                    </p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-mono">
                        Contact Me
                    </h1>
                </div>

                {/* Contact Info */}
                <div className="flex justify-center w-full mb-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mx-auto">
                        {contactInfo.map((contact) => (
                            <Link
                                key={contact.id}
                                href={contact.href}
                                className="group"
                                target="_blank"
                            >
                                <div className="flex border justify-between items-center border-gray-700 rounded-2xl p-3 hover:bg-gray-750 hover:border-gray-600 transition-all duration-300 group-hover:scale-105">
                                    <div className="w-12 h-12 ">
                                        <Image
                                            src={contact.icon}
                                            alt={contact.alt}
                                            width={48}
                                            height={48}
                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-gray-300 text-sm sm:text-base font-mono group-hover:text-white transition-colors duration-300 mx-4">
                                            {contact.text}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>


                {/* Logo */}
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
            </div>
        </section>
    );
};

export default ContactMe;