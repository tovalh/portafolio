import React from 'react';
import { Terminal } from 'lucide-react';
import { ABOUT_TEXT } from '../../constants';

export default function About() {
    return (
        <section id="about" className="py-20 px-6 bg-transparent relative overflow-hidden">

            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border-2 border-dark/5 flex flex-col md:flex-row gap-10 items-center">

                    {/* Visual Side */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative w-48 h-48 bg-dark rounded-full flex items-center justify-center overflow-hidden border-4 border-gray-100 shadow-inner">
                            {/* Abstract Code Pattern */}
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-500 to-transparent scale-150"></div>
                            <Terminal size={64} className="text-white relative z-10" />
                            <div className="absolute bottom-4 px-3 py-1 bg-accent text-white text-[10px] font-bold rounded-full font-mono">
                                {ABOUT_TEXT.badgeText}
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-2/3">
                        <div className="inline-block mb-4">
                            <span className="text-primary font-bold font-mono tracking-widest text-sm uppercase">{ABOUT_TEXT.sectionLabel}</span>
                        </div>

                        <h3 className="font-display text-3xl font-bold text-dark mb-6">
                            {ABOUT_TEXT.title} <span className="text-secondary decoration-wavy underline decoration-2">{ABOUT_TEXT.titleHighlight}</span>.
                        </h3>

                        <div className="space-y-4 text-dark/70 font-sans leading-relaxed">
                            {ABOUT_TEXT.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}