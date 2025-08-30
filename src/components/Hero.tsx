"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import slides from "@/data/slides.json";
import { Slide } from "@/types/slide.d.js";

const mySlides: Slide[] = slides;

import "swiper/css";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[85vh] lg:h-[100vh]">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Rasm */}
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
              {/* Shadow ichkaridan */}
              <div
                className="absolute inset-0 pointer-events-none
                shadow-[inset_0_0_300px_120px_#01172C]
                md:shadow-[inset_0_0_300px_200px_#01172C]"
              />

              {/* Text */}
              <div className="absolute inset-0 flex flex-col justify-end items-start 
                px-6 md:px-20 lg:px-32 pb-10 md:pb-16 text-white">
                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="text-sm md:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                  {slide.description}
                </p>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
