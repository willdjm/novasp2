"use client";

export const WeBelieve = () => {
    return (
        <div className="md:relative w-full h-full">
            <picture className="">
                {/* Imagem de desktop */}
                <img
                    src="/bg-about.webp"
                    className="md:object-cover md:object-center md:w-full md:h-full hidden md:block"
                    alt=""
                />
                <img
                    src="/bg-about-mobile.webp"
                    className="md:hidden block object-cover object-center w-full h-full"
                    alt=""
                />
            </picture>
            <div className="md:absolute inset-0 md:flex md:flex-row flex flex-col items-center justify-center text-white z-0">
                <div className="w-full h-full"></div>
                <div className="md:w-2/3 w-full h-full flex items-center justify-start md:pl-16 p-6 md:bg-blue-950/75 bg-blue-950">
                    <div className="flex flex-col">
                        <p className="flex flex-col text-amber-600 font-bold md:text-3xl text-xl md:max-w-xs"><span className="text-white md:text-5xl text-4xl">Acreditamos </span>
                            que a moradia é muito mais do que um lugar para viver.</p>
                        <p className="md:max-w-xs pt-8">É onde você constrói memórias e realiza seus sonhos. É onde você encontra paz e tranquilidade após um dia agitado. Por isso, nos esforçamos para criar lares que sejam verdadeiros refúgios, espaços que proporcionem conforto, bem-estar e segurança.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
