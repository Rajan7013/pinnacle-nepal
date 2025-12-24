"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TalkToExpertButton from "./TalkToExpertButton";

const TOTAL_HERO_IMAGES = 13;
const IMAGE_CHANGE_INTERVAL = 2000; // 2 seconds

// Simple, short one-line titles for each image
const heroTitles = [
    "University & College Selection",
    "Study Abroad Opportunities",
    "Expert Visa Assistance",
    "Scholarship Guidance",
    "Career Counseling Services",
    "Application Support",
    "Pre-Departure Services",
    "Student Success Stories",
    "Global Education Network",
    "IELTS & Test Preparation",
    "Country Selection Guidance",
    "Program Matching Services",
    "Post-Arrival Support",
];

export default function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-cycle through images every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % TOTAL_HERO_IMAGES);
        }, IMAGE_CHANGE_INTERVAL);

        return () => clearInterval(interval);
    }, []);

    const currentTitle = heroTitles[currentImageIndex] || heroTitles[0];
    const currentImage = `/images/hero/hero-${currentImageIndex + 1}.jpg`;

    return (
        <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-screen flex items-end overflow-hidden">
            {/* Background Image Carousel - Right to Left Sliding */}
            <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                    key={currentImageIndex}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{
                        duration: 0.8,
                        ease: [0.4, 0, 0.2, 1] // Smooth easing
                    }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={currentImage}
                        alt={`Pinnacle Nepal - ${currentTitle}`}
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Gradient overlay at bottom for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Text - Bottom positioned, fully responsive */}
            <div className="relative z-10 w-full pb-12 sm:pb-14 md:pb-16 lg:pb-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={currentImageIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center leading-tight"
                        >
                            {currentTitle}
                        </motion.h1>
                    </AnimatePresence>

                    {/* Talk to Expert Button - Bottom Right of Content */}
                    <TalkToExpertButton className="hidden md:block absolute right-0 bottom-0 translate-y-full md:translate-y-1/2" />
                </div>
            </div>

            {/* Image Navigation Dots - Responsive */}
            <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2">
                {Array.from({ length: TOTAL_HERO_IMAGES }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`transition-all duration-300 ${index === currentImageIndex
                            ? "bg-[#E75F41] w-6 sm:w-8 h-1.5 sm:h-2"
                            : "bg-white/50 hover:bg-white/80 w-1.5 sm:w-2 h-1.5 sm:h-2"
                            } rounded-full`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
