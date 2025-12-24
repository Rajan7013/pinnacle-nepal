"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
            <div className="p-3 bg-gradient-to-r from-blue-50 to-cyan-50">
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

    return (
        <section className="py-14 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-gray-900">Top </span>
                        <span className="text-[#003893]">Courses </span>
                        <span className="text-[#DC143C]">Offered</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {courses.map((course, index) => (
                        <CourseCard key={course.title} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
}
