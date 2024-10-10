
export function About() {
  return (

    <div id="about" className="relative w-full h-[50rem] border-t-4 border-amber-600 md:border-none">
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src="/videoBanner.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-end bg-blue-950 bg-opacity-80 px-4">
        <div className="absolute top-0 md:w-full w-80 items-center bg-amber-600 justify-center h-1 md:max-w-6xl hidden md:block "></div>

        <div className="w-full max-w-6xl flex flex-col items-center justify-center md:py-28 py-16  ">
          <div className="flex flex-col text-2xl md:text-5xl w-full text-white gap-2">
            <p className="uppercase">O JEITO</p>
            <p className="uppercase italic">NOVA SÃO PAULO</p>
            <p className="uppercase">DE INCORPORAR!</p>
          </div>
          <div className="flex flex-col w-full text-white">
            <div className="flex md:flex-row flex-col md:justify-between items-center w-full pt-5 gap-5 md:gap-0">
              <p className="md:max-w-xl text-base md:hidden flex">
                Somos um grupo dedicados a
                transformar a vida das pessoas por meio
                da construção de seus futuros lares.
              </p>

              <p className="md:max-w-xl text-base flex">
                A Nova SP INC. foi criada em 2021, a incorporadora do grupo focada no desenvolvimento de projetos imobiliários nas melhores e mais bem desenvolvidas regiões da zona sul de São Paulo.
              </p>
            </div>

            <div className="grid md:grid-cols-4 grid-cols-2 w-full items-center justify-center md:pt-10 border-t-4 md:border-none mt-5 pt-5 border-amber-600 gap-5 md:gap-0">
              <div className="flex items-center justify-center gap-2">
                <picture>
                  <img
                    src="/icon-video-branco1.webp"
                    className="mr-2"
                    alt="Background"
                  />
                </picture>
                <span className='md:text-lg text-white text-sm flex font-bold'>55 anos de experiência</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <picture>
                  <img
                    src="/icon-video-branco2.webp"
                    className="mr-2"
                    alt="Background"
                  />
                </picture>
                <span className='md:text-lg text-white text-sm flex font-bold mt-3 md:mt-0'>Especialistas no Secovi</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <picture>
                  <img
                    src="/icon-video-branco3.webp"
                    className="mr-2"
                    alt="Background"
                  />
                </picture>
                <span className='md:text-lg text-white text-sm flex font-bold mt-3 md:mt-0'>+ de 20 parcerias</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <picture>
                  <img
                    src="/icon-video-branco4.webp"
                    className="mr-2"
                    alt="Background"
                  />
                </picture>
                <span className='md:text-lg text-white text-sm flex font-bold'>Sucesso de vendas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
