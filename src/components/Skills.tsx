import React from 'react';
import { TechCard } from '../../types';
import { CORE_STACK, SECONDARY_STACK, SKILLS_TEXT } from '../../constants';
import {
    PHP,
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

function Card({ card }: { card: TechCard }) {
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
            border: 'border-dark',
            shadow: 'shadow-dark/20 hover:shadow-dark/30',
            text: 'text-dark',
            bg: 'bg-dark/5'
        }
    };

    const style = typeStyles[card.type] || typeStyles.backend;
    const IconComponent = ICON_MAP[card.id];

    return (
        <div className={`bg-white/70 backdrop-blur-md rounded-3xl p-6 border-2 ${style.border} ${style.shadow} shadow-lg transition-all duration-300 hover:-translate-y-2 flex flex-col h-full`}>

            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl ${style.bg} h-14 w-14 flex items-center justify-center overflow-hidden`}>
                    {IconComponent ? (
                        <IconComponent size={32} />
                    ) : (
                        <span className="font-bold text-xs">{card.name}</span>
                    )}
                </div>
            </div>

            <h3 className="font-display font-bold text-xl text-dark mb-1">{card.name}</h3>
            <p className="text-xs text-dark/50 font-bold uppercase mb-4 tracking-wide">{card.role}</p>

            {/* Description with min-height for visual alignment */}
            <p className="text-sm text-dark/80 font-medium font-sans leading-relaxed mb-6 min-h-[60px]">
                {card.description}
            </p>

            {/* Metric: Experience */}
            <div className="mt-auto pt-4 border-t border-gray-100/50">
                <div className="flex justify-between items-end">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{SKILLS_TEXT.experienceLabel}</span>
                    <span className={`font-mono font-bold text-base ${style.text}`}>
                {card.experience}
            </span>
                </div>
            </div>

        </div>
    );
}

function SecondaryPill({ id, name }: { id: string; name: string }) {
    const IconComponent = ICON_MAP[id];

    return (
        <div className="group flex items-center gap-3 px-4 py-3 bg-white/60 backdrop-blur-sm border border-gray-200/60 rounded-xl hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-300">
            {IconComponent ? (
                <IconComponent size={20} className="opacity-70 group-hover:opacity-100 transition-opacity" />
            ) : (
                <span className="w-5 h-5 text-xs font-bold">{name.charAt(0)}</span>
            )}
            <span className="text-sm font-medium text-dark/70 group-hover:text-dark transition-colors">{name}</span>
        </div>
    );
}

export default function Skills() {
    return (
        <section className="py-24 px-6 bg-transparent overflow-hidden relative">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="font-display text-4xl font-bold text-dark mb-2">
                            {SKILLS_TEXT.title}
                        </h2>
                        <p className="text-dark/70 font-medium text-lg">
                            {SKILLS_TEXT.subtitle}
                        </p>
                    </div>
                    <div className="hidden md:block text-right">
                        <div className="inline-block bg-dark text-white px-4 py-2 rounded-lg font-mono text-sm transform -rotate-2 shadow-lg">
                            {SKILLS_TEXT.badge}
                        </div>
                    </div>
                </div>

                {/* PRIMARY GRID (CORE) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
                    {CORE_STACK.map(tech => (
                        <Card key={tech.id} card={tech} />
                    ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-dark/10 to-transparent mb-12"></div>

                {/* SECONDARY SECTION */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
                        {SKILLS_TEXT.secondaryTitle}
                    </h3>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        {SECONDARY_STACK.map(tech => (
                            <SecondaryPill key={tech.id} id={tech.id} name={tech.name} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}