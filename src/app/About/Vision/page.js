import React from 'react';
import { Edu_VIC_WA_NT_Beginner, Playfair } from 'next/font/google';


const edu=Edu_VIC_WA_NT_Beginner({
    subsets:['latin'],
    weights:[200,300],
});

const playfair = Playfair({
    subsets: ['latin'],
    weights: [400, 700],
  });
const page = () => {
  return (
    <>
    <div className='px-8 sm:px-6 lg:px-8'>
    <div className='mt-8 mb-10 pt-5 pb-5 flex justify-center text-center bg-slate-400'>
    <h1 className={`${playfair.className} hover:underline text-3xl font-bold sm:text-4xl text-center`}> Vision Of the Institute</h1>
    </div>
    </div>
    <p className={`${edu.className} p-20 flex justify-center text-center`}>Founded in 2010,Shamili Pre University 
        College stands as a beacon of hope and transformation for students from financially and socially disadvantaged
        backgrounds.The College is the brainchild of Nadoja Dr.G.Shankar, a philantrophist and social reformer committted
        to imporving lives through education.
        <br/>
        Dr.Shankar's vision extends beyond the classroom , he belives that instilling basic ethics and values can 
        profoundly impact individuals's lives , bringing love and affection where it is often lacking.His efforts are not 
        confined to just Shamili College alone but includes significant financial support to various government institutions.
        Such as the Government Girls Degree College and Research Center Udupi, which is named in his honor. His contribution
        to healthcare are equally notable, having donated substantial amounts for medical facilities and equipment 
        in government hospitals. As an A grade Civil Contractor , he also made a mark by constructing Prassanna Ganapathi
        temple at his work sites , attributing success to divine blessings.
    </p>
    </>
  )
}

export default page