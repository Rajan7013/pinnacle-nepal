"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { staggerContainer, scrollReveal } from "@/lib/animations";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
    background?: "white" | "gradient" | "pattern" | "animated";
    animationType?: "fade" | "slide" | "zoom";
}

/**
 * SectionWrapper Component
 * Wraps sections with scroll-triggered animations and backgrounds
 */
export default function SectionWrapper({
    children,
    className = "",
    id,
    background = "white",
    animationType = "fade",
}: SectionWrapperProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const backgroundClasses = {
        white: "bg-white",
        gradient: "bg-linear-to-br from-blue-50 via-purple-50 to-pink-50",
        pattern: "bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[20px_20px]",
        animated: "animated-gradient",
    };

    const animations = {
        fade: scrollReveal,
        slide: {
            hidden: { opacity: 0, x: -100 },
            visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: "easeOut" },
            },
        },
        zoom: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, ease: "easeOut" },
            },
        },
    };

    return (
        <section
            id={id}
            ref={ref}
            className={`relative py-20 ${backgroundClasses[background]} ${className}`}
        >
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {children}
            </motion.div>
        </section>
    );
}

/**
 * Section Header Component
 * Animated section title and subtitle
 */
interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export function SectionHeader({
    title,
    subtitle,
    centered = true,
}: SectionHeaderProps) {
    return (
        <motion.div
            variants={scrollReveal}
            className={`mb-16 ${centered ? "text-center" : ""}`}
        >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
                {title.split(" ").map((word, index) => (
                    <span
                        key={index}
                        className={index % 2 === 0 ? "gradient-blue-text" : "text-gray-900"}
                    >
                        {word}{" "}
                    </span>
                ))}
            </h2>
            {subtitle && (
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
