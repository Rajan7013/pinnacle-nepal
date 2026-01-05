'use client';

import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const stats = [
    { value: 50, suffix: "+", label: "Universities" },
    { value: 1000, suffix: "+", label: "Happy Students" },
    { value: 100, suffix: "%", label: "Visa Success" },
    { value: 24, suffix: "/7", label: "Support" },
];

function Counter({ from, to, suffix }: { from: number; to: number; suffix: string }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (!inView) return;

        const node = nodeRef.current;
        const controls = animate(from, to, {
            duration: 2.5,
            ease: "easeOut",
            onUpdate(value) {
                if (node) {
                    node.textContent = Math.round(value) + suffix;
                }
            },
        });

        return () => controls.stop();
    }, [from, to, suffix, inView]);

    return <span ref={nodeRef} />;
}

export default function StatsSection() {
    return (
        <section className="py-24 border-y border-white/10 bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight group-hover:text-pinnacle-orange transition-colors duration-300">
                                <Counter from={0} to={stat.value} suffix={stat.suffix} />
                            </h3>
                            <p className="text-gray-400 font-medium uppercase tracking-wider text-sm group-hover:text-white transition-colors duration-300">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
