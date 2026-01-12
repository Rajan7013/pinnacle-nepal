import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
    title: "MBBS in India for Nepalese Students: Complete Guide 2026 | Pinnacle Nepal",
    description: "Complete guide for Nepalese students: MBBS admission in India through Self Finance Scheme (SFS), NEET requirements, top medical colleges, and application process 2026.",
    keywords: "MBBS in India from Nepal, Self Finance Scheme SFS, NEET for Nepalese students, study medicine India, Indian medical colleges for Nepalese",
    openGraph: {
        title: "MBBS in India for Nepalese Students: Complete Guide 2026",
        description: "Everything Nepalese students need to know about pursuing MBBS in India - SFS scheme, NEET, admissions, and requirements.",
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
                            <Link href="/" className="hover:text-[#DC143C]">Home</Link>
                            <span>/</span>
                            <Link href="/blog" className="hover:text-[#DC143C]">Blog</Link>
                            <span>/</span>
                            <span className="text-gray-900">MBBS in India from Nepal</span>
                        </div>
                    </div>
                </div>

                {/* Article Header */}
                <article className="py-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                        <span className="inline-block bg-[#003893] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                            MBBS Abroad
                        </span>

                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            MBBS in India for Nepalese Students: Complete Guide 2026
                        </h1>

                        <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                <span>January 12, 2026</span>
                            </div>
                            <span>•</span>
                            <span>8 min read</span>
                            <span>•</span>
                            <span>By Pinnacle Nepal Team</span>
                        </div>

                        <div className="w-full h-96 bg-linear-to-br from-[#003893] to-[#DC143C] rounded-xl flex items-center justify-center mb-12">
                            <span className="text-white text-8xl">🏥</span>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                India remains one of the most popular destinations for Nepalese students pursuing MBBS, with approximately 1,000 Nepalese students going abroad for medical studies annually. India offers quality medical education, cultural familiarity, and geographical proximity, making it an attractive choice for aspiring doctors from Nepal.
                            </p>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Nepalese Students Choose India for MBBS</h2>

                            <ul className="space-y-3 my-6">
                                <li><strong>Quality Education:</strong> World-class medical education with experienced faculty and modern facilities</li>
                                <li><strong>Cultural Similarity:</strong> Similar culture, language (Hindi), and food make adaptation easier</li>
                                <li><strong>Proximity:</strong> Close geographical location allows easy travel between Nepal and India</li>
                                <li><strong>Recognition:</strong> Indian MBBS degrees are recognized by Nepal Medical Council</li>
                                <li><strong>English Medium:</strong> Most medical colleges offer English-medium instruction</li>
                                <li><strong>Established Community:</strong> Large Nepalese student community in Indian medical colleges</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Eligibility Requirements for Nepalese Students</h2>

                            <p>
                                To pursue MBBS in India, Nepalese students must meet the following criteria:
                            </p>

                            <div className="bg-blue-50 border-l-4 border-[#003893] p-6 my-6">
                                <h3 className="font-bold text-lg mb-3">Academic Requirements</h3>
                                <ul className="space-y-2">
                                    <li><strong>Education:</strong> Completed 10+2 or equivalent with Physics, Chemistry, and Biology (PCB)</li>
                                    <li><strong>Minimum Marks:</strong> 50% aggregate in PCB (45% for reserved categories in India)</li>
                                    <li><strong>Age:</strong> Minimum 17 years old by December 31st of admission year</li>
                                    <li><strong>English:</strong> Proficiency in English (medium of instruction)</li>
                                </ul>
                            </div>

                            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-6">
                                <h3 className="font-bold text-lg mb-3">⚠️ Important: NEET Requirement</h3>
                                <p className="mb-3">
                                    <strong>NEET (National Eligibility cum Entrance Test) is MANDATORY</strong> for all students, including Nepalese nationals, who wish to study MBBS in India.
                                </p>
                                <ul className="space-y-2">
                                    <li>• NEET is an Indian entrance examination</li>
                                    <li>• Required for admission to all Indian medical colleges</li>
                                    <li>• Nepalese students must appear for NEET in India or designated centers</li>
                                    <li>• Minimum 50th percentile score required (40th for reserved categories)</li>
                                </ul>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Self Finance Scheme (SFS) for Nepalese Students</h2>

                            <p>
                                The Embassy of India in Kathmandu offers the <strong>Self Finance Scheme (SFS)</strong> for Nepalese students to pursue MBBS in Indian government medical colleges.
                            </p>

                            <div className="bg-gray-50 p-6 rounded-lg my-6">
                                <h3 className="font-bold text-lg mb-3">SFS Scheme Benefits</h3>
                                <ul className="space-y-2">
                                    <li>• Access to government medical colleges in India</li>
                                    <li>• Seats allocated through Embassy of India Kathmandu</li>
                                    <li>• Application process managed by the Embassy</li>
                                    <li>• Must have valid NEET scorecard</li>
                                </ul>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">NEET Exam for Nepalese Students</h2>

                            <p>
                                Understanding NEET is crucial for Nepalese students planning to study MBBS in India:
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">NEET 2026 Details</h3>

                            <div className="grid md:grid-cols-2 gap-4 my-6">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold mb-2">Exam Pattern</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li>• 180 Multiple Choice Questions</li>
                                        <li>• Physics: 45 questions</li>
                                        <li>• Chemistry: 45 questions</li>
                                        <li>• Biology: 90 questions</li>
                                        <li>• Duration: 3 hours</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold mb-2">Scoring</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li>• +4 marks for correct answer</li>
                                        <li>• -1 mark for incorrect answer</li>
                                        <li>• Total marks: 720</li>
                                        <li>• Exam usually in May</li>
                                    </ul>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Admission Process Step-by-Step</h2>

                            <div className="space-y-6 my-8">
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 bg-[#003893] text-white rounded-full flex items-center justify-center font-bold">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">NEET Preparation</h4>
                                        <p>Start preparing for NEET 1-2 years in advance. Focus on NCERT textbooks for Physics, Chemistry, and Biology.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 bg-[#003893] text-white rounded-full flex items-center justify-center font-bold">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">NEET Registration</h4>
                                        <p>Register online through National Testing Agency (NTA) website. Nepalese students can register as foreign nationals.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 bg-[#003893] text-white rounded-full flex items-center justify-center font-bold">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Appear for NEET</h4>
                                        <p>Take the NEET exam (usually in May). Nepalese students can appear at designated centers in India or Nepal.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 bg-[#003893] text-white rounded-full flex items-center justify-center font-bold">
                                        4
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">SFS Application</h4>
                                        <p>Apply through Self Finance Scheme at Embassy of India Kathmandu with NEET scorecard and required documents.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 bg-[#003893] text-white rounded-full flex items-center justify-center font-bold">
                                        5
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Document Verification</h4>
                                        <p>Submit all required documents including AIU equivalence certificate, passport, and academic certificates.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 bg-[#003893] text-white rounded-full flex items-center justify-center font-bold">
                                        6
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Seat Allotment & Admission</h4>
                                        <p>Receive seat allotment based on NEET rank and preferences. Complete admission formalities at the allotted college.</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Required Documents</h2>

                            <div className="grid md:grid-cols-2 gap-4 my-6">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold mb-2">Academic Documents</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li>• 10th and 12th grade mark sheets and certificates</li>
                                        <li>• NEET scorecard and admit card</li>
                                        <li>• AIU equivalence certificate</li>
                                        <li>• Transfer certificate</li>
                                        <li>• Migration certificate</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold mb-2">Personal Documents</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li>• Valid passport (minimum 2 years validity)</li>
                                        <li>• Nepalese citizenship certificate</li>
                                        <li>• Birth certificate</li>
                                        <li>• Passport-size photographs</li>
                                        <li>• Medical fitness certificate</li>
                                        <li>• Character certificate</li>
                                    </ul>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Top Medical Colleges in India</h2>

                            <p>
                                India has numerous prestigious medical colleges. Some of the top institutions include:
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Government Medical Colleges</h3>
                            <ul className="space-y-2 my-4">
                                <li>• All India Institute of Medical Sciences (AIIMS) - Multiple locations</li>
                                <li>• Armed Forces Medical College (AFMC), Pune</li>
                                <li>• Maulana Azad Medical College, Delhi</li>
                                <li>• King George's Medical University, Lucknow</li>
                                <li>• Grant Medical College, Mumbai</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Private Medical Colleges</h3>
                            <ul className="space-y-2 my-4">
                                <li>• Kasturba Medical College, Manipal</li>
                                <li>• Christian Medical College (CMC), Vellore</li>
                                <li>• St. John's Medical College, Bangalore</li>
                                <li>• JSS Medical College, Mysore</li>
                                <li>• Amrita Institute of Medical Sciences, Kochi</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Student Visa Process</h2>

                            <p>
                                Nepalese students need a Student Visa (X/XI) to study in India:
                            </p>

                            <ol className="list-decimal pl-6 space-y-2 my-6">
                                <li>Obtain admission letter from Indian medical college</li>
                                <li>Apply online at Indian Embassy Kathmandu website</li>
                                <li>Submit required documents and passport</li>
                                <li>Pay visa fees</li>
                                <li>Attend visa interview if required</li>
                                <li>Collect visa (usually takes 7-15 days)</li>
                            </ol>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Life as a Nepalese Student in India</h2>

                            <ul className="space-y-3 my-6">
                                <li><strong>Accommodation:</strong> Most colleges provide hostel facilities for students</li>
                                <li><strong>Food:</strong> Mess facilities available with options similar to Nepalese cuisine</li>
                                <li><strong>Language:</strong> Hindi and English widely spoken, easy for Nepalese students</li>
                                <li><strong>Community:</strong> Large Nepalese student community in most Indian medical colleges</li>
                                <li><strong>Safety:</strong> Generally safe environment with proper campus security</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">After MBBS: Career Prospects</h2>

                            <p>
                                After completing MBBS in India, Nepalese students have several options:
                            </p>

                            <ul className="space-y-3 my-6">
                                <li><strong>Practice in Nepal:</strong> Clear Nepal Medical Council licensing exam to practice medicine in Nepal</li>
                                <li><strong>Further Studies:</strong> Pursue MD/MS specialization in India or Nepal</li>
                                <li><strong>International Opportunities:</strong> Appear for USMLE (USA), PLAB (UK), or other international licensing exams</li>
                                <li><strong>Research & Academia:</strong> Opportunities in medical research and teaching</li>
                            </ul>

                            <div className="bg-linear-to-r from-[#003893] to-[#DC143C] text-white rounded-xl p-8 my-12">
                                <h2 className="text-3xl font-bold mb-4">How Pinnacle Nepal Can Help</h2>
                                <p className="text-lg mb-6">
                                    At Pinnacle Nepal, we provide comprehensive support for Nepalese students aspiring to study MBBS in India:
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li>✓ NEET preparation guidance and study resources</li>
                                    <li>✓ NEET registration assistance</li>
                                    <li>✓ SFS application support through Embassy of India</li>
                                    <li>✓ College selection based on NEET score</li>
                                    <li>✓ Document preparation and AIU equivalence certificate assistance</li>
                                    <li>✓ Student visa application support</li>
                                    <li>✓ Pre-departure orientation</li>
                                    <li>✓ Ongoing support throughout your medical education</li>
                                </ul>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-white text-[#003893] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                                >
                                    Get Free Consultation
                                </Link>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Sources & References</h2>

                            <div className="bg-gray-50 p-6 rounded-lg space-y-3 text-sm">
                                <p className="font-bold mb-4">This article is based on information from the following credible sources:</p>

                                <div className="space-y-2">
                                    <p>
                                        <strong>[1]</strong> Embassy of India Kathmandu -
                                        <a href="https://indembkathmandu.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#003893] hover:text-[#DC143C] inline-flex items-center gap-1 ml-1">
                                            Self Finance Scheme for Nepalese Students
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </p>

                                    <p>
                                        <strong>[2]</strong> National Testing Agency (NTA) -
                                        <a href="https://nta.ac.in" target="_blank" rel="noopener noreferrer" className="text-[#003893] hover:text-[#DC143C] inline-flex items-center gap-1 ml-1">
                                            NEET Examination Details
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </p>

                                    <p>
                                        <strong>[3]</strong> Careers360 -
                                        <a href="https://www.careers360.com" target="_blank" rel="noopener noreferrer" className="text-[#003893] hover:text-[#DC143C] inline-flex items-center gap-1 ml-1">
                                            NEET for Foreign Students
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </p>

                                    <p>
                                        <strong>[4]</strong> IIT Kanpur -
                                        <a href="https://iitk.ac.in" target="_blank" rel="noopener noreferrer" className="text-[#003893] hover:text-[#DC143C] inline-flex items-center gap-1 ml-1">
                                            MBBS Admission for Nepalese Students
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </p>
                                </div>

                                <p className="text-xs text-gray-600 mt-4 pt-4 border-t">
                                    <strong>Disclaimer:</strong> Information is accurate as of January 2026. NEET requirements and SFS procedures may change. Always verify with Embassy of India Kathmandu and official NTA website.
                                </p>
                            </div>

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
