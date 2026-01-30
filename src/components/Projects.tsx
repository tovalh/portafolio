import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../../constants';

export default function Projects(){
    return (
        <section id="projects" className="py-24 bg-darker relative">
            <div className="container mx-auto px-4">
                <div className="mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Proyectos</h2>
                    <div className="w-20 h-1 bg-accent rounded-full"></div>
                    <p className="mt-4 text-slate-400 max-w-xl">
                        Una selección de mis trabajos más recientes, donde el diseño se encuentra con la funcionalidad.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project) => (
                        <div key={project.id} className="group relative bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                            {/* Imagen Container */}
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-accent border border-slate-700">
                      {tag}
                    </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex gap-4">
                                    <a href={project.link} className="flex items-center text-sm font-semibold text-white hover:text-accent transition-colors gap-1">
                                        Demo <ExternalLink size={16} />
                                    </a>
                                    <a href={project.link} className="flex items-center text-sm font-semibold text-slate-400 hover:text-white transition-colors gap-1">
                                        Código <Github size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};