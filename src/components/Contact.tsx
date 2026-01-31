import React from 'react';
import { Mail, Linkedin, Github, Coffee } from 'lucide-react';
import { CONTACT_TEXT } from '../../constants';

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-transparent relative overflow-hidden">

            <div className="max-w-4xl mx-auto text-center relative z-10">

                <div className="inline-block p-4 rounded-full bg-primary/10 mb-6 animate-bounce">
                    <Coffee className="w-8 h-8 text-primary" />
                </div>

                <h2 className="font-display text-4xl md:text-6xl font-bold text-dark mb-6">
                    {CONTACT_TEXT.title} <br/> <span className="text-primary">{CONTACT_TEXT.titleHighlight}</span>
                </h2>

                <p className="text-xl text-dark/60 max-w-2xl mx-auto mb-12">
                    {CONTACT_TEXT.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">

                    <a href={CONTACT_TEXT.email.href} className="group bg-background rounded-2xl p-6 border-2 border-transparent hover:border-primary transition-all shadow-lg hover:shadow-primary/20 flex flex-col items-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-bold text-dark text-lg mb-1">{CONTACT_TEXT.email.title}</h3>
                        <p className="text-sm text-gray-500">{CONTACT_TEXT.email.subtitle}</p>
                    </a>

                    <a href={CONTACT_TEXT.linkedin.href} className="group bg-background rounded-2xl p-6 border-2 border-transparent hover:border-secondary transition-all shadow-lg hover:shadow-secondary/20 flex flex-col items-center">
                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Linkedin className="w-6 h-6 text-secondary" />
                        </div>
                        <h3 className="font-bold text-dark text-lg mb-1">{CONTACT_TEXT.linkedin.title}</h3>
                        <div className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full mt-1">
                            {CONTACT_TEXT.linkedin.badge}
                        </div>
                    </a>

                    <a href={CONTACT_TEXT.github.href} className="group bg-background rounded-2xl p-6 border-2 border-transparent hover:border-dark transition-all shadow-lg hover:shadow-gray-300 flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Github className="w-6 h-6 text-dark" />
                        </div>
                        <h3 className="font-bold text-dark text-lg mb-1">{CONTACT_TEXT.github.title}</h3>
                        <p className="text-sm text-gray-500">{CONTACT_TEXT.github.subtitle}</p>
                    </a>

                </div>

                <div className="mt-20 pt-10 border-t border-gray-100 text-center text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} {CONTACT_TEXT.footer.copyright}</p>
                    <p className="mt-2 text-xs">{CONTACT_TEXT.footer.madeWith}</p>
                </div>

            </div>
        </section>
    );
}