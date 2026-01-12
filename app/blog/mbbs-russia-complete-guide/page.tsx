import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Calendar, ArrowLeft, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
    title: "MBBS in Russia: Complete Guide for Nepalese Students 2026 | Pinnacle Nepal",
    description: "Complete guide to MBBS in Russia for Nepalese students: top NMC-approved medical universities, admission process, eligibility requirements, and student life 2026.",
    keywords: "MBBS in Russia, Russian medical universities, study medicine Russia, MBBS abroad, NMC approved universities Russia",
    openGraph: {
        title: "MBBS in Russia: Complete Guide for Nepalese Students 2026",
        description: "Everything you need to know about pursuing MBBS in Russia - top universities, admission process, and opportunities for Nepalese students.",
        url: "https://www.pinnaclenepal.org/blog/mbbs-russia-complete-guide",
    },
    alternates: {
        canonical: "https://www.pinnaclenepal.org/blog/mbbs-russia-complete-guide",
    },
};

export default function MBBSRussiaGuidePage() {
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
                            <span className="text-gray-900">MBBS in Russia</span>
                        </div>
                    </div>
                </div>

                {/* Article Header */}
                <article className="py-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                        {/* Category Badge */}
                        <span className="inline-block bg-[#003893] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                            MBBS Abroad
                        </span>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            MBBS in Russia: Complete Guide for Nepalese Students 2026
                        </h1>

                        {/* Meta Info */}
                        <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                <span>January 11, 2026</span>
                            </div>
                            <span>•</span>
                            <span>7 min read</span>
                            <span>•</span>
                            <span>By Pinnacle Nepal Team</span>
                        </div>

                        {/* Featured Image Placeholder */}
                        <div className="w-full h-96 bg-linear-to-br from-[#003893] to-[#DC143C] rounded-xl flex items-center justify-center mb-12">
                            <span className="text-white text-8xl">🏥</span>
                        </div>

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Russia has emerged as one of the most popular destinations for international medical students, including those from Nepal. With globally recognized medical universities, affordable education, and English-medium programs, Russia offers excellent opportunities for aspiring doctors.
                            </p>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Choose Russia for MBBS?</h2>

                            <p>
                                Russia continues to be a preferred choice for international students seeking quality medical education. Here's why:
                            </p>

                            <ul className="space-y-3 my-6">
                                <li><strong>Globally Recognized Degrees:</strong> Russian medical universities are recognized by WHO, NMC (India), Nepal Medical Council, and other international medical councils</li>
                                <li><strong>Affordable Education:</strong> Compared to Western countries, Russia offers quality medical education at reasonable costs</li>
                                <li><strong>English-Medium Programs:</strong> Most universities offer MBBS programs in English, eliminating language barriers</li>
                                <li><strong>No Entrance Exams for Nepalese Students:</strong> Russian universities don't require NEET or any entrance exam for Nepalese students</li>
                                <li><strong>High Academic Standards:</strong> Russian medical education follows international standards with modern facilities and experienced faculty</li>
                                <li><strong>Clinical Exposure:</strong> Students get extensive practical training in well-equipped hospitals</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Top NMC-Approved Medical Universities in Russia</h2>

                            <p>
                                The National Medical Commission (NMC) of India recognizes Russian medical degrees from universities that meet specific guidelines. Here are some of the top medical universities in Russia:
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Premier Medical Universities</h3>

                            <div className="bg-gray-50 p-6 rounded-lg my-6">
                                <h4 className="font-bold text-lg mb-3">1. First Moscow State Medical University (Sechenov University)</h4>
                                <ul className="space-y-2 ml-6">
                                    <li>Established in 1758, one of Russia's oldest and most prestigious medical institutions</li>
                                    <li>Recognized by NMC, WHO, and international medical councils</li>
                                    <li>Large international student community from over 100 countries</li>
                                    <li>State-of-the-art facilities and research centers</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg my-6">
                                <h4 className="font-bold text-lg mb-3">2. Kazan Federal University</h4>
                                <ul className="space-y-2 ml-6">
                                    <li>Founded in 1804, highly ranked globally</li>
                                    <li>Modern facilities with focus on clinical practice</li>
                                    <li>Strong FMGE success rate for international students</li>
                                    <li>Comprehensive medical programs with research opportunities</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg my-6">
                                <h4 className="font-bold text-lg mb-3">3. Bashkir State Medical University</h4>
                                <ul className="space-y-2 ml-6">
                                    <li>Research-oriented institution with excellent FMGE pass rates</li>
                                    <li>Well-equipped laboratories and teaching hospitals</li>
                                    <li>Affordable tuition with quality education</li>
                                    <li>Active international student support services</li>
                                </ul>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Other Notable Universities</h3>

                            <ul className="space-y-2 my-6">
                                <li><strong>Kursk State Medical University</strong> - Established 1935, strong English-medium program</li>
                                <li><strong>Volgograd State Medical University</strong> - Excellent clinical exposure and modern facilities</li>
                                <li><strong>Pirogov Russian National Research Medical University</strong> - High FMGE pass rates and research excellence</li>
                                <li><strong>Siberian State Medical University</strong> - One of Russia's oldest (1878), comprehensive 6-year program</li>
                                <li><strong>Peoples Friendship University (RUDN)</strong> - Highly international with students from 150+ countries</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Eligibility Requirements for Nepalese Students</h2>

                            <p>
                                To be eligible for MBBS admission in Russia, Nepalese students must meet the following criteria:
                            </p>

                            <div className="bg-blue-50 border-l-4 border-[#003893] p-6 my-6">
                                <h3 className="font-bold text-lg mb-3">Requirements for Nepalese Students</h3>
                                <ul className="space-y-2">
                                    <li><strong>Age:</strong> Minimum 17 years old by December 31st of admission year</li>
                                    <li><strong>Education:</strong> Completed 10+2 or equivalent with Physics, Chemistry, and Biology (PCB)</li>
                                    <li><strong>Minimum Marks:</strong> 50% aggregate in PCB</li>
                                    <li><strong>English:</strong> Proficiency in English (IELTS/TOEFL generally not mandatory)</li>
                                    <li><strong>Valid Passport:</strong> Minimum 18 months validity</li>
                                    <li><strong>Medical Fitness:</strong> Medical fitness certificate with HIV test</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
                                <h3 className="font-bold text-lg mb-3">✅ Great News for Nepalese Students!</h3>
                                <p className="mb-2">
                                    <strong>NO NEET Required:</strong> Nepalese students do NOT need to take NEET or any entrance exam to study MBBS in Russia.
                                </p>
                                <p className="text-sm">
                                    Note: NEET is only mandatory for Indian students as per NMC India guidelines. Nepalese students can apply directly with their +2 marks.
                                </p>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Admission Process Step-by-Step</h2>

                            <p>
                                The admission process for MBBS in Russia is straightforward and typically follows these steps:
                            </p>

                            <div className="space-y-6 my-8">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-[#003893] text-white rounded-full flex items-center justify-center font-bold">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">University Selection</h4>
                                        <p>Research and choose an NMC-recognized university that suits your preferences and budget. Consider factors like location, facilities, and student reviews.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-[#003893] text-white rounded-full flex items-center justify-center font-bold">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Application Submission</h4>
                                        <p>Submit filled application form with required documents through the university portal or authorized admission partner. Apply early as seats are limited.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-[#003893] text-white rounded-full flex items-center justify-center font-bold">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Admission Letter</h4>
                                        <p>Upon verification of eligibility, the university issues a provisional admission letter.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-[#003893] text-white rounded-full flex items-center justify-center font-bold">
                                        4
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Invitation Letter</h4>
                                        <p>University applies to Russian Ministry of Education for official invitation letter (takes 15-20 working days). This is crucial for visa processing.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-[#003893] text-white rounded-full flex items-center justify-center font-bold">
                                        5
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Student Visa Application</h4>
                                        <p>Apply for student visa at Russian Embassy/Consulate with invitation letter, admission letter, passport, and other documents.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-[#003893] text-white rounded-full flex items-center justify-center font-bold">
                                        6
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Travel & Enrollment</h4>
                                        <p>Make travel arrangements and register at the university upon arrival. Academic session typically begins in September/October.</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Required Documents</h2>

                            <p>
                                Prepare the following documents for your application and visa process:
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 my-6">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold mb-2">Academic Documents</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li>• 10th and 12th grade mark sheets and certificates</li>
                                        <li>• Migration certificate</li>
                                        <li>• School leaving certificate</li>
                                        <li>• Character certificate</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold mb-2">Personal Documents</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li>• Valid passport (18 months minimum validity)</li>
                                        <li>• Passport-sized photographs</li>
                                        <li>• Birth certificate</li>
                                        <li>• Medical fitness certificate with HIV test</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold mb-2">Admission Documents</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li>• Official admission letter from university</li>
                                        <li>• Visa invitation letter from Russian Ministry</li>
                                        <li>• Filled visa application form</li>
                                        <li>• Tuition fee payment receipts</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold mb-2">Additional Documents</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li>• Police Clearance Certificate (PCC)</li>
                                        <li>• Bank statements (financial proof)</li>
                                        <li>• Passport copies</li>
                                        <li>• Authorized translations if required</li>
                                    </ul>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Program Duration and Structure</h2>

                            <p>
                                The MBBS program in Russia typically follows this structure:
                            </p>

                            <ul className="space-y-3 my-6">
                                <li><strong>Total Duration:</strong> 6 years</li>
                                <li><strong>Academic Study:</strong> 5 years of classroom and laboratory learning</li>
                                <li><strong>Clinical Internship:</strong> 1 year of practical training in hospitals</li>
                                <li><strong>Medium of Instruction:</strong> English (with additional Russian language training for clinical communication)</li>
                                <li><strong>Academic Session:</strong> Begins in September/October annually</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Student Life in Russia</h2>

                            <p>
                                Living and studying in Russia offers a unique cultural experience:
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Accommodation</h3>
                            <ul className="space-y-2 my-4">
                                <li>Most universities provide hostel facilities for international students</li>
                                <li>Hostels are equipped with basic amenities and internet connectivity</li>
                                <li>Shared rooms are common, with separate facilities for male and female students</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Food and Lifestyle</h3>
                            <ul className="space-y-2 my-4">
                                <li>University canteens serve affordable meals</li>
                                <li>Indian and Asian food options available in major cities</li>
                                <li>Students can cook in hostel kitchens</li>
                                <li>Cost of living is reasonable compared to Western countries</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Safety and Support</h3>
                            <ul className="space-y-2 my-4">
                                <li>Russia is generally safe for international students</li>
                                <li>Universities have dedicated international student support offices</li>
                                <li>Active student communities from Nepal and other South Asian countries</li>
                                <li>24/7 security in university campuses and hostels</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Career Prospects After MBBS in Russia</h2>

                            <p>
                                After completing MBBS in Russia, graduates have several career options:
                            </p>

                            <ul className="space-y-3 my-6">
                                <li><strong>Practice in Home Country:</strong> Clear licensing exams (FMGE for India, NMC for Nepal) to practice medicine</li>
                                <li><strong>Further Studies:</strong> Pursue MD/MS specialization in Russia or other countries</li>
                                <li><strong>International Opportunities:</strong> Russian MBBS degree is recognized globally, opening doors to practice in many countries</li>
                                <li><strong>Research and Academia:</strong> Opportunities in medical research and teaching</li>
                            </ul>

                            <div className="bg-linear-to-r from-[#003893] to-[#DC143C] text-white rounded-xl p-8 my-12">
                                <h2 className="text-3xl font-bold mb-4">How Pinnacle Nepal Can Help</h2>
                                <p className="text-lg mb-6">
                                    At Pinnacle Nepal, we provide comprehensive support for Nepalese students aspiring to study MBBS in Russia:
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li>✓ University selection guidance based on your preferences and budget</li>
                                    <li>✓ Complete application and documentation assistance</li>
                                    <li>✓ Visa processing support and interview preparation</li>
                                    <li>✓ Pre-departure orientation and travel arrangements</li>
                                    <li>✓ Ongoing support throughout your academic journey</li>
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
                                        <strong>[1]</strong> Meta Apply -
                                        <a href="https://metaapply.io" target="_blank" rel="noopener noreferrer" className="text-[#003893] hover:text-[#DC143C] inline-flex items-center gap-1 ml-1">
                                            MBBS in Russia Admission Process
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </p>

                                    <p>
                                        <strong>[2]</strong> Careers360 -
                                        <a href="https://www.careers360.com" target="_blank" rel="noopener noreferrer" className="text-[#003893] hover:text-[#DC143C] inline-flex items-center gap-1 ml-1">
                                            NMC Approved Medical Universities in Russia
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </p>

                                    <p>
                                        <strong>[3]</strong> Bright Bridge Overseas -
                                        <a href="https://brightbridgeoverseas.com" target="_blank" rel="noopener noreferrer" className="text-[#003893] hover:text-[#DC143C] inline-flex items-center gap-1 ml-1">
                                            Top Medical Universities in Russia
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </p>

                                    <p>
                                        <strong>[4]</strong> Vidhyantar -
                                        <a href="https://vidhyantar.com" target="_blank" rel="noopener noreferrer" className="text-[#003893] hover:text-[#DC143C] inline-flex items-center gap-1 ml-1">
                                            MBBS in Russia Requirements and Process
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </p>
                                </div>

                                <p className="text-xs text-gray-600 mt-4 pt-4 border-t">
                                    <strong>Disclaimer:</strong> Information is accurate as of January 2026. Requirements and procedures may change. Always verify with official university websites and relevant authorities.
                                </p>
                            </div>

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
