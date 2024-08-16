import React from 'react';
import { Poppins } from 'next/font/google';



const Page = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-block bg-slate-400 py-3 px-6 rounded-full">
            <h1 className='hover:underline text-3xl font-bold text-white sm:text-4xl'>
              Vision Of the Institute
            </h1>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className=' text-lg text-gray-700 leading-relaxed'>
            Founded in 2010, Shamili Pre University College stands as a beacon of hope and transformation for students from financially and socially disadvantaged backgrounds. The College is the brainchild of Nadoja Dr. G. Shankar, a philanthropist and social reformer committed to improving lives through education.
            <br />
            <br />
            Dr. Shankar's vision extends beyond the classroom; he believes that instilling basic ethics and values can profoundly impact individuals' lives, bringing love and affection where it is often lacking. His efforts are not confined to just Shamili College alone but include significant financial support to various government institutions, such as the Government Girls Degree College and Research Center Udupi, which is named in his honor. His contributions to healthcare are equally notable, having donated substantial amounts for medical facilities and equipment in government hospitals. As an A-grade Civil Contractor, he also made a mark by constructing the Prassanna Ganapathi temple at his work sites, attributing success to divine blessings.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
