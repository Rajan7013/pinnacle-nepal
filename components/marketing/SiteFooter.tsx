'use client';

import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function SiteFooter() {
    return (
        <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-xl font-bold font-heading mb-4">Pinnacle Nepal</h3>
                        <p className="text-sm text-slate-400 leading-relaxed mb-4">
                            Your trusted partner for global education. We guide students to their dream universities with transparency and expertise.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-slate-400 hover:text-white"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-white"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-white"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-white"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-bold mb-4 text-pinnacle-orange">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Services</a></li>
                            <li><a href="#" className="hover:text-white">Destinations</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold mb-4 text-pinnacle-orange">Contact Us</h4>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li>Putalisadak, Kathmandu</li>
                            <li>Nepal</li>
                            <li>+977 9550260184</li>
                            <li>contact@pinnaclenepal.org</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold mb-4 text-pinnacle-orange">Newsletter</h4>
                        <p className="text-sm text-slate-400 mb-2">Subscribe for updates.</p>
                        <div className="flex mb-2">
                            <input type="email" placeholder="Email" className="bg-slate-800 border-none text-white px-3 py-2 text-sm rounded-l-sm w-full focus:ring-1 focus:ring-pinnacle-orange" />
                            <button className="bg-pinnacle-orange px-4 text-sm font-bold rounded-r-sm hover:bg-orange-600">Go</button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
                    &copy; {new Date().getFullYear()} Pinnacle Nepal. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
