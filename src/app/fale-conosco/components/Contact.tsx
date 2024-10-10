import Link from 'next/link';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

export const PageContact: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center px-4 bg-red-300 pt-10 md:pt-20">

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

            <div className="flex items-end justify-end md:max-w-6xl w-full border-b-4 border-amber-600">
                {/* Formulário de Contato */}
                <div className="md:w-1/2 w-full pb-14 bg-[url('/img-contact.webp')] bg-contain bg-no-repeat bg-bottom md:bg-none">

                    <div className='flex items-center justify-start gap-4'>
                        <h2 className="md:text-5xl text-2xl font-bold mb-2 text-blue-950">Contato</h2>
                    </div>
                    <p className="mb-4 text-blue-950 text-base">
                        Deixe seus dados que nossos especialistas entrarão em contato.
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
                        <div className="mb-4">
                            <input
                                type="text"
                                id="subject"
                                required
                                className="mt-1 block w-full border border-gray-400 text-gray-400 bg-red-200 rounded-md shadow-sm p-2 focus:ring focus:ring-red-300"
                                placeholder='Assunto'
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                id="message"
                                required
                                className="mt-1 block w-full border border-gray-400 text-gray-400 bg-red-200 rounded-md shadow-sm p-2 focus:ring focus:ring-red-300"
                                placeholder='Mensagem'
                                rows={4}
                            />
                        </div>
                        <div className="flex md:items-center md:justify-end">
                            <Link href='#'>
                                <button className="bg-amber-600 text-black py-2 px-6 rounded-md uppercase">
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
