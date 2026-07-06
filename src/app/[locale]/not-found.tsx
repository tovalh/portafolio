import { useTranslations } from 'next-intl';
import { ArrowLeft, DatabaseZap, Mail } from 'lucide-react';
import { Link } from '../../i18n/navigation';

export default function NotFound() {
    const t = useTranslations('NotFound');

    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-24 pb-16">

            <div className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center">

                {/* Query "console" mimic */}
                <div className="w-full max-w-lg mb-10 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-2xl shadow-lg overflow-hidden">
                    {/* Fake terminal header */}
                    <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
                        <span className="w-2.5 h-2.5 rounded-full bg-alert/70"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-primary/70"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-accent/70"></span>
                        <span className="ml-3 text-[10px] font-mono font-bold text-dark/40 dark:text-white/40 uppercase tracking-wider">psql · toval.dev</span>
                    </div>
                    <div className="px-5 py-4 text-left font-mono text-xs md:text-sm">
                        <p className="text-dark/70 dark:text-white/70 break-all">
                            <span className="text-secondary">{t('queryLabel')}</span>
                        </p>
                        <p className="text-alert font-bold mt-1">{t('queryResult')}</p>
                    </div>
                </div>

                {/* 404 headline */}
                <div className="relative mb-6">
                    <h1 className="font-display text-[8rem] md:text-[10rem] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-alert">
                        {t('code')}
                    </h1>
                    <div className="absolute -top-3 -right-4 md:-right-8 rotate-12">
                        <div className="flex items-center gap-1.5 bg-white dark:bg-white/10 px-2.5 py-1 rounded-md shadow-md text-[10px] md:text-xs font-mono font-bold text-alert border border-alert/30">
                            <DatabaseZap size={12} /> DB MISS
                        </div>
                    </div>
                </div>

                {/* Title */}
                <h2 className="font-display text-2xl md:text-4xl font-bold text-dark dark:text-white mb-4 leading-tight">
                    {t('title')}
                </h2>

                {/* Description */}
                <p className="text-base md:text-lg text-dark/70 dark:text-white/70 font-sans max-w-xl mb-10 leading-relaxed">
                    {t('description')}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link
                        href="/"
                        className="px-8 py-4 bg-gradient-to-r from-primary to-alert text-white font-bold rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all flex items-center justify-center gap-2"
                    >
                        <ArrowLeft size={16} />
                        {t('backHome')}
                    </Link>
                    <Link
                        href={{ pathname: '/', hash: '#contact' }}
                        className="px-8 py-4 bg-white dark:bg-white/10 border-2 border-dark/30 dark:border-white/30 text-dark/70 dark:text-white/70 font-bold rounded-full hover:border-dark/60 dark:hover:border-white/60 hover:text-dark dark:hover:text-white hover:scale-105 transition-all flex items-center justify-center gap-2"
                    >
                        <Mail size={16} />
                        {t('contact')}
                    </Link>
                </div>

            </div>
        </section>
    );
}
