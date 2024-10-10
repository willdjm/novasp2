import { FaChevronDown, FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";

const ventures = [
    {
        id: 1,
        title: "Nova SP INC.",
        location: "São Paulo - SP",
        neighborhood: "Saúde",
        areaRange: "24 a 41m",
        units: "Studios",
        rooms: "1 ou 2 Dorms.",
        amenities: "Lazer na cobertura",
        estagio: "Lançamento",
        imageUrl: "/img-produtos.webp",
        logoUrl: "/logo-produtos.webp",
        backgroundUrl: "/bg-faixa.webp",
        iconUrl: "/icon-gif.gif",
        bannerImage1: "/icon-banner-1.webp",
        bannerImage2: "/icon-banner-2.webp",
    },
    {
        id: 1,
        title: "Nova SP INC.",
        location: "São Paulo - SP",
        neighborhood: "Saúde",
        areaRange: "24 a 41m",
        units: "Studios",
        rooms: "1 ou 2 Dorms.",
        amenities: "Lazer na cobertura",
        estagio: "em Obras",
        imageUrl: "/img-produtos.webp",
        logoUrl: "/logo-produtos.webp",
        backgroundUrl: "/bg-faixa.webp",
        iconUrl: "/icon-gif.gif",
        bannerImage1: "/icon-banner-1.webp",
        bannerImage2: "/icon-banner-2.webp",
    },
    {
        id: 1,
        title: "Nova SP INC.",
        location: "São Paulo - SP",
        neighborhood: "Saúde",
        areaRange: "24 a 41m",
        units: "Studios",
        rooms: "1 ou 2 Dorms.",
        amenities: "Lazer na cobertura",
        estagio: "Entregue",
        imageUrl: "/img-produtos.webp",
        logoUrl: "/logo-produtos.webp",
        backgroundUrl: "/bg-faixa.webp",
        iconUrl: "/icon-gif.gif",
        bannerImage1: "/icon-banner-1.webp",
        bannerImage2: "/icon-banner-2.webp",
    },
    {
        id: 1,
        title: "Nova SP INC.",
        location: "São Paulo - SP",
        neighborhood: "Saúde",
        areaRange: "24 a 41m",
        units: "Studios",
        rooms: "1 ou 2 Dorms.",
        amenities: "Lazer na cobertura",
        estagio: "Lançamento",
        imageUrl: "/img-produtos.webp",
        logoUrl: "/logo-produtos.webp",
        backgroundUrl: "/bg-faixa.webp",
        iconUrl: "/icon-gif.gif",
        bannerImage1: "/icon-banner-1.webp",
        bannerImage2: "/icon-banner-2.webp",
    },
    {
        id: 1,
        title: "Nova SP INC.",
        location: "São Paulo - SP",
        neighborhood: "Saúde",
        areaRange: "24 a 41m",
        units: "Studios",
        rooms: "1 ou 2 Dorms.",
        amenities: "Lazer na cobertura",
        estagio: "Lançamento",
        imageUrl: "/img-produtos.webp",
        logoUrl: "/logo-produtos.webp",
        backgroundUrl: "/bg-faixa.webp",
        iconUrl: "/icon-gif.gif",
        bannerImage1: "/icon-banner-1.webp",
        bannerImage2: "/icon-banner-2.webp",
    },
    {
        id: 1,
        title: "Nova SP INC.",
        location: "São Paulo - SP",
        neighborhood: "Saúde",
        areaRange: "24 a 41m",
        units: "Studios",
        rooms: "1 ou 2 Dorms.",
        amenities: "Lazer na cobertura",
        estagio: "Lançamento",
        imageUrl: "/img-produtos.webp",
        logoUrl: "/logo-produtos.webp",
        backgroundUrl: "/bg-faixa.webp",
        iconUrl: "/icon-gif.gif",
        bannerImage1: "/icon-banner-1.webp",
        bannerImage2: "/icon-banner-2.webp",
    },
    {
        id: 1,
        title: "Nova SP INC.",
        location: "São Paulo - SP",
        neighborhood: "Saúde",
        areaRange: "24 a 41m",
        units: "Studios",
        rooms: "1 ou 2 Dorms.",
        amenities: "Lazer na cobertura",
        estagio: "Lançamento",
        imageUrl: "/img-produtos.webp",
        logoUrl: "/logo-produtos.webp",
        backgroundUrl: "/bg-faixa.webp",
        iconUrl: "/icon-gif.gif",
        bannerImage1: "/icon-banner-1.webp",
        bannerImage2: "/icon-banner-2.webp",
    },
    {
        id: 1,
        title: "Nova SP INC.",
        location: "São Paulo - SP",
        neighborhood: "Saúde",
        areaRange: "24 a 41m",
        units: "Studios",
        rooms: "1 ou 2 Dorms.",
        amenities: "Lazer na cobertura",
        estagio: "Lançamento",
        imageUrl: "/img-produtos.webp",
        logoUrl: "/logo-produtos.webp",
        backgroundUrl: "/bg-faixa.webp",
        iconUrl: "/icon-gif.gif",
        bannerImage1: "/icon-banner-1.webp",
        bannerImage2: "/icon-banner-2.webp",
    },
    {
        id: 1,
        title: "Nova SP INC.",
        location: "São Paulo - SP",
        neighborhood: "Saúde",
        areaRange: "24 a 41m",
        units: "Studios",
        rooms: "1 ou 2 Dorms.",
        amenities: "Lazer na cobertura",
        estagio: "Lançamento",
        imageUrl: "/img-produtos.webp",
        logoUrl: "/logo-produtos.webp",
        backgroundUrl: "/bg-faixa.webp",
        iconUrl: "/icon-gif.gif",
        bannerImage1: "/icon-banner-1.webp",
        bannerImage2: "/icon-banner-2.webp",
    },
    // Adicione mais objetos de empreendimento conforme necessário

];

export function ListOfVentures() {
    return (
        <div className="flex justify-center items-center px-2 lg:px-0 py-t0 md:pt-20 bg-white">
            <div className='md:justify-between flex flex-col justify-items-center md:max-w-6xl w-full gap-3'>

                <div className="flex items-center justify-start md:pt-10 pt-24 w-full md:max-w-6xl">
                    <button className="text-neutral-400 flex items-center text-xs">
                        Nova SP INC
                    </button>
                    <FaChevronRight className='ml-1 text-neutral-400' />
                    <button className="text-neutral-400 flex items-center ml-1 text-xs">
                        Empreendimentos
                    </button>
                </div>

                <div className="flex items-center justify-between">
                    <h3 className="text-blue-950 text-xl md:text-5xl font-bold py-10">
                        Nossos Empreendimentos
                    </h3>

                    <button className="text-blue-950 flex items-center">
                        Organizar
                        <FaChevronDown className='ml-1' />
                    </button>
                </div>

                {/* Conteúdo da grade */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-10 gap-6 ">
                    {ventures.map((venture) => (
                        <div key={venture.id} className="flex items-center justify-center">
                            <a href="/ficha-empreendimento">
                                <div className="max-w-xs cursor-pointer bg-white p-2 shadow-md border rounded relative group overflow-hidden">
                                    <div className="absolute flex items-center justify-center gap-4 h-10 top-4 left-0 text-black text-center z-10">
                                        <div className="relative flex items-center justify-center">
                                            <picture>
                                                <img
                                                    src='/bg-faixa.webp'
                                                    className="w-full"
                                                    alt="Background"
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="overflow-hidden rounded">
                                        <picture>
                                            <img className="w-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110" src={venture.imageUrl} alt="product" />
                                        </picture>
                                    </div>
                                    <div className="py-3 z-0">
                                        <div className="flex items-center justify-start mb-2">
                                            <FaMapMarkerAlt className="mr-2 text-2xl text-amber-600" />
                                            <div className='flex flex-col items-start text-amber-600'>
                                                <span className='md:text-base text-sm'>{venture.neighborhood}</span>
                                                <span className="md:text-base text-sm">{venture.location}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-start mb-2 w-full text-left">
                                            <picture>
                                                <img
                                                    src={venture.bannerImage1}
                                                    className="mr-2"
                                                    alt="Background"
                                                />
                                            </picture>
                                            <span className='text-sm mr-2'>{venture.areaRange}</span>
                                            <span className="text-sm border-l-2 pl-2 mr-2">{venture.units}</span>
                                            <span className="text-sm border-l-2 pl-2 mr-2">{venture.rooms}</span>
                                        </div>
                                        <div className="flex items-center justify-center mb-2">
                                            <picture>
                                                <img
                                                    src={venture.bannerImage2}
                                                    className="mr-2"
                                                    alt="Background"
                                                />
                                            </picture>
                                            <span className='md:text-base text-sm text-left w-full ml-2'>{venture.amenities}</span>
                                        </div>
                                        <div className="my-4 pt-4 flex items-center justify-between border-t-2">
                                            <span className='md:text-base text-sm text-left font-bold text-amber-600 w-full'>{venture.estagio}</span>
                                            <picture>
                                                <img className="w-full object-cover object-center pt-2" src={venture.logoUrl} alt="product" />
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
