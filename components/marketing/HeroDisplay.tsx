'use client';

import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Optimization Note for User:
// By using local paths (e.g., '/1.jpeg'), Vercel automatically serves these through its Global Edge Network (CDN).
// This handles 1000+ concurrent users effortlessly because the "server" doesn't send the file;
// a server closest to the user (e.g., Mumbai, London, NY) sends it.
// This is the fastest and most scalable way to host static assets.

const SLIDES = [
    {
        id: 1,
        image: '/logo.jpg',
        title: "Best Consultancy for",
        highlight: "Abroad Studies",
        desc: "Pinnacle Nepal guides you to top universities in USA, UK, Canada, and Australia."
    },
    {
        id: 2,
        image: '/2.jpeg',
        title: "Achieve Your Dream",
        highlight: "With 98% Success",
        desc: "Our expert counselors ensure your visa application is flawless and successful."
    },
    {
        id: 3,
        image: '/3.jpeg',
        title: "Global Opportunities",
        highlight: "Wait For You",
        desc: "Connect with world-class institutions and secure your future career today."
    },
    {
        id: 4,
        image: '/4.jpeg',
        title: "Test Preparation",
        highlight: "Classes Available",
        desc: "IELTS, PTE, and SAT preparation with experienced instructors and proven results."
    },
    { id: 5, image: '/5.jpeg', title: "Excellence in", highlight: "Education", desc: "Join thousands of successful students who trusted Pinnacle Nepal." },
    { id: 6, image: '/6.jpeg', title: "Your Gateway to", highlight: "The World", desc: "We provide comprehensive support from application to departure." },
    { id: 7, image: '/7.jpeg', title: "Start Your", highlight: "Journey", desc: "Personalized guidance for every step of your study abroad experience." },
    { id: 8, image: '/8.jpeg', title: "Quality", highlight: "Service", desc: "Dedicated team committed to your academic and professional goals." },
    { id: 10, image: '/10.jpeg', title: "Unlock Your", highlight: "Potential", desc: "Discover scholarships and financial aid options tailored for you." },
    { id: 14, image: '/14.jpeg', title: "Trusted", highlight: "Partner", desc: "Building bridges to international education for over a decade." },
    { id: 20, image: '/20.jpeg', title: "Prepare for", highlight: "Success", desc: "Comprehensive pre-departure briefings and post-arrival support." },
    { id: 24, image: '/24.jpeg', title: "Welcome to", highlight: "Pinnacle", desc: "Your future begins here. Apply now for the upcoming intake." },
];

export default function HeroDisplay() {
    const [current, setCurrent] = useState(0);

    // Auto-rotate images every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const activeSlide = SLIDES[current];
    const nextSlide = SLIDES[(current + 1) % SLIDES.length];

    // Text Animation Variants
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
    };

    return (
        <section className="relative h-screen min-h-[500px] md:min-h-[600px] flex items-end justify-start overflow-hidden bg-slate-900 pb-24">
            {/* 
                PERFORMANCE TRICK: Preload the NEXT image.
                We render it invisibly so the browser downloads it NOW.
                When the slide changes in 3s, it's already in the cache -> Instant Swap.
            */}
            <div className="absolute opacity-0 pointer-events-none w-1 h-1 overflow-hidden">
                <Image
                    src={nextSlide.image}
                    alt="Preload"
                    width={1920}
                    height={1080}
                    priority={true}
                    quality={75} // Lower quality for preload to verify connection, reliable cache priming
                />
            </div>

            {/* Background Image Slider */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={activeSlide.id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={activeSlide.image}
                        alt="Hero Background"
                        fill
                        className="object-cover opacity-100"
                        priority={true} // Always priority for the hero background
                        quality={75} // Standard quality, widely supported and efficient
                        sizes="100vw"
                    />
                    {/* Clean Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                </motion.div>
            </AnimatePresence>

            <div className="container relative z-20 px-6">
                <div className="max-w-3xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={{
                                visible: { transition: { staggerChildren: 0.1 } }
                            }}
                        >
                            <motion.div variants={textVariants}>
                                <div className="inline-block bg-pinnacle-orange text-white text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4 rounded-sm shadow-md">
                                    Welcome to Pinnacle Nepal
                                </div>
                            </motion.div>

                            <motion.h1
                                variants={textVariants}
                                className="text-3xl sm:text-5xl md:text-7xl font-bold font-heading text-white mb-4 leading-tight drop-shadow-lg"
                            >
                                {activeSlide.title} <br />
                                <span className="text-pinnacle-orange">{activeSlide.highlight}</span>
                            </motion.h1>

                            <motion.p
                                variants={textVariants}
                                className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed font-medium max-w-xl drop-shadow-md"
                            >
                                {activeSlide.desc}
                            </motion.p>

                            <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-4">
                                <Button className="h-14 px-8 text-base bg-red-600 hover:bg-red-700 text-white font-heading font-bold uppercase rounded-sm transition-transform active:scale-95 shadow-xl border border-red-500/20">
                                    Apply Now
                                </Button>
                                <Button variant="outline" className="h-14 px-8 text-base border-white text-white hover:bg-white hover:text-slate-900 font-heading font-bold uppercase rounded-sm backdrop-blur-sm bg-white/5">
                                    Contact Us <ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 right-10 flex gap-2 z-20">
                {SLIDES.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`transition-all duration-300 p-2 ${idx === current
                            ? "bg-white/30"
                            : "bg-transparent"
                            } rounded-full min-w-[48px] min-h-[48px] flex items-center justify-center`}
                        aria-label={`Go to slide ${idx + 1}`}
                    >
                        <span className={`block ${idx === current
                            ? "bg-white w-6 h-2"
                            : "bg-white/50 hover:bg-white/80 w-2 h-2"
                            } rounded-full transition-all`} />
                    </button>
                ))}
            </div>

            {/* Decorative Bottom Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-pinnacle-orange to-red-600 z-20"></div>
        </section>
    );
}
