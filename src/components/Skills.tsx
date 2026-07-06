import React from 'react';
import { useTranslations } from 'next-intl';
import { CORE_SKILLS, SECONDARY_SKILL_IDS, CoreSkillConfig, SecondarySkillId } from '../config/skills';
import {
    PHP,
    Go,
    MySQL,
    Java,
    JavaScript,
    Git,
    MariaDB,
    PostgreSQL,
    Linux,
    Postman,
    Laravel,
    TailwindCSS,
    Bootstrap5
} from 'developer-icons';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
    php: PHP,
    go: Go,
    mysql: MySQL,
    java: Java,
    javascript: JavaScript,
    git: Git,
    mariadb: MariaDB,
    postgresql: PostgreSQL,
    linux: Linux,
    postman: Postman,
    laravel: Laravel,
    tailwind: TailwindCSS,
    bootstrap: Bootstrap5
};

// Calcula la experiencia desde 2 fechas (YYYY-MM), igual que el timeline.
// Sin `end` = hasta hoy. Formato "X años Y meses".
function formatExperience(start: string, end: string | undefined, yearS: string, yearP: string, monthS: string, monthP: string): string {
    const s = new Date(`${start}-01`);
    const e = end ? new Date(`${end}-01`) : new Date();
    const months = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
    if (months < 1) return `1 ${monthS}`;
    const years = Math.floor(months / 12);
    const rem = months % 12;
    const yPart = years > 0 ? `${years} ${years === 1 ? yearS : yearP}` : '';
    const mPart = rem > 0 ? `${rem} ${rem === 1 ? monthS : monthP}` : '';
    return [yPart, mPart].filter(Boolean).join(' ') || `1 ${monthS}`;
}

function Card({ config }: { config: CoreSkillConfig }) {
    const t = useTranslations('Skills');

    const typeStyles = {
        backend: {
            border: 'border-primary',
            shadow: 'shadow-primary/20 hover:shadow-primary/30',
            text: 'text-primary',
            bg: 'bg-primary/5'
        },
        database: {
            border: 'border-secondary',
            shadow: 'shadow-secondary/20 hover:shadow-secondary/30',
            text: 'text-secondary',
            bg: 'bg-secondary/5'
        },
        frontend: {
            border: 'border-accent',
            shadow: 'shadow-accent/20 hover:shadow-accent/30',
            text: 'text-accent',
            bg: 'bg-accent/5'
        },
        learning: {
            border: 'border-dark dark:border-white/50',
            shadow: 'shadow-dark/20 hover:shadow-dark/30',
            text: 'text-dark dark:text-white',
            bg: 'bg-dark/5 dark:bg-white/5'
        }
    };

    const style = typeStyles[config.type] || typeStyles.backend;
    const IconComponent = ICON_MAP[config.id];

    const name = t(`core.${config.id}.name`);
    const role = t(`core.${config.id}.role`);
    const description = t(`core.${config.id}.description`);
    const experience = formatExperience(config.start, config.end, t('yearSingular'), t('yearPlural'), t('monthSingular'), t('monthPlural'));

    return (
        <div className={`bg-white/70 dark:bg-white/10 backdrop-blur-md rounded-3xl p-6 border-2 ${style.border} ${style.shadow} shadow-lg transition-all duration-300 hover:-translate-y-2 flex flex-col h-full`}>

            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl ${style.bg} h-14 w-14 flex items-center justify-center overflow-hidden`}>
                    {IconComponent ? (
                        <IconComponent size={32} />
                    ) : (
                        <span className="font-bold text-xs">{name}</span>
                    )}
                </div>
            </div>

            <h3 className="font-display font-bold text-xl text-dark dark:text-white mb-1">{name}</h3>
            <p className="text-xs text-dark/50 dark:text-white/50 font-bold uppercase mb-4 tracking-wide">{role}</p>

            {/* Description with min-height for visual alignment */}
            <p className="text-sm text-dark/80 dark:text-white/80 font-medium font-sans leading-relaxed mb-6 min-h-[60px]">
                {description}
            </p>

            {/* Metric: Experience */}
            <div className="mt-auto pt-4 border-t border-gray-100/50 dark:border-white/10">
                <div className="flex justify-between items-end lg:flex-col lg:items-start lg:gap-1">
                    <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{t('experienceLabel')}</span>
                    <span className={`font-mono font-bold text-base ${style.text}`}>
                        {experience}
                    </span>
                </div>
            </div>

        </div>
    );
}

function SecondaryPill({ id }: { id: SecondarySkillId }) {
    const t = useTranslations('Skills');
    const IconComponent = ICON_MAP[id];
    const name = t(`secondary.${id}`);

    return (
        <div className="group flex items-center gap-3 px-4 py-3 bg-white/60 dark:bg-white/10 backdrop-blur-sm border border-gray-200/60 dark:border-white/20 rounded-xl hover:border-primary/30 hover:bg-white dark:hover:bg-white/20 hover:shadow-md transition-all duration-300">
            {IconComponent ? (
                <IconComponent size={20} className="opacity-70 group-hover:opacity-100 transition-opacity" />
            ) : (
                <span className="w-5 h-5 text-xs font-bold">{name.charAt(0)}</span>
            )}
            <span className="text-sm font-medium text-dark/70 dark:text-white/70 group-hover:text-dark dark:group-hover:text-white transition-colors">{name}</span>
        </div>
    );
}

export default function Skills() {
    const t = useTranslations('Skills');

    return (
        <section className="py-24 px-6 bg-transparent overflow-hidden relative">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="font-display text-4xl font-bold text-dark dark:text-white mb-2">
                            {t('title')}
                        </h2>
                        <p className="text-dark/70 dark:text-white/70 font-medium text-lg">
                            {t('subtitle')}
                        </p>
                    </div>
                    <div className="hidden md:block text-right">
                        <div className="inline-block bg-dark dark:bg-white/10 text-white px-4 py-2 rounded-lg font-mono text-sm transform -rotate-2 shadow-lg">
                            {t('badge')}
                        </div>
                    </div>
                </div>

                {/* PRIMARY GRID (CORE) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {CORE_SKILLS.map(config => (
                        <Card key={config.id} config={config} />
                    ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-dark/10 dark:via-white/10 to-transparent mb-12"></div>

                {/* SECONDARY SECTION */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">
                        {t('secondaryTitle')}
                    </h3>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        {SECONDARY_SKILL_IDS.map(id => (
                            <SecondaryPill key={id} id={id} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
