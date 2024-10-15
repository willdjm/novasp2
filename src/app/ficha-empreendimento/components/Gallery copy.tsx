"use client";

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

// Array de objetos com informações das imagens
const images = [
  { src: '/img-gallery1.webp', alt: 'Imagem 1' },
  { src: '/img-gallery2.webp', alt: 'Imagem 2' },
  { src: '/img-gallery3.webp', alt: 'Imagem 3' },
  { src: '/img-gallery4.webp', alt: 'Imagem 4' },
  { src: '/img-gallery5.webp', alt: 'Imagem 5' },
  { src: '/img-gallery6.webp', alt: 'Imagem 6' },
  { src: '/img-gallery7.webp', alt: 'Imagem 7' },
  { src: '/img-gallery8.webp', alt: 'Imagem 8' },
  { src: '/img-gallery9.webp', alt: 'Imagem 9' },
  { src: '/img-gallery10.webp', alt: 'Imagem 10' },
  { src: '/img-gallery11.webp', alt: 'Imagem 11' },
];

export function Gallery2() {
  return (
    <section
      id="empreendimentos"
      className="flex flex-col justify-center bg-red-300 items-center md:py-20 py-10 px-4 overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center md:gap-8 gap-5 w-full">
        <h3 className="text-blue-950 text-2xl md:text-5xl font-bold pb-10 w-full md:text-left text-center max-w-6xl">
          Galeria de imagens
        </h3>

        {/* slider desktop */}
        <div className="relative w-screen hidden md:block md:h-[40rem]">
          <Swiper
            slidesPerView={3}
            spaceBetween={0}
            grabCursor={true}
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <picture >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-screen md:object-cover object-contain md:h-screen"
                  />
                </picture>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* slider mobile */}
        <div className="relative w-full h-full md:hidden block">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            grabCursor={true}
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <picture >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className=""
                  />
                </picture>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}