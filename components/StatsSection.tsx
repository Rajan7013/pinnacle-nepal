"use client";

import { useEffect, useState } from "react";



export default function StatsSection() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <section className="py-10 bg-linear-to-b from-white via-gray-50 to-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] opacity-30" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Centered Heading */}
                <div className="text-center mb-8">
                    <div className="inline-block px-4 py-1.5 bg-pink-50 rounded-full mb-4">
                        <span className="text-xs font-bold text-[#DC143C] uppercase tracking-wide">Why Us?</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                        <span className="text-gray-900">We Don't Just </span>
                        <span className="text-[#003893]">Guide, We Build </span>
                        <span className="text-[#DC143C]">Careers.</span>
                    </h2>

                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                        At Pinnacle Nepal, we believe in a personalized approach. Your dreams are unique, and our strategy for you needs to be too.
                    </p>
                </div>

                {/* Static Stats Banner Image */}
                <div className="relative w-full max-w-[1400px] mx-auto rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                        <img
                            src="/images/stats-banner.jpg"
                            alt="Why Choose Us Stats"
                            className="w-full h-full object-contain md:object-cover"
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}
