// src/components/wrappers/Res.js
import React from 'react';

export default function Res({ image1, image2, altText1, altText2 }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6">
      {/* Results at a Glance Text */}
      <h2 className="text-2xl font-semibold mb-4 hover:text-blue-600 transition-colors duration-300 ease-in-out">
        <span className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-blue-600">
          Results at a Glance
        </span>
      </h2>
      
      {/* Images */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
        <div className="w-full md:w-1/2">
          <img 
            src={image1} 
            alt={altText1} 
            className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="w-full md:w-1/2">
          <img 
            src={image2} 
            alt={altText2} 
            className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
