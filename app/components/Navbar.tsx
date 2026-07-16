"use client"; // <--- IMPORTANTE: Permite usar interactividad (clics) en Next.js

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Sistema de internacionalización
  const t = useTranslations('Navbar');
  const locale = useLocale(); // Obtiene 'es' o 'en'
  const pathname = usePathname();
  const router = useRouter();

  // Función para cambiar de idioma manteniendo la ruta actual
  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className="text-2xl font-black text-blue-600 tracking-wider">
              Elly's <span className="text-pink-500">Party Rental</span>
            </Link>
          </div>

          {/* MENÚ PARA PANTALLAS GRANDES (Computadoras / Tablets) */}
          <div className="hidden md:flex items-center space-x-8 font-semibold text-gray-700">
            <Link href={`/${locale}`} className="hover:text-blue-600 transition">{t('home')}</Link>
            <Link href={`/${locale}/servicios`} className="hover:text-blue-600 transition">{t('services')}</Link>
            <Link href={`/${locale}/sobre-nosotros`} className="hover:text-blue-600 transition">{t('about')}</Link>
            <Link href={`/${locale}/contacto`} className="hover:text-blue-600 transition">{t('contact')}</Link>
            
            {/* Selector de idioma en Escritorio */}
            <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-full text-xs font-bold ml-4">
              <button
                onClick={() => handleLanguageChange('es')}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  locale === 'es' ? 'bg-pink-500 text-white shadow-sm' : 'text-gray-500 hover:text-gray-950'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  locale === 'en' ? 'bg-pink-500 text-white shadow-sm' : 'text-gray-500 hover:text-gray-950'
                }`}
              >
                EN
              </button>
            </div>
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
            href={`/${locale}`} 
            onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
            className="block py-2 px-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
          >
            {t('home')}
          </Link>
          <Link 
            href={`/${locale}/servicios`} 
            onClick={() => setIsOpen(false)}
            className="block py-2 px-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
          >
            {t('services')}
          </Link>
          <Link 
            href={`/${locale}/sobre-nosotros`} 
            onClick={() => setIsOpen(false)}
            className="block py-2 px-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
          >
            {t('about')}
          </Link>
          <Link 
            href={`/${locale}/contacto`} 
            onClick={() => setIsOpen(false)}
            className="block py-2 px-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
          >
            {t('contact')}
          </Link>

          {/* Selector de idioma dentro del Menú Móvil */}
          <div className="border-t border-slate-100 pt-3 flex items-center justify-between px-3">
            <span className="text-sm font-bold text-gray-500">Idioma / Language:</span>
            <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-full text-xs font-bold">
              <button
                onClick={() => { handleLanguageChange('es'); setIsOpen(false); }}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  locale === 'es' ? 'bg-pink-500 text-white shadow-sm' : 'text-gray-500'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => { handleLanguageChange('en'); setIsOpen(false); }}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  locale === 'en' ? 'bg-pink-500 text-white shadow-sm' : 'text-gray-500'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}