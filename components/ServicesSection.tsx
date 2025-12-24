"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
    HiAcademicCap,
    HiDocumentText,
    HiGlobeAlt,
    HiClipboardCheck
} from "react-icons/hi";

// Specific 4 Services requested by user - using existing simple product images
const services = [
    {
        id: "university",
        icon: HiAcademicCap,
        title: "Universities",
        description: "Expert guidance for top-tier institutions worldwide.",
        gradient: "from-blue-500 via-cyan-500 to-teal-500",
    },
    {
        id: "application",
        icon: HiClipboardCheck,
        title: "Applications",
        description: "Seamless documentation and fast track submission.",
        gradient: "from-purple-500 via-pink-500 to-rose-500",
    },
    {
        id: "visa",
        icon: HiDocumentText,
        title: "Visa Support",
        description: "Comprehensive support for successful approvals.",
        gradient: "from-orange-500 via-amber-500 to-yellow-500",
    },
    {
        id: "predeparture",
        icon: HiGlobeAlt,
        title: "Travel Care",
        description: "Complete assistance with travel and settling in.",
        gradient: "from-emerald-500 via-green-500 to-teal-500",
    },
];

// Simple Card matching Course Cards style
const ServiceCard = ({ service, index }: { service: any; index: number }) => {
    const [imageError, setImageError] = useState(false);
    const Icon = service.icon;

    return (
        <div className="group relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            {/* Service Image */}
            <div className="relative h-48 w-full overflow-hidden bg-gray-50">
                {!imageError ? (
                    <Image
                        src={`/images/services/${service.id}.jpg`}
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

export default function ServicesSection() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <section className="py-14 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 mask-image:linear-gradient(to_bottom,transparent,black,transparent)" />

            <div className="container mx-auto px-4 relative z-10">
                <div
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50/80 backdrop-blur-sm rounded-full mb-4 border border-blue-100/50">
                        <span className="text-xs font-bold text-[#003893] tracking-wide uppercase">Premium Services</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-3 tracking-tight">
                        <span className="text-[#003893]">Our </span>
                        <span className="text-[#DC143C]">Services</span>
                    </h2>
                    <p className="text-base text-gray-500 font-medium max-w-2xl mx-auto">
                        Your gateway to global education.
                    </p>
                </div>

                {/* Grid - Centered 4 items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} service={service} index={index} />
                    ))}
                </div>

                <div
                    className="text-center"
                >
                    <Link href="/services">
                        <button className="group relative px-8 py-3 bg-[#DC143C] text-white font-bold text-base rounded-full shadow-lg">
                            <span className="relative z-10 flex items-center gap-2">
                                View All Services
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
