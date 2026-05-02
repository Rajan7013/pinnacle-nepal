'use client';

import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const SLIDES = [{
    id: 0,
    title: "Welcome to Pinnacle Nepal",
    highlight: "Your Gateway to Global Education",
    desc: "Pinnacle Nepal guides you to top universities in USA, UK, Canada, and Australia."
}];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);
    const activeSlide = SLIDES[current];

    // Text Animation Variants
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
    };

    return (
        <section className="relative h-screen min-h-[600px] flex items-end justify-start overflow-hidden bg-slate-900 pb-24">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-800 to-blue-900" />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>

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

            {/* Decorative Bottom Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-pinnacle-orange to-red-600 z-20"></div>
        </section>
    );
}
