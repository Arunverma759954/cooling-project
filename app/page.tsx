import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden bg-primary pt-24 pb-12">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/1.webp"
            alt="Industrial HVAC Infrastructure"
            fill
            className="object-cover opacity-30 scale-105 animate-float"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/50 to-primary/95"></div>
          {/* Animated Glows */}
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-royal/20 rounded-full blur-[120px] animate-pulse-slow delay-700"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">


            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8 animate-reveal">
              Engineering <span className="text-gradient-accent">Intelligent</span> HVAC <br className="hidden md:block" /> Solutions for Every Industry
            </h1>

            <p className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed font-medium max-w-2xl animate-fade-in-up delay-200">
              From central plant systems to industrial chillers — we design, execute, and maintain high-performance HVAC solutions.
            </p>

            <div className="flex flex-wrap gap-5 animate-fade-in-up delay-400">
              <Link href="/contact" className="px-10 py-4 bg-accent text-primary font-black text-lg rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-accent/25">
                Request a Quote
              </Link>
              <Link href="/contact" className="px-10 py-4 glass-panel text-white font-black text-lg rounded-2xl hover:bg-white/10 transition-all border-white/15">
                Talk to an HVAC Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHO WE ARE --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-muted/20 -skew-x-12 translate-x-32 z-0 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-royal font-black text-sm tracking-[0.3em] uppercase">Who We Are</span>
              <div className="h-px w-12 bg-royal/30"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 leading-tight">
              Dedicated to <br /> <span className="text-gradient-royal">Engineering Excellence</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-3 max-w-xl">
              Cool Air System is more than just an HVAC provider. We are your technical partners in creating sustainable, high-performance environments. With three decades of field-tested expertise, we specialize in the design and execution of complex mechanical engineering solutions across India.
            </p>


            <Link href="/about" className="inline-flex items-center gap-4 text-primary font-black uppercase tracking-widest text-sm hover:text-royal transition-all group">
              Our Full Story <span className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">→</span>
            </Link>
          </div>

          <div className="relative lg:pl-10">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-royal/10 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

            <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl animate-fade-in-up delay-200 aspect-[4/5] lg:aspect-square group">
              <Image
                src="/2.webp"
                alt="HVAC Engineering Excellence"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="glass-panel-dark p-6 rounded-2xl border-white/10 backdrop-blur-md">
                  <p className="text-white font-bold text-lg leading-snug italic">"Precision in every joint, excellence in every calculation."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: CORE SERVICES --- */}
      <section className="py-24 bg-muted relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
            <span className="text-accent font-black tracking-[0.25em] text-sm uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">Our Core Services Overview</h2>
            <p className="text-slate-500 font-medium">Precision engineering for high-performance climate control across all major system architectures.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceBlock
              title="Central Plant Equipment"
              icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.722 2.52a2 2 0 00.51 2.067l.836.836a2 2 0 002.344.383l1.793-.896a2 2 0 001.109-1.3l.542-2.31a2 2 0 00-.546-1.7l-.4-.4a2 2 0 00-1.097-.547z" /></svg>}
            />
            <ServiceBlock
              title="Ducted HVAC Systems"
              icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>}
            />
            <ServiceBlock
              title="Non-Ducted Systems"
              icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>}
            />
            <ServiceBlock
              title="VRV / VRF / Multi-V Systems"
              icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>}
            />
            <ServiceBlock
              title="Industrial Process Chillers"
              icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.722 2.52a2 2 0 00.51 2.067l.836.836a2 2 0 002.344.383l1.793-.896a2 2 0 001.109-1.3l.542-2.31a2 2 0 00-.546-1.7l-.4-.4a2 2 0 00-1.097-.547z" /></svg>}
            />
            <ServiceBlock
              title="Commercial Refrigeration"
              icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>}
            />
            <ServiceBlock
              title="Industrial Water Coolers"
              icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>}
            />
            <ServiceBlock
              title="Duct Work"
              icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
            />
            <ServiceBlock
              title="Ventilation Systems"
              icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            />
            <ServiceBlock
              title="HVAC Project Execution"
              icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>}
            />
            <ServiceBlock
              title="HVAC Maintenance & AMC"
              icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
            />
          </div>

          <div className="mt-16 text-center animate-fade-in-up delay-400">
            <Link href="/services" className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-royal transition-all shadow-xl">
              Explore All Services <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: INDUSTRIES WE SERVE --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 animate-fade-in-up">
            <div className="max-w-2xl">
              <span className="text-royal font-black tracking-[0.25em] text-sm uppercase mb-4 block">Our Impact</span>
              <h2 className="text-3xl md:text-4xl font-black text-primary leading-tight">Industries We Serve</h2>
            </div>
            <div className="h-px bg-slate-100 flex-grow hidden md:block mx-12 mb-6"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <IndustryCard title="Manufacturing Units" />
            <IndustryCard title="Commercial Buildings" />
            <IndustryCard title="Hospitals & Healthcare" />
            <IndustryCard title="Hotels & Hospitality" />
            <IndustryCard title="IT Parks" />
            <IndustryCard title="Cold Storage & Food Processing" />
            <IndustryCard title="Educational Institutions" />
            <IndustryCard title="Government Infrastructure" />
          </div>
        </div>
      </section>

      {/* --- SECTION 5: WHY COOL AIR SYSTEM --- */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <span className="text-accent font-black tracking-[0.25em] text-sm uppercase mb-4 block">Advantage</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Why Cool Air System?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <WhyItem title="Certified HVAC Engineers" desc="Fully qualified team with deep technical specialization." />
            <WhyItem title="Turnkey Project Execution" desc="End-to-end management from design to commissioning." />
            <WhyItem title="Energy Efficient Solutions" desc="Optimizing performance to reduce operational costs." />
            <WhyItem title="Timely Delivery" desc="Strict adherence to project timelines and milestones." />
            <WhyItem title="Competitive Pricing" desc="Maximum value without compromising engineering quality." />
            <WhyItem title="Strong After-Sales Support" desc="Guaranteed performance throughout the system lifecycle." />
          </div>
        </div>
      </section>

      {/* --- SECTION 6: PROJECT SHOWCASE --- */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-20 animate-fade-in-up">
            <span className="text-royal font-black tracking-[0.25em] text-sm uppercase mb-4 block">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-black text-primary">Project Showcase</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="group relative bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 hover:border-accent transition-all duration-500">
              <div className="flex flex-col gap-6">
                <div className="w-full h-80 rounded-3xl overflow-hidden mb-4">
                  <Image
                    src="/6.webp"
                    alt="Project"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-slate-50 pb-3">
                    <span className="font-bold text-slate-400 uppercase text-xs tracking-widest">Location</span>
                    <span className="font-black text-primary">NCR Region</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 pb-3">
                    <span className="font-bold text-slate-400 uppercase text-xs tracking-widest">Capacity</span>
                    <span className="font-black text-primary">1200 TR</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 pb-3">
                    <span className="font-bold text-slate-400 uppercase text-xs tracking-widest">Type of system</span>
                    <span className="font-black text-primary">Central Chilled Water</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-400 uppercase text-xs tracking-widest">Project scope</span>
                    <span className="font-black text-primary text-right">Design & Build</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-12 lg:pl-12">
              <h3 className="text-3xl font-black text-primary leading-tight">Delivering mission-critical cooling for premium infrastructure.</h3>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">Our portfolio spans complex industrial plants, luxury hospitality, and high-security government facilities, each demanding surgical precision in climate control.</p>
              <Link href="/services" className="px-10 py-4 bg-royal text-white font-black text-lg rounded-2xl w-fit hover:bg-primary transition-all shadow-xl shadow-royal/20 uppercase tracking-widest">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: MAINTENANCE & AMC --- */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-muted/30 -skew-x-12 translate-x-32 z-0 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <span className="text-accent font-black tracking-[0.25em] text-sm uppercase mb-4 block">Life Cycle Support</span>
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-8 leading-tight">
              Preventive Maintenance That <br /> Protects Your Investment
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10">
              Content on AMC contracts, preventive service schedules, breakdown response, and performance optimization. We ensure your systems run at peak efficiency 24/7.
            </p>
            <Link href="/contact" className="px-10 py-4 bg-primary text-white font-black text-lg rounded-2xl hover:bg-accent transition-all shadow-xl group">
              Get AMC Proposal <span className="inline-block transform group-hover:translate-x-2 transition-transform ml-2">→</span>
            </Link>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            <div className="bg-muted p-8 rounded-[2rem] border border-slate-100 hover:border-royal transition-all">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm mb-6 flex items-center justify-center text-royal">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h4 className="font-black text-primary mb-2">24/7 Support</h4>
              <p className="text-sm text-slate-500">Rapid response for emergency breakdowns.</p>
            </div>
            <div className="bg-muted p-8 rounded-[2rem] border border-slate-100 hover:border-royal transition-all mt-8">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm mb-6 flex items-center justify-center text-royal">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h4 className="font-black text-primary mb-2">Audit Ready</h4>
              <p className="text-sm text-slate-500">Compliance and efficiency audits included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 8: FINAL CTA --- */}
      <section className="py-24 bg-muted mb-16 px-4">
        <div className="max-w-5xl mx-auto bg-primary rounded-[4rem] text-center p-12 md:p-24 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-royal via-primary to-accent opacity-40"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">Ready to Optimize Your <br /> HVAC Infrastructure?</h2>
            <Link href="/contact" className="inline-block px-12 py-5 bg-white text-primary font-black text-xl rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl">
              Get Started →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceBlock({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="group bg-white p-5 rounded-[2rem] shadow-xl border border-slate-50 hover:border-accent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      <div className="text-royal mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
        <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center p-3">
          {icon}
        </div>
      </div>
      <h4 className="text-base font-black text-primary leading-tight group-hover:text-royal transition-colors">{title}</h4>
      <div className="h-0.5 w-0 bg-accent mt-3 group-hover:w-full transition-all duration-500"></div>
    </div>
  );
}

function IndustryCard({ title }: { title: string }) {
  return (
    <div className="bg-muted p-8 rounded-[2rem] border border-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center justify-center text-center">
      <span className="font-black text-primary text-sm uppercase tracking-wider">{title}</span>
    </div>
  );
}

function WhyItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-6 group">
      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <div className="space-y-2">
        <h4 className="text-xl font-black text-white group-hover:text-accent transition-colors">{title}</h4>
        <p className="text-white/40 font-medium text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
