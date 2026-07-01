'use client'
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { PROJECTS_CONFIG, ProjectConfig } from '../config/projects';
import { Lock, Github, ArrowRight, Database, Cpu, Code2, ChevronRight, ChevronLeft, Wallet } from 'lucide-react';

const colorStyles = {
    blue: {
        iconBg: 'bg-secondary/10',
        iconText: 'text-secondary',
        statsBg: 'bg-secondary/10 border-secondary/30',
        statsText: 'text-secondary',
        bar: 'bg-secondary'
    },
    green: {
        iconBg: 'bg-accent/10',
        iconText: 'text-accent',
        statsBg: 'bg-accent/10 border-accent/30',
        statsText: 'text-accent',
        bar: 'bg-accent'
    },
    orange: {
        iconBg: 'bg-primary/10',
        iconText: 'text-primary',
        statsBg: 'bg-primary/10 border-primary/30',
        statsText: 'text-primary',
        bar: 'bg-primary'
    },
    red: {
        iconBg: 'bg-alert/10',
        iconText: 'text-alert',
        statsBg: 'bg-alert/10 border-alert/30',
        statsText: 'text-alert',
        bar: 'bg-alert'
    }
};

const iconMap = {
    orange: Database,
    blue: Cpu,
    red: Wallet,
    green: Code2
};

function getSlideConfig(index: number, activeIndex: number, total: number) {
    let dist = (index - activeIndex + total) % total;
    if (dist > total / 2) dist -= total;

    let zIndex = 10;
    let opacity = 0;
    let scale = 0.8;
    let translateX = '0%';
    let blur = 'blur(4px)';
    let pointerEvents = 'none';

    if (dist === 0) {
        zIndex = 30;
        opacity = 1;
        scale = 1;
        translateX = '0%';
        blur = 'blur(0px)';
        pointerEvents = 'auto';
    } else if (dist === -1) {
        zIndex = 20;
        opacity = 0.6;
        scale = 0.85;
        translateX = '-60%';
        blur = 'blur(2px)';
        pointerEvents = 'auto';
    } else if (dist === 1) {
        zIndex = 20;
        opacity = 0.6;
        scale = 0.85;
        translateX = '60%';
        blur = 'blur(2px)';
        pointerEvents = 'auto';
    }

    return { zIndex, opacity, scale, translateX, blur, pointerEvents, dist };
}

function ProjectSlide({
                          project,
                          config,
                          onClick
                      }: {
    project: ProjectConfig;
    config: ReturnType<typeof getSlideConfig>;
    onClick: () => void;
}) {
    const t = useTranslations('Projects');
    const styles = colorStyles[project.color];
    const IconComponent = iconMap[project.color];

    const title = t(`items.${project.key}.title`);
    const description = t(`items.${project.key}.description`);
    const status = t(`items.${project.key}.status`);
    const stats = t(`items.${project.key}.stats`);

    return (
        <div
            onClick={() => config.dist !== 0 && onClick()}
            className="absolute top-1/2 left-1/2 w-[85vw] md:w-[600px] h-auto min-h-[420px] bg-white/90 dark:bg-white/10 backdrop-blur-md rounded-3xl border-2 border-gray-100 dark:border-white/20 shadow-2xl p-8 flex flex-col transition-all duration-500 ease-out cursor-pointer overflow-hidden"
            style={{
                transform: `translate(-50%, -50%) translateX(${config.translateX}) scale(${config.scale})`,
                zIndex: config.zIndex,
                opacity: config.opacity,
                filter: config.blur,
                pointerEvents: config.pointerEvents as React.CSSProperties['pointerEvents'],
            }}
        >
            {/* Card Header */}
            <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl ${styles.iconBg} ${styles.iconText}`}>
                    <IconComponent size={24} />
                </div>

                <div className="flex items-center gap-3">
                    <div className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/20 text-xs font-mono font-bold text-gray-500 dark:text-gray-400">
                        {status.toUpperCase()}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${styles.statsBg} ${styles.statsText}`}>
                        {stats}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-dark dark:text-white mb-4">
                    {title}
                </h3>
                <p className="text-dark/70 dark:text-white/70 leading-relaxed font-sans mb-6 text-sm md:text-base">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-50 dark:bg-white/10 rounded-md text-xs text-gray-500 dark:text-gray-400 font-medium border border-gray-100 dark:border-white/20">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Footer / Actions */}
            <div className="pt-6 border-t border-gray-100 dark:border-white/10 flex justify-between items-center">
                {project.isPrivate ? (
                    <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                        <Lock size={16} />
                        <span>{t('privateLabel')}</span>
                    </div>
                ) : (
                    <a href="#" className="flex items-center gap-2 text-dark dark:text-white hover:text-primary font-medium text-sm transition-colors group/git">
                        <Github size={18} />
                        <span>{t('viewCode')}</span>
                    </a>
                )}

                <button className="flex items-center gap-2 text-primary font-bold text-sm hover:underline decoration-2 underline-offset-4 group/btn">
                    {t('viewDetails')} <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Highlight Bar */}
            <div className={`absolute bottom-0 left-0 w-full h-1.5 rounded-b-3xl ${styles.bar}`}></div>
        </div>
    );
}

export default function Projects() {
    const t = useTranslations('Projects');
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % PROJECTS_CONFIG.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + PROJECTS_CONFIG.length) % PROJECTS_CONFIG.length);
    };

    const setSlide = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section id="projects" className="py-24 px-4 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-dark dark:text-white mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-dark/60 dark:text-white/60 max-w-2xl mx-auto">
                        {t('subtitle')} <span className="text-sm align-top text-primary">*</span>
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative w-full h-[520px] md:h-[480px] flex items-center justify-center">

                    {/* Navigation Buttons (Desktop) */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 md:left-10 z-40 p-3 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md shadow-lg border border-white/50 dark:border-white/20 hover:bg-primary hover:text-white transition-all group hidden md:block"
                    >
                        <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 md:right-10 z-40 p-3 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md shadow-lg border border-white/50 dark:border-white/20 hover:bg-primary hover:text-white transition-all group hidden md:block"
                    >
                        <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Slides Area */}
                    <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                        {PROJECTS_CONFIG.map((project, index) => {
                            const config = getSlideConfig(index, activeIndex, PROJECTS_CONFIG.length);
                            if (Math.abs(config.dist) > 1 && config.opacity === 0) return null;

                            return (
                                <ProjectSlide
                                    key={project.id}
                                    project={project}
                                    config={config}
                                    onClick={() => setSlide(index)}
                                />
                            );
                        })}
                    </div>

                    {/* Pagination Indicators */}
                    <div className="absolute bottom-[-40px] flex gap-3">
                        {PROJECTS_CONFIG.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSlide(idx)}
                                className={`h-2 rounded-full transition-all duration-300
                                    ${idx === activeIndex
                                    ? 'w-8 bg-primary'
                                    : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'}
                                `}
                                aria-label={`${t('goToProject')} ${idx + 1}`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
