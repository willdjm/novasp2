import Link from 'next/link';
import React from 'react';

export const Contact: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center px-4 bg-red-300 pt-10">

            <div className="flex items-center justify-center md:max-w-6xl w-full">
                {/* Formulário de Contato */}
                <div className="md:w-1/2 w-full py-10 bg-[url('/img-contact.webp')] bg-contain bg-no-repeat bg-bottom md:bg-none">
                    <div className='flex items-center justify-end'>
                        <picture className='hidden md:block'>
                            <img src="/logo-contact.webp" alt="Logo" className="mb-4 float-right" />
                        </picture>
                    </div>
                    <div className='flex items-center justify-start gap-4'>
                        <h2 className="md:text-5xl text-2xl font-bold mb-2 text-blue-950">Entre em contato</h2>
                        <picture className='md:hidden flex items-center justify-center'>
                            <img src="/logo-contact.webp" alt="Logo" className="mb-4 float-right" />
                        </picture>
                    </div>
                    <p className="mb-4 text-blue-950 text-base">
                        Cadastre-se para saber mais informações com os nossos especialistas.
                    </p>
                    <form className='pt-5'>
                        <div className="mb-4">

                            <input
                                type="text"
                                id="name"
                                required
                                className="mt-1 block w-full border border-gray-400 text-gray-400 bg-red-200 rounded-md shadow-sm p-2 focus:ring focus:ring-red-300"
                                placeholder='Nome'
                            />
                        </div>
                        <div className="mb-4">

                            <input
                                type="email"
                                id="email"
                                required
                                className="mt-1 block w-full border border-gray-400 text-gray-400 bg-red-200 rounded-md shadow-sm p-2 focus:ring focus:ring-red-300"
                                placeholder='E-mail'
                            />
                        </div>
                        <div className="mb-4">

                            <input
                                type="tel"
                                id="phone"
                                required
                                className="mt-1 block w-full border border-gray-400 text-gray-400 bg-red-200 rounded-md shadow-sm p-2 focus:ring focus:ring-red-300"
                                placeholder='Celular'
                            />
                        </div>
                        <div className="flex md:items-center md:justify-end">
                            <Link href='#'>
                                <button className="bg-amber-600 text-white py-2 px-6 rounded-md uppercase">
                                    ENVIAR
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
                {/* Imagem à Direita */}
                <div className="md:w-1/2 md:block hidden">
                    <picture>
                        <img src="/img-contact.webp" alt="Imagem ilustrativa" className="" />
                    </picture>
                </div>
            </div>
        </div>
    );
};

