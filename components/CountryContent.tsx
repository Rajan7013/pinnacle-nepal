"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { HiAcademicCap, HiGlobeAlt, HiExternalLink, HiSearch } from "react-icons/hi";
import { Country } from "@/lib/data/destinations";
import { fadeInUp } from "@/lib/animations";
import TalkToExpertButton from "./TalkToExpertButton";

interface CountryContentProps {
    country: Country;
}

export default function CountryContent({ country }: CountryContentProps) {
    const [searchTerm, setSearchTerm] = useState("");

    // Helper for 3-color text rule (Blue, Red, Black)
    const renderThreeColorText = (text: string) => {
        const words = text.split(" ");
        return (
            <span className="inline-block">
                {words.map((word, i) => {
                    const colors = [
                        "text-[#003893]", // Blue
                        "text-[#DC143C]", // Red
                        "text-gray-900"   // Black
                    ];
                    return (
                        <span key={i} className={`${colors[i % 3]} mr-1.5`}>
                            {word}
                        </span>
                    );
                })}
            </span>
        );
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans">
            {/* Hero Section - Minimalist */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src={country.image}
                    alt={country.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" /> {/* Ligher overlay */}

                {/* Corner Contact Button - Moved to Bottom Right to avoid Header overlap */}
                <TalkToExpertButton className="absolute bottom-10 right-8 md:right-12 z-30" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-6 relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl"
                    >
                        <Image
                            src={country.flag}
                            alt={`${country.name} flag`}
                            fill
                            sizes="(max-width: 768px) 100vw, 400px"
                            className="object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-xl tracking-tight">
                            Study in {country.name}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-100 max-w-6xl mx-auto leading-relaxed drop-shadow-md whitespace-nowrap">
                            {country.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 max-w-6xl">
                {/* 1. Why Choose Section (3-Color Rule) */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-12">
                        {renderThreeColorText(`Why choose ${country.name}`)}
                    </h2>

                    {/* Detailed Paragraphs Grid */}
                    <div className="grid md:grid-cols-2 gap-12 text-left">
                        {country.climate && (
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-2xl font-bold text-[#003893] mb-4 flex items-center gap-2">
                                    🌤️ Climate & Geography
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {country.climate}
                                </p>
                            </div>
                        )}

                        {country.culture && (
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-2xl font-bold text-[#DC143C] mb-4 flex items-center gap-2">
                                    🎭 Culture & Lifestyle
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {country.culture}
                                </p>
                            </div>
                        )}

                        {country.professions && (
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    💼 Professions & Career
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {country.professions}
                                </p>
                            </div>
                        )}

                        {country.advantages_detailed && (
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-2xl font-bold text-[#003893] mb-4 flex items-center gap-2">
                                    ✨ Key Advantages
                                </h3>
                                <ul className="space-y-4">
                                    {country.advantages_detailed.map((adv, idx) => (
                                        <li key={idx} className="flex flex-col">
                                            <span className="font-bold text-gray-900 text-lg">{adv.title}</span>
                                            <span className="text-gray-600">{adv.content}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </motion.section>


                {/* 2. Application Process (Paragraph flow) */}
                {country.process_detailed && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
                            Application Process
                        </h2>
                        <div className="space-y-6 max-w-4xl mx-auto">
                            {country.process_detailed.map((step, idx) => (
                                <div key={idx} className="flex gap-6 items-start p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                    <div className="shrink-0 w-12 h-12 bg-[#DC143C] text-white rounded-full flex items-center justify-center font-bold text-xl">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#003893] mb-2">{step.step}</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">{step.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* 3. Universities & Courses List */}
                <motion.section
                    id="universities"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        {renderThreeColorText("Top Partner Universities")}
                    </h2>

                    {country.hasUniversityData ? (
                        <>
                            {/* Search Bar */}
                            <div className="max-w-2xl mx-auto mb-10 px-4">
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <HiSearch className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder={`Search universities in ${country.name}...`}
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm transition-all"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                                        {searchTerm && (
                                            <button
                                                onClick={() => setSearchTerm('')}
                                                className="text-gray-400 hover:text-gray-600 focus:outline-none"
                                            >
                                                <span className="sr-only">Clear search</span>
                                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4 max-w-7xl mx-auto">
                                {country.universities
                                    .filter((uni) => uni.name.toLowerCase().includes(searchTerm.toLowerCase()))
                                    .map((uni, idx) => (
                                        <motion.div
                                            key={uni.name}
                                            variants={fadeInUp}
                                            whileHover={{ y: -5 }}
                                            className="bg-blue-50 rounded-xl p-4 shadow-md hover:shadow-xl border border-blue-100 transition-all duration-300 flex flex-col h-full group"
                                        >
                                            <div className="mb-3">
                                                <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-3 leading-tight min-h-12">
                                                    {uni.name}
                                                </h3>
                                                <div className="w-8 h-1 bg-linear-to-r from-blue-400 to-purple-400 mt-2 rounded-full" />
                                            </div>

                                            <div className="grow">
                                                <h4 className="text-sm font-bold text-[#DC143C] uppercase tracking-wider mb-3">Popular Courses</h4>
                                                {uni.courses && uni.courses.length > 0 ? (
                                                    <ul className="space-y-2 mb-6">
                                                        {uni.courses.map((course, cIdx) => (
                                                            <li key={cIdx} className="text-gray-600 flex items-start gap-2 text-sm">
                                                                <span className="text-blue-400 mt-1">•</span>
                                                                {course}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p className="text-gray-500 text-sm italic mb-6">Contact us for course details.</p>
                                                )}
                                            </div>

                                            {uni.website && (
                                                <div className="mt-auto pt-6 border-t border-gray-100">
                                                    <a
                                                        href={uni.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center justify-center gap-2 w-full py-3 bg-gray-50 hover:bg-gray-100 text-[#003893] font-semibold rounded-lg transition-colors text-sm"
                                                    >
                                                        Visit Website
                                                        <HiExternalLink />
                                                    </a>
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                            </div>
                        </>
                    ) : (
                        <div className="text-center p-12 bg-gray-50 rounded-2xl border border-gray-200">
                            <p className="text-xl text-gray-600">Contact us for a complete list of universities in {country.name}.</p>
                        </div>
                    )}
                </motion.section>

                {/* 4. Final CTA (Minimalist) */}
                <div className="text-center py-12 border-t border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to start your journey?</h3>
                    <a
                        href="/contact"
                        className="inline-block px-10 py-4 bg-[#DC143C] text-white font-bold text-lg rounded-full hover:bg-[#B01030] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Book Appointment
                    </a>
                </div>
            </div>
        </div>
    );
}
