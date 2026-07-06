import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['es', 'en'],
    defaultLocale: 'es',
    // 'as-needed' -> el locale por defecto NO tiene prefijo (/ en vez de /es)
    // 'always' -> ambos locales tienen prefijo (/es y /en). Mejor para SEO explícito.
    localePrefix: 'always',
    // URLs localizadas por idioma: la ruta interna es /proyectos/[slug],
    // pero en inglés se sirve como /en/projects/[slug]. El middleware de
    // next-intl hace el rewrite y redirige la variante incorrecta.
    pathnames: {
        '/': '/',
        '/proyectos/[slug]': {
            es: '/proyectos/[slug]',
            en: '/projects/[slug]'
        }
    }
});

export type Locale = (typeof routing.locales)[number];
