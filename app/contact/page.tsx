"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { HiLocationMarker, HiPhone, HiMail, HiClock } from "react-icons/hi";
import TalkToExpertButton from "@/components/TalkToExpertButton";

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pt-24">
                {/* Hero Section */}
                <section className="relative pt-20 pb-12 bg-linear-to-br from-[#003893] via-[#0052CC] to-[#DC143C] overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] opacity-50" />
                    <div className="absolute inset-0 bg-[url('/images/world-map.svg')] opacity-10 bg-center bg-no-repeat bg-cover" />

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center max-w-2xl mx-auto"
                        >
                            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4 border border-white/30">
                                <span className="text-white">📞 24/7 Support • Visit Us</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                                <span className="text-white">Contact </span>
                                <span className="text-white/90">Us</span>
                            </h1>
                            <p className="text-lg text-white/90 leading-relaxed">
                                Have questions about your study abroad journey? We're here to help you every step of the way.
                            </p>
                        </motion.div>

                        {/* Talk to Expert Button */}
                        <TalkToExpertButton className="hidden md:block absolute right-4 bottom-0 translate-y-1/2" />
                    </div>
                </section>

                <section className="py-12 bg-gray-50">
                    <div className="container mx-auto px-4">

                        {/* Horizontal Contact Info Cards */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-blue-50 rounded-2xl p-6 shadow-[0_8px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_50px_rgba(59,130,246,0.6)] border-2 border-blue-200 hover:border-blue-400 flex flex-col items-center text-center hover:-translate-y-3 hover:scale-105 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white mb-4 shadow-lg">
                                    <HiLocationMarker className="text-2xl" />
                                </div>
                                <p className="font-bold text-blue-900 mb-2 text-lg">Visit Us</p>
                                <p className="text-gray-700 text-sm font-medium">
                                    New Baneshwor<br />
                                    Kathmandu, Nepal
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-purple-50 rounded-2xl p-6 shadow-[0_8px_30px_rgba(168,85,247,0.3)] hover:shadow-[0_12px_50px_rgba(168,85,247,0.6)] border-2 border-purple-200 hover:border-purple-400 flex flex-col items-center text-center hover:-translate-y-3 hover:scale-105 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center text-white mb-4 shadow-lg">
                                    <HiPhone className="text-2xl" />
                                </div>
                                <h3 className="font-bold text-purple-900 mb-2">Call Us</h3>
                                <div className="text-gray-700 text-sm font-medium">
                                    <a href="tel:+9779852062628" className="block hover:text-purple-800 transition-colors">+977 9852062628</a>
                                    <a href="tel:+9779814362628" className="block hover:text-purple-800 transition-colors">+977 9814362628</a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-green-50 rounded-2xl p-6 shadow-[0_8px_30px_rgba(34,197,94,0.3)] hover:shadow-[0_12px_50px_rgba(34,197,94,0.6)] border-2 border-green-200 hover:border-green-400 flex flex-col items-center text-center hover:-translate-y-3 hover:scale-105 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white mb-4 shadow-lg">
                                    <HiMail className="text-2xl" />
                                </div>
                                <h3 className="font-bold text-green-900 mb-2">Email Us</h3>
                                <p className="text-gray-700 text-sm font-medium">contact@pinnaclenepal.com</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-orange-50 rounded-2xl p-6 shadow-[0_8px_30px_rgba(249,115,22,0.3)] hover:shadow-[0_12px_50px_rgba(249,115,22,0.6)] border-2 border-orange-200 hover:border-orange-400 flex flex-col items-center text-center hover:-translate-y-3 hover:scale-105 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white mb-4 shadow-lg">
                                    <HiClock className="text-2xl" />
                                </div>
                                <h3 className="font-bold text-orange-900 mb-2">Office Hours</h3>
                                <div className="text-sm text-gray-700 font-medium space-y-1">
                                    <p>Sunday - Friday</p>
                                    <p className="font-bold">9:00 AM - 6:00 PM</p>
                                    <p className="text-red-600 font-semibold">Saturday: Closed</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact Form Section */}
                        <div className="max-w-5xl mx-auto">
                            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
