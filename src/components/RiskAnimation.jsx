// src/components/RiskAnimation.jsx
// SSR-SAFE React Island — all DOM/window access inside useEffect only.
// Renders a cycling slideshow of ZEUS risk analysis screenshots.
// Usage: <RiskAnimation client:visible /> (Astro island directive required)

import { useState, useEffect } from 'react';

// Static slide data — text labels rendered via React, images via public paths
const slides = [
    {
        label: 'Mapeamento de Perigos',
        desc: 'Identificação sistemática de fontes de perigo na máquina (ISO 12100 §5.4)',
        color: '#1e3a5f',
        accent: '#3b82f6',
        icon: '⚠',
        bars: [78, 45, 92, 33, 67],
    },
    {
        label: 'Estimativa de Risco (HRN)',
        desc: 'Cálculo do Hazard Rating Number: P × F × E × D',
        color: '#1a2e1a',
        accent: '#22c55e',
        icon: '📊',
        bars: [45, 89, 22, 76, 55],
    },
    {
        label: 'Medidas de Segurança',
        desc: 'Validação das medidas redutoras de risco conforme hierarquia normativa',
        color: '#2d1a3d',
        accent: '#a855f7',
        icon: '🛡',
        bars: [91, 34, 67, 88, 42],
    },
];

export default function RiskAnimation() {
    const [current, setCurrent] = useState(0);
    const [mounted, setMounted] = useState(false);

    // Hydration guard — only run client-side effects after mount
    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3800);
        return () => clearInterval(interval);
    }, []);

    // SSR fallback — renders a static first slide placeholder
    if (!mounted) {
        return (
            <div className="w-full aspect-video bg-slate-800 rounded-xl flex items-center justify-center">
                <p className="text-slate-400 text-sm">Carregando análise de risco...</p>
            </div>
        );
    }

    const slide = slides[current];

    return (
        <div
            className="w-full aspect-video rounded-xl overflow-hidden relative font-mono text-xs select-none"
            style={{ background: slide.color, transition: 'background 0.8s ease' }}
            aria-label={`Visualização: ${slide.label}`}
        >
            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 h-7 bg-black/30 flex items-center px-3 gap-2 z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 text-white/40 text-[10px]">ZEUS Analytics — Apreciação de Risco ISO 12100</span>
            </div>

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(${slide.accent}44 1px, transparent 1px), linear-gradient(90deg, ${slide.accent}44 1px, transparent 1px)`,
                    backgroundSize: '32px 32px',
                }}
            />

            {/* Content */}
            <div className="absolute inset-0 pt-10 px-5 pb-5 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">{slide.icon}</span>
                    <div>
                        <p style={{ color: slide.accent }} className="font-bold text-sm tracking-wide">{slide.label}</p>
                        <p className="text-white/50 text-[10px] leading-tight mt-0.5">{slide.desc}</p>
                    </div>
                </div>

                {/* Animated bars */}
                <div className="flex-1 flex flex-col justify-end gap-2">
                    {slide.bars.map((w, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <span className="text-white/30 text-[9px] w-4 text-right">{String.fromCharCode(65 + i)}</span>
                            <div className="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
                                <div
                                    className="h-full rounded-full transition-all duration-700"
                                    style={{ width: `${w}%`, background: slide.accent }}
                                />
                            </div>
                            <span className="text-white/50 text-[9px] w-5">{w}%</span>
                        </div>
                    ))}
                </div>

                {/* Progress dots */}
                <div className="flex justify-center gap-1.5 pt-1">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                            style={{ background: i === current ? slide.accent : 'rgba(255,255,255,0.2)' }}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Scanline overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay"
                style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)' }}
            />
        </div>
    );
}
