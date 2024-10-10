
export function WeBuildDreams() {
  return (

    <div id="WeBuildDreams" className="w-full flex flex-col items-center justify-center md:py-20 py-10">
      <div className="w-full max-w-6xl md:flex md:flex-row flex flex-col items-center justify-center md:px-0 px-4">
        <div className="flex md:w-2/3 flex-col items-center justify-center">
          <div>
            <h2 className="text-2xl font-bold text-blue-950">Construímos sonhos com fundações sólidas e possibilidades para todos.
            </h2>
            <p className="text-blue-950 py-7 max-w-xl">Somos uma empresa parceira, com quem você pode contar sempre. Entendemos que é possível fazer mais quando trabalhamos juntos. E é escutando você que a gente encontra o melhor jeito de te ajudar a realizar seus sonhos. Junte-se a nós e venha construir o futuro com a Nova SP INC.
            </p>
          </div>
          <div className="hidden md:block">
            <picture className="">
              {/* Imagem de desktop */}
              <img
                src="/img-about.webp"
                className="md:object-cover md:object-center md:w-full md:h-full"
                alt=""
              />
            </picture>
          </div>
        </div>
        <div className="flex md:w-1/2 flex-col items-center justify-start border-l border-blue-950 gap-14 md:p-0 p-5">
          <div className="flex items-center justify-center gap-5 md:gap-3">
            <picture>
              <img
                src="/icon-experiencia.webp"
                className="mr-2"
                alt="Background"
              />
            </picture>
            <div>
              <span className='text-xl text-amber-600 md:text-2xl flex font-bold'>Profissionais</span>
              <span className='md:text-lg text-blue-950 text-sm flex max-w-xs'>com passagens pelas principais incorporadoras do Brasil</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 md:gap-3">
            <picture>
              <img
                src="/icon-profissionais.webp"
                className="mr-2"
                alt="Background"
              />
            </picture>
            <div>
              <span className='text-xl text-amber-600 md:text-2xl flex font-bold'>Experiência</span>
              <span className='md:text-lg text-blue-950 text-sm flex max-w-xs'>de mais de 4 décadas em intermediação imobiliária</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 md:gap-3">
            <picture>
              <img
                src="/icon-experiencia.webp"
                className="mr-2"
                alt="Background"
              />
            </picture>
            <div>
              <span className='text-xl text-amber-600 md:text-2xl flex font-bold'>Parcerias</span>
              <span className='md:text-lg text-blue-950 text-sm flex max-w-xs'>firmadas com experts renomados  em arquitetura e construção</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 md:gap-3">
            <span className='md:text-lg text-blue-950 text-sm flex max-w-sm'>Incorporações em terrenos selecionados nos mínimos detalhes para garantir o melhor produto para o seus clientes.</span>
          </div>
        </div>
        <div className="flex md:hidden">
          <picture className="">
            {/* Imagem de desktop */}
            <img
              src="/img-about.webp"
              className="w-full h-full"
              alt=""
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
