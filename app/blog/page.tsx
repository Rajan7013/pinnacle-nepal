"use client";

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/data/blogData';
import TalkToExpertButton from '@/components/TalkToExpertButton';

// Show only completed articles (including new Pinnacle Nepal article)
const completedBlogPosts = blogPosts.slice(0, 4);

export default function BlogPage() {
    return (
        <>
            <Header />

            <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                {/* Hero Section */}
                <section className="relative pt-20 pb-24 bg-linear-to-br from-[#003893] via-[#0052CC] to-[#DC143C] overflow-hidden">
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
                                animate={{
                                    y: [0, -8, 0],
                                    x: [0, 5, -5, 0],
                                    rotate: [0, 2, -2, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4 mt-2 border border-white/30"
                            >
                                <span className="text-white">📚 Expert Insights • Study Abroad Tips</span>
                            </motion.div>
                            <h1 className="text-5xl md:text-6xl font-black mb-3 leading-tight">
                                <span className="text-white">Study Abroad </span>
                                <span className="text-white/90">Blog</span>
                            </h1>
                            <p className="text-xl text-white/90 leading-relaxed">
                                Expert insights, guides, and tips for Nepalese students planning to study abroad
                            </p>
                        </motion.div>

                        {/* Talk to Expert Button */}
                        <TalkToExpertButton className="hidden md:block absolute right-4 bottom-0 translate-y-full" />
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="py-4 bg-blue-50 border-t-2 border-blue-200">
                    <div className="container mx-auto px-1 sm:px-2 lg:px-3">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {completedBlogPosts.map((post, index) => {
                                // Define different glow colors for each card
                                const glowColors = [
                                    'shadow-[0_8px_30px_rgba(59,130,246,0.4)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)]', // Blue
                                    'shadow-[0_8px_30px_rgba(168,85,247,0.4)] hover:shadow-[0_8px_40px_rgba(168,85,247,0.6)]', // Purple
                                    'shadow-[0_8px_30px_rgba(34,197,94,0.4)] hover:shadow-[0_8px_40px_rgba(34,197,94,0.6)]', // Green
                                ];

                                return (
                                    <article
                                        key={post.slug}
                                        className={`group bg-white rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 relative
                                        ${glowColors[index % glowColors.length]}
                                        border-2 border-gray-100 hover:border-gray-200`}
                                    >
                                        {/* Image Placeholder with glow */}
                                        <div className="h-32 bg-linear-to-br from-[#003893] to-[#DC143C] flex items-center justify-center relative overflow-hidden">
                                            <div className="absolute inset-0 bg-linear-to-br from-[#003893]/20 to-[#DC143C]/20 group-hover:scale-110 transition-transform duration-500" />
                                            <span className="text-white text-3xl relative z-10 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300">📚</span>
                                        </div>


                                        <div className="p-5 relative z-10">
                                            {/* Category Badge */}
                                            <span className="inline-block bg-[#003893] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 group-hover:bg-[#DC143C] group-hover:shadow-[0_0_10px_rgba(220,20,60,0.5)] transition-all duration-300">
                                                {post.category}
                                            </span>

                                            {/* Title - Use short cardTitle for display */}
                                            <h2 className="text-base font-bold text-gray-900 mb-3 min-h-[4rem] leading-tight group-hover:text-[#003893] transition-colors duration-300">
                                                {post.cardTitle || post.title}
                                            </h2>

                                            {/* Excerpt */}
                                            <p className="text-gray-600 mb-4 line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            {/* Meta Info */}
                                            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                                </div>
                                                <span>{post.readTime}</span>
                                            </div>

                                            {/* Read More Link */}
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="inline-flex items-center gap-2 text-[#003893] font-semibold group-hover:text-[#DC143C] transition-colors duration-300"
                                            >
                                                Read More
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                                            </Link>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-linear-to-r from-[#003893] to-[#DC143C] text-white py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-black mb-4">
                            Ready to Start Your Study Abroad Journey?
                        </h2>
                        <p className="text-xl mb-8 text-gray-100">
                            Get free consultation from Nepal's leading educational consultancy
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-[#003893] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                        >
                            Contact Us Today
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
