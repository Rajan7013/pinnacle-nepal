"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { HiStar } from "react-icons/hi";
import Image from "next/image";

const testimonials = [
    {
        name: 'Priya Sharma',
        university: 'DePaul University, USA',
        course: 'MSc Computer Science',
        year: '2023',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
        quote: 'Pinnacle Nepal made my dream of studying at DePaul a reality. Their guidance throughout the application and visa process was exceptional. I couldn\'t have done it without them!',
        rating: 5,
    },
    {
        name: 'Rajesh Thapa',
        university: 'University of Regina, Canada',
        course: 'MS Engineering',
        year: '2022',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
        quote: 'The visa process seemed daunting, but the team at Pinnacle handled everything perfectly. Their expertise and attention to detail are unmatched. Highly recommended!',
        rating: 5,
    },
    {
        name: 'Anita Gurung',
        university: 'University of Tasmania (UTAS), Australia',
        course: 'MBA',
        year: '2023',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
        quote: 'From university selection to arrival in Australia, they were with me every step. The pre-departure briefing was especially helpful. Thank you Pinnacle Nepal!',
        rating: 5,
    },
    {
        name: 'Sujan Maharjan',
        university: 'University of Edinburgh, UK',
        course: 'Bachelor of Engineering',
        year: '2022',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
        quote: 'The scholarship guidance from Pinnacle helped me secure funding for my studies. Their team went above and beyond to help me achieve my dreams.',
        rating: 5,
    },
    {
        name: 'Sita Rai',
        university: 'LMU Munich, Germany',
        course: 'MS Data Science',
        year: '2023',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
        quote: 'Studying in Germany seemed complicated with the language barrier and visa process, but Pinnacle made it seamless. Now I\'m living my dream in Munich!',
        rating: 5,
    },
    {
        name: 'Bikash Shrestha',
        university: 'University of Southampton, UK',
        course: 'PhD Research',
        year: '2022',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
        quote: 'Getting into a UK university for PhD was my dream. Pinnacle Nepal\'s counselors understood my goals and helped me find the perfect research program.',
        rating: 5,
    },
];

// Testimonial Card Component
const TestimonialCard = ({ testimonial, index }: { testimonial: any; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgba(220,20,60,0.15),0_0_40px_rgba(0,56,147,0.1)] transition-all duration-500 border border-gray-100 relative h-full flex flex-col"
        >
            {/* Rating */}
            <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <HiStar key={i} className="w-5 h-5 fill-[#DC143C] text-[#DC143C]" />
                ))}
            </div>

            {/* Quote */}
            <p className="text-gray-700 mb-6 italic leading-relaxed flex-grow">
                "{testimonial.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#DC143C]">
                    <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                    />
                </div>
                <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.university}</p>
                    <p className="text-xs text-gray-500">{testimonial.course} • {testimonial.year}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default function TestimonialsSection() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-4 py-2 bg-blue-50 rounded-full text-sm font-bold mb-4 border border-blue-100">
                        <span className="text-[#003893]">Success Stories</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        <span className="text-gray-900">What Our </span>
                        <span className="text-[#DC143C]">Students Say</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Real stories from students who achieved their dreams with our guidance.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
