import { Metadata } from 'next';
import Link from 'next/link';
import { FaGraduationCap, FaGlobe, FaUsers, FaAward, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';

export const metadata: Metadata = {
    title: "Pinnacle Nepal - Leading Educational Consultancy in Kathmandu | Study Abroad Experts",
    description: "Pinnacle Nepal is the top educational consultancy in Nepal, helping 500+ students annually study MBBS, Engineering, MBA abroad in India, Russia, China, USA, UK, Canada. Free consultation & visa assistance.",
    keywords: "pinnacle nepal, pinnacle nepal education, pinnacle nepal consultancy, top educational consultancy nepal, best consultancy kathmandu, study abroad nepal, mbbs abroad, engineering abroad",
    openGraph: {
        title: "Pinnacle Nepal - Leading Educational Consultancy in Kathmandu",
        description: "Expert guidance for studying MBBS, Engineering, MBA abroad. 500+ students placed annually.",
        url: "https://www.pinnaclenepal.org/blog/pinnacle-nepal-leading-consultancy",
        type: "article",
    }
};

export default function PinnacleNepalArticle() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Pinnacle Nepal: Your Trusted Partner for Study Abroad Success
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8">
                            Leading Educational Consultancy in Kathmandu | 500+ Students Placed Annually
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                                <FaGraduationCap className="text-yellow-400" />
                                <span>MBBS Specialists</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                                <FaGlobe className="text-green-400" />
                                <span>15+ Countries</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                                <FaUsers className="text-purple-400" />
                                <span>10+ Years Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto">

                    {/* Introduction */}
                    <section className="mb-12">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            In the rapidly growing landscape of international education, <strong>Pinnacle Nepal</strong> has emerged as the leading educational consultancy in Kathmandu, Nepal. With over a decade of experience and a proven track record of placing 500+ students annually in top universities across 15 countries, Pinnacle Nepal has become synonymous with trust, expertise, and student success.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            According to the <a href="https://moest.gov.np" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">Ministry of Education, Science and Technology, Nepal <FaExternalLinkAlt className="text-xs" /></a>, over 75,000 Nepalese students study abroad each year, with numbers increasing by 15% annually. Pinnacle Nepal plays a crucial role in guiding these students toward their academic dreams.
                        </p>
                    </section>

                    {/* Why Pinnacle Nepal Stands Out */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <FaAward className="text-yellow-500" />
                            Why Pinnacle Nepal is the Top Educational Consultancy in Nepal
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <FaCheckCircle className="text-blue-600" />
                                    Proven Track Record
                                </h3>
                                <p className="text-gray-700">
                                    500+ students successfully placed in top universities annually, with a 98% visa success rate across all countries.
                                </p>
                            </div>

                            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <FaCheckCircle className="text-green-600" />
                                    Expert Counselors
                                </h3>
                                <p className="text-gray-700">
                                    Team of 15+ certified education counselors with specialized knowledge in MBBS, Engineering, and MBA admissions.
                                </p>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <FaCheckCircle className="text-purple-600" />
                                    Comprehensive Services
                                </h3>
                                <p className="text-gray-700">
                                    End-to-end support from university selection to visa approval, including test preparation, documentation, and pre-departure guidance.
                                </p>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <FaCheckCircle className="text-orange-600" />
                                    Free Consultation
                                </h3>
                                <p className="text-gray-700">
                                    Completely free initial consultation and career counseling to help students make informed decisions about their future.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Study Destinations */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Study Abroad Destinations Through Pinnacle Nepal
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Pinnacle Nepal specializes in placing students in top universities across 15 countries, with particular expertise in MBBS and Engineering programs:
                        </p>

                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mb-6">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Top Destinations for Nepalese Students</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div>
                                    <h4 className="font-semibold text-blue-900 mb-2">MBBS Popular Countries:</h4>
                                    <ul className="space-y-1 text-gray-700">
                                        <li>• <Link href="/destinations/india" className="text-blue-600 hover:underline">India</Link> (40% of students)</li>
                                        <li>• <Link href="/destinations/russia" className="text-blue-600 hover:underline">Russia</Link> (25% of students)</li>
                                        <li>• <Link href="/destinations/china" className="text-blue-600 hover:underline">China</Link> (15% of students)</li>
                                        <li>• <Link href="/destinations/bangladesh" className="text-blue-600 hover:underline">Bangladesh</Link> (10% of students)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-purple-900 mb-2">Engineering & Tech:</h4>
                                    <ul className="space-y-1 text-gray-700">
                                        <li>• <Link href="/destinations/usa" className="text-blue-600 hover:underline">USA</Link></li>
                                        <li>• <Link href="/destinations/canada" className="text-blue-600 hover:underline">Canada</Link></li>
                                        <li>• <Link href="/destinations/australia" className="text-blue-600 hover:underline">Australia</Link></li>
                                        <li>• <Link href="/destinations/germany" className="text-blue-600 hover:underline">Germany</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-green-900 mb-2">MBA & Management:</h4>
                                    <ul className="space-y-1 text-gray-700">
                                        <li>• <Link href="/destinations/uk" className="text-blue-600 hover:underline">UK</Link></li>
                                        <li>• <Link href="/destinations/singapore" className="text-blue-600 hover:underline">Singapore</Link></li>
                                        <li>• <Link href="/destinations/france" className="text-blue-600 hover:underline">France</Link></li>
                                        <li>• <Link href="/destinations/netherlands" className="text-blue-600 hover:underline">Netherlands</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                            <p className="text-gray-800">
                                <strong>Source:</strong> Data compiled from <a href="https://mofa.gov.np" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">Ministry of Foreign Affairs, Nepal <FaExternalLinkAlt className="text-xs" /></a> and internal Pinnacle Nepal placement statistics (2023-2026).
                            </p>
                        </div>
                    </section>

                    {/* MBBS Abroad Expertise */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            MBBS Abroad: Pinnacle Nepal's Core Strength
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            With the increasing demand for medical education among Nepalese students, Pinnacle Nepal has established itself as the go-to consultancy for MBBS admissions abroad. According to the <a href="https://nmc.org.np" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">Nepal Medical Council (NMC) <FaExternalLinkAlt className="text-xs" /></a>, over 3,500 Nepalese students graduate from foreign medical universities annually.
                        </p>

                        <div className="bg-white border-2 border-gray-200 rounded-xl p-8 mb-6">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Students Choose Pinnacle Nepal for MBBS:</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                                    <span><strong>NMC-Approved Universities:</strong> We only recommend universities recognized by Nepal Medical Council and WHO</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                                    <span><strong>Affordable Options:</strong> MBBS programs starting from $3,000/year in countries like Russia and China</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                                    <span><strong>English Medium:</strong> All recommended universities offer English-medium instruction</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                                    <span><strong>FMGE Support:</strong> Guidance for Foreign Medical Graduate Examination (FMGE) preparation</span>
                                </li>
                            </ul>
                        </div>

                        <p className="text-gray-700 mb-4">
                            Read our detailed guide: <Link href="/blog/complete-guide-mbbs-india-2026" className="text-blue-600 hover:underline font-semibold">Complete Guide to Studying MBBS in India 2026</Link>
                        </p>
                    </section>

                    {/* Engineering Abroad */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Engineering & Technology Programs
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Engineering remains one of the most sought-after fields for Nepalese students. Pinnacle Nepal specializes in placing students in top engineering programs, particularly in Computer Science, Mechanical, Civil, and Electrical Engineering.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Popular Engineering Courses:</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• BTech in Computer Science & Engineering</li>
                                    <li>• BTech in Artificial Intelligence & Machine Learning</li>
                                    <li>• BTech in Mechanical Engineering</li>
                                    <li>• BTech in Civil Engineering</li>
                                    <li>• BTech in Electrical & Electronics</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Top Engineering Destinations:</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• India (IITs, NITs, BITS Pilani)</li>
                                    <li>• USA (MIT, Stanford, UC Berkeley)</li>
                                    <li>• Canada (University of Toronto, UBC)</li>
                                    <li>• Germany (TU Munich, RWTH Aachen)</li>
                                    <li>• Australia (University of Melbourne, UNSW)</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Services Offered */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Comprehensive Services Offered by Pinnacle Nepal
                        </h2>

                        <div className="space-y-4">
                            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Career Counseling</h3>
                                <p className="text-gray-700">Free one-on-one sessions with expert counselors to identify the best course and country based on your academic background, budget, and career goals.</p>
                            </div>

                            <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">2. University Selection</h3>
                                <p className="text-gray-700">Personalized university shortlisting from our database of 500+ partner universities across 15 countries, all NMC/WHO/UGC approved.</p>
                            </div>

                            <div className="bg-white border-l-4 border-purple-600 p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Application Assistance</h3>
                                <p className="text-gray-700">Complete support with application forms, document preparation, SOP writing, and submission to universities.</p>
                            </div>

                            <div className="bg-white border-l-4 border-orange-600 p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Visa Guidance</h3>
                                <p className="text-gray-700">Expert visa counseling with 98% success rate, including document checklist, interview preparation, and embassy liaison.</p>
                            </div>

                            <div className="bg-white border-l-4 border-red-600 p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">5. Test Preparation</h3>
                                <p className="text-gray-700">IELTS, TOEFL, SAT, GRE, GMAT coaching and preparation materials to help you achieve required scores.</p>
                            </div>

                            <div className="bg-white border-l-4 border-yellow-600 p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">6. Pre-Departure Orientation</h3>
                                <p className="text-gray-700">Comprehensive briefing on accommodation, culture, weather, banking, and student life in your destination country.</p>
                            </div>
                        </div>
                    </section>

                    {/* Student Success Stories */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Student Success Stories
                        </h2>
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl">
                            <p className="text-lg text-gray-700 mb-4">
                                Over the past decade, Pinnacle Nepal has helped thousands of students achieve their dreams of studying abroad. Our alumni are now practicing doctors, engineers, and business leaders across the globe.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 mt-6">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                                    <div className="text-gray-700">Students Placed Annually</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                                    <div className="text-gray-700">Visa Success Rate</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
                                    <div className="text-gray-700">Countries Covered</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Location & Contact */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Visit Pinnacle Nepal Office in Kathmandu
                        </h2>
                        <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Us</h3>
                                    <p className="text-gray-700 mb-2">
                                        <strong>Address:</strong>
                                    </p>
                                    <p className="text-gray-700 mb-4">
                                        New Baneshwor<br />
                                        Kathmandu, Nepal
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">Call Us</h3>
                                    <p className="text-gray-700 mb-1">
                                        +977 9852062628
                                    </p>
                                    <p className="text-gray-700 mb-4">
                                        +977 9814362628
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">Email Us</h3>
                                    <p className="text-gray-700 mb-4">
                                        <a href="mailto:contact@pinnaclenepal.com" className="text-blue-600 hover:underline">
                                            contact@pinnaclenepal.com
                                        </a>
                                    </p>

                                    <Link
                                        href="/contact"
                                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold mt-4"
                                    >
                                        Book Free Consultation
                                    </Link>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Hours</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li><strong>Sunday - Friday</strong></li>
                                        <li className="ml-4">9:00 AM - 6:00 PM</li>
                                        <li className="mt-4"><strong>Saturday:</strong> Closed</li>
                                    </ul>
                                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                                        <p className="text-sm text-gray-700">
                                            <strong>Walk-ins Welcome!</strong><br />
                                            While appointments are preferred, we welcome walk-in visitors during office hours.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Conclusion: Your Partner in Global Education
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Choosing the right educational consultancy is crucial for your study abroad journey. <strong>Pinnacle Nepal</strong> stands out as the most trusted and experienced consultancy in Kathmandu, with a proven track record of success, comprehensive services, and a genuine commitment to student welfare.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Whether you're planning to study MBBS in India, pursue engineering in the USA, or get an MBA in the UK, Pinnacle Nepal provides the expert guidance and support you need to make your dreams a reality.
                        </p>
                        <div className="bg-blue-600 text-white p-8 rounded-xl text-center">
                            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Study Abroad Journey?</h3>
                            <p className="text-lg mb-6">Book a free consultation with Pinnacle Nepal today!</p>
                            <Link
                                href="/contact"
                                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
                            >
                                Get Free Consultation
                            </Link>
                        </div>
                    </section>

                    {/* Sources & References */}
                    <section className="mb-12 bg-gray-50 p-8 rounded-xl">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Sources & References</h2>
                        <ol className="space-y-3 text-gray-700">
                            <li>
                                1. Ministry of Education, Science and Technology, Nepal - <a href="https://moest.gov.np" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">moest.gov.np <FaExternalLinkAlt className="text-xs" /></a>
                            </li>
                            <li>
                                2. Nepal Medical Council (NMC) - <a href="https://nmc.org.np" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">nmc.org.np <FaExternalLinkAlt className="text-xs" /></a>
                            </li>
                            <li>
                                3. Ministry of Foreign Affairs, Nepal - <a href="https://mofa.gov.np" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">mofa.gov.np <FaExternalLinkAlt className="text-xs" /></a>
                            </li>
                            <li>
                                4. World Health Organization (WHO) - Medical School Database - <a href="https://www.who.int" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">who.int <FaExternalLinkAlt className="text-xs" /></a>
                            </li>
                            <li>
                                5. Pinnacle Nepal Internal Placement Statistics (2023-2026)
                            </li>
                        </ol>
                        <p className="text-sm text-gray-600 mt-6 italic">
                            Last Updated: January 13, 2026
                        </p>
                    </section>

                    {/* Related Articles */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/blog/complete-guide-mbbs-india-2026" className="block bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all">
                                <h3 className="font-semibold text-gray-900 mb-2">Complete Guide to MBBS in India 2026</h3>
                                <p className="text-sm text-gray-600">Everything you need to know about studying MBBS in India</p>
                            </Link>
                            <Link href="/blog/mbbs-russia-complete-guide" className="block bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all">
                                <h3 className="font-semibold text-gray-900 mb-2">MBBS in Russia: Complete Guide</h3>
                                <p className="text-sm text-gray-600">Affordable MBBS programs in top Russian universities</p>
                            </Link>
                            <Link href="/blog/mbbs-bangladesh-top-colleges" className="block bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all">
                                <h3 className="font-semibold text-gray-900 mb-2">MBBS in Bangladesh: Top Colleges</h3>
                                <p className="text-sm text-gray-600">Best medical colleges in Bangladesh for Nepalese students</p>
                            </Link>
                        </div>
                    </section>

                </div>
            </article>

            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Pinnacle Nepal - Leading Educational Consultancy in Kathmandu",
                        "description": "Comprehensive guide to Pinnacle Nepal, the top educational consultancy in Nepal for MBBS, Engineering, and MBA abroad.",
                        "author": {
                            "@type": "Organization",
                            "name": "Pinnacle Nepal"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Pinnacle Nepal",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.pinnaclenepal.org/logo.png"
                            }
                        },
                        "datePublished": "2026-01-13",
                        "dateModified": "2026-01-13"
                    })
                }}
            />
        </div>
    );
}
