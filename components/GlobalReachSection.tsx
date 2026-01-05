"use client";

import { useEffect, useState, useRef } from "react";
import { HiAcademicCap, HiGlobeAlt, HiOfficeBuilding, HiUserGroup } from "react-icons/hi";

const stats = [
    {
        icon: HiAcademicCap,
        number: 50,
        suffix: "+",
        label: "Partner Universities",
        color: "from-[#DC143C] to-red-600"
    },
    {
        icon: HiGlobeAlt,
        number: 15,
        suffix: "+",
        label: "Countries",
        color: "from-[#DC143C] to-red-600"
    },
    {
        icon: HiOfficeBuilding,
        number: 20,
        suffix: "+",
        label: "Branches",
        color: "from-[#DC143C] to-red-600"
    },
    {
        icon: HiUserGroup,
        number: 3000,
        suffix: "+",
        label: "Students",
        color: "from-[#DC143C] to-red-600"
    },
];

// Stat Item Component with Animated Counter (Re-triggers on every scroll)
const StatItem = ({ stat, index }: { stat: any; index: number }) => {
    const Icon = stat.icon;
    const [count, setCount] = useState(0);
    const itemRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Reset count and start animation
                        setCount(0);

                        // Cancel any existing animation
                        if (animationRef.current) {
                            cancelAnimationFrame(animationRef.current);
                        }

                        // Animate counter from 0 to target over 5 seconds
                        const duration = 5000; // 5 seconds
                        const targetNumber = stat.number;
                        const startTime = Date.now();

                        const animate = () => {
                            const currentTime = Date.now();
                            const elapsed = currentTime - startTime;
                            const progress = Math.min(elapsed / duration, 1);

                            // Easing function for smooth animation
                            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                            const currentCount = Math.floor(easeOutQuart * targetNumber);

                            setCount(currentCount);

                            if (progress < 1) {
                                animationRef.current = requestAnimationFrame(animate);
                            } else {
                                setCount(targetNumber);
                                animationRef.current = null;
                            }
                        };

                        animationRef.current = requestAnimationFrame(animate);
                    } else {
                        // Cancel animation when out of view
                        if (animationRef.current) {
                            cancelAnimationFrame(animationRef.current);
                            animationRef.current = null;
                        }
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current);
            }
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [stat.number]);

    return (
        <div
            ref={itemRef}
            className="flex flex-col items-center text-center"
        >
            {/* Icon */}
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                <Icon className="text-2xl text-white" />
            </div>

            {/* Animated Number */}
            <div className="mb-1">
                <span className="font-black text-3xl md:text-4xl text-white">
                    {count.toLocaleString()}{stat.suffix}
                </span>
            </div>

            {/* Label */}
            <p className="text-xs font-semibold text-white/90">
                {stat.label}
            </p>
        </div>
    );
};

export default function GlobalReachSection() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <section className="py-8 bg-linear-to-r from-[#DC143C] to-red-600">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {stats.map((stat, index) => (
                        <StatItem key={stat.label} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
