'use client';
import React, { useState } from 'react';
import Logo from '/public/logo.png';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <div className="h-8">
                <Image src={Logo} alt="Logo" height={60} width={60} />
              </div>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="text-gray-900 transition hover:text-gray-500/75" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-gray-900 transition hover:text-gray-500/75" href="#">
                    Facilities
                  </a>
                </li>
                <li>
                  <a className="text-gray-900 transition hover:text-gray-500/75" href="#">
                    Staff
                  </a>
                </li>
                <li>
                  <a className="text-gray-900 transition hover:text-gray-500/75" href="#">
                    Results
                  </a>
                </li>
                <li>
                  <a className="text-gray-900 transition hover:text-gray-500/75" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            <div className="block md:hidden">
              <button
                onClick={toggleMenu}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <nav aria-label="Global" className="md:hidden">
            <ul className="mt-2 flex flex-col items-start gap-4 text-sm">
              <li>
                <a className="text-gray-900 transition hover:text-gray-500/75" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="text-gray-900 transition hover:text-gray-500/75" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="text-gray-900 transition hover:text-gray-500/75" href="#">
                  History
                </a>
              </li>
              <li>
                <a className="text-gray-900 transition hover:text-gray-500/75" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="text-gray-900 transition hover:text-gray-500/75" href="#">
                  Projects
                </a>
              </li>
              <li>
                <a className="text-gray-900 transition hover:text-gray-500/75" href="#">
                  Blog
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
