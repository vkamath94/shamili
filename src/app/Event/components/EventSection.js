'use client';
import React from 'react';
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const EventSection = ({ eventName, eventImages, eventVideo, videoWidth = "560", videoHeight = "315" }) => {
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
            <div className="relative w-full">
              <img
                src={image}
                alt={`Event Image ${index + 1}`}
                className="object-cover w-full h-auto"
              />
            </div>
          </SwiperSlide>
        ))}
        {eventVideo && (
          <SwiperSlide>
            <div className="relative w-full pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
              <video
                src={eventVideo}
                controls
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: videoWidth, height: videoHeight }}
              />
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default EventSection;
