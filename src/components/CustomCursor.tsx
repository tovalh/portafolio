'use client'
import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
    const requestRef = useRef<number>(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const newDot = { x: e.clientX, y: e.clientY, id: Date.now() };
            setTrail((prev) => [...prev.slice(-15), newDot]);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

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