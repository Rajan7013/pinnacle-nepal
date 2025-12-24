"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { default as NextImage } from "next/image";

interface ProgramCardProps {
    title: string;
    image: string;
    description: string;
}

export default function ProgramCard({ title, image, description }: ProgramCardProps) {
    return (
        <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden">
                <NextImage
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{title}</h3>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {description}
                </p>

                <div className="mt-auto">
                    <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                        Learn More <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
