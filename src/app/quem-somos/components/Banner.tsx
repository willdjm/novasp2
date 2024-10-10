"use client";

import { FaChevronRight } from "react-icons/fa";

export const Banner = () => {
    return (
        <div className="relative w-full z-0 pt-20">
            <picture className="relative w-full h-full">
                {/* Imagem de desktop */}
                <img
                    src="/banner-about.webp"
                    className="w-full h-full hidden md:block object-cover"
                    alt=""
                />
                {/* Imagem de mobile */}
                <img
                    src="/banner-about-mobile.webp"
                    className="w-full h-full block md:hidden object-cover"
                    alt=""
                />
            </picture>
            <div className="absolute top-8 left-4 flex flex-col items-center justify-end text-white z-40 md:hidden">
                <div className="flex items-center justify-start md:pt-8 pt-16 md:pb-10 pb-6 w-full md:max-w-6xl">
                    <button className="text-neutral-400 flex items-center text-xs">
                        Nova SP INC
                    </button>
                    <FaChevronRight className='ml-1 text-neutral-400' />
                    <button className="text-neutral-400 flex items-center ml-1 text-xs">
                        Empreendimentos
                    </button>
                    <FaChevronRight className='ml-1 text-neutral-400' />
                    <button className="text-neutral-400 flex items-center ml-1 text-xs">
                        Feel
                    </button>
                </div>
            </div>
            <div className="md:absolute md:inset-0 flex flex-col bg-blue-950 md:bg-transparent items-center justify-end text-white z-40 py-7 md:py-14">
                <div className="flex w-full max-w-6xl items-center justify-between text-center md:text-left px-4 md:px-0">
                    <div className="w-full">
                        <div className="flex flex-col items-start justify-center">
                            <div className="flex flex-col items-start gap-5 max-w-3xl">
                                <p className="text-xl md:text-6xl text-left font-bold">Nova SP INC.</p>
                                <p className="text-xl md:text-3xl text-left font-bold">A incorporadora dedicada a transformar vidas.</p>
                                <p className=" text-left">Parte de um grupo empresarial com mais de 40 anos de experiência no mercado imobiliário, a NOVA SP INC. está comprometida em descobrir, construir e oferecer as melhores opções de moradia para nossos clientes. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
