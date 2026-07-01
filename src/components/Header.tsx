'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTranslations } from 'next-intl';
import { useTheme } from '../hooks/useTheme';
import LanguageSwitcher from './LanguageSwitcher';

interface Spark {
    id: number;
    x: number;
    y: number;
    angle: number;
    speed: number;
    color: string;
    size: number;
}

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [sparks, setSparks] = useState<Spark[]>([]);
    // requestAnimationFrame handle. null = loop parado (no hay sparks).
    const requestRef = useRef<number | null>(null);
    const { isDark, toggleTheme, mounted } = useTheme();
    const t = useTranslations('Header');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animation loop: solo corre mientras haya sparks vivos. Cuando el array
    // queda vacío, se auto-detiene. Antes corría 60fps SIEMPRE aunque no
    // hubiera nada que animar → matabas la batería/CPU.
    const animate = useCallback(() => {
        setSparks(prev => {
            const next = prev
                .map(spark => ({
                    ...spark,
                    x: spark.x + Math.cos(spark.angle) * spark.speed,
                    y: spark.y + Math.sin(spark.angle) * spark.speed,
                    speed: spark.speed * 0.95,
                    size: spark.size * 0.95
                }))
                .filter(spark => spark.size > 0.5);

            if (next.length > 0) {
                requestRef.current = requestAnimationFrame(animate);
            } else {
                requestRef.current = null;
            }
            return next;
        });
    }, []);

    // Cleanup del loop cuando el componente se desmonta
    useEffect(() => {
        return () => {
            if (requestRef.current !== null) {
                cancelAnimationFrame(requestRef.current);
                requestRef.current = null;
            }
        };
    }, []);

    const triggerExplosion = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const colors = ['#FF6B35', '#4361EE', '#2EC4B6', '#FF5A5A'];

        const newSparks: Spark[] = Array.from({ length: 12 }).map((_, i) => ({
            id: Date.now() + i,
            x: centerX,
            y: centerY,
            angle: (Math.PI * 2 * i) / 12,
            speed: Math.random() * 4 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 4 + 2
        }));

        setSparks(prev => [...prev, ...newSparks]);

        // Arranca el loop solo si no estaba corriendo
        if (requestRef.current === null) {
            requestRef.current = requestAnimationFrame(animate);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white/80 dark:bg-[#12121a]/80 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'}`}>

            <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 60 }}>
                {sparks.map(spark => (
                    <div
                        key={spark.id}
                        className="absolute rounded-full"
                        style={{
                            left: spark.x,
                            top: spark.y,
                            width: spark.size,
                            height: spark.size,
                            backgroundColor: spark.color,
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center relative z-50">

                {/* Logo */}
                <a
                    href="#"
                    className="font-display font-bold text-2xl text-dark dark:text-white tracking-tighter hover:text-primary transition-colors cursor-pointer select-none"
                    onMouseEnter={triggerExplosion}
                >
                    {t('logo')}<span className="text-primary">.</span>
                </a>

                {/* Links */}
                <div className="hidden md:flex gap-8 items-center">
                    <a href="#about" className="text-dark dark:text-white font-medium hover:text-primary transition-colors text-sm">{t('navAbout')}</a>
                    <a href="#experience" className="text-dark dark:text-white font-medium hover:text-primary transition-colors text-sm">{t('navExperience')}</a>
                    {/* <a href="#projects" className="text-dark dark:text-white font-medium hover:text-primary transition-colors text-sm">{t('navProjects')}</a> */}
                    <a href="#contact" className="px-5 py-2 bg-dark dark:bg-primary text-white rounded-full font-medium text-sm hover:bg-primary dark:hover:bg-primary/80 transition-colors shadow-lg hover:shadow-primary/30">
                        {t('contactButton')}
                    </a>
                    <LanguageSwitcher />
                    {mounted && (
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 hover:border-primary dark:hover:border-primary transition-all hover:scale-110"
                            aria-label={t('toggleTheme')}
                        >
                            {isDark ? (
                                <Sun size={18} className="text-primary" />
                            ) : (
                                <Moon size={18} className="text-dark" />
                            )}
                        </button>
                    )}
                </div>

                {/* Mobile */}
                <div className="md:hidden flex items-center gap-3">
                    <LanguageSwitcher size="sm" />
                    {mounted && (
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20"
                            aria-label={t('toggleTheme')}
                        >
                            {isDark ? (
                                <Sun size={16} className="text-primary" />
                            ) : (
                                <Moon size={16} className="text-dark" />
                            )}
                        </button>
                    )}
                    <button
                        onClick={() => setMenuOpen(prev => !prev)}
                        className="space-y-1.5 cursor-pointer group p-1"
                        aria-label={t('toggleMenu')}
                    >
                        <div className={`w-6 h-0.5 bg-dark dark:bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                        <div className={`h-0.5 bg-dark dark:bg-white transition-all ${menuOpen ? 'opacity-0 w-6' : 'w-4'}`}></div>
                        <div className={`w-6 h-0.5 bg-dark dark:bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                    </button>
                </div>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white/95 dark:bg-[#12121a]/95 backdrop-blur-md border-t border-gray-200 dark:border-white/10 px-6 py-4 flex flex-col gap-4">
                    <a href="#about" onClick={() => setMenuOpen(false)} className="text-dark dark:text-white font-medium hover:text-primary transition-colors text-sm">{t('navAbout')}</a>
                    <a href="#experience" onClick={() => setMenuOpen(false)} className="text-dark dark:text-white font-medium hover:text-primary transition-colors text-sm">{t('navExperience')}</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)} className="px-5 py-2 bg-dark dark:bg-primary text-white rounded-full font-medium text-sm hover:bg-primary dark:hover:bg-primary/80 transition-colors text-center">
                        {t('contactButton')}
                    </a>
                </div>
            )}
        </nav>
    );
}
