import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ellyspartyrental.com';
  const locales = ['en', 'es'];
  const pages = ['', '/servicios', '/sobre-nosotros', '/contacto'];
  const categories = ['bouncy-houses', 'pool-water', 'sillas-mesas', 'party-add-ons'];
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'monthly' : 'weekly',
        priority: page === '' ? 1.0 : 0.8,
      });
    }
    for (const cat of categories) {
      entries.push({
        url: `${baseUrl}/${locale}/servicios/${cat}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  return entries;
}
