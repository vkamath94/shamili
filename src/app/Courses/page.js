'use client';
import React from 'react';
import { Playfair } from 'next/font/google';

const playfair = Playfair({ weights: [500, 700], subsets: ['latin'] });

const PreUniversityCourses = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className={`${playfair.className} mt-10 mb-10 pt-5 pb-5 flex justify-center text-center bg-slate-400 hover:underline text-3xl font-bold sm:text-4xl`}
        >
          Courses
        </h1>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Pre-University Courses</h2>
          <p className="mt-4 text-lg text-gray-600">
            Admission to Pre-University Courses is open to candidates who have passed one of the following:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Science Combinations</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Physics, Chemistry, Mathematics, Biology (PCMB)</li>
              <li>Physics, Chemistry, Mathematics, Statistics (PCMS)</li>
              <li>Physics, Chemistry, Mathematics, Computer Science (PCMCs)</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Commerce Combinations</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Economics, Business Studies, Accountancy, Statistics (EBAS)</li>
              <li>Economics, Business Studies, Accountancy, Computer Science (EBACs)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreUniversityCourses;
