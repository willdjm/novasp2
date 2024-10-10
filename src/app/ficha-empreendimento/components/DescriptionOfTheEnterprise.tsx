export function DescriptionOfTheEnterprise() {

    return (
        <section
            id="empreendimentos"
            className="flex flex-col justify-center items-center md:py-20 py-10 px-4 bg-blue-950"
        >
            <div className="flex flex-col items-center justify-center md:gap-8 gap-5 md:max-w-6xl w-full">
                <h3 className="text-white text-2xl md:text-5xl font-bold w-full text-left pb-8">
                    Descrição do empreendimento
                </h3>

                <div className="grid md:grid-cols-3 grid-cols-2 w-full items-center justify-center md:gap-14 gap-5">
                    <div className="flex flex-col items-center justify-center md:gap-4">
                        <span className='md:text-base text-center font-bold text-white text-sm flex'>Área da construção</span>
                        <span className='md:text-2xl text-center text-white text-base flex'>667,09m2</span>
                    </div>
                    <div className="flex flex-col items-center justify-center md:gap-4">
                        <span className='md:text-base text-center font-bold text-white text-sm flex'>Área da construção</span>
                        <span className='md:text-2xl text-center text-white text-base flex mt-3 md:mt-0'>5.750,22m2</span>
                    </div>
                    <div className="flex flex-col items-center justify-center md:gap-4">
                        <span className='md:text-base text-center font-bold text-white text-sm flex'>Quantidade de torres</span>
                        <span className='md:text-2xl text-center text-white text-base flex mt-3 md:mt-0'>1</span>
                    </div>
                    <div className="flex flex-col items-center justify-center md:gap-4">
                        <span className='md:text-base text-center font-bold text-white text-sm flex'>Imóveis por andar</span>
                        <span className='md:text-2xl text-center text-white text-base flex'>15 unidades</span>
                    </div>
                    <div className="flex flex-col items-center justify-center md:gap-4">
                        <span className='md:text-base text-center font-bold text-white text-sm flex mt-3 md:mt-0'>Total de unidades</span>
                        <span className='md:text-2xl text-center text-white text-base flex'>22 flats e 130 aptos.</span>
                    </div>
                    <div className="flex flex-col items-center justify-center md:gap-4">
                        <span className='md:text-base text-center font-bold text-white text-sm flex mt-3 md:mt-0'>Dormitórios</span>
                        <span className='md:text-2xl text-center text-white text-base flex mt-3 md:mt-0'>1 e 2 por unidade</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
