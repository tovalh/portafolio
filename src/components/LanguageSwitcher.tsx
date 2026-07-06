'use client';
import { useLocale, useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useRouter, usePathname } from '../i18n/navigation';
import { useTransition } from 'react';
import { Languages } from 'lucide-react';

interface Props {
    size?: 'sm' | 'md';
}

/**
 * Toggle entre 'es' y 'en'. Preserva la ruta actual y usa el
 * router de next-intl para que Next respete el prefijo del locale.
 */
export default function LanguageSwitcher({ size = 'md' }: Props) {
    const locale = useLocale();
    const t = useTranslations('Header');
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const [isPending, startTransition] = useTransition();

    const nextLocale = locale === 'es' ? 'en' : 'es';

    const handleSwitch = () => {
        startTransition(() => {
            router.replace(
                // Con `pathnames`, usePathname devuelve el template interno
                // (p. ej. '/proyectos/[slug]'); los params rellenan el slug.
                // @ts-expect-error -- los params corresponden a la ruta actual
                { pathname, params },
                { locale: nextLocale }
            );
        });
    };

    const isSm = size === 'sm';

    return (
        <button
            onClick={handleSwitch}
            disabled={isPending}
            aria-label={t('toggleLanguage')}
            className={`${
                isSm ? 'p-2' : 'p-2.5'
            } rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 hover:border-primary dark:hover:border-primary transition-all hover:scale-110 flex items-center gap-1.5 font-mono font-bold ${
                isSm ? 'text-[10px]' : 'text-xs'
            } text-dark dark:text-white disabled:opacity-60`}
        >
            <Languages size={isSm ? 14 : 16} className="text-primary" />
            <span className="uppercase">{nextLocale}</span>
        </button>
    );
}
