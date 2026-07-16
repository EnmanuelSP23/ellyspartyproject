// proxy.ts
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

// Exportamos el proxy con las opciones de enrutamiento
export const proxy = createMiddleware(routing);

export const config = {
  // Coincide con todas las rutas que Next.js debe interceptar
  matcher: ['/', '/(es|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};