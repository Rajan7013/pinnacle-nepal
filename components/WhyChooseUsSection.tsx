"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { HiCheckCircle, HiShieldCheck, HiUserGroup, HiAcademicCap } from "react-icons/hi";

const features = [
    {
        title: "15+ Years Experience",
        desc: "Trusted by thousands of students since 2008.",
        icon: HiShieldCheck,
        color: "text-blue-600",
        bg: "bg-blue-100"
    },
    {
        title: "500+ Students Placed",
        desc: "Successful admissions in top global universities.",
        icon: HiUserGroup,
        color: "text-purple-600",
        bg: "bg-purple-100"
    },
    {
        title: "50+ Partner Unis",
        desc: "Direct partnerships with world-class institutions.",
        icon: HiAcademicCap,
        color: "text-pink-600",
        bg: "bg-pink-100"
    },
    {
        title: "98% Visa Success",
        desc: "Expert documentation and interview preparation.",
        icon: HiCheckCircle,
        color: "text-emerald-600",
        bg: "bg-emerald-100"
    },
];

export default function WhyChooseUsSection() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <section className="py-24 bg-white relative overflow-hidden" id="why-us">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-gray-50 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-block px-4 py-2 bg-red-50 text-[#DC143C] font-bold rounded-full text-xs mb-6 uppercase tracking-wider">
                            Why Us?
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                            <span className="text-gray-900">We Don't Just </span>
                            <span className="text-[#003893]">Guide, We Build </span>
                            <span className="text-[#DC143C]">Careers.</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            At Pinnacle Nepal, we believe in a personalized approach. Your dreams are unique, and our strategy for you needs to be too.
                        </p>

                        <button className="px-8 py-4 bg-[#003893] text-white font-bold rounded-xl hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300">
                            Meet Our Counselors
                        </button>
                    </motion.div>

                    {/* Features Grid */}
                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false, margin: "-50px" }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                                >
                                    <div className={`w-12 h-12 ${feature.bg} ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                                    <p className="text-sm text-gray-500">{feature.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
