"use client";
import React from 'react';
import Image from 'next/image';
import Logo from '/public/logo.png';

const currentYear = new Date().getFullYear();
const Footer = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      document.getElementById('header')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-100">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <button
            className="inline-block rounded-full bg-slate-600 p-2 text-white shadow transition hover:bg-blue-500 sm:p-3 lg:p-4"
            onClick={scrollToTop}
          >
            <span className="sr-only">Back to top</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-teal-600 lg:justify-start">
              <Image src={Logo} alt="Logo" className="h-20 w-20" />
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              Address-Kidiyoor,Udupi-576103, Email:su270.puc@gmail.com,shamilipuclg@gmail.com<br/>
              Recognized by the Dept of P.U Education,Karnataka |<br/>College Code:SU0270
            </p>
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; {currentYear} Shamili Pre-University College. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
