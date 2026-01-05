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
                                <span className="text-white">📞 24/7 Support • Visit Us</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                                <span className="text-white">Contact </span>
                                <span className="text-white/90">Us</span>
                            </h1>
                            <p className="text-xl text-white/90 leading-relaxed">
                                Have questions about your study abroad journey? We're here to help you every step of the way.
                            </p>
                        </motion.div>

                        {/* Talk to Expert Button */}
                        <TalkToExpertButton className="hidden md:block absolute right-4 bottom-0 translate-y-1/2" />
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">

                        {/* Horizontal Contact Info Cards */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-blue-50 rounded-2xl p-6 shadow-lg border border-blue-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300"
                            >
                                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-blue-600 mb-4 shadow-sm">
                                    <HiLocationMarker className="text-2xl" />
                                </div>
                                <p className="font-bold text-blue-900 mb-2 text-lg">Visit Class</p>
                                <p className="text-blue-600 text-sm font-medium">
                                    Pinnacle Nepal, Kathmandu, Nepal<br />
                                    Thamel, Ward No. 26
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-blue-50 rounded-2xl p-6 shadow-lg border border-blue-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300"
                            >
                                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-blue-600 mb-4 shadow-sm">
                                    <HiPhone className="text-2xl" />
                                </div>
                                <h3 className="font-bold text-blue-900 mb-2">Call Us</h3>
                                <p className="text-blue-600 text-sm font-medium">+91 9550560184</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-blue-50 rounded-2xl p-6 shadow-lg border border-blue-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300"
                            >
                                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-blue-600 mb-4 shadow-sm">
                                    <HiMail className="text-2xl" />
                                </div>
                                <h3 className="font-bold text-blue-900 mb-2">Email Us</h3>
                                <p className="text-blue-600 text-sm font-medium">contact@pinnaclenepal.com</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-blue-50 rounded-2xl p-6 shadow-lg border border-blue-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300"
                            >
                                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-blue-600 mb-4 shadow-sm">
                                    <HiClock className="text-2xl" />
                                </div>
                                <h3 className="font-bold text-blue-900 mb-2">Office Hours</h3>
                                <div className="text-sm text-blue-600 font-medium">
                                    <p>Mon-Fri: 9am - 6pm</p>
                                    <p>Sat: 10am - 4pm, Sun: Closed</p>
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
