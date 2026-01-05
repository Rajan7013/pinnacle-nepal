'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface University {
    id: number;
    name: string;
    country: string;
    ranking: number | null;
    imageUrl: string | null;
}

interface UniversitiesDisplayProps {
    data: University[];
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 50 }
    }
};

export default function UniversitiesDisplay({ data }: UniversitiesDisplayProps) {
    return (
        <section className="py-24 bg-linear-to-b from-slate-50 to-white overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-pinnacle-orange font-bold font-heading uppercase tracking-widest text-sm">Global Partners</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 font-heading">Top Universities</h2>
                    <div className="w-24 h-1.5 bg-pinnacle-orange mx-auto mt-6 rounded-full"></div>
                    <p className="text-slate-600 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
                        We are official partners with world-renowned institutions. Your gateway to excellence starts here.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {data.map((uni) => (
                        <motion.div
                            key={uni.id}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            whileTap={{ scale: 0.98 }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
                        >
                            <div className="relative h-64 overflow-hidden">
                                {(() => {
                                    const imgSrc = uni.imageUrl || 'https://placehold.co/600x400';
                                    return (
                                        <Image
                                            src={imgSrc}
                                            alt={uni.name}
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            unoptimized={imgSrc.includes('placehold.co')}
                                        />
                                    );
                                })()}
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-white/50">
                                    Rank #{uni.ranking}
                                </div>
                                <div className="absolute bottom-4 left-4">
                                    <span className="inline-block px-3 py-1 bg-pinnacle-orange text-white text-xs font-bold rounded-md shadow-md uppercase tracking-wider">
                                        {uni.country}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col grow">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-pinnacle-orange transition-colors font-heading leading-tight">
                                    {uni.name}
                                </h3>
                                <div className="mt-auto pt-6 border-t border-slate-50">
                                    <Link href="#" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-pinnacle-orange transition-colors group/link">
                                        View Programs
                                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
