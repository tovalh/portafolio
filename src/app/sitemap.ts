import type { MetadataRoute } from 'next';

const BASE = 'https://www.toval.dev';

// Mantener en sync con generateStaticParams de proyectos/[slug]/page.tsx
const PROJECT_SLUGS = ['laraventas', 'notif-service', 'finmail', 'health-status'];

const casePath = (locale: 'es' | 'en', slug: string) =>
    locale === 'en' ? `${BASE}/en/projects/${slug}` : `${BASE}/es/proyectos/${slug}`;

export default function sitemap(): MetadataRoute.Sitemap {
    const home: MetadataRoute.Sitemap = (['es', 'en'] as const).map((locale) => ({
        url: `${BASE}/${locale}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
        alternates: {
            languages: { es: `${BASE}/es`, en: `${BASE}/en` }
        }
    }));

    const projects: MetadataRoute.Sitemap = PROJECT_SLUGS.flatMap((slug) =>
        (['es', 'en'] as const).map((locale) => ({
            url: casePath(locale, slug),
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
            alternates: {
                languages: {
                    es: casePath('es', slug),
                    en: casePath('en', slug)
                }
            }
        }))
    );

    return [...home, ...projects];
}
