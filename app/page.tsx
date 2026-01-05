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
                  <p className="text-gray-600">Pinnacle Nepal</p>
                  <p className="text-gray-600">Kathmandu, Nepal</p>
                  <p className="text-gray-600">Thamel, Ward No. 26</p>
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
                    <a href="tel:+919550560184" className="hover:text-blue-600 transition-colors">+91 9550560184</a>
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
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-red-500 font-medium mt-1">Sunday: Closed</p>
                </motion.div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
}
