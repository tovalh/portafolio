'use client'
import React, { useEffect, useRef, useState } from 'react';

interface TrailDot { x: number; y: number; id: number }

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [trail, setTrail] = useState<TrailDot[]>([]);
    // Si es touch device, ni siquiera renderizamos ni escuchamos eventos.
    // Antes: el listener corría en TODO dispositivo y disparaba 2 setState
    // por cada evento mousemove (~60/s), con re-render de hasta 16 divs.
    const [isTouch, setIsTouch] = useState(false);

    // Buffer para throttlear vía requestAnimationFrame: si el mouse se
    // mueve 200 veces entre frames, procesamos solo la última posición.
    const pendingPos = useRef<{ x: number; y: number } | null>(null);
    const rafId = useRef<number | null>(null);

    useEffect(() => {
        // Detectar dispositivos táctiles: si el usuario NO tiene hover fino,
        // asumimos que no hay cursor real que decorar.
        if (typeof window !== 'undefined') {
            const mql = window.matchMedia('(hover: none), (pointer: coarse)');
            if (mql.matches) {
                setIsTouch(true);
                return;
            }
        }

        const flush = () => {
            const pos = pendingPos.current;
            pendingPos.current = null;
            if (!pos) {
                rafId.current = null;
                return;
            }
            setPosition(pos);
            setTrail(prev => {
                const next = prev.length >= 15 ? prev.slice(-14) : prev;
                return [...next, { x: pos.x, y: pos.y, id: Date.now() }];
            });
            // Si llegó otra posición durante este frame, procesamos también
            if (pendingPos.current) {
                rafId.current = requestAnimationFrame(flush);
            } else {
                rafId.current = null;
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            pendingPos.current = { x: e.clientX, y: e.clientY };
            if (rafId.current === null) {
                rafId.current = requestAnimationFrame(flush);
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafId.current !== null) {
                cancelAnimationFrame(rafId.current);
                rafId.current = null;
            }
        };
    }, []);

    // En touch no renderizamos NADA. Cero DOM extra en mobile.
    if (isTouch) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-50 hidden md:block">
            {/* Main Cursor */}
            <div
                className="absolute w-4 h-4 bg-primary rounded-full mix-blend-multiply transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: position.x, top: position.y }}
            />

            {/* Trail */}
            {trail.map((dot, index) => (
                <div
                    key={dot.id}
                    className="absolute w-2 h-2 bg-alert rounded-full opacity-50 transition-opacity duration-500"
                    style={{
                        left: dot.x,
                        top: dot.y,
                        transform: `scale(${index / 15}) translate(-50%, -50%)`,
                        opacity: index / 15
                    }}
                />
            ))}
        </div>
    );
}
