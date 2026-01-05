"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

export default function CTASection() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <section className="py-10 relative overflow-hidden" id="cta">
            {/* Animated Gradient Background - CSS Only */}
            {/* Animated Gradient Background - Optimized for GPU */}
            <div className="absolute inset-0 w-[200%] animate-gradient-x bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 will-change-transform" />

            {/* Overlay Patterns */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[32px_32px] opacity-20" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight drop-shadow-lg">
                        Ready to Start Your <br /> Global Journey?
                    </h2>

                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium">
                        Book a free consultation with our expert counselors today and take the first step towards your dream education.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/contact">
                            <button className="group relative px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">
                                    Book Free Consultation
                                    <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                {/* Button Shine Effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-blue-100/30 to-transparent z-0" />
                            </button>
                        </Link>

                        <button className="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">
                            Download Brochure
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
