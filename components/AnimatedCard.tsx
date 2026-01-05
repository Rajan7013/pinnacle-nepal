"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cardHover, danceEffect } from "@/lib/animations";

interface AnimatedCardProps {
    children: ReactNode;
    className?: string;
    variant?: "default" | "glass" | "gradient";
    animation?: "dance" | "float" | "hover";
    onClick?: () => void;
}

/**
 * AnimatedCard Component
 * Beautiful cards with dancing, floating, and hover effects
 */
export default function AnimatedCard({
    children,
    className = "",
    variant = "default",
    animation = "hover",
    onClick,
}: AnimatedCardProps) {
    const baseClasses = "rounded-2xl p-6 transition-smooth cursor-pointer";

    const variantClasses = {
        default: "bg-white shadow-lg hover-glow",
        glass: "glass-strong",
        gradient: "bg-linear-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/20",
    };

    const animationProps = {
        dance: {
            ...danceEffect,
            whileHover: { scale: 1.05 },
        },
        float: {
            initial: { y: 0 },
            animate: {
                y: [-15, 15, -15],
                transition: {
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "loop" as const,
                },
            },
            whileHover: { scale: 1.05 },
        },
        hover: cardHover,
    };

    return (
        <motion.div
            {...animationProps[animation]}
            onClick={onClick}
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        >
            {children}
        </motion.div>
    );
}
