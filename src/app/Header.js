'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '/public/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdown(!aboutDropdown);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex items-center">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <Image src={Logo} alt="Logo" height={50} width={50} />
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 transition hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <nav className="hidden md:flex md:items-center md:gap-12">
            <ul className="flex items-center gap-6 text-sm">
              <li className="relative">
                <button
                  onClick={toggleAboutDropdown}
                  className="text-gray-900 transition hover:text-gray-600"
                >
                  About
                </button>
                {aboutDropdown && (
                  <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg border border-gray-200">
                    <li>
                      <a
                        href="/About/Vision"
                        className="block px-4 py-2 text-gray-900 transition hover:bg-gray-100"
                      >
                        Vision
                      </a>
                    </li>
                    <li>
                      <a
                        href="/About/Message"
                        className="block px-4 py-2 text-gray-900 transition hover:bg-gray-100"
                      >
                        Principal's Message
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a className="text-gray-900 transition hover:text-gray-600" href="/Courses">
                  Courses
                </a>
              </li>
              <li>
                <a className="text-gray-900 transition hover:text-gray-600" href="#">
                  Facilities
                </a>
              </li>
              <li>
                <a className="text-gray-900 transition hover:text-gray-600" href="#">
                  Faculty
                </a>
              </li>
              <li>
                <a className="text-gray-900 transition hover:text-gray-600" href="#">
                  Results
                </a>
              </li>
              <li>
                <a className="text-gray-900 transition hover:text-gray-600" href="#">
                  Events
                </a>
              </li>
              <li>
                <a className="text-gray-900 transition hover:text-gray-600" href="/Contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {isOpen && (
          <nav className="md:hidden">
            <ul className="mt-2 flex flex-col text-sm">
              <li className="relative">
                <button
                  onClick={toggleAboutDropdown}
                  className="text-gray-900 transition hover:text-gray-600 w-full text-left px-4 py-2"
                >
                  About
                </button>
                {aboutDropdown && (
                  <ul className="mt-2 space-y-2 bg-white shadow-lg border border-gray-200">
                    <li>
                      <a
                        href="/About/Vision"
                        className="block px-4 py-2 text-gray-900 transition hover:bg-gray-100"
                      >
                        Vision
                      </a>
                    </li>
                    <li>
                      <a
                        href="/About/Message"
                        className="block px-4 py-2 text-gray-900 transition hover:bg-gray-100"
                      >
                        Principal's Message
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a className="block px-4 py-2 text-gray-900 transition hover:bg-gray-100" href="/Courses">
                  Courses
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 text-gray-900 transition hover:bg-gray-100" href="#">
                  Facilities
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 text-gray-900 transition hover:bg-gray-100" href="#">
                  Faculty
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 text-gray-900 transition hover:bg-gray-100" href="#">
                  Results
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 text-gray-900 transition hover:bg-gray-100" href="#">
                  Events
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 text-gray-900 transition hover:bg-gray-100" href="/Contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
