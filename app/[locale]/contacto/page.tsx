import { getTranslations } from 'next-intl/server';

export default async function ContactoPage() {
  // Cargamos los dos bloques de traducciones necesarios
  const tContact = await getTranslations('ContactPage');
  const tService = await getTranslations('ServiceArea');

  return (
    <main className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      
      {/* TARJETA PRINCIPAL DE CONTACTO */}
      <div className="max-w-xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-md border border-gray-100 text-center">
        
        {/* Título y Subtítulo */}
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2 tracking-tight">
          {tContact('title')}
        </h1>
        <p className="text-slate-500 mb-8 text-sm sm:text-base">
          {tContact('subtitle')}
        </p>

        <div className="space-y-6">
          {/* Tarjeta 1: Teléfono */}
          <div className="bg-blue-50 p-5 rounded-2xl flex items-center gap-4 text-left border border-blue-100">
            <div className="text-3xl">📞</div>
            <div>
              <span className="block text-xs font-bold text-blue-600 tracking-wider">
                {tContact('phoneLabel')}
              </span>
              <a href="tel:7816925367" className="text-lg font-extrabold text-blue-900 hover:underline">
                781-692-5367
              </a>
            </div>
          </div>

          {/* Tarjeta 2: Correo */}
          <div className="bg-pink-50 p-5 rounded-2xl flex items-center gap-4 text-left border border-pink-100">
            <div className="text-3xl">✉️</div>
            <div>
              <span className="block text-xs font-bold text-pink-600 tracking-wider">
                {tContact('emailLabel')}
              </span>
              <a href="mailto:ellyspartyrental@gmail.com" className="text-lg font-extrabold text-pink-600 hover:underline break-all">
                ellyspartyrental@gmail.com
              </a>
            </div>
          </div>

          {/* Tarjeta 3: Cobertura */}
          <div className="bg-yellow-50 p-5 rounded-2xl flex items-center gap-4 text-left border border-yellow-100">
            <div className="text-3xl">⏰</div>
            <div>
              <span className="block text-xs font-bold text-yellow-600 tracking-wider">
                {tContact('coverageLabel')}
              </span>
              <span className="text-lg font-extrabold text-slate-900">
                {tContact('coverageValue')}
              </span>
            </div>
          </div>
        </div>

        {/* Nota de pie de tarjeta */}
        <p className="text-xs text-slate-400 italic mt-8">
          {tContact('securityNote')}
        </p>
      </div>

      {/* SECCIÓN DETALLADA DE ÁREAS DE SERVICIO (El bloque que agregamos antes) */}
      <section className="bg-slate-50 pt-5 pb-10 px-4 border-t border-slate-100 mt-12 rounded-3xl">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex p-3 bg-blue-50 rounded-full text-blue-600 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </div>

          <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">
            {tService('title')}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-base sm:text-lg">
            {tService('subtitle')}
          </p>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-2xl mx-auto mb-4">
            <p className="text-xl font-extrabold text-blue-600 leading-relaxed tracking-wide">
              {tService('cities')}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-pink-600 font-medium max-w-md mx-auto italic mt-4">
            {tService('notice')}
          </p>
          
        </div>
      </section>

    </main>
  );
}