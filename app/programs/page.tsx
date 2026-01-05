"use client";

import { motion } from "framer-motion";
import { courses } from "@/lib/data/courses";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgramCard from "@/components/ProgramCard";
import SectionWrapper from "@/components/SectionWrapper";
import TalkToExpertButton from "@/components/TalkToExpertButton";

export default function ProgramsPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50 pt-24">
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
                                <span className="text-white">🎓 Undergraduate • Postgraduate • Diploma</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                                <span className="text-white">Our </span>
                                <span className="text-white/90">Programs</span>
                            </h1>
                            <p className="text-xl text-white/90 leading-relaxed">
                                Explore our comprehensive range of study programs designed to help you succeed globally.
                            </p>
                        </motion.div>

                        {/* Talk to Expert Button */}
                        <TalkToExpertButton className="hidden md:block absolute right-4 bottom-0 translate-y-1/2" />
                    </div>
                </section>

                {/* Programs Grid */}
                <SectionWrapper>
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {courses.map((course, index) => (
                                <motion.div
                                    key={course.id}
                                    id={course.id}
                                    className="scroll-mt-24"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <ProgramCard
                                        title={course.title}
                                        image={course.image}
                                        description={course.description || "Comprehensive program designed for international students."}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </SectionWrapper>

                {/* CTA Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">Not sure what to choose?</h2>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Our expert counselors can help you find the perfect program based on your interests and career goals.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-4 bg-[#DC143C] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-[#B01030] transition-all transform hover:-translate-y-1"
                        >
                            Get Free Counseling
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
