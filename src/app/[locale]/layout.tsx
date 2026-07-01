import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "../globals.css";
import Header from '../../components/Header';
import { routing } from '../../i18n/routing';

const dmSans = DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
});

// Pre-genera las rutas /es y /en en build time (SSG)
export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

// Metadata dinámica por locale para SEO correcto
export async function generateMetadata({
                                           params
                                       }: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        title: t('title'),
        description: t('description'),
        icons: {
            icon: "/images/icon.png",
        },
        alternates: {
            canonical: `/${locale}`,
            languages: {
                es: '/es',
                en: '/en',
                'x-default': '/es'
            }
        },
        openGraph: {
            title: t('title'),
            description: t('description'),
            url: `https://toval.dev/${locale}`,
            siteName: "toval.dev",
            images: [{ url: "/images/icon.png", width: 800, height: 800 }],
            type: "website",
            locale: locale === 'es' ? 'es_CL' : 'en_US'
        },
        twitter: {
            card: "summary",
            title: t('title'),
            description: t('description'),
            images: ["/images/icon.png"],
        },
    };
}

export default async function LocaleLayout({
                                               children,
                                               params
                                           }: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;

    // Valida que el locale exista, sino 404
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    // Habilita rendering estático para este locale
    setRequestLocale(locale);

    // Filtra los namespaces que se envían al cliente para hydration.
    // Metadata y NotFound solo se usan en server components (metadata en
    // el <head>, 404 en la página de error), así que no hace falta
    // serializarlos en el HTML inicial. Reduce ~20% del JSON embedded.
    const messages = await getMessages();
    const {
        Metadata: _metadata,
        NotFound: _notFound,
        ...clientMessages
    } = messages as Record<string, unknown>;
    void _metadata;
    void _notFound;

    return (
        <html lang={locale}>
        <body
            className={`${dmSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}>
        <NextIntlClientProvider messages={clientMessages}>
            {/* GLOBAL BACKGROUND BLOBS — heredados por todas las páginas del locale (incl. 404) */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob opacity-70"></div>
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-secondary/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000 opacity-70"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-accent/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000 opacity-70"></div>
            </div>
            <Header />
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
