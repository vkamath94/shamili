'use client';
import React from 'react';
import { Playfair } from 'next/font/google';

const playfair = Playfair({ weights: [500, 700], subsets: ['latin'] });

const FacilitiesPage = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Facilities Section */}
        <h1 className={`${playfair.className} text-center text-3xl font-bold text-gray-900 sm:text-4xl mb-10`}>
          Facilities
        </h1>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-10">
          <li>Experienced and dedicated lecturers</li>
          <li>Excellent academic atmosphere</li>
          <li>Well-equipped laboratories, spacious auditorium, and library</li>
          <li>Fee concession for those who have scored 90% and 85% marks in SSLC</li>
          <li>Free Mid-day meals facility</li>
          <li>Dedicated Faculty for NEET/JEE/CET Coaching</li>
        </ul>

        {/* Labs Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Spacious Labs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="relative group">
            <img src="/Physics_lab.jpeg" alt="Physics Lab" className="object-cover w-full h-48 rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <p className="text-white text-lg">Physics Lab</p>
            </div>
          </div>
          <div className="relative group">
            <img src="/Chem_lab.jpeg" alt="Chemistry Lab" className="object-cover w-full h-48 rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <p className="text-white text-lg">Chemistry Lab</p>
            </div>
          </div>
          <div className="relative group">
            <img src="/Bio_lab.jpeg" alt="Biology Lab" className="object-cover w-full h-48 rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <p className="text-white text-lg">Biology Lab</p>
            </div>
          </div>
          <div className="relative group">
            <img src="/Computer_lab.jpeg" alt="Computer Lab" className="object-cover w-full h-48 rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <p className="text-white text-lg">Computer Lab</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesPage;
