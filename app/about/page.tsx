"use client";

import { motion, useInView } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";
import { HiCheckCircle, HiUserGroup, HiLightBulb, HiTrendingUp, HiGlobeAlt, HiAcademicCap, HiSparkles } from "react-icons/hi";
import TalkToExpertButton from "@/components/TalkToExpertButton";
import { useEffect, useState, useRef } from "react";

const stats = [
    { label: "Years Experience", value: 10, suffix: "+", icon: HiTrendingUp },
    { label: "Students Placed", value: 3000, suffix: "+", icon: HiUserGroup },
    { label: "Top Colleges", value: 100, suffix: "+", icon: HiAcademicCap },
    { label: "Visa Success", value: 0, suffix: "High", icon: HiCheckCircle },
];

const values = [
    {
        icon: HiCheckCircle,
        title: "Excellence",
        description: "We maintain the highest standards in every aspect of our service delivery.",
        gradient: "from-blue-500 via-blue-400 to-cyan-500",
        bgGradient: "from-blue-50 to-cyan-50",
    },
    {
        icon: HiUserGroup,
        title: "Student-Centric",
        description: "Your dreams and aspirations are at the heart of everything we do.",
        gradient: "from-purple-500 via-purple-400 to-pink-500",
        bgGradient: "from-purple-50 to-pink-50",
    },
    {
        icon: HiLightBulb,
        title: "Innovation",
        description: "We leverage cutting-edge technology to provide the best guidance.",
        gradient: "from-orange-500 via-orange-400 to-red-500",
        bgGradient: "from-orange-50 to-red-50",
    },
    {
        icon: HiTrendingUp,
        title: "Integrity",
        description: "Transparent, honest, and ethical practices guide all our interactions.",
        gradient: "from-green-500 via-green-400 to-teal-500",
        bgGradient: "from-green-50 to-teal-50",
    },
];

const milestones = [
    { year: "2016", event: "Founded with a vision to transform international education", icon: "🚀" },
    { year: "2018", event: "Expanded to 10+ countries with 100+ partner universities", icon: "🌍" },
    { year: "2020", event: "Reached milestone of 5,000 successful student placements", icon: "🎓" },
    { year: "2022", event: "Launched AI-powered university matching system", icon: "🤖" },
    { year: "2024", event: "Celebrated 10,000+ students studying abroad", icon: "🎉" },
];

function AnimatedCounter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const [mounted, setMounted] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!isInView || !mounted) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, end, duration, mounted]);

    // If value is 0, just show the suffix text (for "High" visa success)
    if (end === 0) {
        return <span ref={ref}>{suffix}</span>;
    }

    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="bg-linear-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
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
                            <motion.div
                                className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6 border border-white/30"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <span className="text-white">🌟 Your Trusted Education Partner Since 2016</span>
                            </motion.div>
                            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                                <span className="text-white">About </span>
                                <span className="text-white/90">Pinnacle Nepal</span>
                            </h1>
                            <p className="text-xl text-white/90 leading-relaxed">
                                Empowering students to achieve their global education dreams through personalized guidance, expert counseling, and unwavering support.
                            </p>
                        </motion.div>

                        <TalkToExpertButton className="hidden md:block absolute right-4 bottom-0 translate-y-1/2" />
                    </div>
                </section>

                <section className="py-16 -mt-10 relative z-10">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, type: "spring" }}
                                        whileHover={{ y: -5, scale: 1.05 }}
                                        className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100"
                                    >
                                        <motion.div
                                            className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-full mb-4"
                                            animate={{ rotate: [0, 360] }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        >
                                            <Icon className="text-3xl text-white" />
                                        </motion.div>
                                        <h3 className="text-3xl md:text-4xl font-black bg-linear-to-r from-[#003893] to-[#DC143C] bg-clip-text text-transparent mb-2">
                                            <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                        </h3>
                                        <p className="text-gray-600 font-semibold text-sm">{stat.label}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <SectionWrapper>
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-linear-to-br from-white to-blue-50 rounded-3xl p-8 shadow-xl border border-blue-100"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                                        <HiSparkles className="text-lg" />
                                        Our Story
                                    </div>
                                    <h2 className="text-4xl font-black bg-linear-to-r from-[#003893] to-[#DC143C] bg-clip-text text-transparent mb-6">
                                        Transforming Dreams Into Reality
                                    </h2>
                                    <div className="space-y-4 text-gray-700 leading-relaxed">
                                        <p>
                                            Founded in 2010, Pinnacle Nepal began with a simple yet powerful mission: to make quality international education accessible to every aspiring student in Nepal.
                                        </p>
                                        <p>
                                            What started as a small consultancy has grown into one of Nepal's most trusted education partners, helping thousands of students realize their dreams of studying abroad.
                                        </p>
                                        <p className="font-semibold text-[#003893]">
                                            Today, we combine traditional counseling expertise with cutting-edge technology to provide personalized guidance that transforms lives and opens doors to global opportunities.
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-600/20 z-10"
                                    whileHover={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6 }}
                                    className="relative w-full h-full"
                                >
                                    <Image
                                        src="/images/about-story.jpg"
                                        alt="Our Story"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </SectionWrapper>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <div className="inline-flex items-center gap-2 bg-linear-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                                <HiSparkles className="text-lg" />
                                What Drives Us
                            </div>
                            <h2 className="text-4xl font-black bg-linear-to-r from-[#003893] to-[#DC143C] bg-clip-text text-transparent mb-4">
                                Our Core Values
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                The principles that guide every decision we make and every service we provide
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => {
                                const Icon = value.icon;
                                return (
                                    <motion.div
                                        key={value.title}
                                        initial={{ opacity: 0, y: 30, rotateY: -20 }}
                                        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, type: "spring" }}
                                        whileHover={{ y: -10, rotateY: 5 }}
                                        className={`bg-linear-to-br ${value.bgGradient} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 backdrop-blur-sm`}
                                    >
                                        <motion.div
                                            className={`inline-flex items-center justify-center w-16 h-16 bg-linear-to-br ${value.gradient} rounded-xl mb-4 shadow-lg`}
                                            animate={{
                                                boxShadow: [
                                                    "0 10px 30px rgba(0,0,0,0.1)",
                                                    "0 15px 40px rgba(0,0,0,0.2)",
                                                    "0 10px 30px rgba(0,0,0,0.1)"
                                                ]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <Icon className="text-3xl text-white" />
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <SectionWrapper>
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <div className="inline-flex items-center gap-2 bg-linear-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                                <HiSparkles className="text-lg" />
                                Our Journey
                            </div>
                            <h2 className="text-4xl font-black bg-linear-to-r from-[#003893] to-[#DC143C] bg-clip-text text-transparent mb-4">
                                Milestones That Matter
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Key moments that shaped our path to becoming Nepal's leading education consultancy
                            </p>
                        </motion.div>

                        <div className="max-w-4xl mx-auto relative">
                            <div className="absolute left-14 top-0 bottom-0 w-1 bg-linear-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />

                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={milestone.year}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, type: "spring" }}
                                    className="flex items-center gap-8 mb-12 last:mb-0 relative"
                                >
                                    <div className="shrink-0 w-24 text-right">
                                        <motion.span
                                            className="text-2xl font-black bg-linear-to-r from-[#DC143C] to-purple-600 bg-clip-text text-transparent"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {milestone.year}
                                        </motion.span>
                                    </div>

                                    <motion.div
                                        className="shrink-0 w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-full relative flex items-center justify-center text-2xl shadow-lg z-10"
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        transition={{ type: "spring" }}
                                    >
                                        {milestone.icon}
                                        <motion.div
                                            className="absolute inset-0 bg-blue-500/20 rounded-full"
                                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    </motion.div>

                                    <motion.div
                                        className="flex-1 bg-linear-to-br from-white to-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-purple-100"
                                        whileHover={{ x: 10 }}
                                    >
                                        <p className="text-gray-700 font-semibold">{milestone.event}</p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </SectionWrapper>

                <section className="py-20 bg-linear-to-br from-[#003893] via-[#0052CC] to-[#DC143C] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/world-map.svg')] opacity-10 bg-center bg-no-repeat bg-cover" />

                    <div className="container mx-auto px-4 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <motion.h2
                                className="text-4xl font-black text-white mb-6"
                                animate={{ scale: [1, 1.02, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                Ready to Start Your Journey?
                            </motion.h2>
                            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                Join thousands of successful students who trusted us with their international education dreams.
                            </p>
                            <motion.a
                                href="/contact"
                                className="inline-block px-8 py-4 bg-white text-[#003893] font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get Free Consultation
                            </motion.a>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
