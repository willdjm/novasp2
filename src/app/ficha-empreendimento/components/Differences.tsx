export function Differences() {

    return (
        <section
            id="empreendimentos"
            className="flex flex-col justify-center items-center md:pt-20 pt-10 px-4 bg-red-300" >
            <div className="flex flex-col items-center justify-center md:gap-8 gap-5 md:max-w-6xl w-full">
                <h3 className="text-blue-950 text-2xl md:text-5xl font-bold w-full md:text-left text-center pb-8">
                    Diferenciais
                </h3>

                <div className="grid md:grid-cols-4 grid-cols-2 w-full items-center justify-center md:gap-10 gap-5">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <picture>
                            <img
                                src="/icone-academia.webp"
                                className="mr-2 flex items-center justify-center"
                                alt="Background"
                            />
                        </picture>
                        <span className='md:text-2xl text-blue-950 text-base flex'>Academia</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <picture>
                            <img
                                src="/icone-pet.webp"
                                className="mr-2 flex items-center justify-center"
                                alt="Background"
                            />
                        </picture>
                        <span className='md:text-2xl text-blue-950 text-base flex mt-3 md:mt-0'>Pet place</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <picture>
                            <img
                                src="/icone-gourmet.webp"
                                className="mr-2 flex items-center justify-center"
                                alt="Background"
                            />
                        </picture>
                        <span className='md:text-2xl text-blue-950 text-base flex mt-3 md:mt-0'>Espaço gourmet</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <picture>
                            <img
                                src="/icone-bicicletario.webp"
                                className="mr-2 flex items-center justify-center"
                                alt="Background"
                            />
                        </picture>
                        <span className='md:text-2xl text-blue-950 text-base flex'>Bicicletário</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <picture>
                            <img
                                src="/icone-lavanderia.webp"
                                className="mr-2 flex items-center justify-center"
                                alt="Background"
                            />
                        </picture>
                        <span className='md:text-2xl text-blue-950 text-base flex'>Lavanderia coletiva</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <picture>
                            <img
                                src="/icone-lounge.webp"
                                className="mr-2 flex items-center justify-center"
                                alt="Background"
                            />
                        </picture>
                        <span className='md:text-2xl text-blue-950 text-base flex mt-3 md:mt-0'>Lounge</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <picture>
                            <img
                                src="/icone-praca.webp"
                                className="mr-2 flex items-center justify-center"
                                alt="Background"
                            />
                        </picture>
                        <span className='md:text-2xl text-blue-950 text-base flex mt-3 md:mt-0'>Praça Luau</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <picture>
                            <img
                                src="/icone-salao-festas.webp"
                                className="mr-2 flex items-center justify-center"
                                alt="Background"
                            />
                        </picture>
                        <span className='md:text-2xl text-blue-950 text-base flex'>Salão de festas</span>
                    </div>
                </div>
            </div>
            <div className="w-full items-center bg-amber-600 justify-center h-1 md:mt-24 mt-16 mb-10 md:max-w-6xl"></div>
        </section>
    );
}
