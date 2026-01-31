import React from 'react';
import { Briefcase, GraduationCap, Calendar, GitCommit } from 'lucide-react';
import { TimelineItem } from '../../types';
import { EXPERIENCE_TEXT, TIMELINE_DATA } from '../../constants';

function ExperienceCard({ item, isLeft }: { item: TimelineItem; isLeft: boolean }) {
    return (
        <div className={`relative w-full md:w-[45%] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
            <div className={`bg-white/70 backdrop-blur-md p-6 rounded-3xl border transition-all duration-300 hover:shadow-xl relative hover:-translate-y-1
                ${item.highlight ? 'border-primary/30 shadow-primary/10' : 'border-white/50 shadow-sm'}
            `}>

                {/* Connector Line to center */}
                <div className={`absolute top-6 w-8 h-0.5 bg-dark/20 hidden md:block
                    ${isLeft ? '-right-8' : '-left-8'}
                `}></div>

                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-gray-400 uppercase tracking-wider bg-white/50 px-2 py-1 rounded-md w-fit">
                        <Calendar size={12} />
                        {item.period}
                    </div>
                    {/* Mobile Only Icon */}
                    <div className="md:hidden">
                        {item.type === 'work' ? (
                            <Briefcase size={16} className={`${item.highlight ? 'text-primary' : 'text-secondary'}`} />
                        ) : (
                            <GraduationCap size={16} className="text-accent" />
                        )}
                    </div>
                </div>

                <h3 className="font-display font-bold text-xl text-dark leading-tight mb-1">
                    {item.role}
                </h3>
                <p className={`font-medium text-sm mb-4 ${item.type === 'work' ? 'text-secondary' : 'text-accent'}`}>
                    {item.company}
                </p>

                <p className="text-dark/70 font-sans text-sm leading-relaxed mb-4">
                    {item.description}
                </p>

                {/* Tech Stack for Jobs */}
                {item.tech && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100/50">
                        {item.tech.map(t => (
                            <span key={t} className="text-[10px] font-bold text-dark/60 bg-white px-2 py-1 rounded-md border border-gray-100 flex items-center gap-1">
                                <GitCommit size={10} /> {t}
                            </span>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 bg-transparent relative">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="mb-20 text-center">
                    <h2 className="font-display text-4xl font-bold text-dark mb-4">
                        {EXPERIENCE_TEXT.title} <span className="text-alert decoration-wavy underline decoration-2">{EXPERIENCE_TEXT.titleHighlight}</span>
                    </h2>
                    <div className="flex justify-center gap-6 text-sm font-medium text-dark/60">
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-accent rounded-full"></div>{EXPERIENCE_TEXT.legendEducation}</div>
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-secondary rounded-full"></div>{EXPERIENCE_TEXT.legendWork}</div>
                    </div>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-dark/10 via-dark/20 to-transparent transform md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {TIMELINE_DATA.map((item, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <div key={item.id} className="relative flex items-start pl-12 md:pl-0">

                                    {/* Desktop: Card positioned left or right */}
                                    <ExperienceCard item={item} isLeft={isLeft} />

                                    {/* Center Icon */}
                                    <div className={`absolute left-0 md:left-1/2 top-6 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-4 border-background shadow-lg z-10 transform md:-translate-x-1/2`}>
                                        {item.type === 'work' ? (
                                            <Briefcase size={18} className={item.highlight ? 'text-primary' : 'text-secondary'} />
                                        ) : (
                                            <GraduationCap size={18} className="text-accent" />
                                        )}
                                    </div>

                                </div>
                            );
                        })}
                    </div>

                    {/* End cap */}
                    <div className="absolute left-4 md:left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full pt-12">
                        <div className="px-4 py-1 bg-white/50 backdrop-blur-sm text-gray-400 text-xs font-mono rounded-full border border-white/50">
                            {EXPERIENCE_TEXT.endLabel}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}