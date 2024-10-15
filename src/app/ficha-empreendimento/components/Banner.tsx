"use client";

import { FaChevronRight, FaLocationDot } from "react-icons/fa6";

export const Banner = () => {
    return (
        <div id="bannerId" className="relative w-full z-30 shadow-2xl">
            <picture className="relative w-full h-full">
                {/* Imagem de desktop */}
                <img
                    src="/banner-ficha.webp"
                    className="w-full h-full hidden md:block object-cover"
                    alt=""
                />
                {/* Imagem de mobile */}
                <img
                    src="/banner-ficha-mobile.webp"
                    className="w-full h-full block md:hidden object-cover"
                    alt=""
                />
            </picture>
            <div className="absolute md:top-20 top-8 md:left-4 flex items-center justify-center text-white z-50 w-full overflow-hidden">
                <div className="flex items-center justify-between w-full md:max-w-6xl px-4 md:px-0">
                    <div className="flex items-center justify-start md:pt-8 pt-16 md:pb-10 pb-6 md:w-full ">
                        <a href="#" className="text-neutral-400 flex items-center md:text-sm text-xs ">
                            Nova SP INC
                        </a>
                        <FaChevronRight className='ml-1 text-neutral-400' />
                        <a href="#" className="text-neutral-400 flex items-center ml-1 md:text-sm text-xs">
                            Empreendimentos
                        </a>
                    </div>
                    <div className="flex items-center justify-end md:pt-8 pt-16 md:pb-10 pb-6 md:w-full">
                        <a href="/lista" className="text-white flex items-center md:text-base text-sm uppercase underline">
                            VOLTAR
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-end text-white z-40 bg-black/40 pb-8 md:pb-14 pt-14 md:pt-14">
                <div className="flex w-full md:max-w-6xl pb-5 items-end md:items-center justify-between text-center md:text-left px-4 md:px-0">
                    <div className="w-full">
                        <div className="pb-2">
                            <picture>
                                <img src="/img-faixa-ficha.webp" alt="Logo" className="" />
                            </picture>
                        </div>
                        <div className="flex flex-col items-start justify-center md:gap-2">
                            <div className="flex items-center">
                                <p className="text-sm md:text-4xl text-left pr-2">Saúde - SP</p>
                                <p className="text-sm md:text-4xl text-left pl-2 border-l-2">Lançamento</p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-sm md:text-4xl text-left">Stúdio, 1 e 2 Dorms.</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <picture>
                            <img src="/img-logo-ficha.webp" alt="Logo" className="w-28 md:w-auto" />
                        </picture>
                    </div>
                </div>
                <div className="flex w-full md:max-w-6xl items-center justify-start text-center md:text-left text-sm md:text-2xl px-4 md:px-0 pt-5 gap-3 border-t-4 border-amber-600">
                    <FaLocationDot className="text-amber-600" />
                    <p>R. Cordeiro da Cunha, 725 </p>
                </div>
            </div>
        </div>
    );
};
