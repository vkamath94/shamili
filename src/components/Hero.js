"use client";
import React from 'react';
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import Hero1 from '/public/Hero1.jpeg'; 
import Hero2 from '/public/Hero2.jpeg'

const Hero = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-lg h-64 sm:h-80 lg:h-[600px]">
          <Swiper
              navigation={true}
              modules={[Navigation]}
              className="h-full w-full"
            >
              <SwiperSlide>
                <Image
                  alt="Slide 1"
                  src={Hero1}
                  className="w-full h-full object-fit"
                  width={600}  // Set the fixed width
                  height={400} // Set the fixed height
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt="Slide 2"
                  src={Hero2}
                  className="w-full h-full object-fit"
                  width={600}  // Set the fixed width
                  height={400} // Set the fixed height
                />
              </SwiperSlide>
              {/* Add more SwiperSlides here as needed */}
            </Swiper>
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">Shmaili Pre University College</h2>

            <p className="mt-4 text-gray-700">
              Experience a nurturing environment where academic excellence meets holistic development. 
              Our institution provides a dynamic curriculum and dedicated faculty, ensuring every 
              student achieves their highest potential.
            </p>

           
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Hero;
