import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const tFaq = await getTranslations('Faq');
  const tHero = await getTranslations('Hero');
  const tWelcome = await getTranslations('Welcome');
  const tCategories = await getTranslations('Categories'); // Carga de categorías
  const tSteps = await getTranslations('Steps');

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      
      {/* SECCIÓN HERO */}
      <section className="relative w-full bg-gray-900 text-white py-32 px-4 text-center overflow-hidden">
        <Image 
          src="/inventario/hero-bg.jpg"
          alt="Hero Background" 
          fill 
          priority 
          className="object-cover opacity-40 object-center pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-gray-900/40 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto z-10">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]">
            {tHero('title')}
          </h1>
          <p className="text-xl sm:text-2xl font-bold mb-8 bg-pink-600/90 inline-block px-6 py-2 rounded-full shadow-md transform -rotate-1">
            {tHero('badge')}
          </p>
          <div className="mt-4">
            <Link href={`/${locale}/servicios`} className="inline-block bg-yellow-400 text-gray-900 font-black px-10 py-5 rounded-full text-xl shadow-2xl hover:bg-yellow-300 hover:scale-105 transition-all duration-200">
              {tHero('button')}
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN BIENVENIDA */}
      <section className="bg-white pt-20 pb-10 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">
            {tWelcome('title')}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-6">
            {tWelcome('text1')}
          </p>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            {tWelcome('text2')}{' '}
            <span className="font-bold text-pink-600">{tWelcome('highlight2')}</span>
            {tWelcome('text3')}{' '}
            <span className="font-bold text-yellow-500">{tWelcome('highlight3')}</span>
            {tWelcome('text4')}{' '}
            <span className="font-bold text-blue-600">{tWelcome('highlight1')}</span>
          </p>
        </div>
      </section>

      {/* SECCIÓN NUESTRAS CATEGORÍAS */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-16 tracking-tight">
            {tCategories('title')}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: 1, title: tCategories('cat1.title'), desc: tCategories('cat1.desc') },
              { num: 2, title: tCategories('cat2.title'), desc: tCategories('cat2.desc') },
              { num: 3, title: tCategories('cat3.title'), desc: tCategories('cat3.desc') },
              { num: 4, title: tCategories('cat4.title'), desc: tCategories('cat4.desc') }
            ].map((cat) => (
              <div 
                key={cat.num} 
                className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center border border-slate-100/60"
              >
                {/* Círculo con número */}
                <div className="w-16 h-16 rounded-full bg-blue-100/80 flex items-center justify-center mb-6">
                  <span className="text-2xl font-black text-blue-600">
                    {cat.num}
                  </span>
                </div>
                
                {/* Título de la Categoría */}
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                  {cat.title}
                </h3>
                
                {/* Descripción */}
                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN ¿CÓMO TRABAJA? */}
      <section className="bg-white py-20 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-16 tracking-tight">
            {tSteps('sectionTitle')}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {[
              { step: '1', title: tSteps('step1.title'), desc: tSteps('step1.desc') },
              { step: '2', title: tSteps('step2.title'), desc: tSteps('step2.desc') },
              { step: '3', title: tSteps('step3.title'), desc: tSteps('step3.desc') },
              { step: '4', title: tSteps('step4.title'), desc: tSteps('step4.desc') },
              { step: '5', title: tSteps('step5.title'), desc: tSteps('step5.desc') }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center px-2">
                <span className="text-5xl font-extrabold text-pink-500/20 mb-4 block">0{step.step}</span>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* SECCIÓN PREGUNTAS FRECUENTES (FAQ) */}
      <section className="bg-slate-50 py-20 px-4 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          
          {/* Encabezado */}
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              {tFaq('title')}
            </h3>
            <p className="text-slate-600 max-w-lg mx-auto text-sm sm:text-base">
              {tFaq('subtitle')}
            </p>
          </div>

          {/* Cuadrícula de Preguntas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { q: tFaq('q1'), a: tFaq('a1') },
              { q: tFaq('q2'), a: tFaq('a2') },
              { q: tFaq('q3'), a: tFaq('a3') },
              { q: tFaq('q4'), a: tFaq('a4') },
              { q: tFaq('q5'), a: tFaq('a5') },
              { q: tFaq('q6'), a: tFaq('a6') }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-950 mb-3 flex items-start gap-2.5">
                    {/* Icono de signo de interrogación estilizado */}
                    <span className="text-pink-500 text-xl font-black leading-none">?</span>
                    {faq.q}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed pl-5">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


    </main>
  );
}