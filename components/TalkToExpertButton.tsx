"use client";

import Link from "next/link";
import { HiPhone } from "react-icons/hi";
import { motion } from "framer-motion";

interface TalkToExpertButtonProps {
    className?: string;
}

export default function TalkToExpertButton({ className = "" }: TalkToExpertButtonProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className={`absolute z-40 ${className}`}
        >
            <Link
                href="/contact"
                className="group flex items-center gap-2 md:gap-3 bg-white px-5 py-2.5 md:px-6 md:py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(220,20,60,0.2)] border border-gray-100 transition-all duration-300 transform hover:-translate-y-1"
            >
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-pink-100 flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                    <HiPhone className="text-sm md:text-xl text-[#DC143C]" />
                </div>
                <span className="text-sm md:text-lg font-bold text-[#DC143C] tracking-wide whitespace-nowrap">
                    Talk to Expert
                </span>
            </Link>
        </motion.div>
    );
}
