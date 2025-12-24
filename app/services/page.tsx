"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper, { SectionHeader } from "@/components/SectionWrapper";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { useState } from "react";
import {
    HiAcademicCap,
    HiDocumentText,
    HiClipboardCheck,
    HiGlobeAlt,
    HiUserGroup,
    HiBriefcase,
    HiBookOpen,
    HiLightBulb,
    HiCurrencyDollar,
    HiSupport,
    HiChevronRight
} from "react-icons/hi";
import TalkToExpertButton from "@/components/TalkToExpertButton";
import { services } from "@/lib/data/services";

// Reusing the Optimized CSS Particle
const FloatingParticle = ({ emoji, delay }: { emoji: string; delay: number }) => (
    <div
        className="absolute text-xl pointer-events-none animate-float-particle opacity-0"
        style={{
            left: `${(delay * 300) % 80 + 10}%`,
            top: `${(delay * 700) % 80 + 10}%`,
            animationDelay: `${delay}s`,
            willChange: "transform, opacity"
        }}
    >
        {emoji}
    </div>
);

// Hybrid Icon Component (Same as ServicesSection)
const ServiceIconLarge = ({ service }: { service: any }) => {
    const Icon = service.icon;
    const [imageError, setImageError] = useState(false);

    return (
        <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
            {/* Pulse Ring */}
            <div className={`absolute inset-0 bg-white/20 animate-pulse`} />

            {/* Try loading Image first */}
            {!imageError ? (
                <div className="relative w-16 h-16 md:w-20 md:h-20 z-10 transition-transform duration-300">
                    <Image
                        src={`/images/services/${service.image}`}
                        alt={service.title}
                        fill
                        className="object-contain drop-shadow-md"
                        onError={() => setImageError(true)}
                        sizes="100px" // Slightly larger for detail view
                    />
                </div>
            ) : (
                /* Fallback to Icon */
                <Icon className="text-4xl md:text-5xl text-white relative z-10 drop-shadow-md" />
            )}
        </div>
    );
};

// Simple Service Card matching Course Cards and Home Page
const ServiceCard = ({ service }: { service: any }) => {
    const [imageError, setImageError] = useState(false);
    const Icon = service.icon;

    return (
        <div
            id={service.id}
            className="group relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 scroll-mt-24"
        >
            {/* Service Image */}
            <div className="relative h-48 w-full overflow-hidden bg-gray-50">
                {!imageError ? (
                    <Image
                        src={`/images/services/${service.image}`}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={() => setImageError(true)}
                        sizes="(max-width: 768px) 100vw, 300px"
                    />
                ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                        <Icon className="text-5xl text-white" />
                    </div>
                )}
            </div>

            {/* Service Title */}
            <div className="p-3 bg-gradient-to-r from-blue-50 to-cyan-50">
                <h3 className="text-xs font-bold text-gray-800 text-center leading-snug">
                    {service.title}
                </h3>
            </div>
        </div>
    );
};

export default function ServicesPage() {
    return (
        <>
            <Header />

            <main className="bg-gray-50 overflow-hidden">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#003893] via-[#0052CC] to-[#DC143C] overflow-hidden mb-16">
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
                                <span className="text-white">✨ Premium Guidance • End-to-End Support</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                                <span className="text-white">Our </span>
                                <span className="text-white/90">Services</span>
                            </h1>
                            <p className="text-xl text-white/90 leading-relaxed">
                                From your first consultation to your first day on campus, we provide end-to-end support tailored to your unique aspirations.
                            </p>
                        </motion.div>

                        {/* Talk to Expert Button */}
                        <TalkToExpertButton className="hidden md:block absolute right-4 bottom-0 translate-y-1/2" />
                    </div>
                </section>

                {/* Services Grid */}
                <section className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={service.title} service={service} />
                        ))}
                    </div>
                </section>

                {/* Reusing Optimized Sections */}
                <CTASection />
            </main>

            <Footer />
        </>
    );
}
