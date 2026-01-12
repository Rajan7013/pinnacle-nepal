"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi"; // Changed to FiChevronDown to match existing imports styling style
import {
    HiHome,
    HiGlobeAlt,
    HiBriefcase,
    HiAcademicCap,
    HiPhotograph,
    HiInformationCircle,
    HiMail,
    HiNewspaper
} from "react-icons/hi";
import { services } from "@/lib/data/services";
import { courses } from "@/lib/data/courses";

// Clean navigation with Blog
const navLinks = [
    { name: "Home", href: "/", icon: HiHome },
    { name: "Destinations", href: "/destinations", icon: HiGlobeAlt },
    { name: "Services", href: "/services", icon: HiBriefcase },
    { name: "Programs", href: "/programs", icon: HiAcademicCap },
    { name: "Gallery", href: "/gallery", icon: HiPhotograph },
    { name: "About Us", href: "/about", icon: HiInformationCircle },
    { name: "Contact", href: "/contact", icon: HiMail },
    { name: "Blog", href: "/blog", icon: HiNewspaper },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-24 h-16"
                            >
                                <Image
                                    src="/logo.jpg"
                                    alt="Pinnacle Nepal"
                                    fill
                                    sizes="100px" // Optimized for small logo
                                    className="object-contain"
                                    priority
                                    quality={100}
                                />
                            </motion.div>
                        </Link>

                        {/* Desktop Navigation - 7 Tabs with Icons */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                const Icon = link.icon;

                                // Dropdown Handler for Destinations, Services, and Programs
                                if (["Destinations", "Services", "Programs"].includes(link.name)) {
                                    let dropdownTitle = "";
                                    let dropdownContent: any[] = [];

                                    if (link.name === "Destinations") {
                                        dropdownTitle = "Study Destinations";
                                    } else if (link.name === "Services") {
                                        dropdownTitle = "Our Services";
                                        dropdownContent = services.map(s => ({ name: s.title, href: `/services#${s.id}` }));
                                    } else if (link.name === "Programs") {
                                        dropdownTitle = "Academic Programs";
                                        dropdownContent = courses.map(c => ({ name: c.title, href: `/programs#${c.id}` }));
                                    }

                                    return (
                                        <div key={link.name} className="relative group">
                                            <Link
                                                href={link.href}
                                                className={`px-3 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${isActive
                                                    ? "text-[#DC143C]"
                                                    : "text-[#003893] hover:text-[#DC143C]"
                                                    }`}
                                            >
                                                <Icon className="text-lg" />
                                                {link.name}
                                            </Link>

                                            {/* Dropdown Menu */}
                                            <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] border-2 border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                                <div className="p-4">
                                                    <p className="text-xs font-bold text-gray-600 mb-3 uppercase tracking-wide border-b border-gray-200 pb-2">{dropdownTitle}</p>

                                                    {link.name === "Destinations" ? (
                                                        <div className="grid grid-cols-2 gap-2 max-h-96 overflow-y-auto custom-scrollbar">
                                                            {[
                                                                { name: 'USA', id: 'usa' },
                                                                { name: 'Canada', id: 'canada' },
                                                                { name: 'India', id: 'india' },
                                                                { name: 'Australia', id: 'australia' },
                                                                { name: 'UK', id: 'uk' },
                                                                { name: 'Europe', id: 'europe' },
                                                                { name: 'Bangladesh', id: 'bangladesh' },
                                                                { name: 'China', id: 'china' },
                                                                { name: 'Malaysia', id: 'malaysia' },
                                                                { name: 'Turkey', id: 'turkey' },
                                                                { name: 'Cyprus', id: 'cyprus' },
                                                                { name: 'Russia', id: 'russia' },
                                                                { name: 'Serbia', id: 'serbia' },
                                                                { name: 'Bosnia & Herzegovina', id: 'bosnia' },
                                                                { name: 'Kazakhstan', id: 'kazakhstan' },
                                                                { name: 'Kyrgyzstan', id: 'kyrgyzstan' },
                                                                { name: 'Uzbekistan', id: 'uzbekistan' },
                                                                { name: 'Georgia', id: 'georgia' },
                                                                { name: 'New Zealand', id: 'newzealand' },
                                                            ].map((country) => (
                                                                <Link
                                                                    key={country.id}
                                                                    href={`/destinations/${country.id}`}
                                                                    className="px-3 py-2.5 text-sm font-bold text-[#003893] hover:text-white hover:bg-[#DC143C] rounded-lg transition-all duration-200 text-center"
                                                                >
                                                                    {country.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <div className="flex flex-col gap-1 max-h-96 overflow-y-auto custom-scrollbar">
                                                            {dropdownContent.map((item) => (
                                                                <Link
                                                                    key={item.href}
                                                                    href={item.href}
                                                                    className="px-3 py-2.5 text-sm font-bold text-[#003893] hover:text-white hover:bg-[#DC143C] rounded-lg transition-all duration-200 flex items-center justify-between group/item"
                                                                >
                                                                    <span>{item.name}</span>
                                                                    <span className="opacity-0 group-hover/item:opacity-100 transition-opacity">→</span>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }

                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`px-3 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${isActive
                                            ? "text-[#DC143C]"
                                            : "text-[#003893] hover:text-[#DC143C]"
                                            }`}
                                    >
                                        <Icon className="text-lg" />
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* CTA Button - Desktop */}
                        <div className="hidden lg:block">
                            <Link
                                href="/contact"
                                className="px-6 py-2.5 bg-[#DC143C] text-white text-sm font-bold rounded hover:bg-[#B01030] transition-colors shadow-md hover:shadow-lg"
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden w-10 h-10 rounded bg-[#DC143C] text-white flex items-center justify-center hover:bg-[#B01030] transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden"
            >
                <div className="flex flex-col h-full">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-[#003893]">
                        <div className="relative h-16 w-32">
                            <Image
                                src="/logo.jpg"
                                alt="Pinnacle Nepal"
                                fill
                                sizes="128px"
                                className="object-contain"
                                priority
                                quality={100}
                            />
                        </div>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-10 h-10 rounded bg-[#DC143C] text-white flex items-center justify-center hover:bg-[#B01030] transition-colors"
                            aria-label="Close menu"
                        >
                            <FiX size={24} />
                        </button>
                    </div>

                    {/* Mobile Nav Links */}
                    <nav className="flex-1 overflow-y-auto py-6 px-4 custom-scrollbar">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            const Icon = link.icon;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-lg font-bold transition-all duration-300 ${isActive
                                        ? "bg-[#DC143C] text-white"
                                        : "text-[#003893] hover:bg-[#DC143C] hover:text-white"
                                        }`}
                                >
                                    <Icon className="text-xl" />
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </motion.div>

            {/* Mobile Menu Backdrop */}
            {isMobileMenuOpen && (
                <div
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                />
            )}
        </>
    );
}
