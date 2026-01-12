"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiCheck } from "react-icons/hi";
import { destinationsData } from "@/lib/data/destinations";

export default function ConsultationPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Show popup after 2 seconds (faster for testing)
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem("hasSeenPopup", "true");
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // 🚀 INSTANT SUCCESS - Show immediately
        setIsSubmitted(true);

        // Send data in background (fire and forget)
        const googleSheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

        if (googleSheetsUrl) {
            const form = e.currentTarget;
            const formDataObj = new FormData(form);

            const submissionData = {
                name: formDataObj.get('name') as string,
                email: formDataObj.get('email') as string,
                phone: formDataObj.get('phone') as string,
                country: formDataObj.get('country') as string,
                course: '',
                message: `Interested in studying in ${formDataObj.get('country')}`,
                formType: 'Consultation Popup'
            };

            // Don't await - send in background
            fetch(googleSheetsUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData)
            }).catch(error => {
                console.error('Background submission error:', error);
            });
        }

        // Close popup after showing success
        setTimeout(() => {
            handleClose();
        }, 2000);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/60 z-9999 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white rounded-2xl shadow-2xl z-10000 overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                            aria-label="Close consultation popup"
                        >
                            <HiX className="text-xl" />
                        </button>

                        <div className="p-8">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                                    {[
                                        "Free", "Consultation"
                                    ].map((word, i) => {
                                        const colors = [
                                            "text-[#003893]", // Blue
                                            "text-[#DC143C]", // Red
                                            "text-gray-900"   // Black
                                        ];
                                        return (
                                            <span key={i} className={`${colors[i % 3]} mr-1.5`}>
                                                {word}
                                            </span>
                                        );
                                    })}
                                </h2>
                            </div>

                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {/* Full Name */}
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Full Name *"
                                            required
                                            aria-label="Full Name"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-[#4ADE80] focus:ring-1 focus:ring-[#4ADE80] transition-all text-gray-800 placeholder-gray-400"
                                        />
                                    </div>

                                    {/* Mobile Number */}
                                    <div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Mobile Number (with country code) *"
                                            required
                                            aria-label="Mobile Number"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-[#4ADE80] focus:ring-1 focus:ring-[#4ADE80] transition-all text-gray-800 placeholder-gray-400"
                                        />
                                    </div>

                                    {/* Email ID */}
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email ID *"
                                            required
                                            aria-label="Email Address"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-[#4ADE80] focus:ring-1 focus:ring-[#4ADE80] transition-all text-gray-800 placeholder-gray-400"
                                        />
                                    </div>

                                    {/* Destination */}
                                    <div className="relative">
                                        <select
                                            name="country"
                                            required
                                            aria-label="Destination"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-[#4ADE80] focus:ring-1 focus:ring-[#4ADE80] transition-all text-gray-800 bg-white appearance-none cursor-pointer"
                                            defaultValue=""
                                        >
                                            <option value="" disabled className="text-gray-400">Destination *</option>
                                            {destinationsData.map(dest => (
                                                <option key={dest.id} value={dest.name}>{dest.name}</option>
                                            ))}
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>

                                    {/* Agreement Checkbox */}
                                    <div className="flex items-start gap-3 mt-2 md:col-span-2">
                                        <input
                                            type="checkbox"
                                            id="terms"
                                            required
                                            className="mt-1 w-4 h-4 text-[#4ADE80] border-gray-300 rounded focus:ring-[#4ADE80]"
                                        />
                                        <label htmlFor="terms" className="text-xs text-gray-500 leading-snug">
                                            I agree to Pinnacle Nepal's <span className="text-[#4f46e5] cursor-pointer font-semibold">Privacy Policy</span> and <span className="text-[#4f46e5] cursor-pointer font-semibold">Terms and Conditions</span> *
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="md:col-span-2">
                                        <button
                                            type="submit"
                                            className="w-full py-3.5 bg-[#34D399] hover:bg-[#10B981] text-gray-900 font-bold rounded-full transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
                                        >
                                            Book a FREE Consultation &gt;
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="py-12 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-500 mb-4">
                                        <HiCheck className="text-3xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                                    <p className="text-gray-600">
                                        We have received your details. Our counsellor will contact you shortly.
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
