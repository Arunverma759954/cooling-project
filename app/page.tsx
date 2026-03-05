import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20">
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel-dark mb-8 animate-fade-in-up">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-white/80 text-xs font-bold tracking-widest uppercase">Daikin Authorized Partner Since 1993</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white leading-[1] mb-8 animate-reveal">
              Engineering <span className="text-gradient-accent">Perfect</span> <br className="hidden md:block" /> Air Environments
            </h1>

            <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed font-medium max-w-2xl animate-fade-in-up delay-200">
              We provide mission-critical HVAC solutions for luxury hospitality, corporate headquarters, and high-tech industrial plants.
            </p>

            <div className="flex flex-wrap gap-6 animate-fade-in-up delay-400">
              <Link href="/services" className="px-10 py-5 bg-accent text-primary font-black text-lg rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-accent/20">
                Explore Solutions
              </Link>
              <Link href="/contact" className="px-10 py-5 glass-panel text-white font-black text-lg rounded-2xl hover:bg-white/10 transition-all border-white/20">
                Contact Sales
              </Link>
            </div>

            {/* Trusted By Bar */}
            <div className="mt-24 pt-8 border-t border-white/10 animate-fade-in delay-500">
              <p className="text-[10px] font-black text-white/40 tracking-[0.3em] uppercase mb-6 text-center sm:text-left">PROUDLY SERVING INDUSTRY LEADERS</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-12 items-center opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <BrandLabel label="DAIKIN" />
                <BrandLabel label="VOLTAS" />
                <BrandLabel label="BLUE STAR" />
                <BrandLabel label="CARRIER" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="relative z-20 -mt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="glass-card rounded-[3rem] p-8 md:p-16 grid grid-cols-2 lg:grid-cols-4 gap-12 border-white shadow-2xl">
            <StatBlock number="30+" label="Years of Excellence" sub="Established 1993" />
            <StatBlock number="750+" label="Major Projects" sub="Completed Nationwide" />
            <StatBlock number="100%" label="System Reliability" sub="Zero Critical Failures" />
            <StatBlock number="24/7" label="Global Support" sub="Emergency Response" />
          </div>
        </div>
      </section>

      {/* --- SERVICES SHOWCASE --- */}
      <section className="py-32 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-accent font-black tracking-[0.2em] text-sm uppercase mb-4 block animate-fade-in-up">What We Do</span>
              <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight">
                Advanced Engineering for <br /> Future-Ready Spaces
              </h2>
            </div>
            <Link href="/services" className="group text-primary font-black flex items-center gap-3 pb-2 border-b-2 border-primary w-fit hover:gap-5 transition-all">
              VIEW ALL SERVICES <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              index="01"
              title="Central DX Systems"
              desc="High-performance direct expansion systems engineered for maximum energy efficiency and precise climate control."
              icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}
            />
            <ServiceCard
              index="02"
              title="VRF/VRV Infrastructure"
              desc="Intelligent multi-zone cooling solutions that adapt to your building's dynamic needs with surgical precision."
              icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>}
            />
            <ServiceCard
              index="03"
              title="Clean Room Solutions"
              desc="Specialized AHU and filtration systems designed for pharmaceutical, healthcare, and sterile laboratory environments."
              icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>}
            />
          </div>
        </div>
      </section>

      {/* --- HIGHLIGHT SECTION --- */}
      <section className="py-32 bg-white flex flex-col items-center">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
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
            <div className="absolute bottom-8 left-8 glass-card p-6 rounded-2xl border-white shadow-xl animate-float">
              <span className="text-3xl font-black text-primary block">98%</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Client Satisfaction</span>
            </div>
          </div>

          <div>
            <span className="text-royal font-black tracking-[0.2em] text-sm uppercase mb-4 block">Our Advantage</span>
            <h3 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">
              Why Global Brands Choose <br /> Cooling Solutions
            </h3>
            <div className="space-y-10">
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
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-32 mb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative rounded-[4rem] overflow-hidden bg-primary p-12 md:p-24 text-center">
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
              <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight animate-scale-in">
                Ready to Upgrade Your Climate?
              </h2>
              <p className="text-xl text-white/70 mb-12 font-medium">
                Book a professional site audit today and discover how our engineering can optimize your operational costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact" className="px-12 py-6 bg-white text-primary font-black text-xl rounded-2xl hover:bg-slate-100 transition-all shadow-xl">
                  Get a Free Audit
                </Link>
                <Link href="/services" className="px-12 py-6 glass-panel text-white font-black text-xl rounded-2xl hover:bg-white/10 transition-all border-white/20">
                  Our Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatBlock({ number, label, sub }: { number: string; label: string; sub: string }) {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left border-r last:border-0 border-slate-100 group">
      <div className="text-5xl md:text-6xl font-black text-royal mb-3 group-hover:scale-110 transition-transform origin-left">{number}</div>
      <div className="text-sm font-black text-slate-900 uppercase tracking-tighter mb-1">{label}</div>
      <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">{sub}</div>
    </div>
  );
}

function ServiceCard({ index, title, desc, icon }: { index: string; title: string; desc: string; icon: any }) {
  return (
    <div className="hover-lift glass-card p-12 rounded-[3.5rem] group relative overflow-hidden border-slate-100">
      <div className="absolute top-10 right-10 text-7xl font-black text-slate-100 group-hover:text-accent/10 transition-colors uppercase italic">{index}</div>
      <div className="text-royal mb-12 group-hover:text-accent transition-colors">
        {icon}
      </div>
      <h4 className="text-2xl font-black text-primary mb-6">{title}</h4>
      <p className="text-slate-500 font-medium leading-relaxed mb-10">
        {desc}
      </p>
      <Link href="/services" className="text-xs font-black tracking-[0.2em] text-slate-400 hover:text-royal transition-colors uppercase flex items-center gap-2">
        EXPLORE CASE STUDY →
      </Link>
    </div>
  );
}

function AdvantageItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-6 group">
      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-royal border border-slate-100 group-hover:bg-royal group-hover:text-white transition-all">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <div>
        <h4 className="text-xl font-black text-primary mb-2 group-hover:text-royal transition-colors">{title}</h4>
        <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function BrandLabel({ label }: { label: string }) {
  return (
    <span className="text-white font-black text-2xl tracking-tighter hover:text-accent transition-colors cursor-default">
      {label}
    </span>
  );
}
