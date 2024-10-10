"use client";

export function SeeAlso() {
    return (
        <div id="Contact" className="relative bg-Teal-600 z-20">
            <div className="w-full md:h-20 h-32"></div>
            <div className="relative">
                <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-center px-8 md:px-0">
                    <div className="w-full max-w-6xl md:flex md:flex-row flex flex-col md:justify-between md:items-center bg-amber-600 rounded-xl md:px-10 px-5 py-10 md:py-12 md:gap-0 gap-5">
                        <div className="flex flex-col items-start justify-center md:gap-2">
                            <span className="text-blue-950 font-bold md:text-5xl text-2xl">Veja também</span>
                            <p className="text-blue-950 font-bold md:text-5xl text-2xl">Empreendimentos <span className="text-white"> parceiros</span></p>
                        </div>
                        <div className="flex md:items-center md:justify-center">
                            <a href='/lista/#listaparceiros' className="bg-blue-950 text-white py-2 px-6 rounded-md uppercase">
                                Acessar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full items-center bg-red-300 justify-center h-40"></div>
        </div>
    );
}
