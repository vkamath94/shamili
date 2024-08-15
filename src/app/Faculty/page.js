'use client';
import React from 'react';
import { Playfair } from 'next/font/google';

const playfair = Playfair({ weights: [500, 700], subsets: ['latin'] });

const FacultyPage = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className={`${playfair.className} text-center text-3xl font-bold text-gray-900 sm:text-4xl mb-10`}
        >
          Faculty
        </h1>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Teaching Staff</h2>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Prof. Raj Mohan
                <span className="text-sm font-normal text-gray-600">, M.Sc, M.Phil., Principal </span>
              </p>
              <p className="text-lg text-gray-600">Statistics</p>
            </div>
            <hr className="border-gray-300" />

            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Ms.Suvasini Suvarna
                <span className="text-sm font-normal text-gray-600">, M.A, L.L.B.</span>
              </p>
              <p className="text-lg text-gray-600">English</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Ms.Reshma Kamath
                <span className="text-sm font-normal text-gray-600">, M.A, B.Ed. </span>
              </p>
              <p className="text-lg text-gray-600">English</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Ms.Lalitha Kanchan
                <span className="text-sm font-normal text-gray-600">, M.A, M.Ed. </span>
              </p>
              <p className="text-lg text-gray-600">Kannada</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Ms.Sahana S Prabhu
                <span className="text-sm font-normal text-gray-600">, M.A </span>
              </p>
              <p className="text-lg text-gray-600">Hindi</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Ms.Sinchana
                <span className="text-sm font-normal text-gray-600">, M.Sc </span>
              </p>
              <p className="text-lg text-gray-600">Physics</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Ms.Sahana S Prabhu
                <span className="text-sm font-normal text-gray-600">, M.A </span>
              </p>
              <p className="text-lg text-gray-600">Hindi</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Ms.Prashanthi
                <span className="text-sm font-normal text-gray-600">, M.Sc </span>
              </p>
              <p className="text-lg text-gray-600">Physics</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Ms.Maithri Rao
                <span className="text-sm font-normal text-gray-600">, M.Sc </span>
              </p>
              <p className="text-lg text-gray-600">Chemistry</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Ms.Deepti Nayak
                <span className="text-sm font-normal text-gray-600">, M.Sc </span>
              </p>
              <p className="text-lg text-gray-600">Chemistry</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Ms.Ramya H Acharya
                <span className="text-sm font-normal text-gray-600">, M.Sc </span>
              </p>
              <p className="text-lg text-gray-600">Mathematics</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Ms.Stancy Winston
                <span className="text-sm font-normal text-gray-600">, M.Sc., M.Phil., B.Ed. </span>
              </p>
              <p className="text-lg text-gray-600">Biology</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Ms.Shruthi P Prabhu
                <span className="text-sm font-normal text-gray-600">, M.Sc </span>
              </p>
              <p className="text-lg text-gray-600">Statistics</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Ms.Vidya G Kamath
                <span className="text-sm font-normal text-gray-600">, M.Sc., P.G.D.C.A </span>
              </p>
              <p className="text-lg text-gray-600">Computer Science</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Ms.Lavina
                <span className="text-sm font-normal text-gray-600">, M.Sc </span>
              </p>
              <p className="text-lg text-gray-600">Computer Science</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Ms.Gladin F
                <span className="text-sm font-normal text-gray-600">, M.Com. , M.Phil. , B.Ed. </span>
              </p>
              <p className="text-lg text-gray-600">Commerce</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Ms.Padmini
                <span className="text-sm font-normal text-gray-600">, M.Com. , B.Ed. </span>
              </p>
              <p className="text-lg text-gray-600">Commerce</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Ms.Shailaja
                <span className="text-sm font-normal text-gray-600">, M.A. (Eng)., M.A(Economics) , B.Ed. </span>
              </p>
              <p className="text-lg text-gray-600">Economics</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Ms.Soniya
                <span className="text-sm font-normal text-gray-600">, M.A, D.C.A </span>
              </p>
              <p className="text-lg text-gray-600">Economics</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Mr.Rakesh
                <span className="text-sm font-normal text-gray-600">, M.A, B.PEd </span>
              </p>
              <p className="text-lg text-gray-600">Physical Education</p>
            </div>
            <hr className="border-gray-300" />

                 {/* Add more teaching staff here */}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Non-Teaching Staff</h2>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Ms.Prathibha
                <span className="text-sm font-normal text-gray-600">, M.Com., P.G.D.C.A. </span>
              </p>
              <p className="text-lg text-gray-600">Office Manager</p>
            </div>
            <hr className="border-gray-300" />

            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Mr.Sudhakar
              </p>
              <p className="text-lg text-gray-600">Attender</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Ms.Chandravathi
              </p>
              <p className="text-lg text-gray-600">Attender</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                Mr.Umesh
              </p>
              <p className="text-lg text-gray-600">Driver/Attender</p>
            </div>
            <hr className="border-gray-300" />


            {/* Add more non-teaching staff here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyPage;
