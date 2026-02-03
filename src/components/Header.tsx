'use client'
import { useState, useEffect, useRef } from 'react'
import { Sun, Moon } from 'lucide-react'
import { NAV_LINKS, HEADER_TEXT } from '../../constants';
import { useTheme } from '../hooks/useTheme';

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
    const [sparks, setSparks] = useState<Spark[]>([]);
    const requestRef = useRef<number>(0);
    const { isDark, toggleTheme, mounted } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animation Loop for Sparks
    useEffect(() => {
        const animate = () => {
            setSparks(prevSparks =>
                prevSparks
                    .map(spark => ({
                        ...spark,
                        x: spark.x + Math.cos(spark.angle) * spark.speed,
                        y: spark.y + Math.sin(spark.angle) * spark.speed,
                        speed: spark.speed * 0.95, // friction
                        size: spark.size * 0.95 // fade out size
                    }))
                    .filter(spark => spark.size > 0.5)
            );
            requestRef.current = requestAnimationFrame(animate);
        };
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
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
                    {HEADER_TEXT.logo}<span className="text-primary">.</span>
                </a>

                {/* Links */}
                <div className="hidden md:flex gap-8 items-center">
                    <a href="#about" className="text-dark dark:text-white font-medium hover:text-primary transition-colors text-sm">{NAV_LINKS[1].name}</a>
                    <a href="#experience" className="text-dark dark:text-white font-medium hover:text-primary transition-colors text-sm">{NAV_LINKS[2].name}</a>
                    <a href="#projects" className="text-dark dark:text-white font-medium hover:text-primary transition-colors text-sm">{NAV_LINKS[3].name}</a>
                    <a href="#contact" className="px-5 py-2 bg-dark dark:bg-primary text-white rounded-full font-medium text-sm hover:bg-primary dark:hover:bg-primary/80 transition-colors shadow-lg hover:shadow-primary/30">
                        {HEADER_TEXT.contactButton}
                    </a>
                    {mounted && (
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 hover:border-primary dark:hover:border-primary transition-all hover:scale-110"
                            aria-label="Toggle theme"
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
                <div className="md:hidden flex items-center gap-4">
                    {mounted && (
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20"
                            aria-label="Toggle theme"
                        >
                            {isDark ? (
                                <Sun size={16} className="text-primary" />
                            ) : (
                                <Moon size={16} className="text-dark" />
                            )}
                        </button>
                    )}
                    <div className="space-y-1.5 cursor-pointer group">
                        <div className="w-6 h-0.5 bg-dark dark:bg-white group-hover:bg-primary transition-colors"></div>
                        <div className="w-4 h-0.5 bg-dark dark:bg-white group-hover:bg-primary group-hover:w-6 transition-all"></div>
                        <div className="w-6 h-0.5 bg-dark dark:bg-white group-hover:bg-primary transition-colors"></div>
                    </div>
                </div>

            </div>
        </nav> )
}