// src/app/components/Navbar.tsx
"use client"; // <--- IMPORTANTE: Permite usar interactividad (clics) en Next.js

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-black text-blue-600 tracking-wider">
              Elly's <span className="text-pink-500">Party Rental</span>
            </Link>
          </div>

          {/* MENÚ PARA PANTALLAS GRANDES (Computadoras / Tablets) */}
          <div className="hidden md:flex space-x-8 font-semibold text-gray-700">
            <Link href="/" className="hover:text-blue-600 transition">Inicio</Link>
            <Link href="/servicios" className="hover:text-blue-600 transition">Servicios</Link>
            <Link href="/sobre-nosotros" className="hover:text-blue-600 transition">Sobre Nosotros</Link>
            <Link href="/contacto" className="hover:text-blue-600 transition">Contáctanos</Link>
          </div>

          {/* BOTÓN HAMBURGUESA (Solo visible en celulares) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {/* Icono dinámico: cambia entre ☰ y ✕ según el estado */}
              {!isOpen ? (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL (Solo se muestra en celulares cuando isOpen es true) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-inner px-4 pt-2 pb-6 space-y-3 font-semibold text-gray-700">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
            className="block py-2 px-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
          >
            Inicio
          </Link>
          <Link 
            href="/servicios" 
            onClick={() => setIsOpen(false)}
            className="block py-2 px-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
          >
            Servicios
          </Link>
          <Link 
            href="/sobre-nosotros" 
            onClick={() => setIsOpen(false)}
            className="block py-2 px-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
          >
            Sobre Nosotros
          </Link>
          <Link 
            href="/contacto" 
            onClick={() => setIsOpen(false)}
            className="block py-2 px-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
          >
            Contáctanos
          </Link>
        </div>
      )}
    </nav>
  );
}