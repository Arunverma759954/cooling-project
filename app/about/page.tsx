import Link from 'next/link';
import Image from 'next/image';

export default function About() {
    return (
        <div className="flex flex-col">
            {/* --- HERO --- */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-primary pt-28 pb-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/6.webp"
                        alt="About Cool Air System"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/60 to-primary/95"></div>
                </div>
                <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-1/3 -right-32 w-[500px] h-[500px] bg-royal/15 rounded-full blur-[120px] animate-pulse-slow delay-700"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <span className="text-accent font-black tracking-[0.3em] text-sm uppercase mb-6 block animate-fade-in-up">About Us</span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-8 animate-reveal">
                        Engineering <span className="text-gradient-accent">Comfort.</span> <br className="hidden md:block" /> Delivering Performance.
                    </h1>
                </div>
            </section>

            {/* --- WHO WE ARE --- */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="animate-fade-in-up">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-12 bg-accent"></div>
                            <span className="text-accent font-black tracking-[0.25em] text-xs uppercase">Who We Are</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-primary mb-8 leading-tight">
                            A Professional HVAC Solutions Provider
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
                            Cool Air System is a professional HVAC solutions provider offering end-to-end climate control systems for commercial and industrial applications. Our team of engineers, project managers, and skilled technicians ensures precision planning, seamless installation, and reliable long-term maintenance.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10">
                            We combine advanced technology, industry best practices, and compliance standards to deliver solutions that reduce operational costs while maximizing performance.
                        </p>
                        <div className="grid grid-cols-3 gap-6 border-t border-slate-100 pt-10">
                            <div>
                                <span className="text-3xl font-black text-royal block mb-1">30+</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Years Experience</span>
                            </div>
                            <div>
                                <span className="text-3xl font-black text-royal block mb-1">750+</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Projects Done</span>
                            </div>
                            <div>
                                <span className="text-3xl font-black text-royal block mb-1">24/7</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Support</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-accent/10 rounded-[3rem] blur-2xl group-hover:bg-accent/20 transition-all duration-700"></div>
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/5.webp"
                                alt="HVAC Engineering Team"
                                width={1200}
                                height={900}
                                className="w-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MISSION & VISION --- */}
            <section className="py-24 bg-muted">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <span className="text-royal font-black tracking-[0.25em] text-sm uppercase mb-4 block">Our Purpose</span>
                        <h2 className="text-3xl md:text-5xl font-black text-primary">Mission & Vision</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-50 hover:border-accent transition-all group">
                            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <h3 className="text-2xl font-black text-primary mb-4">Our Mission</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                To deliver sustainable and high-efficiency HVAC solutions that meet evolving infrastructure demands. We are committed to providing the highest quality climate control systems while maintaining the highest standards of safety, environmental responsibility, and customer satisfaction.
                            </p>
                        </div>
                        <div className="bg-primary p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-primary transition-all">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                </div>
                                <h3 className="text-2xl font-black text-white mb-4">Our Vision</h3>
                                <p className="text-white/60 leading-relaxed font-medium">
                                    To become a trusted leader in industrial and commercial HVAC engineering across India. We aspire to set new benchmarks in energy efficiency, project execution, and client satisfaction through innovation and engineering excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- WHY CHOOSE US --- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <span className="text-accent font-black tracking-[0.25em] text-sm uppercase mb-4 block">Our Edge</span>
                        <h2 className="text-3xl md:text-5xl font-black text-primary">Why Choose Cool Air System</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <WhyCard title="Engineering Expertise" desc="Decades of hands-on experience in designing and executing complex HVAC projects across diverse industries." />
                        <WhyCard title="Latest Technology" desc="We leverage cutting-edge HVAC technologies and smart automation for optimal performance and energy savings." />
                        <WhyCard title="Transparent Pricing" desc="No hidden costs. We provide detailed, itemized quotations ensuring complete financial clarity for every project." />
                        <WhyCard title="Dedicated Project Managers" desc="Every project is assigned a dedicated manager who ensures seamless communication and on-time delivery." />
                        <WhyCard title="Fast Service Response" desc="Our rapid-response support team ensures minimal downtime with guaranteed quick turnaround for all service calls." />
                        <WhyCard title="Safety & Compliance Focus" desc="Strict adherence to all safety protocols, building codes, and environmental compliance standards across every project." />
                    </div>
                </div>
            </section>

            {/* --- CTA --- */}
            <section className="py-24 bg-muted px-4">
                <div className="max-w-5xl mx-auto bg-primary rounded-[4rem] text-center p-12 md:p-24 relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-royal via-primary to-accent opacity-40"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Partner With Us for <br /> Engineering Excellence</h2>
                        <p className="text-white/60 text-lg font-medium mb-10 max-w-2xl mx-auto">Let our team of certified HVAC engineers design and deliver the perfect climate solution for your facility.</p>
                        <Link href="/contact" className="inline-block px-12 py-5 bg-white text-primary font-black text-xl rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl">
                            Get in Touch →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

function WhyCard({ title, desc }: { title: string; desc: string }) {
    return (
        <div className="group bg-muted p-10 rounded-[2.5rem] border border-slate-50 hover:bg-white hover:shadow-2xl hover:border-accent hover:-translate-y-2 transition-all duration-500">
            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-royal mb-8 group-hover:bg-royal group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h4 className="text-xl font-black text-primary mb-3 group-hover:text-royal transition-colors">{title}</h4>
            <p className="text-slate-500 font-medium text-sm leading-relaxed">{desc}</p>
        </div>
    );
}
