"use client";
import React from 'react';
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
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
                <img
                  alt="Slide 1"
                  src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="h-full w-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt="Slide 2"
                  src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="h-full w-full object-cover"
                />
              </SwiperSlide>
              {/* Add more SwiperSlides here as needed */}
            </Swiper>
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">Grow your audience</h2>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
              eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
              quidem quam repellat.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
