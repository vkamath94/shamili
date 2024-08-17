'use client';
import React from 'react';
import { Inter } from 'next/font/google';
import EventSection from './components/EventSection'; // Adjust the path as needed

const inter = Inter({ subsets: ['latin'] });

const EventsPage = () => {
  const eventData = [
    {
      eventName: "Students' Council",
      eventImages: [
        '/Student_Council_4.jpeg',
        '/Student_Council_6.jpeg',
        '/Student_Council_3.jpeg',
        '/Student_Council_2.jpeg',
        '/Student_Councli_1.jpeg',
        '/Student_Council_5.jpeg'
      ]
    },
    {
      eventName: 'Literary Association Inauguration',
      eventImages: [
        '/Liter.jpeg',
        '/Liter2.jpeg',
        '/Liter3.jpeg',
      ]
    },
    {
      eventName: 'Independence Day 2024',
      eventImages: [
        '/Indp_2024.jpeg',
      ],
      eventVideo: '/Idp_2024_vid.mp4',  // Replace with your video path
      videoWidth: "1600",  // Custom width
      videoHeight: "1024"  // Custom height
    },
    // Add more events as needed
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`${inter.className} text-center text-3xl font-bold text-gray-900 sm:text-4xl mb-10`}>
          Events
        </h1>
        
        {eventData.map((event, index) => (
          <EventSection
            key={index}
            eventName={event.eventName}
            eventImages={event.eventImages}
            eventVideo={event.eventVideo}
              // Pass custom height if needed
          />
        ))}
      </div>
    </section>
  );
};

export default EventsPage;
