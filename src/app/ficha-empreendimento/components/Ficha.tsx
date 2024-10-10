import React from 'react';

// ESTE POSSUI 2 CODIGOS, UM PARA DESKTOP E UM PARA MOBILE

export const Ficha: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center px-4 bg-red-300 md:py-20 py-10">

            {/* DESKTOP */}
            <div className="md:flex items-end hidden justify-end md:max-w-6xl w-full md:gap-10 gap-2 border-b-4 border-amber-600">
                {/* Imagem à Esquerda */}
                <div className="w-full h-full object-cover">
                    <picture className="object-cover w-full h-full">
                        <img src="/img-gallery1.webp" alt="Imagem ilustrativa" className="object-cover w-full h-full" />
                    </picture>
                </div>

                <div className="w-full h-full flex flex-col gap-2 justify-between">
                    <div className='flex flex-col gap-8'>
                        {/* Titles and Descriptions */}
                        <div className='flex flex-col'>
                            <h2 className="md:text-5xl text-xl font-bold text-blue-950">Studios, 1 e 2 Dorms.</h2>
                            <span className="md:text-2xl text-end text-sm text-blue-950 pr-10">(opção de vaga)</span>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className="md:text-5xl text-xl text-center md:text-left text-blue-950">24 a 40m²</h2>
                        </div>

                        {/* Features */}
                        <div className='md:flex md:flex-row items-center md:justify-between flex flex-col md:pt-5 gap-4 md:gap-0'>
                            <div className="flex items-center justify-center gap-2">
                                <picture>
                                    <img src="/img-ficha1.webp" className="mr-2" alt="Área de lazer completa" />
                                </picture>
                                <span className='md:text-2xl text-sm flex md:w-60'>Área de lazer completa</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <picture>
                                    <img src="/img-ficha2.webp" className="mr-2" alt="A 5 minutos à pé do Metrô" />
                                </picture>
                                <span className='md:text-2xl text-sm flex md:w-44'>A 5 minutos à pé do Metrô</span>
                            </div>
                        </div>

                        <div className='hidden md:flex pt-5 text-lg'>
                            <p>
                                Conheça o Feel Saúde, construído visando propor modernidade e conforto com ênfase em qualidade para você. O Feel tem uma ótima localização, localizado a 450m do metrô Saúde e próximo a diversas academias e comércios locais da região.
                            </p>
                        </div>
                    </div>

                    {/* Pricing and Button */}
                    <div className='md:flex md:flex-row text-lg w-full h-full justify-between items-end hidden'>
                        <div>
                            <div className="flex md:items-center md:justify-center">
                                <p className="bg-blue-950 text-white py-2 px-6 uppercase">
                                    More na Saúde!
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col items-start justify-center py-5 pr-10 gap-5'>
                            <div>
                                <p className='text-lg line-through'>De R$ 379,00</p>
                            </div>
                            <div>
                                <p className='text-lg text-amber-600'>A partir de</p>
                                <p className='text-lg'>R$ <span className='text-5xl'>319,900</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE */}
            <div className="flex flex-row md:hidden border-b-4 border-amber-600 gap-2">
                <div className="flex-1 flex items-center justify-center overflow-hidden">
                    <picture className="w-full h-full object-cover">
                        <img
                            src="/img-gallery1.webp"
                            alt="Descrição da imagem"
                            className="w-full h-full object-cover"
                        />
                    </picture>
                </div>

                <div className="flex-1 flex flex-col justify-between py-5">
                    {/* Titles and Descriptions */}
                    <div className='flex flex-col'>
                        <h2 className="md:text-5xl text-xl font-bold text-blue-950">Studios, 1 e 2 Dorms.</h2>
                        <span className="md:text-2xl text-end text-sm text-blue-950 pr-10">(opção de vaga)</span>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className="md:text-5xl text-xl text-center md:text-left text-blue-950">24 a 40m²</h2>
                    </div>

                    {/* Features */}
                    <div className='flex flex-col md:flex-row items-center justify-between pt-5 gap-4'>
                        <div className="flex items-center justify-center gap-2">
                            <picture>
                                <img src="/img-ficha1.webp" className="mr-2" alt="Área de lazer completa" />
                            </picture>
                            <span className='md:text-2xl text-sm flex md:w-60'>Área de lazer completa</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <picture>
                                <img src="/img-ficha2.webp" className="mr-2" alt="A 5 minutos à pé do Metrô" />
                            </picture>
                            <span className='md:text-2xl text-sm flex md:w-44'>A 5 minutos à pé do Metrô</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Description */}
            <div className='md:hidden flex flex-col text-lg w-full h-full justify-center items-center border-b-4 border-amber-600'>
                <div className='flex md:hidden py-8 text-lg'>
                    <p>
                        Conheça o Feel Saúde, construído visando propor modernidade e conforto com ênfase em qualidade para você. O Feel tem uma ótima localização, localizado a 450m do metrô Saúde e próximo a diversas academias e comércios locais da região.
                    </p>
                </div>

                <div className='flex items-end justify-center pb-10 gap-1 w-full'>
                    <div className='w-full'>
                        <p className='text-lg line-through'>De R$ 379,00</p>
                    </div>
                    <div className='w-full'>
                        <p className='text-base text-amber-600'>A partir de</p>
                        <p className='text-2xl flex'>R$ <span className='text-4xl'>319,900</span></p>
                    </div>
                </div>

                {/* Button */}
                <div>
                    <div className="flex md:items-center md:justify-center">
                        <p className="bg-blue-950 text-white py-2 px-6 uppercase">
                            More na Saúde!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
