"use client";

import { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaPhoneAlt, FaWhatsapp, FaChevronRight } from 'react-icons/fa';

interface NavbarProps {
  isHome: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isHome }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEmpreendimentosDropdownOpen, setIsEmpreendimentosDropdownOpen] = useState(false);
  const [isServicosDropdownOpen, setIsServicosDropdownOpen] = useState(false);

  const empreendimentosRef = useRef<HTMLDivElement | null>(null);
  const servicosRef = useRef<HTMLDivElement | null>(null);

  const toggleEmpreendimentosDropdown = () => {
    setIsEmpreendimentosDropdownOpen(!isEmpreendimentosDropdownOpen);
    setIsServicosDropdownOpen(false);
  };

  const toggleServicosDropdown = () => {
    setIsServicosDropdownOpen(!isServicosDropdownOpen);
    setIsEmpreendimentosDropdownOpen(false);
  };

  const handleMenuClick = () => {
    setIsOpen(false);
    setIsEmpreendimentosDropdownOpen(false);
    setIsServicosDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (empreendimentosRef.current && !empreendimentosRef.current.contains(event.target as Node)) {
      setIsEmpreendimentosDropdownOpen(false);
    }
    if (servicosRef.current && !servicosRef.current.contains(event.target as Node)) {
      setIsServicosDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutsideWrapper = (event: MouseEvent) => handleClickOutside(event);
    document.addEventListener('mousedown', handleClickOutsideWrapper);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideWrapper);
    };
  }, []);

  return (
    <nav className={`p-4 ${isHome ? "bg-transparent" : "bg-white shadow-2xl fixed"} w-full z-50`}>
      <div className="container mx-auto flex justify-between items-center w-full md:max-w-6xl">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <picture>
              <img src={isHome ? "/logo.webp" : "/logo-paginas.webp"} alt="Logo" className="h-12 md:h-auto" />
            </picture>
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className={`flex items-center ${isHome ? "text-white" : "text-blue-950"}`} onClick={handleMenuClick}>Home</a>
          <a href="/quem-somos" className={`flex items-center border-l-2 pl-4 ${isHome ? "text-white" : "text-blue-950"}`} onClick={handleMenuClick}>Sobre nós</a>
          <div className="relative" ref={empreendimentosRef}>
            <button className={`flex items-center border-l-2 pl-4 ${isHome ? "text-white" : "text-blue-950"}`} onClick={toggleEmpreendimentosDropdown}>
              Empreendimentos
              <FaChevronDown className='ml-1' />
            </button>
            {isEmpreendimentosDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-20">
                <a href="/lista" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleMenuClick}>NOVA SP INC</a>
                <a href="/lista/#listaparceiros" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleMenuClick}>Parceiros</a>
              </div>
            )}
          </div>
          <div className="relative" ref={servicosRef}>
            <button className={`flex items-center border-l-2 pl-4 ${isHome ? "text-white" : "text-blue-950"}`} onClick={toggleServicosDropdown}>
              Serviços
              <FaChevronDown className='ml-1' />
            </button>
            {isServicosDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-20">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleMenuClick}>Venda seu terreno</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleMenuClick}>Seja um parceiro!</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleMenuClick}>Calculadora de financiamento</a>
              </div>
            )}
          </div>
          <a href="/#blog" className={`flex items-center border-l-2 pl-4 ${isHome ? "text-white" : "text-blue-950"}`} onClick={handleMenuClick}>Blog</a>
          <a href="/fale-conosco" className={`flex items-center border-l-2 pl-4 ${isHome ? "text-white" : "text-blue-950"}`} onClick={handleMenuClick}>Fale Conosco</a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden flex items-center ${isHome ? "text-white" : "text-blue-950"}`}>
          {isOpen ? (
            <>
              <span className="mr-2">Menu</span>
              <FaTimes size={24} />
            </>
          ) : (
            <>
              <span className="mr-2">Menu</span>
              <FaBars size={24} />
            </>
          )}
        </button>
      </div>
      {isOpen && (
        <div className={`md:hidden w-full h-full ${isHome ? "bg-blue-950" : "bg-blue-950"} p-6 gap-2 flex flex-col fixed top-0 left-0 z-30`}>
          <button onClick={() => setIsOpen(false)} className={`text-white flex items-center justify-center absolute top-10 right-6`}>
            <span className="mr-2 text-base">Menu</span>
            <FaTimes size={24} />
          </button>
          <a href="/" className={`block pt-20 ${isHome ? "text-white" : "text-white"} text-lg px-4`} onClick={handleMenuClick}>Home</a>
          <a href="/quem-somos" className={`block ${isHome ? "text-white" : "text-white"} text-lg px-4`} onClick={handleMenuClick}>Sobre</a>
          <div>
            <button className={`block ${isHome ? "text-white" : "text-white"} text-lg px-4 w-full text-left`} onClick={toggleEmpreendimentosDropdown}>
              Empreendimentos
            </button>
            <div>
              <a href="/#empreendimentos" className={`text-${isHome ? "white" : "white"} px-4 py-2 flex`} onClick={handleMenuClick}>
                <FaChevronRight className='mr-2' />
                NOVA SP INC
              </a>
              <a href="/#empreendimentosParceiros" className={`text-${isHome ? "white" : "white"} px-4 py-2 flex`} onClick={handleMenuClick}>
                <FaChevronRight className='mr-2' />
                Parceiros
              </a>
            </div>
          </div>
          <div>
            <button className={`block ${isHome ? "text-white" : "text-white"} text-lg px-4 w-full text-left`} onClick={toggleServicosDropdown}>
              Serviços
            </button>
            <div>
              <a href="#" className={`text-${isHome ? "white" : "white"} px-4 py-2 flex`} onClick={handleMenuClick}>
                <FaChevronRight className='mr-2' />
                Venda seu terreno
              </a>
              <a href="#" className={`text-${isHome ? "white" : "white"} px-4 py-2 flex`} onClick={handleMenuClick}>
                <FaChevronRight className='mr-2' />
                Seja um parceiro!
              </a>
              <a href="#" className={`text-${isHome ? "white" : "white"} px-4 py-2 flex`} onClick={handleMenuClick}>
                <FaChevronRight className='mr-2' />
                Calculadora de financiamento
              </a>
            </div>
          </div>
          <a href="#blog" className={`block ${isHome ? "text-white" : "text-white"} text-lg px-4`} onClick={handleMenuClick}>Blog</a>
          <a href="/fale-conosco" className={`block ${isHome ? "text-white" : "text-white"} text-lg px-4`} onClick={handleMenuClick}>Fale Conosco</a>
          <a href='https://wa.me/+5511976312158' target='_blank' rel="noreferrer" className={`text-${isHome ? "white" : "white"} px-4 flex pt-2`} onClick={handleMenuClick}>
            <FaWhatsapp className="mr-2 text-3xl" />
            <p className='text-2xl'>11 <span className=''> 97631-2158 </span></p>
          </a>
          <a href='tel:11976312158' target='_blank' rel="noreferrer" className={`text-${isHome ? "white" : "white"} px-4 flex pt-5`} onClick={handleMenuClick}>
            <FaPhoneAlt className="mr-2 text-2xl" />
            <p className='text-2xl'>11 <span className=''> 2198-4970 </span></p>
          </a>
        </div>
      )}
    </nav>
  );
};
