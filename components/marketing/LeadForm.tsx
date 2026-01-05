'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function LeadForm() {
    return (
        <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/30 skew-x-12 transform origin-bottom-left"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                                Start Your Journey <br />
                                <span className="text-pinnacle-orange">Today</span>
                            </h2>
                            <p className="text-blue-100 text-lg mb-8 max-w-md">
                                Get a free consultation with our expert counselors. We evaluate your profile and guide you to the best scholarship opportunities.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center text-pinnacle-orange">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold">98% Visa Success</h3>
                                        <p className="text-sm text-blue-200">Proven track record with top embassies.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-2xl text-slate-900">
                        <h3 className="text-2xl font-bold mb-6 text-blue-900">Request Callback</h3>
                        <form className="space-y-4" action="/api/leads" method="POST">
                            {/* We would make this a Server Action in real production */}
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="First Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pinnacle-orange focus:border-transparent outline-none" />
                                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pinnacle-orange focus:border-transparent outline-none" />
                            </div>
                            <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pinnacle-orange focus:border-transparent outline-none" />
                            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pinnacle-orange focus:border-transparent outline-none" />
                            <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pinnacle-orange focus:border-transparent outline-none text-slate-500">
                                <option>Preferred Country</option>
                                <option>USA</option>
                                <option>Australia</option>
                                <option>UK</option>
                                <option>Canada</option>
                            </select>
                            <Button className="w-full py-6 text-lg font-bold bg-pinnacle-orange hover:bg-orange-600 text-white rounded-lg shadow-lg shadow-orange-500/30">
                                Get Free Advice
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
