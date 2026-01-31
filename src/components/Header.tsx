'use client'
import { useState, useEffect, useRef } from 'react'
import { NAV_LINKS, HEADER_TEXT } from '../../constants';

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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white/80 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'}`}>

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
                    className="font-display font-bold text-2xl text-dark tracking-tighter hover:text-primary transition-colors cursor-pointer select-none"
                    onMouseEnter={triggerExplosion}
                >
                    {HEADER_TEXT.logo}<span className="text-primary">.</span>
                </a>

                {/* Links */}
                <div className="hidden md:flex gap-8 items-center">
                    <a href="#about" className="text-dark font-medium hover:text-primary transition-colors text-sm">{NAV_LINKS[1].name}</a>
                    <a href="#experience" className="text-dark font-medium hover:text-primary transition-colors text-sm">{NAV_LINKS[2].name}</a>
                    <a href="#projects" className="text-dark font-medium hover:text-primary transition-colors text-sm">{NAV_LINKS[3].name}</a>
                    <a href="#contact" className="px-5 py-2 bg-dark text-white rounded-full font-medium text-sm hover:bg-primary transition-colors shadow-lg hover:shadow-primary/30">
                        {HEADER_TEXT.contactButton}
                    </a>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden space-y-1.5 cursor-pointer group">
                    <div className="w-6 h-0.5 bg-dark group-hover:bg-primary transition-colors"></div>
                    <div className="w-4 h-0.5 bg-dark group-hover:bg-primary group-hover:w-6 transition-all"></div>
                    <div className="w-6 h-0.5 bg-dark group-hover:bg-primary transition-colors"></div>
                </div>

            </div>
        </nav> )
}