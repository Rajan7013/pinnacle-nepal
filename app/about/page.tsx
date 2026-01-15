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
    { label: "Countries Covered", value: 15, suffix: "+", icon: HiGlobeAlt },
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
    { year: "2016", event: "Founded with a vision to transform international education for Nepali students", icon: "🚀" },
    { year: "2017", event: "Partnered with 25+ universities across UK, Australia, and USA", icon: "🤝" },
    { year: "2018", event: "Achieved 500+ successful student placements with 95% visa success rate", icon: "🎓" },
    { year: "2019", event: "Expanded to 50+ partner universities across 8 countries", icon: "🌍" },
    { year: "2020", event: "Launched virtual counseling during pandemic, serving 1,000+ students remotely", icon: "💻" },
    { year: "2021", event: "Reached 1,500+ students placed with 98% visa approval rate", icon: "✈️" },
    { year: "2022", event: "Expanded to 100+ top colleges globally, introduced AI-powered course matching", icon: "🤖" },
    { year: "2023", event: "Celebrated 2,500+ successful placements, opened new counseling center", icon: "🏢" },
    { year: "2024", event: "Achieved 3,000+ students studying abroad across 10+ countries", icon: "🎉" },
    { year: "2025", event: "10 years of excellence - Leading Nepal's international education consultancy", icon: "🏆" },
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
                            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-white/90" suppressHydrationWarning>
                                <a href="mailto:ceo@pinnaclenepal.org" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    ceo@pinnaclenepal.org
                                </a>
                                <span className="hidden sm:inline text-white/50">|</span>
                                <a href="tel:+9779852062628" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    +977 9852062628
                                </a>
                                <span className="hidden sm:inline text-white/50">|</span>
                                <a href="tel:+9779814362628" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    +977 9814362628
                                </a>
                            </div>
                        </motion.div>

                        <TalkToExpertButton className="hidden md:block absolute right-4 bottom-0 translate-y-[calc(50%+2cm)] scale-90" />
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
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ y: -10, scale: 1.05 }}
                                        className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-500 border-4 border-blue-200 hover:border-pink-400 group"
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
                                            Founded in 2016, Pinnacle Nepal began with a vision to transform international education for students across South Asia and Africa. Led by our CEO Vivekanand Adhikari, who brings over 10 years of expertise in international student admissions.
                                        </p>
                                        <p>
                                            What started as a mission to support students from India, Nepal, and Bangladesh has expanded to serve students from Zimbabwe, Zambia, Kenya, Tanzania, Comoros, Ghana, and other emerging regions across Asia, Africa, and the Middle East.
                                        </p>
                                        <p className="font-semibold text-[#003893]">
                                            Today, we partner with 100+ top universities across 15+ countries, offering personalized guidance, transparent admissions processes, and comprehensive support that transforms lives and opens doors to global opportunities.
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative h-96 rounded-3xl overflow-hidden group"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-600/20 z-10 group-hover:opacity-0"
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.div
                                    transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
                                    className="relative w-full h-full border-4 border-blue-400 rounded-3xl overflow-hidden"
                                    animate={{
                                        boxShadow: [
                                            '0 0 20px rgba(59, 130, 246, 0.5)',
                                            '0 0 40px rgba(168, 85, 247, 0.6)',
                                            '0 0 20px rgba(59, 130, 246, 0.5)'
                                        ],
                                        borderColor: [
                                            'rgb(96, 165, 250)',
                                            'rgb(168, 85, 247)',
                                            'rgb(96, 165, 250)'
                                        ]
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: '0 0 60px rgba(236, 72, 153, 0.8)',
                                        borderColor: 'rgb(236, 72, 153)'
                                    }}
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

                {/* CEO Profile Section */}
                <SectionWrapper>
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                                <HiUserGroup className="text-lg" />
                                Leadership
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black bg-linear-to-r from-[#003893] to-[#DC143C] bg-clip-text text-transparent">
                                Meet Our CEO
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                            {/* CEO Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative group"
                            >
                                <motion.div
                                    className="relative w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-400 group-hover:border-purple-500 transition-all duration-500"
                                    animate={{
                                        boxShadow: [
                                            '0 0 20px rgba(59, 130, 246, 0.5)',
                                            '0 0 40px rgba(168, 85, 247, 0.6)',
                                            '0 0 20px rgba(59, 130, 246, 0.5)'
                                        ]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    whileHover={{
                                        boxShadow: '0 0 60px rgba(236, 72, 153, 0.8)',
                                        scale: 1.02
                                    }}
                                >
                                    <Image
                                        src="/images/ceo.jpg"
                                        alt="Vivekanand Adhikari - CEO & Founder"
                                        fill
                                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 500px"
                                        className="object-cover"
                                        priority
                                    />
                                </motion.div>
                                <motion.div
                                    className="absolute -bottom-6 -right-6 bg-linear-to-br from-blue-500 to-purple-600 text-white px-6 py-3 rounded-2xl shadow-xl hidden md:block"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <p className="font-black text-2xl">10+</p>
                                    <p className="text-sm">Years Experience</p>
                                </motion.div>
                            </motion.div>

                            {/* CEO Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="space-y-6"
                            >
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-black text-[#003893] mb-2">
                                        Vivekanand Adhikari
                                    </h3>
                                    <p className="text-xl font-bold text-[#DC143C] mb-4">
                                        Founder & CEO
                                    </p>
                                    <p className="text-gray-600 font-semibold mb-4">
                                        International Students Affairs | International Student Admissions Relations
                                    </p>
                                </div>

                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        With over 10 years of experience in international student admissions, I specialize in driving global outreach, managing multi-country recruitment pipelines, and building strong relationships across South Asia and Africa.
                                    </p>
                                    <p>
                                        Since 2017, I have been supporting and guiding international applicants from India, Bangladesh, Nepal, Zimbabwe, Zambia, Kenya, Tanzania, Comoros, and other emerging regions—ensuring a streamlined, transparent, and student-focused admissions experience.
                                    </p>
                                    <p className="font-semibold text-[#003893]">
                                        "My focus remains on elevating the student experience, developing sustainable recruitment channels, and enabling institutions to expand their international footprint."
                                    </p>
                                </div>

                                {/* Career Highlights */}
                                <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-100">
                                    <h4 className="font-black text-lg text-[#003893] mb-4">Career Highlights</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <HiCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                                            <span className="text-gray-700 text-sm md:text-base"><strong>2026:</strong> CEO of Pinnacle Nepal</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <HiCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                                            <span className="text-gray-700 text-sm md:text-base"><strong>Apr 2022 - 2025:</strong> Senior Associate International Student Affairs, SVCET Official</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <HiCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                                            <span className="text-gray-700 text-sm md:text-base"><strong>Apr 2017 - Apr 2022:</strong> International Relations Manager, Mohan Babu University, Tirupati</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <HiCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                                            <span className="text-gray-700 text-sm md:text-base"><strong>May 2016 - Apr 2017:</strong> Assistant Product Manager, Johnson & Johnson</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <HiGlobeAlt className="text-blue-500 text-xl flex-shrink-0 mt-1" />
                                            <span className="text-gray-700 text-sm md:text-base">Visited 40+ countries across Asia, Africa, and Middle East</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* LinkedIn Button */}
                                <motion.a
                                    href="https://www.linkedin.com/in/vivekanand-adhikari-2a8168199"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077B5] text-white font-bold rounded-lg hover:bg-[#006399] transition-all shadow-lg"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    Connect on LinkedIn
                                </motion.a>
                            </motion.div>
                        </div>
                    </div>
                </SectionWrapper>

                {/* Mission & Vision Section */}
                <section className="py-8 bg-linear-to-br from-gray-50 to-blue-50">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl md:text-5xl font-black bg-linear-to-r from-[#003893] to-[#DC143C] bg-clip-text text-transparent">
                                Our Mission & Vision
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {/* Mission */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-linear-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white shadow-2xl border-4 border-cyan-300 hover:border-yellow-300 transition-all duration-500"
                            >
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                                    <HiLightBulb className="text-4xl text-white" />
                                </div>
                                <h3 className="text-3xl font-black mb-4">Our Mission</h3>
                                <p className="text-white/90 leading-relaxed text-lg">
                                    To provide streamlined, transparent, and student-focused international admissions services that empower students to pursue higher education with clarity and confidence. We are committed to expanding institutional reach, enhancing student engagement, and strengthening cross-border partnerships.
                                </p>
                            </motion.div>

                            {/* Vision */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-linear-to-br from-purple-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl border-4 border-pink-300 hover:border-green-300 transition-all duration-500"
                            >
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                                    <HiGlobeAlt className="text-4xl text-white" />
                                </div>
                                <h3 className="text-3xl font-black mb-4">Our Vision</h3>
                                <p className="text-white/90 leading-relaxed text-lg">
                                    To be the leading international education consultancy connecting students from emerging regions with world-class universities. We envision a future where every student has access to quality education opportunities, supported by sustainable recruitment channels and meaningful global partnerships.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <SectionWrapper>
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                                <HiSparkles className="text-lg" />
                                Why Choose Us
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black bg-linear-to-r from-[#003893] to-[#DC143C] bg-clip-text text-transparent">
                                What Sets Us Apart
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: HiTrendingUp,
                                    title: "10+ Years Experience",
                                    description: "Over a decade of expertise in international student admissions and global recruitment.",
                                    gradient: "from-blue-500 to-cyan-500",
                                    shadow: "shadow-blue-300 hover:shadow-blue-500/80",
                                    glow: "hover:shadow-[0_0_50px_rgba(59,130,246,0.8)]"
                                },
                                {
                                    icon: HiGlobeAlt,
                                    title: "15+ Countries Covered",
                                    description: "Extensive reach across Asia, Africa, and Middle East with deep cultural understanding.",
                                    gradient: "from-purple-500 to-pink-500",
                                    shadow: "shadow-purple-300 hover:shadow-purple-500/80",
                                    glow: "hover:shadow-[0_0_50px_rgba(168,85,247,0.8)]"
                                },
                                {
                                    icon: HiCheckCircle,
                                    title: "Transparent Process",
                                    description: "Clear, honest communication at every step with no hidden costs or surprises.",
                                    gradient: "from-green-500 to-teal-500",
                                    shadow: "shadow-green-300 hover:shadow-green-500/80",
                                    glow: "hover:shadow-[0_0_50px_rgba(34,197,94,0.8)]"
                                },
                                {
                                    icon: HiAcademicCap,
                                    title: "100+ Partner Universities",
                                    description: "Strong relationships with top institutions worldwide offering diverse programs.",
                                    gradient: "from-orange-500 to-red-500",
                                    shadow: "shadow-orange-300 hover:shadow-orange-500/80",
                                    glow: "hover:shadow-[0_0_50px_rgba(249,115,22,0.8)]"
                                },
                                {
                                    icon: HiUserGroup,
                                    title: "Cultural Understanding",
                                    description: "Deep knowledge of regional education systems and cultural nuances for personalized guidance.",
                                    gradient: "from-indigo-500 to-purple-500",
                                    shadow: "shadow-indigo-300 hover:shadow-indigo-500/80",
                                    glow: "hover:shadow-[0_0_50px_rgba(99,102,241,0.8)]"
                                },
                                {
                                    icon: HiSparkles,
                                    title: "High Success Rate",
                                    description: "Proven track record of successful placements with excellent visa approval rates.",
                                    gradient: "from-pink-500 to-rose-500",
                                    shadow: "shadow-pink-300 hover:shadow-pink-500/80",
                                    glow: "hover:shadow-[0_0_50px_rgba(236,72,153,0.8)]"
                                }
                            ].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -15, scale: 1.08 }}
                                        className={`bg-white rounded-2xl p-6 shadow-xl ${item.shadow} ${item.glow} transition-all duration-500 border-2 border-gray-200 hover:border-transparent relative overflow-hidden group`}
                                    >
                                        <motion.div
                                            className={`w-14 h-14 bg-linear-to-br ${item.gradient} rounded-full flex items-center justify-center mb-4`}
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <Icon className="text-3xl text-white" />
                                        </motion.div>
                                        <h3 className="text-xl font-black text-[#003893] mb-3">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </SectionWrapper>

                {/* Our Core Values Section */}
                <SectionWrapper>
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
                                        whileHover={{ y: -15, scale: 1.08 }}
                                        className={`bg-linear-to-br ${value.bgGradient} rounded-2xl p-6 shadow-xl hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-all duration-500 border-4 border-yellow-200 hover:border-orange-400 backdrop-blur-sm`}
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
                </SectionWrapper>

                {/* Our Core Values Section */}
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
                                        whileHover={{ y: -5, scale: 1.03 }}
                                        className="flex-1 bg-white rounded-xl p-6 shadow-lg hover:shadow-[0_0_35px_rgba(59,130,246,0.4)] transition-all duration-500 border-4 border-green-200 hover:border-purple-400"
                                    >
                                        <p className="text-gray-700 font-semibold">{milestone.event}</p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </SectionWrapper>

                <section className="py-12 bg-linear-to-br from-[#003893] via-[#0052CC] to-[#DC143C] relative overflow-hidden">
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
