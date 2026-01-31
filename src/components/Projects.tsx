import React from 'react';
import { Project } from '../../types';
import { projects, PROJECTS_TEXT } from '../../constants';
import { Lock, Server, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

function ProjectCard({ project }: { project: Project }) {
    const colorMap = {
        blue: 'border-secondary shadow-secondary/20',
        green: 'border-accent shadow-accent/20',
        orange: 'border-primary shadow-primary/20',
        red: 'border-alert shadow-alert/20'
    };

    const textMap = {
        blue: 'text-secondary',
        green: 'text-accent',
        orange: 'text-primary',
        red: 'text-alert'
    };

    const badgeMap = {
        blue: 'bg-secondary/10 text-secondary',
        green: 'bg-accent/10 text-accent',
        orange: 'bg-primary/10 text-primary',
        red: 'bg-alert/10 text-alert'
    };

    return (
        <div className={`bg-white/70 backdrop-blur-md rounded-[2rem] p-8 border-2 ${colorMap[project.color]} shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group h-full flex flex-col`}>

            {/* Visual Status Indicator */}
            <div className="flex justify-between items-start mb-6">
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold font-mono ${badgeMap[project.color]}`}>
                    <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
                    {project.status.toUpperCase()}
                </div>

                {/* Fake Mini Dashboard */}
                <div className="hidden sm:flex flex-col items-end">
                    <span className="text-[10px] text-gray-400 font-mono">{PROJECTS_TEXT.systemStatus}</span>
                    <div className={`text-xs font-bold ${textMap[project.color]} flex items-center gap-1`}>
                        <CheckCircle2 size={12} />
                        {project.stats}
                    </div>
                </div>
            </div>

            <h3 className={`font-display text-2xl font-bold mb-3 ${textMap[project.color]}`}>
                {project.title}
            </h3>

            <p className="text-dark/70 font-sans mb-6 flex-grow">
                {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/60 text-dark/60 rounded-lg text-xs font-bold border border-gray-200">
            {tag}
          </span>
                ))}
            </div>

            {/* Footer / CTA */}
            <div className="mt-auto pt-6 border-t border-gray-200/50 flex justify-between items-center">
                {project.isPrivate ? (
                    <div className="flex items-center gap-2 text-gray-400 text-sm font-medium" title="Código propietario">
                        <Lock className="w-4 h-4" />
                        <span>{PROJECTS_TEXT.privateLabel}</span>
                    </div>
                ) : (
                    <a href="#" className="flex items-center gap-2 text-dark font-bold hover:gap-3 transition-all group-hover:text-primary">
                        {PROJECTS_TEXT.viewCode} <ArrowRight className="w-4 h-4" />
                    </a>
                )}

                <div className={`p-2 rounded-full ${badgeMap[project.color]} opacity-0 group-hover:opacity-100 transition-opacity`}>
                    {project.id % 2 === 0 ? <Globe size={16}/> : <Server size={16}/>}
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 bg-transparent relative">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-4">
                        {PROJECTS_TEXT.title}
                    </h2>
                    <p className="text-xl text-dark/60 font-medium">
                        {PROJECTS_TEXT.subtitle} <span className="text-sm align-top text-primary">*</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}