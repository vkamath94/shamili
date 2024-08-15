'use client';
import React from 'react';
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


const TestimonialSection = () => {
    const testimonials = [
      {
        name: 'Amrutha',
        testimonial: 'Shamili Pre-University College is that platform, which prepared me to face the practical world after completing my education. The nature atmosphere made my 2 years of journey spectacular and created a disipline in my life. With the support of my teachers and principal I secured highest score therby proving that studies and extra curricular activities can go hand-in-hand with proper guidance. I will be grateful for my college always.',
        batch:'2015-17'
      },
      {
        name: 'Subramnya Krishna',
        testimonial: "I was fortunate to get free education at Shamili PU College since my score was high in SSLC examination. I found myself in an environment that nurtured academic excellence and personal growth. Today I am proud to be working at Synopsis, World's no 1 EDA software provider and I attribute much of my success to the education and support I recieved at Shamili PU College. It is a place that truly transforms lives and I am grateful for everything it has done for me",
        batch:'2016-18'
    },
      {
        name: 'Michael Johnson',
        testimonial: 'Shamili PU College provided me with the resources and guidance I needed to excel academically. I highly recommend it.',
      },
      {
        name: 'Emily Davis',
        testimonial: 'The college has a fantastic learning environment and the staff are dedicated to helping students succeed. I am grateful for my time there.',
      },
      // Add more testimonials as needed
    ];
  
    return (
        <section className="bg-white py-12">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl mb-10">
              What Our Students Say
            </h2>
    
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
                    <p className="text-lg font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="mt-4 text-gray-600">{testimonial.testimonial}</p>
                    <p className="mt-4 text-gray-600">Batch: {testimonial.batch}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      );
    };
    
    export default TestimonialSection;