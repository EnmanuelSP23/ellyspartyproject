import { getTranslations } from 'next-intl/server';

export default async function Footer() {
  const t = await getTranslations('Footer');

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Columna 1: LOGO Y DESCRIPCIÓN */}
        <div>
          <h3 className="text-2xl font-black text-white tracking-wider mb-4">
            Elly's <span className="text-pink-500">Party Rental</span>
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            {t('desc')}
          </p>
        </div>

        {/* Columna 2: HORARIO */}
        <div>
          <h4 className="text-blue-400 font-bold text-lg mb-4">
            {t('hoursTitle')}
          </h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>{t('weekdays')}</li>
            <li>{t('weekends')}</li>
          </ul>
        </div>

        {/* Columna 3: CONTACTO Y REDES */}
        <div>
          <h4 className="text-yellow-400 font-bold text-lg mb-4">
            {t('contactTitle')}
          </h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2">
              <span>📍</span> Massachusetts, USA
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span> 781-692-5367
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span> ellyspartyrental@gmail.com
            </li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/profile.php?id=61562728685865" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              Facebook
            </a>
            <a href="https://www.instagram.com/ellyspartyrentals/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              Instagram
            </a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-6 text-center text-xs text-slate-500">
        <p>{t('rights')}</p>
      </div>
    </footer>
  );
}