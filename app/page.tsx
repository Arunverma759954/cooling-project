import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-primary pt-24 pb-12">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&q=80&w=2000"
            alt="Industrial Cooling Infrastructure"
            fill
            className="object-cover opacity-40 scale-105 animate-float"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary/90"></div>
          {/* Animated Glows */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-royal/30 rounded-full blur-[120px] animate-pulse-slow delay-700"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel-dark mb-6 animate-fade-in-up">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-white/80 text-[10px] md:text-xs font-bold tracking-widest uppercase">Daikin Authorized Partner Since 1993</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 animate-reveal">
              Engineering <span className="text-gradient-accent">Perfect</span> <br className="hidden md:block" /> Air Environments
            </h1>

            <p className="text-base md:text-lg text-white/70 mb-8 leading-relaxed font-medium max-w-2xl animate-fade-in-up delay-200">
              We provide mission-critical HVAC solutions for luxury hospitality, corporate headquarters, and high-tech industrial plants.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-400 mb-12">
              <Link href="/services" className="px-8 py-3.5 bg-accent text-primary font-bold text-base rounded-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-accent/20">
                Explore Solutions
              </Link>
              <Link href="/contact" className="px-8 py-3.5 glass-panel text-white font-bold text-base rounded-xl hover:bg-white/10 transition-all border-white/20">
                Contact Sales
              </Link>
            </div>

            {/* --- UNIFIED PROFESSIONAL INFO CARD --- */}
            <div className="animate-fade-in-up delay-500 bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-slate-100 relative z-20 overflow-hidden group">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-accent/10 transition-colors"></div>

              <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
                {/* Brand Partners (Compact & Elegant) */}
                <div className="lg:w-[35%] border-b lg:border-b-0 lg:border-r border-slate-100 pb-10 lg:pb-0 lg:pr-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-8 bg-accent/30"></div>
                    <p className="text-[10px] font-black text-slate-500 tracking-[0.25em] uppercase">Trusted Partners</p>
                  </div>
                  <div className="grid grid-cols-2 gap-y-6 gap-x-8 items-center">
                    <BrandLabel label="DAIKIN" />
                    <BrandLabel label="VOLTAS" />
                    <BrandLabel label="BLUE STAR" />
                    <BrandLabel label="CARRIER" />
                  </div>
                </div>

                {/* Statistics Grid */}
                <div className="lg:w-[65%] grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
                  <StatBlock
                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
                    number="30+"
                    label="Years"
                    sub="Since 1993"
                  />
                  <StatBlock
                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
                    number="750+"
                    label="Projects"
                    sub="Nationwide"
                  />
                  <StatBlock
                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}
                    number="100%"
                    label="Reliable"
                    sub="Zero Failures"
                  />
                  <StatBlock
                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>}
                    number="24/7"
                    label="Support"
                    sub="Emergency"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SHOWCASE --- */}
      < section className="py-16 bg-muted relative overflow-hidden" >
        <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-accent font-black tracking-[0.2em] text-sm uppercase mb-3 block animate-fade-in-up">What We Do</span>
              <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight">
                Advanced Engineering for <br /> Future-Ready Spaces
              </h2>
            </div>
            <Link href="/services" className="group text-primary font-black flex items-center gap-3 pb-2 border-b-2 border-primary w-fit hover:gap-5 transition-all">
              VIEW ALL SERVICES <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              index="01"
              title="Central DX Systems"
              desc="High-performance direct expansion systems engineered for maximum energy efficiency and precise climate control."
              icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}
            />
            <ServiceCard
              index="02"
              title="VRF/VRV Infrastructure"
              desc="Intelligent multi-zone cooling solutions that adapt to your building's dynamic needs with surgical precision."
              icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>}
            />
            <ServiceCard
              index="03"
              title="Clean Room Solutions"
              desc="Specialized AHU and filtration systems designed for pharmaceutical, healthcare, and sterile laboratory environments."
              icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>}
            />
          </div>
        </div>
      </section >

      {/* --- HIGHLIGHT SECTION --- */}
      < section className="py-16 bg-white flex flex-col items-center" >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-accent/20 rounded-[3rem] blur-2xl group-hover:bg-accent/30 transition-all duration-500"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                alt="Modern Office Infrastructure"
                width={1200}
                height={800}
                className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Overlay tag */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur border border-white p-5 rounded-2xl shadow-xl animate-float">
              <span className="text-3xl font-black text-primary block">98%</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Client Satisfaction</span>
            </div>
          </div>

          <div>
            <span className="text-royal font-black tracking-[0.2em] text-sm uppercase mb-3 block">Our Advantage</span>
            <h3 className="text-3xl md:text-5xl font-black text-primary mb-6 leading-tight">
              Why Global Brands Choose <br className="hidden md:block" /> Cooling Solutions
            </h3>
            <div className="space-y-8">
              <AdvantageItem
                title="Precision Forensics"
                desc="We use thermal imaging and airflow sensors to diagnose inefficiencies that regular audits miss."
              />
              <AdvantageItem
                title="Eco-Sync Maintenance"
                desc="AI-driven preventive maintenance schedules that reduce energy consumption by up to 25%."
              />
              <AdvantageItem
                title="Rapid Response DNA"
                desc="Guaranteed 4-hour on-site presence for critical infrastructure failures across Metro regions."
              />
            </div>
          </div>
        </div>
      </section >

      {/* --- CALL TO ACTION --- */}
      < section className="py-16 mb-16" >
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative rounded-[3rem] overflow-hidden bg-primary p-8 md:p-16 text-center">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-royal via-primary to-accent opacity-60"></div>
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200"
                alt="CTA Background"
                fill
                className="object-cover opacity-20"
              />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight animate-scale-in">
                Ready to Upgrade Your Climate?
              </h2>
              <p className="text-lg md:text-xl text-white/70 mb-10 font-medium">
                Book a professional site audit today and discover how our engineering can optimize your operational costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-primary font-black text-lg rounded-2xl hover:bg-slate-100 transition-all shadow-xl">
                  Get a Free Audit
                </Link>
                <Link href="/services" className="px-8 py-4 glass-panel text-white font-black text-lg rounded-2xl hover:bg-white/10 transition-all border-white/20">
                  Our Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}

function StatBlock({ icon, number, label, sub }: { icon?: React.ReactNode; number: string; label: string; sub: string }) {
  return (
    <div className="flex flex-col text-left group/stat">
      {icon && <div className="text-accent mb-2 transition-transform group-hover/stat:scale-110 group-hover/stat:rotate-3">{icon}</div>}
      <div className="text-2xl md:text-3xl font-black text-royal mb-0.5 tracking-tight">{number}</div>
      <div className="text-[10px] font-black text-slate-900 uppercase tracking-tighter mb-0.5">{label}</div>
      <div className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">{sub}</div>
    </div>
  );
}

function ServiceCard({ index, title, desc, icon }: { index: string; title: string; desc: string; icon: any }) {
  return (
    <div className="hover-lift glass-card p-8 md:p-10 rounded-[2.5rem] group relative overflow-hidden border-slate-100">
      <div className="absolute top-8 right-8 text-6xl font-black text-slate-100 group-hover:text-accent/10 transition-colors uppercase italic">{index}</div>
      <div className="text-royal mb-8 group-hover:text-accent transition-colors">
        {icon}
      </div>
      <h4 className="text-xl md:text-2xl font-black text-primary mb-4">{title}</h4>
      <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed mb-8">
        {desc}
      </p>
      <Link href="/services" className="text-[10px] md:text-xs font-black tracking-[0.2em] text-slate-400 hover:text-royal transition-colors uppercase flex items-center gap-2">
        EXPLORE CASE STUDY →
      </Link>
    </div>
  );
}

function AdvantageItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-4 md:gap-6 group">
      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-muted flex items-center justify-center text-royal border border-slate-100 group-hover:bg-royal group-hover:text-white transition-all">
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <div>
        <h4 className="text-lg md:text-xl font-black text-primary mb-1 md:mb-2 group-hover:text-royal transition-colors">{title}</h4>
        <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function BrandLabel({ label }: { label: string }) {
  return (
    <span className="text-slate-800 font-extrabold text-sm md:text-base tracking-[-0.03em] hover:text-accent transition-all cursor-default whitespace-nowrap">
      {label}
    </span>
  );
}
