"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper, { SectionHeader } from "@/components/SectionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import TalkToExpertButton from "@/components/TalkToExpertButton";

// Generate array of 13 hero images
const galleryImages = Array.from({ length: 13 }, (_, i) => ({
    id: i + 1,
    src: `/images/hero/hero-${i + 1}.jpg`,
    alt: `Pinnacle Nepal Gallery Image ${i + 1}`
}));

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#003893] via-[#0052CC] to-[#DC143C] overflow-hidden">
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
                            <span className="text-white">📸 Campus Life • Events • Success Stories</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                            <span className="text-white">Our </span>
                            <span className="text-white/90">Gallery</span>
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Glimpses of our events, success stories, and global education journey.
                        </p>
                    </motion.div>

                    {/* Talk to Expert Button */}
                    <TalkToExpertButton className="hidden md:block absolute right-4 bottom-0 translate-y-1/2" />
                </div>
            </section>

            {/* Gallery Grid */}
            <SectionWrapper>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {galleryImages.map((image) => (
                            <motion.div
                                key={image.id}
                                variants={fadeInUp}
                                className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="relative aspect-video w-full">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {/* Overlay on hover - purely visual */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </SectionWrapper>

            <Footer />
        </main>
    );
}
