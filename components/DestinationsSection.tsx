"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiGlobeAlt } from "react-icons/hi";

const countries = [
    {
        id: "usa",
        name: "United States",
        flag: "🇺🇸",
        gradient: "from-blue-500 to-red-500"
    },
    {
        id: "canada",
        name: "Canada",
        flag: "🇨🇦",
        gradient: "from-red-500 to-white"
    },
    {
        id: "india",
        name: "India",
        flag: "🇮🇳",
        gradient: "from-orange-500 to-green-500"
    },
    {
        id: "uk",
        name: "United Kingdom",
        flag: "🇬🇧",
        gradient: "from-blue-500 to-red-500"
    },
    {
        id: "australia",
        name: "Australia",
        flag: "🇦🇺",
        gradient: "from-blue-500 to-white"
    },
    {
        id: "europe",
        name: "Europe",
        flag: "🇪🇺",
        gradient: "from-blue-500 to-yellow-500"
    },
];

// Simple Full-Image Card with Country Name Overlay
const CountryCard = ({ country, index }: { country: any; index: number }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div
            className="group relative cursor-pointer touch-manipulation tap-highlight-transparent"
        >
            {/* Full Image Card */}
            <Link href="/destinations">
                <div className="relative aspect-4/3 rounded-2xl shadow-lg overflow-hidden bg-white transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
                    {/* Background Image */}
                    {!imageError ? (
                        <Image
                            src={`/images/destinations/${country.id}.jpg`}
                            alt={country.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={() => setImageError(true)}
                            sizes="(max-width: 768px) 100vw, 400px"
                        />
                    ) : (
                        <div className={`absolute inset-0 bg-linear-to-br ${country.gradient} flex items-center justify-center`}>
                            <HiGlobeAlt className="text-6xl text-white opacity-50" />
                        </div>
                    )}

                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60" />

                    {/* Country Name - Top Left */}
                    <div className="absolute top-6 left-6 z-10">
                        <h3 className="text-2xl font-black text-white tracking-wide uppercase">
                            {country.name}
                        </h3>
                    </div>

                    {/* Flag Image - Bottom Right */}
                    <div className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-white shadow-lg overflow-hidden border-4 border-white z-10">
                        <Image
                            src={`/images/flags/${country.id}.jpg`}
                            alt={`${country.name} flag`}
                            fill
                            className="object-cover"
                            sizes="64px"
                        />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default function DestinationsSection() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <section className="py-10 bg-linear-to-b from-white via-blue-50/30 to-white relative overflow-hidden" id="countries">
            {/* Static Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100/50 rounded-full mb-4 text-blue-700 font-bold text-xs uppercase tracking-wider">
                        <HiGlobeAlt className="text-lg" />
                        Global Education
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        <span className="text-[#003893]">Study </span>
                        <span className="text-[#DC143C]">Destinations</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Unlock world-class education with our partner institutions across the globe.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {countries.map((country, index) => (
                        <CountryCard key={country.name} country={country} index={index} />
                    ))}
                </div>

                {/* View More Countries Button */}
                <div className="text-center mt-12">
                    <Link href="/destinations">
                        <button className="group relative px-8 py-4 bg-linear-to-r from-[#003893] to-[#0052CC] text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <span className="relative z-10 flex items-center gap-2">
                                View More Countries
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
