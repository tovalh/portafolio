'use client'
import { useCallback, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import useEmblaCarousel from 'embla-carousel-react';
import { Link } from '../i18n/navigation';
import { PROJECTS_CONFIG, ProjectConfig } from '../config/projects';
import TechTag from './TechTag';
import {
    Lock, Github, ArrowRight, ExternalLink,
    Database, Cpu, Code2, Wallet, Radio, Activity,
    ChevronRight, ChevronLeft
} from 'lucide-react';

const colorStyles = {
    blue:   { iconBg: 'bg-secondary/10', iconText: 'text-secondary', statsBg: 'bg-secondary/10 border-secondary/30', statsText: 'text-secondary', bar: 'bg-secondary' },
    green:  { iconBg: 'bg-accent/10',    iconText: 'text-accent',    statsBg: 'bg-accent/10 border-accent/30',       statsText: 'text-accent',    bar: 'bg-accent' },
    orange: { iconBg: 'bg-primary/10',   iconText: 'text-primary',   statsBg: 'bg-primary/10 border-primary/30',     statsText: 'text-primary',   bar: 'bg-primary' },
    red:    { iconBg: 'bg-alert/10',     iconText: 'text-alert',     statsBg: 'bg-alert/10 border-alert/30',         statsText: 'text-alert',     bar: 'bg-alert' },
};

const iconByName = { database: Database, cpu: Cpu, code: Code2, wallet: Wallet, radio: Radio, activity: Activity };
const iconByColor = { blue: Cpu, green: Code2, orange: Database, red: Wallet };

function ProjectCard({ project }: { project: ProjectConfig }) {
    const t = useTranslations('Projects');
    const styles = colorStyles[project.color];
    const IconComponent = project.icon ? iconByName[project.icon] : iconByColor[project.color];

    return (
        <div className="relative h-full bg-white/90 dark:bg-white/10 backdrop-blur-md rounded-3xl border-2 border-gray-100 dark:border-white/20 shadow-xl flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

            {/* Thumbnail (solo si el proyecto lo define). Aspect natural del SVG:
                se ve completo y escala con el ancho, sin recortes en móvil. */}
            {project.thumb && (
                <div className="w-full bg-[#232631] border-b border-white/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={project.thumb} alt={t(`items.${project.key}.title`)} className="block w-full" />
                </div>
            )}

            <div className="p-7 flex flex-col flex-grow">
                {/* Header */}
                <div className="flex justify-between items-start mb-5">
                    <div className={`p-3 rounded-xl ${styles.iconBg} ${styles.iconText}`}>
                        <IconComponent size={22} />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/20 text-[11px] font-mono font-bold text-gray-500 dark:text-gray-400">
                            {t(`items.${project.key}.status`).toUpperCase()}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold border ${styles.statsBg} ${styles.statsText}`}>
                            {t(`items.${project.key}.stats`)}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-dark dark:text-white mb-3">
                        {t(`items.${project.key}.title`)}
                    </h3>
                    <p className="text-dark/70 dark:text-white/70 leading-relaxed font-sans mb-5 text-sm">
                        {t(`items.${project.key}.description`)}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => <TechTag key={tag} label={tag} />)}
                    </div>
                </div>

                {/* Footer */}
                <div className="pt-5 border-t border-gray-100 dark:border-white/10 flex justify-between items-center">
                    {project.isPrivate ? (
                        <span className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                            <Lock size={16} /> {t('privateLabel')}
                        </span>
                    ) : project.github ? (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                           className="flex items-center gap-2 text-dark dark:text-white hover:text-primary font-medium text-sm transition-colors">
                            <Github size={18} /> {t('viewCode')}
                        </a>
                    ) : <span />}

                    {project.slug ? (
                        <Link href={{ pathname: '/proyectos/[slug]', params: { slug: project.slug } }}
                              className="flex items-center gap-2 text-primary font-bold text-sm hover:underline decoration-2 underline-offset-4 group/btn">
                            {t('viewDetails')} <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                    ) : project.demo ? (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer"
                           className="flex items-center gap-2 text-primary font-bold text-sm hover:underline decoration-2 underline-offset-4">
                            {t('viewDetails')} <ExternalLink size={15} />
                        </a>
                    ) : (
                        <span className="flex items-center gap-2 text-gray-400 font-bold text-sm">
                            {t('viewDetails')} <ArrowRight size={16} />
                        </span>
                    )}
                </div>
            </div>

            {/* Barra inferior de color */}
            <div className={`h-1.5 w-full ${styles.bar}`} />
        </div>
    );
}

export default function Projects() {
    const t = useTranslations('Projects');
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true, slidesToScroll: 1 });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(true);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setCanPrev(emblaApi.canScrollPrev());
        setCanNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

    return (
        <section id="projects" className="py-24 px-4 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-dark dark:text-white mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-dark/60 dark:text-white/60 max-w-2xl mx-auto">
                        {t('subtitle')} <span className="text-sm align-top text-primary">*</span>
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-6">
                            {PROJECTS_CONFIG.map(project => (
                                <div key={project.id} className="pl-6 min-w-0 flex-[0_0_100%] md:flex-[0_0_50%]">
                                    <ProjectCard project={project} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Prev / Next */}
                    <button
                        onClick={scrollPrev}
                        disabled={!canPrev}
                        aria-label={t('goToProject')}
                        className="absolute top-1/2 -left-2 md:-left-5 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-md shadow-lg border border-white/50 dark:border-white/20 hover:bg-primary hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
                    >
                        <ChevronLeft size={22} className="group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                    <button
                        onClick={scrollNext}
                        disabled={!canNext}
                        aria-label={t('goToProject')}
                        className="absolute top-1/2 -right-2 md:-right-5 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-md shadow-lg border border-white/50 dark:border-white/20 hover:bg-primary hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
                    >
                        <ChevronRight size={22} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-3 mt-10">
                    {scrollSnaps.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollTo(idx)}
                            aria-label={`${t('goToProject')} ${idx + 1}`}
                            className={`h-2 rounded-full transition-all duration-300 ${idx === selectedIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
