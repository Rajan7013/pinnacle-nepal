import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: "Blog - Study Abroad Tips & Guides | Pinnacle Nepal",
    description: "Read expert articles about studying abroad, MBBS admissions, university guides, visa tips, and student success stories from Pinnacle Nepal.",
    keywords: "study abroad blog, MBBS tips, university guides, student visa Nepal, education articles",
    openGraph: {
        title: "Blog - Study Abroad Tips & Guides | Pinnacle Nepal",
        description: "Expert articles about studying abroad from Nepal's leading educational consultancy.",
        url: "https://www.pinnaclenepal.org/blog",
    },
    alternates: {
        canonical: "https://www.pinnaclenepal.org/blog",
    },
};

// Blog posts data
const blogPosts = [
    {
        slug: "complete-guide-mbbs-india-2026",
        title: "Complete Guide to Studying MBBS in India from Nepal 2026",
        excerpt: "Everything you need to know about pursuing MBBS in India - admission process, top colleges, fees, eligibility, and NEET requirements for Nepalese students.",
        date: "2026-01-12",
        author: "Pinnacle Nepal Team",
        category: "MBBS Abroad",
        readTime: "8 min read",
        image: "/images/blog/mbbs-india.jpg",
    },
    {
        slug: "top-educational-consultancies-nepal",
        title: "Top 10 Educational Consultancies in Nepal - How to Choose the Right One",
        excerpt: "Comprehensive guide to selecting the best educational consultancy in Nepal. Learn what to look for, red flags to avoid, and how Pinnacle Nepal stands out.",
        date: "2026-01-11",
        author: "Pinnacle Nepal Team",
        category: "Study Abroad Tips",
        readTime: "6 min read",
        image: "/images/blog/consultancy-guide.jpg",
    },
    {
        slug: "study-abroad-nepal-complete-guide",
        title: "Study Abroad from Nepal: Complete Guide for Nepalese Students 2026",
        excerpt: "Your ultimate guide to studying abroad from Nepal. Explore destinations, courses, scholarships, visa process, and how to choose the right country for your education.",
        date: "2026-01-10",
        author: "Pinnacle Nepal Team",
        category: "Study Abroad",
        readTime: "10 min read",
        image: "/images/blog/study-abroad-guide.jpg",
    },
];

export default function BlogPage() {
    return (
        <>
            <Header />

            <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-[#003893] to-[#0052CC] text-white py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-black mb-6">
                                Study Abroad <span className="text-[#FFD700]">Blog</span>
                            </h1>
                            <p className="text-xl text-gray-100">
                                Expert insights, guides, and tips for Nepalese students planning to study abroad
                            </p>
                        </div>
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.map((post) => (
                                <article
                                    key={post.slug}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    {/* Image Placeholder */}
                                    <div className="h-48 bg-gradient-to-br from-[#003893] to-[#DC143C] flex items-center justify-center">
                                        <span className="text-white text-6xl">📚</span>
                                    </div>

                                    <div className="p-6">
                                        {/* Category Badge */}
                                        <span className="inline-block bg-[#003893] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                                            {post.category}
                                        </span>

                                        {/* Title */}
                                        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                            {post.title}
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
                                            className="inline-flex items-center gap-2 text-[#003893] font-semibold hover:text-[#DC143C] transition-colors"
                                        >
                                            Read More
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-r from-[#003893] to-[#DC143C] text-white py-16">
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
