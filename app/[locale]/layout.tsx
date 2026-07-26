import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../globals.css"; // Ajustado para subir un nivel ya que ahora está dentro de [locale]

// Definimos el tipo de la prop params como una Promesa en Next.js moderno
interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export const metadata = {
  manifest: '/manifest.json',
  title: {
    template: "%s | Elly's Party Rental",
    default: "Elly's Party Rental",
  },
  description:
    'Bounce Houses, Water Slides, Tents, Tables, Chairs & Party Rentals serving Lynn, Lynnfield, Peabody, Salem, Saugus, Revere, Beverly, Danvers and surrounding Massachusetts areas.',
  metadataBase: new URL('https://ellyspartyrental.com'),
  openGraph: {
    type: 'website',
    siteName: "Elly's Party Rental",
  },
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  // 1. Resolvemos la promesa de params usando await antes de usar "locale"
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  // 2. Obtenemos los mensajes de traducción correspondientes al idioma actual
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Elly's Party Rental",
                description:
                  "Bounce Houses, Water Slides, Tents, Tables, Chairs & Party Rentals in Massachusetts",
                url: "https://ellyspartyrental.com",
                telephone: "781-692-5367",
                email: "ellyspartyrental@gmail.com",
                areaServed: [
                  "Lynn",
                  "Lynnfield",
                  "Peabody",
                  "Salem",
                  "Saugus",
                  "Revere",
                  "Beverly",
                  "Danvers",
                  "Massachusetts",
                ],
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Lynn",
                  addressRegion: "MA",
                  addressCountry: "US",
                },
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                    ],
                    opens: "09:00",
                    closes: "18:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Saturday", "Sunday"],
                    opens: "08:00",
                    closes: "19:00",
                  },
                ],
              }),
            }}
          />
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}