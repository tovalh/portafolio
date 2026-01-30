import React from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-darker relative border-t border-slate-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-16">

                    {/* Contacto Info */}
                    <div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                            Hablemos
                        </h2>
                        <p className="text-slate-400 text-lg mb-10 max-w-md">
                            ¿Tienes un proyecto en mente o simplemente quieres saludar? Mi inbox siempre está abierto.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-slate-300 group cursor-pointer">
                                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800 group-hover:border-accent transition-colors">
                                    <Mail size={24} className="group-hover:text-accent transition-colors" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Email</p>
                                    <p className="text-lg font-medium">crisvalladares98@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-slate-300 group cursor-pointer">
                                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800 group-hover:border-fuchsia-500 transition-colors">
                                    <MapPin size={24} className="group-hover:text-fuchsia-500 transition-colors" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Ubicación</p>
                                    <p className="text-lg font-medium">Remote / Santiago, CL</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-slate-800">
                            <p className="text-sm text-slate-500 mb-4">Sígueme en redes</p>
                            <div className="flex gap-4">
                                <a href="https://github.com/tovalh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-white hover:text-darker transition-all transform hover:-translate-y-1">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/cristobal-valladares/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0077b5] hover:text-white transition-all transform hover:-translate-y-1">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#1DA1F2] hover:text-white transition-all transform hover:-translate-y-1">
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};