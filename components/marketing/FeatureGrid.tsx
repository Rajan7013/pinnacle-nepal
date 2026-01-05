'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Globe2, Briefcase } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: GraduationCap,
        title: "University Admissions",
        description: "Guidance through the entire application process for top-tier global universities."
    },
    {
        icon: BookOpen,
        title: "Visa Processing",
        description: "Expert assistance with student visa requirements, documentation, and interviews."
    },
    {
        icon: Globe2,
        title: "Career Counseling",
        description: "Personalized advice to match your skills with the right academic programs."
    },
    {
        icon: Briefcase,
        title: "Scholarship Support",
        description: "Help finding and applying for financial aid and merit-based scholarships."
    }
];

export default function FeatureGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-pinnacle-orange font-bold font-heading uppercase tracking-widest text-sm">Our Services</span>
                    <h2 className="text-4xl font-bold font-heading text-slate-900 mt-2">What We Offer</h2>
                    <div className="w-20 h-1 bg-pinnacle-orange mx-auto mt-6"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
                            whileTap={{ scale: 0.95 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 bg-white border border-gray-100/50 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl hover:border-pinnacle-orange/20"
                        >
                            <div className="w-16 h-16 bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-linear-to-br group-hover:from-pinnacle-orange group-hover:to-orange-600 transition-all duration-300 shadow-inner">
                                <service.icon className="w-8 h-8 text-pinnacle-orange group-hover:text-white transition-colors duration-300" />
                            </div>

                            <h3 className="text-xl font-bold font-heading text-slate-900 mb-4 group-hover:text-pinnacle-orange transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-slate-600 font-body leading-relaxed mb-6 text-sm">
                                {service.description}
                            </p>

                            <Link href="#" className="inline-flex items-center text-sm font-bold text-pinnacle-orange uppercase tracking-wide hover:underline">
                                Read More
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
