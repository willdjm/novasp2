"use client"

import React, { useEffect, useState } from 'react';

export const DivFlutuante: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const bannerElement = document.getElementById('bannerId'); // Substitua pelo ID do seu banner
      if (bannerElement) {
        const rect = bannerElement.getBoundingClientRect();
        setIsVisible(rect.bottom < 0); // Verifica se o banner saiu da viewport
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('resize', toggleVisibility);

    toggleVisibility(); // Verifica inicialmente

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <section
          id="divflutuante"
          className="fixed w-full flex flex-col justify-center items-center md:pt-24 pt-20 px-4 bg-blue-950 z-40 border-b-2 border-amber-600 shadow-2xl"
        >
          {/* Conteúdo da div */}
          <div className="flex items-center justify-between md:gap-8 gap-1 md:max-w-6xl w-full md:py-1.5">
            <div className="flex items-center justify-start md:w-1/2">
              <div className="flex flex-col items-start justify-center md:gap-2 text-white">
                <div className="flex items-center">
                  <p className="text-sm md:text-4xl text-left pr-2">Saúde - SP</p>
                  <p className="text-sm md:text-4xl text-left pl-2 border-l-2">Lançamento</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm md:text-4xl text-left">Stúdio, 1 e 2 Dorms.</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between md:w-1/2">
              <div className="flex items-center justify-center md:justify-end md:w-1/2">
                <button className="bg-blue-400 text-white py-2 px-8 border rounded-md md:flex text-sm md:text-base hidden">
                  Mais informações
                </button>
                <button className="bg-blue-400 py-2 text-white h-full w-14 md:rounded-md flex md:hidden text-sm md:text-base">
                  Saiba mais
                </button>
              </div>
              <div className="flex items-center justify-center md:justify-end md:w-1/2">
                <picture>
                  <img src="/img-logo-ficha.webp" alt="Logo" className="w-20 md:w-auto" />
                </picture>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
