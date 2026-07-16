// i18n/routing.ts
import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // Lista de todos los idiomas soportados
  locales: ['es', 'en'],

  // Idioma por defecto si no se detecta ninguno
  defaultLocale: 'es'
});

// Esto exporta los componentes de navegación bilingües que usaremos más adelante
export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);