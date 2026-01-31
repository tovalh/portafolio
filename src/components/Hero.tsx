'use client'
import { useState } from 'react';
import { Database, ShieldCheck } from 'lucide-react';
import { HERO_TEXT } from '../../constants';

export default function Hero() {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-20">


            {/* Main Content Container */}
            <div className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center">

                {/* Availability Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-white/60 backdrop-blur-sm text-primary text-xs font-mono font-bold uppercase tracking-wider mb-6 shadow-sm hover:scale-105 transition-transform cursor-default">
           <span className="relative flex h-2 w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
           </span>
                    {HERO_TEXT.availableBadge}
                </div>

                {/* Status Badge (Existing) */}
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200 shadow-sm mb-8 animate-float">
                    <div className="relative flex h-3 w-3">
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </div>
                    <span className="text-dark font-mono text-xs md:text-sm font-bold">{HERO_TEXT.statusBadge}</span>
                    <ShieldCheck className="w-4 h-4 text-green-600" />
                </div>

                {/* The Visual Metaphor */}
                <div
                    className="relative mb-10 group cursor-pointer"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {/* Tooltip */}
                    <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-dark text-white text-xs px-3 py-1 rounded-lg transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
                        {HERO_TEXT.tooltip}
                    </div>

                    {/* Core DB Icon */}
                    <div className={`relative w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-xl border-4 border-dark flex items-center justify-center transition-transform ${isHovering ? 'animate-shake' : ''}`}>
                        <Database className={`w-16 h-16 md:w-20 md:h-20 text-dark transition-colors duration-300 ${isHovering ? 'text-alert' : ''}`} />

                        {/* "Sparks" */}
                        <div className="absolute -inset-1">
                            <div className="absolute top-0 left-1/2 w-1 h-1 bg-primary rounded-full animate-ping"></div>
                            <div className="absolute bottom-0 right-1/2 w-1 h-1 bg-alert rounded-full animate-ping delay-75"></div>
                            <div className="absolute top-1/2 right-0 w-1 h-1 bg-secondary rounded-full animate-ping delay-150"></div>
                        </div>
                    </div>

                    {/* Orbiting particles */}
                    <div className="absolute inset-0 border-2 border-dashed border-dark/20 rounded-full w-[160%] h-[160%] top-[-30%] left-[-30%] animate-spin-slow pointer-events-none"></div>
                </div>

                {/* Headlines */}
                <h1 className="font-display text-5xl md:text-7xl font-bold text-dark leading-tight mb-4">
                    {HERO_TEXT.headline} <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-alert inline-block relative">
            {HERO_TEXT.headlineHighlight}
            <span className="absolute -top-4 -right-8 text-sm text-dark font-mono bg-white px-2 py-1 rounded-md shadow-sm transform rotate-12 opacity-80 hidden md:block">{HERO_TEXT.headlineNote}</span>
          </span>
                </h1>

                <h2 className="text-lg md:text-xl text-dark/70 font-sans max-w-2xl mt-4">
                    {HERO_TEXT.subtitle}
                </h2>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                    <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-primary to-alert text-white font-bold rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all flex items-center justify-center gap-2">
                        {HERO_TEXT.ctaPrimary}
                    </a>
                    <a href="#contact" className="px-8 py-4 bg-white border-2 border-secondary text-secondary font-bold rounded-full hover:bg-secondary/5 hover:scale-105 transition-all flex items-center justify-center gap-2">
                        {HERO_TEXT.ctaSecondary}
                    </a>
                </div>

            </div>
        </section>
    );
}