'use client';
import React from 'react';
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const EventSection = ({ eventName, eventImages }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">{eventName}</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        modules={[Navigation]}
        className="w-full"
      >
        {eventImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-w-16 aspect-h-9 overflow-hidden">
              <img
                src={image}
                alt={`Event Image ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventSection;
