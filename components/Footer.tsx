"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
];

const studyDestinations = [
    { name: "India", href: "/destinations?country=india" },
    { name: "USA", href: "/destinations?country=usa" },
    { name: "UK", href: "/destinations?country=uk" },
    { name: "Canada", href: "/destinations?country=canada" },
    { name: "Australia", href: "/destinations?country=australia" },
    { name: "Europe", href: "/destinations?country=europe" },
];

const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/share/1ATaC3LMfB/", label: "Facebook" },
    { icon: FaInstagram, href: "https://www.instagram.com/pinnaclenepal?igsh=d2h0eGoyeGJubmxl", label: "Instagram" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/pinnacle-nepal-a847153a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { icon: FaYoutube, href: "https://www.youtube.com/@Pinaclenepal", label: "YouTube" },
    { icon: BsTwitterX, href: "https://x.com/PinacleNepal", label: "X (Twitter)" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-linear-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 animate-pulse" />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {/* Company Info */}
                    <motion.div variants={fadeInUp} className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/logo.jpg"
                                alt="Pinnacle Nepal Logo"
                                width={48}
                                height={48}
                                className="rounded-lg object-contain"
                            />
                            <span className="text-2xl font-black">Pinnacle Nepal</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Your trusted partner in making global education dreams come true.
                            Expert guidance for study abroad aspirations.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-linear-to-r hover:from-blue-400 hover:to-purple-400 flex items-center justify-center backdrop-blur-sm transition-smooth"
                                    aria-label={social.label}
                                >
                                    <social.icon className="text-lg" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={fadeInUp}>
                        <h3 className="text-xl font-bold mb-4 gradient-text">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white hover:translate-x-2 inline-block transition-smooth group"
                                    >
                                        <span className="inline-block mr-2 text-blue-400 group-hover:text-purple-400">→</span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Study Destinations */}
                    <motion.div variants={fadeInUp}>
                        <h3 className="text-xl font-bold mb-4 gradient-text">Study Destinations</h3>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {studyDestinations.map((dest) => (
                                <li key={dest.name}>
                                    <Link
                                        href={dest.href}
                                        className="text-gray-300 hover:text-white hover:translate-x-2 inline-block transition-smooth group"
                                    >
                                        <span className="inline-block mr-2 text-blue-400 group-hover:text-purple-400">→</span>
                                        {dest.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={fadeInUp}>
                        <h3 className="text-xl font-bold mb-4 gradient-text">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <HiLocationMarker className="text-2xl text-blue-400 shrink-0 mt-1" />
                                <span className="text-gray-300">
                                    Kathmandu, Nepal<br />
                                    Thamel, Ward No. 26
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <HiPhone className="text-2xl text-purple-400 shrink-0" />
                                <a href="tel:+919550560184" className="text-gray-300 hover:text-white transition-smooth">
                                    +91 9550560184
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <HiMail className="text-2xl text-pink-400 shrink-0" />
                                <a href="mailto:contact@pinnaclenepal.com" className="text-gray-300 hover:text-white transition-smooth">
                                    contact@pinnaclenepal.com
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 pt-6 border-t border-white/10 text-center"
                >
                    <p className="text-gray-400">
                        © {currentYear} <span className="font-semibold text-white">Pinnacle Nepal</span>.
                        All rights reserved. | Designed with ❤️ for your success
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
