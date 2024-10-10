"use client"; // Indica que este é um componente do cliente

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // Importar o CSS para as setas de navegação
import { Navigation } from 'swiper/modules';

export function Plants() {
  // Constante com as URLs das imagens
  const imageUrls = [
    '/img-planta1.webp',
    '/img-planta2.webp',
    // Adicione mais URLs conforme necessário
  ];

  return (
    <section
      id="empreendimentos"
      className="flex flex-col justify-center bg-red-300 items-center py-10 pb-16 px-4"
    >
      <div className="flex flex-col items-center justify-center md:gap-8 gap-5 md:max-w-6xl w-full">
        <h3 className="text-blue-950 text-2xl md:text-5xl font-bold pb-10 w-full md:text-left text-center">
          Plantas
        </h3>

        {/* Container para Swiper */}
        <div className="relative w-full overflow-visible">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            grabCursor={true} // Permitir o arrasto em qualquer largura
            loop={true} // Carrossel infinito
            navigation // Ativar as setas de navegação
            modules={[Navigation]} // Registrar o módulo de navegação
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {imageUrls.map((url, index) => (
              <SwiperSlide key={index}>
                <picture>
                  <img src={url} alt={`Imagem ${index + 1}`} className="w-3/4 h-auto mx-auto" /> {/* Reduzindo o tamanho da imagem */}
                </picture>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
