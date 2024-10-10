"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation } from "swiper/modules";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

export function PartnerProducts() {
  const [isMobile, setIsMobile] = useState(false);
  const showNavigation = true; // Defina como verdadeiro ou falso conforme necessário

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cards = [
    {
      img: "/img-produtos.webp",
      cidade: "Saúde",
      estado: "São Paulo - SP",
      title: "Caixa faz leilão com mais de 560 imóveis e valores ...",
      estagio: "Lançamento",
      logoUrl: "/logo-produtos.webp",
    },
    {
      img: "/img-produtos.webp",
      cidade: "Saúde",
      estado: "São Paulo - SP",
      title: "Caixa faz leilão com mais de 560 imóveis e valores ...",
      estagio: "Em Obras",
      logoUrl: "/logo-produtos.webp",
    },
    {
      img: "/img-produtos.webp",
      cidade: "Saúde",
      estado: "São Paulo - SP",
      title: "Caixa faz leilão com mais de 560 imóveis e valores ...",
      estagio: "Entregue",
      logoUrl: "/logo-produtos.webp",
    },
    {
      img: "/img-produtos.webp",
      cidade: "Saúde",
      estado: "São Paulo - SP",
      title: "Caixa faz leilão com mais de 560 imóveis e valores ...",
      estagio: "Entregue",
      logoUrl: "/logo-produtos.webp",
    },
    {
      img: "/img-produtos.webp",
      cidade: "Saúde",
      estado: "São Paulo - SP",
      title: "Caixa faz leilão com mais de 560 imóveis e valores ...",
      estagio: "Entregue",
      logoUrl: "/logo-produtos.webp",
    },
  ];

  return (
    <section
      id="empreendimentos"
      className="flex flex-col justify-center items-center md:pb-20 pb-10 px-4"
    >
      <div className="flex flex-col items-center justify-center md:gap-8 gap-5 md:max-w-6xl w-full">
        <h3 className="text-blue-950 text-2xl md:text-5xl font-bold pb-10 w-full text-left">
          Produtos <span className="text-amber-600">parceiros</span>
        </h3>

        <div className="relative w-full overflow-visible">
          <Swiper
            modules={showNavigation ? [Navigation] : []}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            navigation={showNavigation && !isMobile ? {
              nextEl: '.custom-swiper-button-next',
              prevEl: '.custom-swiper-button-prev',
            } : false}
            loop
            className="w-full"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <a href="/ficha-empreendimento">
                  <div className="max-w-xs cursor-pointer bg-white p-2 shadow-md border rounded relative group overflow-hidden">
                    <div className="absolute flex items-center justify-center gap-4 h-10 top-4 left-0 text-black text-center z-10">
                      <div className="relative">
                        <picture>
                          <img
                            src="/bg-faixa-parceria.webp"
                            className="w-full md:h-10"
                            alt="Background"
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="overflow-hidden rounded">
                      <picture>
                        <img
                          className="w-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                          src={card.img}
                          alt="product"
                        />
                      </picture>
                    </div>
                    <div className="py-3 z-0">
                      <div className="flex items-center justify-start mb-2">
                        <FaMapMarkerAlt className="mr-2 text-2xl text-amber-600" />
                        <div className='flex flex-col items-start text-amber-600'>
                          <span className='md:text-base text-sm'>{card.cidade}</span>
                          <span className="md:text-base text-sm">{card.estado}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-start mb-2 w-full text-left">
                        <picture>
                          <img
                            src="/icon-banner-1.webp"
                            className="mr-2"
                            alt="Background"
                          />
                        </picture>
                        <span className='text-sm mr-2'>24 a 41m</span>
                        <span className="text-sm border-l-2 pl-2 mr-2">Studios</span>
                        <span className="text-sm border-l-2 pl-2 mr-2">1 ou 2 Dorms.</span>
                      </div>
                      <div className="flex items-center justify-center mb-2">
                        <picture>
                          <img
                            src="/icon-banner-2.webp"
                            className="mr-2"
                            alt="Background"
                          />
                        </picture>
                        <span className='md:text-base text-sm text-left w-full ml-2'>Lazer na cobertura</span>
                      </div>
                      <div className="my-4 pt-4 flex items-center justify-between border-t-2">
                        <span className='md:text-base text-sm text-left font-bold text-amber-600 w-full'>{card.estagio}</span>
                        <picture>
                          <img className="w-full object-cover object-center pt-2" src={card.logoUrl} alt="product" />
                        </picture>
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
            {showNavigation && !isMobile && (
              <>
                <div className="swiper-button-prev custom-swiper-button-prev"></div>
                <div className="swiper-button-next custom-swiper-button-next"></div>
              </>
            )}
          </Swiper>
        </div>

        <a href="/lista" className="bg-amber-600 text-white py-2 px-6 rounded-lg flex md:mt-10">
          Ver todos
        </a>
      </div>

      {/* Estilos CSS para as setas */}
      <style jsx>{`
        .custom-swiper-button-prev, .custom-swiper-button-next {
          color: #1C2443; /* Cor das setas */
          width: 40px; /* Ajuste a largura */
          height: 40px; /* Ajuste a altura */
          position: absolute; /* Para evitar que as setas fiquem em cima das fotos */
          top: 50%; /* Centraliza verticalmente */
          transform: translateY(-50%); /* Ajusta a posição vertical */
          z-index: 10; /* Mantém as setas acima de outros elementos */
        }

        .custom-swiper-button-prev {
          left: 5px; /* Ajuste a distância da borda esquerda */
        }

        .custom-swiper-button-next {
          right: 50px; /* Ajuste a distância da borda direita */
        }
      `}</style>
    </section>
  );
}
