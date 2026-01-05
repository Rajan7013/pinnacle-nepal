"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { courses } from "@/lib/data/courses";

const CourseCard = ({ course }: { course: any }) => {
    return (
        <div className="group relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            {/* Course Image */}
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Course Title */}
            <div className="p-3 bg-linear-to-r from-blue-50 to-cyan-50">
                <h3 className="text-base font-bold text-gray-900 text-center">
                    {course.title}
                </h3>
            </div>
        </div>
    );
};

export default function CoursesSection() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    // Filter out "IT, Pharmacy & Humanities" and "MBA" courses
    const displayedCourses = courses.filter(
        course => course.id !== "humanities" && course.id !== "mba"
    );

    return (
        <section className="py-10 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-gray-900">Top </span>
                        <span className="text-[#003893]">Courses </span>
                        <span className="text-[#DC143C]">Offered</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {displayedCourses.map((course, index) => (
                        <CourseCard key={course.title} course={course} />
                    ))}
                </div>

                {/* View More Courses Button */}
                <div className="text-center mt-12">
                    <Link href="/programs">
                        <button className="group relative px-8 py-4 bg-linear-to-r from-[#003893] to-[#0052CC] text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <span className="relative z-10 flex items-center gap-2">
                                View More Courses
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
