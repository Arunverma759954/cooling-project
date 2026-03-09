"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Contact() {
    const [fileName, setFileName] = useState("");

    return (
        <div className="flex flex-col">
            {/* --- HERO --- */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-primary pt-28 pb-16">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000"
                        alt="Contact Cool Air System"
                        fill
                        className="object-cover opacity-15"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/60 to-primary/95"></div>
                </div>
                <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse-slow"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <span className="text-accent font-black tracking-[0.3em] text-sm uppercase mb-6 block animate-fade-in-up">Contact Us</span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 animate-reveal">
                        Let&apos;s Build Your <br className="hidden md:block" /> <span className="text-gradient-accent">HVAC Solution</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-medium animate-fade-in-up delay-200">
                        Reach out to our engineering team for consultations, quotes, or service requests.
                    </p>
                </div>
            </section>

            {/* --- CONTACT CARDS + FORM --- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

                        {/* LEFT — Contact Info Cards */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Contact Person */}
                            <div className="bg-primary p-8 rounded-[2rem] shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-accent border border-white/10">
                                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                        </div>
                                        <div>
                                            <h4 className="font-black text-white text-lg">NAMIT SHARMA</h4>
                                            <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Project Coordinator</p>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <a href="tel:+919953666863" className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors font-medium text-sm">
                                            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                            +91 9953666863
                                        </a>
                                        <a href="tel:+918447544817" className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors font-medium text-sm">
                                            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                            +91 8447544817
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Office Address */}
                            <div className="bg-muted p-8 rounded-[2rem] border border-slate-50 shadow-lg">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-royal shadow-sm flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-black text-primary text-sm mb-2">Office Address</h4>
                                        <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                            Shop No- 120, FF, Krishna Palace,<br />
                                            Gurugram 122001, Haryana, India
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Phone Numbers */}
                            <div className="bg-muted p-8 rounded-[2rem] border border-slate-50 shadow-lg">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-royal shadow-sm flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-black text-primary text-sm mb-2">Phone</h4>
                                        <p className="text-slate-600 font-medium text-sm">+91 9953666863</p>
                                        <p className="text-slate-600 font-medium text-sm">+91 8447544817</p>
                                        <p className="text-slate-500 font-medium text-sm mt-1">Landline: 0124-4488147</p>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="bg-muted p-8 rounded-[2rem] border border-slate-50 shadow-lg">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-royal shadow-sm flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-black text-primary text-sm mb-2">Email</h4>
                                        <a href="mailto:coolairsystem6863@gmail.com" className="text-royal font-medium text-sm hover:text-accent transition-colors">coolairsystem6863@gmail.com</a>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/919953666863?text=Hi%2C%20I%20need%20HVAC%20services.%20Please%20share%20details."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white p-5 rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#25D366]/20"
                            >
                                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                Chat on WhatsApp
                            </a>
                        </div>

                        {/* RIGHT — Inquiry Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-muted p-10 md:p-12 rounded-[2.5rem] border border-slate-50 shadow-xl">
                                <h3 className="text-2xl md:text-3xl font-black text-primary mb-3">Send an Inquiry</h3>
                                <p className="text-slate-500 font-medium text-sm mb-10">Fill out the form below and our team will get back to you within 24 hours.</p>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block">Full Name *</label>
                                            <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-xl bg-white border border-slate-100 focus:outline-none focus:border-royal focus:ring-2 focus:ring-royal/10 font-medium text-primary transition-all" />
                                        </div>
                                        <div>
                                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block">Email Address *</label>
                                            <input type="email" placeholder="you@company.com" className="w-full px-6 py-4 rounded-xl bg-white border border-slate-100 focus:outline-none focus:border-royal focus:ring-2 focus:ring-royal/10 font-medium text-primary transition-all" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block">Phone Number *</label>
                                            <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-6 py-4 rounded-xl bg-white border border-slate-100 focus:outline-none focus:border-royal focus:ring-2 focus:ring-royal/10 font-medium text-primary transition-all" />
                                        </div>
                                        <div>
                                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block">Company / Organization</label>
                                            <input type="text" placeholder="Company Name" className="w-full px-6 py-4 rounded-xl bg-white border border-slate-100 focus:outline-none focus:border-royal focus:ring-2 focus:ring-royal/10 font-medium text-primary transition-all" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block">Service Required *</label>
                                        <select className="w-full px-6 py-4 rounded-xl bg-white border border-slate-100 focus:outline-none focus:border-royal focus:ring-2 focus:ring-royal/10 font-medium text-slate-500 transition-all appearance-none">
                                            <option value="">Select a Service</option>
                                            <option>Central Plant Equipment</option>
                                            <option>Ducted HVAC Systems</option>
                                            <option>Non-Ducted Systems</option>
                                            <option>VRV / VRF / Multi-V Systems</option>
                                            <option>Industrial Process Chillers</option>
                                            <option>Commercial Refrigeration</option>
                                            <option>Industrial Water Coolers</option>
                                            <option>Duct Work</option>
                                            <option>Ventilation Systems</option>
                                            <option>HVAC Project Execution</option>
                                            <option>HVAC Maintenance & AMC</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block">Project Details</label>
                                        <textarea placeholder="Describe your requirements, project size, location..." rows={5} className="w-full px-6 py-4 rounded-xl bg-white border border-slate-100 focus:outline-none focus:border-royal focus:ring-2 focus:ring-royal/10 font-medium text-primary transition-all resize-none"></textarea>
                                    </div>

                                    {/* Upload Project Layout */}
                                    <div>
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block">Upload Project Layout (Optional)</label>
                                        <div className="relative">
                                            <input
                                                type="file"
                                                accept=".pdf,.dwg,.jpg,.jpeg,.png,.doc,.docx"
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                                onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                                            />
                                            <div className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white border-2 border-dashed border-slate-200 hover:border-royal transition-all">
                                                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center text-royal">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-primary text-sm">{fileName || "Click to upload or drag & drop"}</p>
                                                    <p className="text-xs text-slate-400 font-medium">PDF, DWG, JPG, PNG, DOC (Max 10MB)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg hover:bg-royal transition-all shadow-xl shadow-primary/20 active:scale-[0.98]">
                                        Submit Inquiry
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MAP / LOCATION --- */}
            <section className="bg-muted py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-primary">Visit Our Office</h2>
                        <p className="text-slate-500 font-medium mt-2">Shop No- 120, FF, Krishna Palace, Gurugram 122001</p>
                    </div>
                    <div className="rounded-[2rem] overflow-hidden shadow-xl border border-slate-100">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2!2d77.01!3d28.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI4JzEyLjAiTiA3N8KwMDAnMzYuMCJF!5e0!3m2!1sen!2sin!4v1646000000000!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}
