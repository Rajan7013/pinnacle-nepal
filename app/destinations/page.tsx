"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { destinationsData } from "@/lib/data/destinations";
import { HiX, HiAcademicCap, HiGlobeAlt } from "react-icons/hi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoursesSection from "@/components/CoursesSection";
import TalkToExpertButton from "@/components/TalkToExpertButton";

function DestinationsContent() {
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const searchParams = useSearchParams();

    // Handle URL parameter to auto-open country modal
    useEffect(() => {
        const countryParam = searchParams.get('country');
        if (countryParam) {
            setSelectedCountry(countryParam);
            // Scroll to countries section
            setTimeout(() => {
                const element = document.getElementById('countries-section');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    }, [searchParams]);

    const country = destinationsData.find((c) => c.id === selectedCountry);

    return (
        <div className="min-h-screen bg-linear-to-b from-gray-50 via-white to-gray-50">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-linear-to-br from-[#003893] via-[#0052CC] to-[#DC143C] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] opacity-50" />
                <div className="absolute inset-0 bg-[url('/images/world-map.svg')] opacity-10 bg-center bg-no-repeat bg-cover" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6 border border-white/30">
                            <span className="text-white">🌍 15 Countries • 50+ Universities</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                            <span className="text-white">Study </span>
                            <span className="text-white/90">Destinations</span>
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Explore our partner universities across the globe and find your perfect study destination
                        </p>
                    </motion.div>

                    {/* Talk to Expert Button */}
                    <TalkToExpertButton className="hidden md:block absolute right-4 bottom-0 translate-y-1/2" />
                </div>
            </section>

            {/* Countries Grid */}
            <section id="countries-section" className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-black mb-4">
                            <span className="text-gray-900">Choose </span>
                            <span className="text-[#003893]">Your </span>
                            <span className="text-[#DC143C]">Destination</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Click on any country to view our partner universities and programs
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {destinationsData.map((country, index) => (
                            <Link
                                key={country.id}
                                href={`/destinations/${country.id}`}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    // onClick={() => setSelectedCountry(country.id)} // Removed
                                    className="relative aspect-4/3 rounded-2xl overflow-hidden cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgba(220,20,60,0.2),0_0_40px_rgba(0,56,147,0.15)] transition-all duration-500 group"
                                >
                                    {/* Background Image */}
                                    <Image
                                        src={country.image}
                                        alt={country.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                                    {/* Flag Badge */}
                                    <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg z-10">
                                        <Image
                                            src={country.flag}
                                            alt={`${country.name} flag`}
                                            fill
                                            className="object-cover"
                                            sizes="48px"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                                        <h3 className="text-2xl font-black text-white mb-2 drop-shadow-lg">
                                            {country.name}
                                        </h3>
                                        <div className="flex items-center gap-2 text-white/90 text-sm mb-3">
                                            <HiAcademicCap className="text-lg" /> {/* Changed class */}
                                            <span className="font-semibold">
                                                {country.universities.length > 0 // Changed logic
                                                    ? `${country.universities.length}+ Universities` // Changed text
                                                    : "Partner Universities Available"}
                                            </span>
                                        </div>
                                        {/* Replaced button with div */}
                                        <div className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all">
                                            <span>Explore Programs</span>
                                            <span className="text-lg">→</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Courses Section */}
            <CoursesSection />

            {/* University Modal */}
            {selectedCountry && country && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl my-8"
                    >
                        {/* Modal Header */}
                        <div className="relative h-48 bg-linear-to-br from-[#003893] to-[#DC143C]">
                            <Image
                                src={country.image}
                                alt={country.name}
                                fill
                                className="object-cover opacity-30"
                                sizes="(max-width: 1200px) 100vw, 1200px"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />

                            <button
                                onClick={() => setSelectedCountry(null)}
                                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
                            >
                                <HiX className="w-6 h-6" />
                            </button>

                            <div className="absolute bottom-6 left-6 flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                    <Image
                                        src={country.flag}
                                        alt={`${country.name} flag`}
                                        fill
                                        className="object-cover"
                                        sizes="64px"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black text-white drop-shadow-lg">{country.name}</h2>
                                    <p className="text-white/90 text-sm">{country.description}</p>
                                </div>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8 overflow-y-auto max-h-[calc(90vh-12rem)]">
                            {country.hasUniversityData && country.universities.length > 0 ? (
                                <>
                                    <div className="flex items-center gap-2 mb-6">
                                        <HiGlobeAlt className="w-6 h-6 text-[#003893]" />
                                        <h3 className="text-2xl font-black text-gray-900">
                                            Partner Universities ({country.universities.length})
                                        </h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {country.universities.map((university, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                className="bg-linear-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100 hover:border-[#003893] transition-all duration-300"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <HiAcademicCap className="w-5 h-5 text-[#DC143C] mt-1 shrink-0" />
                                                    <p className="text-gray-800 font-semibold leading-tight">{university.name}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className="text-center py-12">
                                    <HiGlobeAlt className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                    <h3 className="text-2xl font-black text-gray-900 mb-2">Partner Universities Available</h3>
                                    <p className="text-gray-600 mb-6">
                                        We have established partnerships with leading universities in {country.name}.
                                    </p>
                                    <button className="bg-linear-to-r from-[#003893] to-[#0052CC] text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300">
                                        Contact Us for Details
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}

export default function DestinationsPage() {
    return (
        <>
            <Header />
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-xl font-bold text-gray-500">Loading destinations...</div>}>
                <DestinationsContent />
            </Suspense>
            <Footer />
        </>
    );
}
