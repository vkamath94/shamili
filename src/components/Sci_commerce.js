import React from 'react';
import MediaCard from './wrappers/Combination'; // Adjust the import path as necessary

export default function CardContainer() {
  return (
    <>
      <div className='bg-slate-100 py-8'>
        <div className='mt-4'>
          <h2 className='text-3xl font-bold sm:text-4xl text-center text-slate-700 underline underline-offset-4 decoration-4 decoration-slate-500 mb-6'>
            Subject Combinations
          </h2>
          <div className="flex flex-wrap justify-center gap-8 p-4">
            <div className="w-full sm:w-80 md:w-96 lg:w-1/4">
              <MediaCard 
                image="/Science.jpeg" 
                title="Science" 
                description="Combinations of Subject include PCMCs(Computer Science) or PCMB(Biology)."
              />
            </div>
            <div className="w-full sm:w-80 md:w-96 lg:w-1/4">
              <MediaCard 
                image="/Commerce.jpeg" 
                title="Commerce" 
                description="Combinations of Subject include EBAS(Statistics) or EBACs(Computer Science)."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
