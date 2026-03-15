'use client';

import React, { useState } from 'react';
import { Mail, Linkedin, Github, Coffee, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { CONTACT_TEXT } from '../../constants';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formState, setFormState] = useState<FormState>('idle');

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setFormState('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });

            if (!res.ok) throw new Error();

            setFormState('success');
            setName('');
            setEmail('');
            setMessage('');
        } catch {
            setFormState('error');
        }
    }

    return (
        <section id="contact" className="py-24 px-6 bg-transparent relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">

                <div className="inline-block p-4 rounded-full bg-primary/10 mb-6 animate-bounce">
                    <Coffee className="w-8 h-8 text-primary" />
                </div>

                <h2 className="font-display text-4xl md:text-6xl font-bold text-dark dark:text-white mb-6">
                    {CONTACT_TEXT.title} <br/> <span className="text-primary">{CONTACT_TEXT.titleHighlight}</span>
                </h2>

                <p className="text-xl text-dark/60 dark:text-white/60 max-w-2xl mx-auto mb-12">
                    {CONTACT_TEXT.description}
                </p>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="bg-white/70 dark:bg-white/10 backdrop-blur-md rounded-3xl border border-white/50 dark:border-white/20 shadow-lg p-8 mb-10 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-dark/50 dark:text-white/50">Nombre</label>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Tu nombre"
                                className="bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-xl px-4 py-3 text-dark dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors text-sm"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-dark/50 dark:text-white/50">Email</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="tu@email.com"
                                className="bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-xl px-4 py-3 text-dark dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors text-sm"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5 mb-6">
                        <label className="text-xs font-bold uppercase tracking-wider text-dark/50 dark:text-white/50">Mensaje</label>
                        <textarea
                            required
                            rows={5}
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            placeholder="Cuéntame qué tienes en mente..."
                            className="bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-xl px-4 py-3 text-dark dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                        />
                    </div>

                    {/* Feedback */}
                    {formState === 'success' && (
                        <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm mb-4 font-medium">
                            <CheckCircle size={16} /> Mensaje enviado. Te respondo pronto.
                        </div>
                    )}
                    {formState === 'error' && (
                        <div className="flex items-center gap-2 text-red-500 text-sm mb-4 font-medium">
                            <AlertCircle size={16} /> Algo falló. Intenta de nuevo o escríbeme directo.
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={formState === 'loading'}
                        className="flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm ml-auto"
                    >
                        {formState === 'loading' ? (
                            <><Loader2 size={16} className="animate-spin" /> Enviando...</>
                        ) : (
                            <><Send size={16} /> Enviar mensaje</>
                        )}
                    </button>
                </form>

                {/* Links rápidos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    <a href={CONTACT_TEXT.email.href} className="group bg-background rounded-2xl p-6 border-2 border-transparent hover:border-primary transition-all shadow-lg hover:shadow-primary/20 flex flex-col items-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-bold text-dark dark:text-white text-lg mb-1">{CONTACT_TEXT.email.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{CONTACT_TEXT.email.subtitle}</p>
                    </a>

                    <a href={CONTACT_TEXT.linkedin.href} className="group bg-background rounded-2xl p-6 border-2 border-transparent hover:border-secondary transition-all shadow-lg hover:shadow-secondary/20 flex flex-col items-center">
                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Linkedin className="w-6 h-6 text-secondary" />
                        </div>
                        <h3 className="font-bold text-dark dark:text-white text-lg mb-1">{CONTACT_TEXT.linkedin.title}</h3>
                        <div className="px-2 py-0.5 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 text-[10px] font-bold rounded-full mt-1">
                            {CONTACT_TEXT.linkedin.badge}
                        </div>
                    </a>

                    <a href={CONTACT_TEXT.github.href} className="group bg-background rounded-2xl p-6 border-2 border-transparent hover:border-dark dark:hover:border-white/50 transition-all shadow-lg hover:shadow-gray-300 dark:hover:shadow-white/10 flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-200 dark:bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Github className="w-6 h-6 text-dark dark:text-white" />
                        </div>
                        <h3 className="font-bold text-dark dark:text-white text-lg mb-1">{CONTACT_TEXT.github.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{CONTACT_TEXT.github.subtitle}</p>
                    </a>
                </div>

                <div className="mt-20 pt-10 border-t border-gray-100 dark:border-white/10 text-center text-gray-400 dark:text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} {CONTACT_TEXT.footer.copyright}</p>
                    <p className="mt-2 text-xs">{CONTACT_TEXT.footer.madeWith}</p>
                </div>

            </div>
        </section>
    );
}