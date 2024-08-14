import React from 'react';
import MediaCard from './Curriculum'; // Adjust the import path as necessary

export default function CardContainer() {
  return (
    <>
    <div className='bg-slate-100'>
    <div className='mt-4'>
    <h2 className='text-3xl font-bold sm:text-4xl hover:underline flex justify-center'>Subject Combinations</h2>
    <div className="flex flex-wrap justify-center gap-4 p-4">
      <div className="w-full sm:w-80 md:w-96 lg:w-1/4">
        <MediaCard 
          image="/Science.webp" 
          title="Science" 
          description="Combinations of Subject include PCMCs(Computer Science), PCMB(Biology) or PCMS(Statistics)."
        />
      </div>
      <div className="w-full sm:w-80 md:w-96 lg:w-1/4">
        <MediaCard 
          image="/Commerce.jpeg" 
          title="Commerce" 
          description="Combinations of Subject include ABES(Statistics) or ABECs(Computer Science)."
        />
      </div>
    </div>
    </div>
    </div>
    </>
  );
}
