import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Calendar, ArrowLeft, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
    title: "MBBS in Bangladesh: Top Medical Colleges 2026 | Pinnacle Nepal",
    description: "Complete guide to MBBS in Bangladesh for Nepalese students: top medical colleges, DGME admission process, eligibility requirements, and opportunities 2026.",
    keywords: "MBBS in Bangladesh, Bangladesh medical colleges, study medicine Bangladesh, DGME admission, medical education Bangladesh",
    openGraph: {
        title: "MBBS in Bangladesh: Top Medical Colleges 2026",
        description: "Everything you need to know about pursuing MBBS in Bangladesh - admission process, top colleges, and opportunities for Nepalese students.",
        url: "https://www.pinnaclenepal.org/blog/mbbs-bangladesh-top-colleges",
    },
    alternates: {
        canonical: "https://www.pinnaclenepal.org/blog/mbbs-bangladesh-top-colleges",
    },
};

export default function MBBSBangladeshPage() {
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
                            <span className="text-gray-900">MBBS in Bangladesh</span>
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
                            MBBS in Bangladesh: Top Medical Colleges 2026
                        </h1>

                        <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                <span>January 10, 2026</span>
                            </div>
                            <span>•</span>
                            <span>6 min read</span>
                            <span>•</span>
                            <span>By Pinnacle Nepal Team</span>
                        </div>

                        <div className="w-full h-96 bg-linear-to-br from-[#003893] to-[#DC143C] rounded-xl flex items-center justify-center mb-12">
                            <span className="text-white text-8xl">🏥</span>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Bangladesh has emerged as a popular destination for international medical students, particularly from Nepal and other South Asian countries. With affordable education, English-medium programs, and NMC-recognized medical colleges, Bangladesh offers excellent opportunities for aspiring doctors.
                            </p>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Choose Bangladesh for MBBS?</h2>

                            <ul className="space-y-3 my-6">
                                <li><strong>Proximity to Nepal:</strong> Close geographical location makes travel convenient and affordable</li>
                                <li><strong>Cultural Similarity:</strong> Similar culture, food, and lifestyle make adaptation easier</li>
                                <li><strong>English Medium:</strong> All MBBS programs are taught in English</li>
                                <li><strong>NMC Recognition:</strong> Many colleges are recognized by National Medical Commission (India), WHO, Nepal Medical Council, and BMDC</li>
                                <li><strong>Quality Education:</strong> High academic standards with modern facilities</li>
                                <li><strong>No Entrance Exam for Nepalese Students:</strong> No NEET or entrance exam required</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">DGME Admission Process 2026</h2>

                            <p>
                                MBBS admissions in Bangladesh for international students are managed by the Directorate General of Medical Education (DGME). For the 2025-2026 academic session:
                            </p>

                            <div className="bg-blue-50 border-l-4 border-[#003893] p-6 my-6">
                                <h3 className="font-bold text-lg mb-3">Important Dates (2025-2026 Session)</h3>
                                <ul className="space-y-2">
                                    <li><strong>Application Opens:</strong> November 11, 2025</li>
                                    <li><strong>Application Deadline:</strong> January 15, 2026</li>
                                    <li><strong>Final Admission Deadline:</strong> February 19, 2026 (Non-government colleges)</li>
                                    <li><strong>Application Portal:</strong> foreignstudents.dgme.gov.bd</li>
                                </ul>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Eligibility Requirements</h2>

                            <p>
                                To be eligible for MBBS admission in Bangladesh, international students must meet these criteria:
                            </p>

                            <div className="space-y-6 my-8">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="font-bold text-lg mb-3">Age Requirements</h3>
                                    <ul className="space-y-2">
                                        <li>• Minimum age: 17 years</li>
                                        <li>• Maximum age: 25 years at the time of admission</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="font-bold text-lg mb-3">Academic Qualifications</h3>
                                    <ul className="space-y-2">
                                        <li>• Passed SSC/O-level and HSC/A-level (or equivalent) with science background</li>
                                        <li>• Must include Physics, Chemistry, and Biology</li>
                                        <li>• O-level not passed before 2022</li>
                                        <li>• A-level not passed before 2024 or 2025</li>
                                        <li>• Minimum aggregate GPA: 7.00 to 8.00 (varies by institution)</li>
                                        <li>• Government colleges: GPA 8.50 aggregate (5.00 in each exam)</li>
                                        <li>• Minimum GPA 3.50 in Biology at A-level/12th grade</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="font-bold text-lg mb-3">Additional Requirements</h3>
                                    <ul className="space-y-2">
                                        <li>• No break of more than 2 years after completing 10+2</li>
                                        <li>• Medical fitness certificate required</li>
                                        <li>• Valid passport</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
                                <h3 className="font-bold text-lg mb-3">✅ Great News for Nepalese Students!</h3>
                                <p className="mb-2">
                                    <strong>NO NEET Required:</strong> Nepalese students do NOT need to take NEET or any entrance exam to study MBBS in Bangladesh.
                                </p>
                                <p className="text-sm">
                                    Note: NEET is only mandatory for Indian students. Nepalese students can apply directly through DGME portal with their +2 marks.
                                </p>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Admission Process Step-by-Step</h2>

                            <div className="space-y-6 my-8">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-[#003893] text-white rounded-full flex items-center justify-center font-bold">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Online Application</h4>
                                        <p>Register and complete the online application form on the DGME portal (foreignstudents.dgme.gov.bd)</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-[#003893] text-white rounded-full flex items-center justify-center font-bold">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Document Upload</h4>
                                        <p>Upload all required documents including academic certificates, mark sheets, passport, and recent passport-size photograph</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-[#003893] text-white rounded-full flex items-center justify-center font-bold">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Application Fee</h4>
                                        <p>Pay non-refundable application and equivalence processing fee (USD 100) via SWIFT/TT transfer</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-[#003893] text-white rounded-full flex items-center justify-center font-bold">
                                        4
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Document Attestation</h4>
                                        <p>Academic documents must be attested by Ministry of Education and Ministry of Foreign Affairs of your country, then authenticated by Bangladesh Embassy</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-[#003893] text-white rounded-full flex items-center justify-center font-bold">
                                        5
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Final Admission</h4>
                                        <p>After selection, report in person to allotted medical college for document verification, medical fitness assessment, and fee payment</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Top Medical Colleges in Bangladesh</h2>

                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Government Medical Colleges</h3>

                            <div className="space-y-4 my-6">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="font-bold text-lg mb-2">Dhaka Medical College</h4>
                                    <p className="text-sm text-gray-700">One of the oldest and most prestigious medical colleges in Bangladesh, established in 1946. Excellent facilities and experienced faculty.</p>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="font-bold text-lg mb-2">Chittagong Medical College</h4>
                                    <p className="text-sm text-gray-700">Established in 1957, known for quality medical education and research. Located in Bangladesh's second-largest city.</p>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="font-bold text-lg mb-2">Rajshahi Medical College</h4>
                                    <p className="text-sm text-gray-700">Founded in 1958, offers comprehensive medical education with modern facilities and teaching hospitals.</p>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Private Medical Colleges</h3>

                            <div className="space-y-4 my-6">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="font-bold text-lg mb-2">Dhaka National Medical College (DNMC)</h4>
                                    <p className="text-sm text-gray-700">Well-established private institution with modern infrastructure and experienced faculty. NMC and WHO recognized.</p>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="font-bold text-lg mb-2">Bangladesh Medical College (BMC)</h4>
                                    <p className="text-sm text-gray-700">One of the leading private medical colleges with excellent clinical training facilities.</p>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="font-bold text-lg mb-2">Tairunnessa Memorial Medical College & Hospital</h4>
                                    <p className="text-sm text-gray-700">Modern facilities with focus on practical training and clinical exposure.</p>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="font-bold text-lg mb-2">Jahurul Islam Medical College (JIMCH)</h4>
                                    <p className="text-sm text-gray-700">Recognized institution offering quality medical education with state-of-the-art facilities.</p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Program Structure</h2>

                            <ul className="space-y-3 my-6">
                                <li><strong>Total Duration:</strong> 6 years (5 years academic + 1 year internship)</li>
                                <li><strong>Medium of Instruction:</strong> English</li>
                                <li><strong>Recognition:</strong> NMC (India), WHO, BMDC, ECFMG</li>
                                <li><strong>Curriculum:</strong> Follows international medical education standards</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Seat Allocation for International Students</h2>

                            <p>
                                Bangladesh allocates specific seats for foreign students:
                            </p>

                            <ul className="space-y-2 my-6">
                                <li><strong>Total Seats:</strong> 221-224 seats for foreign students</li>
                                <li><strong>SAARC Countries:</strong> 92 government seats (104 MBBS + 13 BDS)</li>
                                <li><strong>Categories:</strong> SAARC, Non-SAARC, and Reserved Scholarship</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Required Documents</h2>

                            <div className="grid md:grid-cols-2 gap-4 my-6">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold mb-2">Academic Documents</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li>• 10th and 12th grade mark sheets and certificates</li>
                                        <li>• School leaving certificate</li>
                                        <li>• Attested academic documents</li>
                                        <li>• Character certificate</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold mb-2">Personal Documents</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li>• Valid passport</li>
                                        <li>• Passport-size photographs</li>
                                        <li>• Birth certificate</li>
                                        <li>• Nationality proof</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold mb-2">Medical & Legal</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li>• Medical fitness certificate</li>
                                        <li>• No criminal certificate</li>
                                        <li>• Guardian's bank statement</li>
                                        <li>• Financial capacity proof</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold mb-2">Application Documents</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li>• Completed application form</li>
                                        <li>• Fee payment receipt</li>
                                        <li>• Embassy attestation</li>
                                        <li>• Ministry attestation</li>
                                    </ul>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Student Life in Bangladesh</h2>

                            <p>
                                Living in Bangladesh offers a comfortable experience for Nepalese students:
                            </p>

                            <ul className="space-y-3 my-6">
                                <li><strong>Cultural Similarity:</strong> Similar food, language (Bengali is similar to Hindi/Nepali), and lifestyle</li>
                                <li><strong>Accommodation:</strong> College hostels and private accommodations available</li>
                                <li><strong>Food:</strong> Indian and Nepalese cuisine widely available</li>
                                <li><strong>Safety:</strong> Generally safe environment for international students</li>
                                <li><strong>Transportation:</strong> Affordable and accessible public transport</li>
                            </ul>

                            <div className="bg-linear-to-r from-[#003893] to-[#DC143C] text-white rounded-xl p-8 my-12">
                                <h2 className="text-3xl font-bold mb-4">How Pinnacle Nepal Can Help</h2>
                                <p className="text-lg mb-6">
                                    At Pinnacle Nepal, we provide comprehensive support for MBBS admission in Bangladesh:
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li>✓ College selection based on your academic profile</li>
                                    <li>✓ DGME application assistance and document preparation</li>
                                    <li>✓ Document attestation guidance</li>
                                    <li>✓ Visa processing support</li>
                                    <li>✓ Pre-departure orientation</li>
                                    <li>✓ Ongoing support throughout your studies</li>
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
                                        <strong>[1]</strong> DGME Bangladesh -
                                        <a href="https://foreignstudents.dgme.gov.bd" target="_blank" rel="noopener noreferrer" className="text-[#003893] hover:text-[#DC143C] inline-flex items-center gap-1 ml-1">
                                            Official Foreign Students Admission Portal
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </p>

                                    <p>
                                        <strong>[2]</strong> Career Marg -
                                        <a href="https://careermarg.com" target="_blank" rel="noopener noreferrer" className="text-[#003893] hover:text-[#DC143C] inline-flex items-center gap-1 ml-1">
                                            MBBS in Bangladesh Admission Guide
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </p>

                                    <p>
                                        <strong>[3]</strong> YouthOp -
                                        <a href="https://youthop.com" target="_blank" rel="noopener noreferrer" className="text-[#003893] hover:text-[#DC143C] inline-flex items-center gap-1 ml-1">
                                            Bangladesh Medical Admission 2025-2026
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </p>

                                    <p>
                                        <strong>[4]</strong> MBBS Admission Abroad -
                                        <a href="https://mbbsadmissionabroad.in" target="_blank" rel="noopener noreferrer" className="text-[#003893] hover:text-[#DC143C] inline-flex items-center gap-1 ml-1">
                                            Top Medical Colleges in Bangladesh
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </p>
                                </div>

                                <p className="text-xs text-gray-600 mt-4 pt-4 border-t">
                                    <strong>Disclaimer:</strong> Information is accurate as of January 2026. Requirements and procedures may change. Always verify with DGME official portal and relevant authorities.
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
