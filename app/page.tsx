"use client";

import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import DestinationsSection from "@/components/DestinationsSection";
import CoursesSection from "@/components/CoursesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import SectionWrapper, { SectionHeader } from "@/components/SectionWrapper";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Optimized Countries Section */}
      <DestinationsSection />

      {/* Top Courses Section */}
      <CoursesSection />

      {/* Stats Section with Animated Counters */}
      <StatsSection />

      {/* Optimized Testimonials */}
      <TestimonialsSection />

      {/* Optimized CTA Section */}
      <CTASection />

      {/* Contact Section - Kept semi-inline for now as it uses complex sub-components */}
      <SectionWrapper id="contact" background="white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="mb-10">
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-[#003893]">
                  Get In <span className="text-[#DC143C]">Touch</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600">
                  Have questions? We're here to help!
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-900">Visit Our Office</h3>
                  <p className="text-gray-600">New Baneshwor</p>
                  <p className="text-gray-600">Kathmandu, Nepal</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="glass rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-900">Contact Info</h3>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold text-blue-800 block">Phone:</span>
                    <a href="tel:+9779852062628" className="hover:text-blue-600 transition-colors block">+977 9852062628</a>
                    <a href="tel:+9779814362628" className="hover:text-blue-600 transition-colors block">+977 9814362628</a>
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold text-blue-800 block">Email:</span>
                    <a href="mailto:contact@pinnaclenepal.com" className="hover:text-blue-600 transition-colors">contact@pinnaclenepal.com</a>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="glass rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-900">Office Hours</h3>
                  <p className="text-gray-600">Sunday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-red-600 font-semibold mt-2">Saturday: Closed</p>
                </motion.div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </SectionWrapper>

      <Footer />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Pinnacle Nepal?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pinnacle Nepal is the leading educational consultancy in Kathmandu, Nepal, helping 500+ students annually study MBBS, Engineering, and MBA abroad in 15 countries including India, Russia, China, Bangladesh, USA, UK, Canada, and Australia."
                }
              },
              {
                "@type": "Question",
                "name": "Which countries does Pinnacle Nepal send students to?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We help students study in India, Russia, China, Bangladesh, USA, UK, Canada, Australia, Germany, France, Japan, South Korea, New Zealand, Ireland, Netherlands, Switzerland, and Singapore."
                }
              },
              {
                "@type": "Question",
                "name": "How much does MBBS abroad cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "MBBS abroad costs range from $3,000/year in Russia and China to $50,000/year in USA and UK. India offers affordable options at $5,000-$15,000/year. Bangladesh costs around $4,000-$8,000/year."
                }
              },
              {
                "@type": "Question",
                "name": "What services does Pinnacle Nepal provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide free career counseling, university selection, application assistance, visa guidance, test preparation (IELTS, TOEFL, SAT), scholarship guidance, and pre-departure orientation."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Pinnacle Nepal located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pinnacle Nepal is located in New Baneshwor, Kathmandu, Nepal. We are open Sunday to Friday from 9:00 AM to 6:00 PM. Contact us at +977-9852062628 or +977-9814362628."
                }
              }
            ]
          })
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Educational Consultancy",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Pinnacle Nepal",
              "url": "https://www.pinnaclenepal.org"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Nepal"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Study Abroad Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "MBBS Abroad Consultancy",
                    "description": "Expert guidance for MBBS admissions in India, Russia, China, Bangladesh and other countries"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Engineering Abroad Consultancy",
                    "description": "BTech and engineering program admissions in USA, Canada, Germany, Australia"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "MBA Abroad Consultancy",
                    "description": "MBA and management program admissions in UK, USA, Canada, Singapore"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Visa Assistance",
                    "description": "Complete visa application support with 98% success rate"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Test Preparation",
                    "description": "IELTS, TOEFL, SAT, GRE, GMAT coaching and preparation"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.pinnaclenepal.org"
              }
            ]
          })
        }}
      />

      {/* AggregateRating Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Pinnacle Nepal",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />
    </>
  );
}
