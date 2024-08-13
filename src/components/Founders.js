import React from 'react';
import { Oswald } from 'next/font/google';
import Image from 'next/image';
import Founder1 from '/public/Founder1.jpeg';
import Founder2 from '/public/Founder2.jpeg';

const oswald = Oswald({
  subsets: ['latin'],
  weights: [400, 700],
});

const Founders = () => {
  return (
    <>
      <h1 className={`${oswald.className} text-3xl font-bold sm:text-4xl text-center`}>Founders</h1>
      <div className='mt-8'></div>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        <a href="#" className="block flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
          <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden">
            <Image
              alt="founder1"
              src={Founder1}
              className="w-full h-full object-contain"
              width={256} // Set explicit width
              height={256} // Set explicit height
            />
          </div>
          <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Lorem, ipsum dolor.</h3>
          <p className="mt-2 max-w-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.
          </p>
        </a>

        <a className="block flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
          <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden">
            <Image
              alt="founder2"
              src={Founder2}
              className="w-full h-full object-contain"
              width={256} // Set explicit width
              height={256} // Set explicit height
            />
          </div>
          <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Lorem, ipsum dolor.</h3>
          <p className="mt-2 max-w-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.
          </p>
        </a>
      </div>
    </>
  );
};

export default Founders;
