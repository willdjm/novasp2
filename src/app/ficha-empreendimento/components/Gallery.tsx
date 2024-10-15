"use client";

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export function Gallery() {
  return (
<div className='bg-red-300 pt-10 md:pt-0'>

<h3 className="text-blue-950 text-2xl md:text-5xl font-bold md:pb-20 pb-10 w-full md:text-left text-center md:max-w-6xl flex items-center justify-center px-4 md:px-0 bg-red-300 ">
          Galeria de imagens
        </h3>
    
    <Swiper 
      watchSlidesProgress={true}
      breakpoints={{
        // quando a largura da tela for >= 640px
        640: {
          slidesPerView: 1, // mobile
        },
        // quando a largura da tela for >= 768px
        768: {
          slidesPerView: 3, // desktop
        },
      }}
      loop
      className="mySwiper"
    >
      {[
        "/img-gallery1.webp",
        "/img-gallery2.webp",
        "/img-gallery3.webp",
        "/img-gallery4.webp",
        "/img-gallery5.webp",
        "/img-gallery6.webp",
        "/img-gallery7.webp",
        "/img-gallery8.webp",
        "/img-gallery9.webp",
        "/img-gallery10.webp",
        "/img-gallery11.webp"
      ].map((src, index) => (
        <SwiperSlide key={index} className='bg-red-300 '>
          <picture className="flex justify-center">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full md:h-[40rem] h-[25rem] object-cover" // Ajuste a altura aqui
            />
          </picture>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}
