import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['es', 'en'],
    defaultLocale: 'es',
    // 'as-needed' -> el locale por defecto NO tiene prefijo (/ en vez de /es)
    // 'always' -> ambos locales tienen prefijo (/es y /en). Mejor para SEO explícito.
    localePrefix: 'always'
});

export type Locale = (typeof routing.locales)[number];
