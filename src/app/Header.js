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
    <header id="header" className="bg-slate-700 shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a className="flex items-center" href="/">
            <Image src={Logo} alt="Logo" height={50} width={50} />
            <span className="text-white text-2xl font-semibold ml-3">Shamili PU College</span>
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-300 rounded-lg focus:outline-none"
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

          {/* Navbar for Larger Screens */}
          <nav className="hidden md:flex md:items-center md:gap-6">
            <ul className="flex items-center gap-6 text-sm text-white">
              <li className="relative">
                <button
                  onClick={toggleAboutDropdown}
                  className="transition hover:text-gray-300"
                >
                  About
                </button>
                {aboutDropdown && (
                  <ul className="absolute left-0 mt-2 w-40 bg-slate-600 shadow-lg border border-gray-200">
                    <li>
                      <a
                        href="/About/Vision"
                        className="block px-4 py-2 text-white transition hover:bg-slate-500"
                      >
                        Vision & Mission
                      </a>
                    </li>
                    <li>
                      <a
                        href="/About/Message"
                        className="block px-4 py-2 text-white transition hover:bg-slate-500"
                      >
                        Principal's Message
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a className="transition hover:text-gray-300" href="/Courses">
                  Courses
                </a>
              </li>
              <li>
                <a className="transition hover:text-gray-300" href="/Facilities">
                  Facilities
                </a>
              </li>
              <li>
                <a className="transition hover:text-gray-300" href="/Faculty">
                  Faculty
                </a>
              </li>
              <li>
                <a className="transition hover:text-gray-300" href="/Results">
                  Results
                </a>
              </li>
              <li>
                <a className="transition hover:text-gray-300" href="/Event">
                  Events
                </a>
              </li>
              <li>
                <a className="transition hover:text-gray-300" href="/Contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Navbar for Smaller Screens */}
        {isOpen && (
          <nav className="md:hidden">
            <ul className="mt-2 flex flex-col text-sm text-white bg-slate-700 rounded-lg">
              <li className="relative">
                <button
                  onClick={toggleAboutDropdown}
                  className="w-full text-left px-4 py-2 transition hover:bg-slate-600"
                >
                  About
                </button>
                {aboutDropdown && (
                  <ul className="mt-2 space-y-2 bg-slate-600 rounded-lg">
                    <li>
                      <a
                        href="/About/Vision"
                        className="block px-4 py-2 transition hover:bg-slate-500"
                      >
                        Vision & Mission
                      </a>
                    </li>
                    <li>
                      <a
                        href="/About/Message"
                        className="block px-4 py-2 transition hover:bg-slate-500"
                      >
                        Principal's Message
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a className="block px-4 py-2 transition hover:bg-slate-600" href="/Courses">
                  Courses
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 transition hover:bg-slate-600" href="/Facilities">
                  Facilities
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 transition hover:bg-slate-600" href="/Faculty">
                  Faculty
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 transition hover:bg-slate-600" href="/Results">
                  Results
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 transition hover:bg-slate-600" href="/Event">
                  Events
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 transition hover:bg-slate-600" href="/Contact">
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
