import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

export const metadata: Metadata = {
    title: "Complete Guide to Studying MBBS in India from Nepal 2026 | Pinnacle Nepal",
    description: "Comprehensive guide for Nepalese students: MBBS admission process in India, top medical colleges, fees structure, NEET requirements, eligibility criteria, and visa process. Expert guidance from Pinnacle Nepal.",
    keywords: "MBBS in India, study MBBS from Nepal, Indian medical colleges, NEET for Nepalese students, MBBS admission India, medical colleges India fees, study medicine India",
    openGraph: {
        title: "Complete Guide to Studying MBBS in India from Nepal 2026",
        description: "Everything Nepalese students need to know about pursuing MBBS in India - admissions, colleges, fees, and requirements.",
        url: "https://www.pinnaclenepal.org/blog/complete-guide-mbbs-india-2026",
        type: "article",
        publishedTime: "2026-01-12T00:00:00Z",
    },
    alternates: {
        canonical: "https://www.pinnaclenepal.org/blog/complete-guide-mbbs-india-2026",
    },
};

export default function MBBSIndiaGuidePage() {
    return (
        <>
            <Header />

            <main className="min-h-screen bg-white">
                {/* Breadcrumb */}
                <div className="bg-gray-50 py-4">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Link href="/" className="hover:text-[#003893]">Home</Link>
                            <span>/</span>
                            <Link href="/blog" className="hover:text-[#003893]">Blog</Link>
                            <span>/</span>
                            <span className="text-gray-900">MBBS in India Guide 2026</span>
                        </div>
                    </div>
                </div>

                {/* Article Header */}
                <article className="py-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                        {/* Category Badge */}
                        <span className="inline-block bg-[#003893] text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
                            MBBS Abroad
                        </span>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            Complete Guide to Studying MBBS in India from Nepal 2026
                        </h1>

                        {/* Meta Info */}
                        <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
                            <div className="flex items-center gap-2">
                                <User className="w-5 h-5" />
                                <span>Pinnacle Nepal Team</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                <span>January 12, 2026</span>
                            </div>
                            <span>8 min read</span>
                        </div>

                        {/* Featured Image Placeholder */}
                        <div className="w-full h-96 bg-gradient-to-br from-[#003893] to-[#DC143C] rounded-xl flex items-center justify-center mb-12">
                            <span className="text-white text-8xl">🏥</span>
                        </div>

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Pursuing MBBS in India has become increasingly popular among Nepalese students due to quality education, affordable fees, and cultural similarities. This comprehensive guide covers everything you need to know about studying MBBS in India from Nepal in 2026.
                            </p>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Choose India for MBBS?</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                India is home to some of the world's best medical colleges, offering high-quality education at affordable costs. Here's why thousands of Nepalese students choose India for MBBS:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                                <li><strong>Quality Education:</strong> World-class medical education with experienced faculty</li>
                                <li><strong>Affordable Fees:</strong> Significantly lower than Western countries (₹3-15 lakhs per year)</li>
                                <li><strong>Cultural Similarity:</strong> Similar culture, language, and food make adaptation easier</li>
                                <li><strong>MCI/NMC Recognition:</strong> Degrees recognized by Nepal Medical Council</li>
                                <li><strong>No Language Barrier:</strong> English medium instruction in most colleges</li>
                                <li><strong>Proximity:</strong> Easy travel between Nepal and India</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Eligibility Criteria for Nepalese Students</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                To pursue MBBS in India, Nepalese students must meet the following criteria:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                                <li>Completed 10+2 or equivalent with Physics, Chemistry, Biology (PCB)</li>
                                <li>Minimum 50% marks in PCB (40% for reserved categories)</li>
                                <li>Age: Minimum 17 years as of December 31 of admission year</li>
                                <li>NEET qualification (mandatory for all foreign students)</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">NEET Exam for Nepalese Students</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <strong>NEET (National Eligibility cum Entrance Test)</strong> is mandatory for all students, including Nepalese nationals, who wish to study MBBS in India.
                            </p>
                            <div className="bg-blue-50 border-l-4 border-[#003893] p-6 my-8">
                                <h3 className="text-xl font-bold text-[#003893] mb-3">NEET 2026 Important Details:</h3>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li><strong>Exam Date:</strong> Usually conducted in May</li>
                                    <li><strong>Application:</strong> Online through NTA website</li>
                                    <li><strong>Exam Pattern:</strong> 180 MCQs (Physics, Chemistry, Biology)</li>
                                    <li><strong>Duration:</strong> 3 hours</li>
                                    <li><strong>Qualifying Marks:</strong> 50th percentile (General), 40th percentile (Reserved)</li>
                                </ul>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Top Medical Colleges in India for Nepalese Students</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Here are some of the best medical colleges in India that accept Nepalese students:
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Government Medical Colleges:</h3>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                                <li>All India Institute of Medical Sciences (AIIMS) - Multiple locations</li>
                                <li>Armed Forces Medical College (AFMC), Pune</li>
                                <li>Maulana Azad Medical College, Delhi</li>
                                <li>King George's Medical University, Lucknow</li>
                                <li>Grant Medical College, Mumbai</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Private Medical Colleges:</h3>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                                <li>Kasturba Medical College, Manipal</li>
                                <li>Christian Medical College (CMC), Vellore</li>
                                <li>St. John's Medical College, Bangalore</li>
                                <li>JSS Medical College, Mysore</li>
                                <li>Amrita Institute of Medical Sciences, Kochi</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Fee Structure</h2>
                            <div className="bg-gray-50 rounded-lg p-6 my-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Approximate Annual Fees:</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex justify-between">
                                        <span><strong>Government Colleges:</strong></span>
                                        <span className="font-semibold">₹50,000 - ₹5,00,000</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span><strong>Private Colleges:</strong></span>
                                        <span className="font-semibold">₹8,00,000 - ₹25,00,000</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span><strong>Deemed Universities:</strong></span>
                                        <span className="font-semibold">₹15,00,000 - ₹30,00,000</span>
                                    </li>
                                </ul>
                                <p className="text-sm text-gray-600 mt-4">
                                    *Fees vary by college and quota. Additional costs include hostel, books, and living expenses.
                                </p>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Admission Process</h2>
                            <ol className="list-decimal pl-6 text-gray-700 space-y-3 mb-8">
                                <li><strong>NEET Preparation:</strong> Start preparing 1-2 years in advance</li>
                                <li><strong>NEET Registration:</strong> Register online through NTA website</li>
                                <li><strong>Appear for NEET:</strong> Take the exam in May</li>
                                <li><strong>NEET Results:</strong> Results declared in June</li>
                                <li><strong>Counseling:</strong> Participate in All India Quota or State Quota counseling</li>
                                <li><strong>Document Verification:</strong> Submit all required documents</li>
                                <li><strong>Seat Allotment:</strong> Get college allocation based on rank and preference</li>
                                <li><strong>Admission:</strong> Complete admission formalities and pay fees</li>
                            </ol>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Required Documents</h2>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                                <li>NEET Scorecard and Admit Card</li>
                                <li>10th and 12th Mark Sheets and Certificates</li>
                                <li>Transfer Certificate and Migration Certificate</li>
                                <li>Passport (valid for at least 2 years)</li>
                                <li>Passport-size photographs</li>
                                <li>Medical fitness certificate</li>
                                <li>Character certificate</li>
                                <li>Proof of Nepalese citizenship</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Student Visa Process</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Nepalese students need a <strong>Student Visa (X/XI)</strong> to study MBBS in India:
                            </p>
                            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-8">
                                <li>Obtain admission letter from Indian medical college</li>
                                <li>Apply online at Indian Embassy website</li>
                                <li>Submit required documents and passport</li>
                                <li>Pay visa fees</li>
                                <li>Attend visa interview if required</li>
                                <li>Collect visa (usually takes 7-15 days)</li>
                            </ol>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Living in India as a Nepalese Student</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Life in India for Nepalese students is generally comfortable:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                                <li><strong>Accommodation:</strong> Most colleges provide hostel facilities (₹30,000-₹1,00,000/year)</li>
                                <li><strong>Food:</strong> Mess facilities available, similar to Nepalese cuisine</li>
                                <li><strong>Language:</strong> Hindi and English widely spoken</li>
                                <li><strong>Transportation:</strong> Affordable public transport</li>
                                <li><strong>Safety:</strong> Generally safe with proper precautions</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Career Prospects After MBBS</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                After completing MBBS in India, Nepalese students can:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                                <li>Practice in Nepal after clearing Nepal Medical Council (NMC) licensing exam</li>
                                <li>Pursue MD/MS specialization in India or Nepal</li>
                                <li>Work in hospitals and clinics in Nepal</li>
                                <li>Appear for USMLE for USA practice</li>
                                <li>Take PLAB for UK practice</li>
                            </ul>

                            <div className="bg-gradient-to-r from-[#003893] to-[#DC143C] text-white rounded-xl p-8 my-12">
                                <h2 className="text-3xl font-bold mb-4">How Pinnacle Nepal Can Help</h2>
                                <p className="text-lg mb-6">
                                    At Pinnacle Nepal, we provide comprehensive support for Nepalese students aspiring to study MBBS in India:
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl">✓</span>
                                        <span>NEET preparation guidance and resources</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl">✓</span>
                                        <span>College selection based on your NEET score and budget</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl">✓</span>
                                        <span>Admission assistance and counseling support</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl">✓</span>
                                        <span>Visa application and documentation help</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl">✓</span>
                                        <span>Pre-departure orientation and ongoing support</span>
                                    </li>
                                </ul>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-white text-[#003893] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                                >
                                    Get Free Consultation
                                </Link>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Studying MBBS in India is an excellent choice for Nepalese students seeking quality medical education at affordable costs. With proper preparation, NEET qualification, and expert guidance from Pinnacle Nepal, you can successfully pursue your dream of becoming a doctor.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Start your MBBS journey today! Contact Pinnacle Nepal for personalized guidance and support throughout your admission process.
                            </p>

                            {/* Back to Blog */}
                            <div className="mt-12 pt-8 border-t">
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center gap-2 text-[#003893] font-semibold hover:text-[#DC143C] transition-colors"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                    Back to Blog
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </>
    );
}
