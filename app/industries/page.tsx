import Link from 'next/link';
import Image from 'next/image';

const industries = [
    {
        title: "Manufacturing Units",
        needs: "Process cooling, factory ventilation, and temperature-controlled production environments.",
        solutions: ["Central Plant Systems", "Industrial Chillers", "Ventilation Systems", "AMC Contracts"],
        caseRef: "Designed and installed a 500 TR chilled water system for a leading auto-parts manufacturing plant in Gurugram.",
    },
    {
        title: "Commercial Buildings",
        needs: "Energy-efficient centralized cooling for offices, retail complexes, and mixed-use developments.",
        solutions: ["VRV/VRF Systems", "Ducted HVAC", "Building Management Integration", "Preventive Maintenance"],
        caseRef: "Turnkey HVAC execution for a 3-lakh sq.ft. corporate tower in Noida with VRF infrastructure.",
    },
    {
        title: "Hospitals & Healthcare",
        needs: "Sterile air environments, OT-grade HVAC, infection control, and 24/7 reliability.",
        solutions: ["Clean Room AHU", "HEPA Filtration", "Positive Pressure Systems", "Emergency AMC Support"],
        caseRef: "Delivered OT-grade climate control for a 200-bed multi-specialty hospital in Delhi NCR.",
    },
    {
        title: "Hotels & Hospitality",
        needs: "Guest comfort, energy optimization, banquet hall cooling, and kitchen ventilation.",
        solutions: ["VRV/VRF for Guest Rooms", "Central Plant for Banquets", "Kitchen Exhaust Systems", "Smart Controls"],
        caseRef: "Complete HVAC design and execution for a 150-room luxury hotel in Jaipur.",
    },
    {
        title: "IT Parks & Tech Campuses",
        needs: "Server room cooling, high-density office cooling, and energy-efficient campus-wide systems.",
        solutions: ["Precision Cooling", "Raised Floor Systems", "Redundant Chiller Plants", "BMS Integration"],
        caseRef: "Deployed precision cooling for a 10,000 sq.ft. data center in Hyderabad.",
    },
    {
        title: "Cold Storage & Food Processing",
        needs: "Controlled temperature environments, blast freezing, and cold chain compliance.",
        solutions: ["Cold Rooms", "Blast Freezers", "Refrigeration Plants", "Temperature Monitoring"],
        caseRef: "Installed a multi-chamber cold storage facility for a dairy processing unit in Punjab.",
    },
    {
        title: "Educational Institutions",
        needs: "Comfortable learning environments, auditorium cooling, and laboratory ventilation.",
        solutions: ["Ducted Systems", "VRF for Classrooms", "Lab Exhaust Systems", "Energy-Efficient Design"],
        caseRef: "HVAC installation for a 50,000 sq.ft. university campus building in Greater Noida.",
    },
    {
        title: "Government Infrastructure",
        needs: "Compliance-driven, energy-efficient solutions for public buildings and defense establishments.",
        solutions: ["Central Plant Equipment", "Ducted Systems", "Ventilation", "AMC & Compliance Documentation"],
        caseRef: "Successfully executed HVAC projects for multiple government administrative buildings in Delhi.",
    },
];

const reasons = [
    {
        title: "Engineering Expertise",
        desc: "Our team consists of certified mechanical engineers and technicians with decades of specialized experience in complex HVAC systems. We don't just install; we engineer climate solutions based on rigorous load calculations and thermodynamics.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
        ),
    },
    {
        title: "Latest Technology",
        desc: "We deploy state-of-the-art HVAC components including inverter-driven compressors, smart Building Management Systems (BMS), and high-efficiency heat recovery units to maximize your operational efficiency and lower the carbon footprint.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
        ),
    },
    {
        title: "Transparent Pricing",
        desc: "No hidden costs, no surprise additions. We provide fully detailed project estimations upfront, breaking down equipment costs, material specifications, and labor so you know exactly what you are investing in.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
        ),
    },
    {
        title: "Dedicated Project Managers",
        desc: "Every project is assigned a single-point-of-contact Project Manager who ensures timelines are met, quality is maintained, and stakeholders are kept informed from the initial design phase through to final commissioning.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
        ),
    },
    {
        title: "Fast Service Response",
        desc: "HVAC failures mean downtime. We offer rapid breakdown response times and 24/7 technical support for our AMC clients, ensuring your critical cooling infrastructure is back online with minimal disruption.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
        ),
    },
    {
        title: "Safety & Compliance Focus",
        desc: "We rigorously adhere to ISHRAE, ASHRAE, and local building codes. Safety is paramount on our work sites, and our finished systems always meet all regulatory mandates and environmental compliance standards.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
        ),
    },
];

export default function Industries() {
    return (
        <div className="flex flex-col">
            {/* --- HERO --- */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-primary pt-28 pb-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                        alt="Industries We Serve"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/60 to-primary/95"></div>
                </div>
                <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-royal/15 rounded-full blur-[120px] animate-pulse-slow"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <span className="text-accent font-black tracking-[0.3em] text-sm uppercase mb-6 block animate-fade-in-up">Industries</span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-8 animate-reveal">
                        Serving <span className="text-gradient-accent">Every</span> <br className="hidden md:block" /> Industry with Precision
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-medium animate-fade-in-up delay-200">
                        From manufacturing floors to luxury hotels — we engineer climate solutions tailored to each sector&apos;s unique demands.
                    </p>
                </div>
            </section>

            {/* --- INDUSTRIES GRID --- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="space-y-20">
                        {industries.map((industry, idx) => (
                            <div key={idx} className={`grid grid-cols-1 lg:grid-cols-5 gap-12 items-start ${idx % 2 === 1 ? '' : ''}`}>
                                {/* Industry Info - 3 columns */}
                                <div className={`lg:col-span-3 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-xs font-black text-accent tracking-[0.3em] uppercase">{String(idx + 1).padStart(2, '0')}</span>
                                        <div className="h-px w-12 bg-accent/30"></div>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-black text-primary mb-6 leading-tight">{industry.title}</h2>

                                    <div className="mb-8">
                                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Common HVAC Needs</h4>
                                        <p className="text-lg text-slate-600 font-medium leading-relaxed">{industry.needs}</p>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Solutions Provided</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {industry.solutions.map((sol, i) => (
                                                <span key={i} className="px-4 py-2 bg-muted rounded-xl text-xs font-black text-primary border border-slate-100">
                                                    {sol}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Case Reference Card - 2 columns */}
                                <div className={`lg:col-span-2 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div className="bg-muted p-8 rounded-[2rem] border border-slate-50 shadow-lg">
                                        <div className="flex items-center gap-2 mb-4">
                                            <svg className="w-5 h-5 text-royal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <span className="text-xs font-black text-royal uppercase tracking-widest">Case Reference</span>
                                        </div>
                                        <p className="text-slate-700 font-medium text-sm leading-relaxed">{industry.caseRef}</p>
                                    </div>
                                </div>

                                {/* Divider */}
                                {idx < industries.length - 1 && (
                                    <div className="lg:col-span-5 border-b border-slate-100"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- WHY CHOOSE US SECTION --- */}
            <section className="py-24 bg-slate-50 relative border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-accent font-black tracking-[0.3em] text-sm uppercase mb-4 block">The Cool Air Advantage</span>
                        <h2 className="text-3xl md:text-5xl font-black text-primary">Why Choose Us?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {reasons.map((reason, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-royal/10 hover:-translate-y-2 transition-all duration-500 h-full relative overflow-hidden">
                                    {/* Background decorative element */}
                                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-royal transition-colors duration-500 ease-in-out -z-10"></div>
                                    <div className="absolute right-6 top-6 text-slate-100 group-hover:text-white transition-colors duration-500 z-0">
                                        <span className="text-6xl font-black opacity-50">{String(idx + 1).padStart(2, '0')}</span>
                                    </div>

                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center text-royal mb-8 group-hover:scale-110 group-hover:bg-royal group-hover:text-white transition-all duration-500 shadow-sm">
                                            {reason.icon}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-black text-primary mb-4">{reason.title}</h3>
                                        <div className="h-1 w-12 bg-accent rounded-full mb-6 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                                        <p className="text-slate-600 font-medium leading-relaxed">
                                            {reason.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA --- */}
            <section className="py-24 bg-muted px-4">
                <div className="max-w-5xl mx-auto bg-primary rounded-[4rem] text-center p-12 md:p-24 relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-royal via-primary to-accent opacity-40"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Don&apos;t See Your Industry?</h2>
                        <p className="text-white/60 text-lg font-medium mb-10 max-w-2xl mx-auto">We engineer custom HVAC solutions for every sector. Reach out and let us understand your requirements.</p>
                        <Link href="/contact" className="inline-block px-12 py-5 bg-white text-primary font-black text-xl rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl">
                            Contact Us →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
