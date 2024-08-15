'use client';
import React from 'react';

const ResultsPage = () => {
  
  const resultsData = [
    {
        year: '2024',
        images: [
          '/Top_2024_All.jpeg'
        ]
      },
    {
      year: '2023',
      images: [
        '/Result2.jpeg',
        '/Top_2023_All.jpeg'
      ]
    },
    {
      year: '2022',
      images: [
        '/Top_2022_All.jpeg'
      ]
    }
    // Add more years if needed
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl mb-10">
          Results
        </h1>

        {resultsData.map((result, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              {result.year}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {result.images.map((image, imgIndex) => (
                <div key={imgIndex} className="relative overflow-hidden rounded-lg shadow-lg aspect-w-4 aspect-h-3">
                  <img
                    src={image}
                    alt={`Result ${result.year} Image ${imgIndex + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResultsPage;
