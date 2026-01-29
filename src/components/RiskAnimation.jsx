import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RiskAnimation = () => {
    // 0 = Initial, 1 = Low, 2 = Moderate, 3 = High
    const [scenario, setScenario] = useState(0);

    const getStatus = (s) => {
        if (s === 1) return { color: '#10B981', label: 'BAIXO' };
        if (s === 2) return { color: '#F59E0B', label: 'MODERADO' };
        if (s === 3) return { color: '#EF4444', label: 'ELEVADO' };
        return { color: '#cbd5e1', label: 'AGUARDANDO' };
    };

    const status = getStatus(scenario);

    // Variants for animations
    const pathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1.5, ease: "easeInOut" }
        }
    };

    const nodeVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { delay: 1.2, duration: 0.5 }
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-8 bg-slate-50 rounded-xl border border-slate-200 shadow-sm">
            {/* Header */}
            <div className="flex justify-between items-center mb-8 border-b border-slate-200 pb-4">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                    Janela Tecnológica
                </h3>
                <div className="flex gap-2">
                    {[1, 2, 3].map((num) => (
                        <button
                            key={num}
                            onClick={() => setScenario(num)}
                            className={`px-4 py-1 text-xs font-bold uppercase rounded transition-colors
                                ${scenario === num
                                    ? 'bg-slate-800 text-white'
                                    : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                                }`}
                        >
                            Exemplo {num}
                        </button>
                    ))}
                </div>
            </div>

            {/* Visualizer */}
            <div className="relative h-64 flex items-center justify-between px-12">
                {/* Nodes */}
                <div className="flex flex-col gap-12 z-10">
                    <div className="w-32 h-12 bg-white border border-slate-300 rounded flex items-center justify-center text-xs font-semibold text-slate-600 shadow-sm">
                        SEVERIDADE
                    </div>
                    <div className="w-32 h-12 bg-white border border-slate-300 rounded flex items-center justify-center text-xs font-semibold text-slate-600 shadow-sm">
                        FREQUÊNCIA
                    </div>
                </div>

                <div className="z-10">
                    <motion.div
                        key={scenario}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-40 h-40 rounded-full border-4 flex items-center justify-center flex-col bg-white shadow-lg relative overflow-hidden"
                        style={{ borderColor: status.color }}
                    >
                        <span className="text-[10px] text-slate-400 font-bold uppercase mb-1">Resultado</span>
                        <span
                            className="text-lg font-bold"
                            style={{ color: status.color }}
                        >
                            {status.label}
                        </span>

                        {/* Pulse Effect */}
                        {scenario > 0 && (
                            <motion.div
                                className="absolute inset-0 rounded-full"
                                style={{ backgroundColor: status.color }}
                                animate={{ opacity: [0, 0.1, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        )}
                    </motion.div>
                </div>

                {/* Connecting Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                    {/* Abstract Paths */}
                    {scenario > 0 && (
                        <>
                            <motion.path
                                d="M 160 80 C 250 80, 250 128, 450 128"
                                fill="none"
                                stroke={status.color}
                                strokeWidth="2"
                                variants={pathVariants}
                                initial="hidden"
                                animate="visible"
                            />
                            <motion.path
                                d="M 160 176 C 250 176, 250 128, 450 128"
                                fill="none"
                                stroke={status.color}
                                strokeWidth="2"
                                variants={pathVariants}
                                initial="hidden"
                                animate="visible"
                            />
                        </>
                    )}
                </svg>
            </div>

            <div className="mt-8 text-center">
                <p className="text-xs text-slate-400 italic">
                    Visualização conceitual. Não representa dados reais ou proprietários.
                </p>
            </div>
        </div>
    );
};

export default RiskAnimation;
