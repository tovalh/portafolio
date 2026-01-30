import React from 'react';
import { ArrowRight, Code2 } from 'lucide-react';
import { HERO_TEXT } from '../../constants';

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/0 via-darker to-darker"></div>
            </div>

            <div className="container mx-auto px-4 z-10 relative">
                <div className="mx-auto text-center">
                    <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full border sky-50 border-slate-700 bg-slate-900/50 backdrop-blur-sm">
                        <Code2 size={16} className="text-accent mr-2" />
                        <span className="text-xs font-mono text-accent uppercase tracking-wider ">Disponible para nuevos proyectos</span>
                    </div>

                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight leading-tight">
                        {HERO_TEXT.greeting} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-white">
              {HERO_TEXT.role}
            </span>
                    </h1>

                    <p className="font-sans text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {HERO_TEXT.tagline}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-white text-darker font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2 group"
                        >
                            {HERO_TEXT.cta}
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 border border-slate-700 text-white font-medium rounded-lg hover:border-slate-500 hover:bg-slate-800/50 transition-all"
                        >
                            Contactar
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};