import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
    return (
        <div className="flex flex-col">
            {/* --- HERO --- */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-primary pt-28 pb-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/1.webp"
                        alt="HVAC Services"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/60 to-primary/95"></div>
                </div>
                <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-1/3 -right-32 w-[500px] h-[500px] bg-royal/15 rounded-full blur-[120px] animate-pulse-slow delay-700"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <span className="text-accent font-black tracking-[0.3em] text-sm uppercase mb-6 block animate-fade-in-up">Our Services</span>
                    <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8 animate-reveal">
                        Comprehensive <span className="text-gradient-accent">HVAC</span> <br className="hidden md:block" /> Engineering Solutions
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-medium animate-fade-in-up delay-200">
                        From design and supply to installation and commissioning — end-to-end mechanical and HVAC engineering services for every industry.
                    </p>
                </div>
            </section>

            {/* ============================================================= */}
            {/* SERVICE 1: CENTRAL PLANT EQUIPMENT */}
            {/* ============================================================= */}
            <section id="central-plant" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-accent font-black text-sm tracking-[0.2em] uppercase">01</span>
                                <div className="h-px w-12 bg-accent/30"></div>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black text-primary mb-8 leading-tight">Central Plant Equipment</h2>

                            <div className="mb-10">
                                <h4 className="text-xs font-black text-accent uppercase tracking-[0.25em] mb-4">Overview</h4>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    Design and installation of centralized HVAC systems for large-scale infrastructure including chillers, cooling towers, AHUs, pumps, and piping networks. Our central plant solutions are engineered for maximum efficiency and long-term reliability, providing comprehensive climate control for the most demanding environments.
                                </p>
                            </div>

                            <div className="mb-10">
                                <h4 className="text-xs font-black text-royal uppercase tracking-[0.25em] mb-4">Applications</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {["Malls", "Hospitals", "Corporate Offices", "Industrial Complexes"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 py-3 px-4 bg-muted rounded-xl border border-slate-50">
                                            <svg className="w-5 h-5 text-royal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                            <span className="font-bold text-primary text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-10">
                                <h4 className="text-xs font-black text-royal uppercase tracking-[0.25em] mb-4">Key Features</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {["Chiller Systems", "Cooling Towers", "AHU Integration", "Piping Networks", "Pump Systems", "Control Panels"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                                            <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Link href="/contact" className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-black hover:bg-royal transition-all shadow-lg text-sm">
                                Get a Quote <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Link>
                        </div>

                        <ServiceBenefits items={[
                            { title: "High Energy Efficiency", desc: "Optimized central systems that significantly reduce operational energy consumption." },
                            { title: "Centralized Control", desc: "Single-point management of your entire climate infrastructure for streamlined operations." },
                            { title: "Long Operational Life", desc: "Industrial-grade components engineered for decades of reliable performance." },
                        ]} />
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4"><div className="border-b border-slate-100"></div></div>

            {/* ============================================================= */}
            {/* SERVICE 2: DUCTED HVAC SYSTEMS */}
            {/* ============================================================= */}
            <section id="ducted" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-accent font-black text-sm tracking-[0.2em] uppercase">02</span>
                                <div className="h-px w-12 bg-accent/30"></div>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black text-primary mb-8 leading-tight">Ducted HVAC Systems</h2>

                            <div className="mb-10">
                                <h4 className="text-xs font-black text-accent uppercase tracking-[0.25em] mb-4">Overview</h4>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    Efficient air distribution through duct networks for uniform cooling across large commercial spaces. Our ducted systems ensure consistent temperature control and air quality throughout your facility, designed for maximum performance and minimal noise.
                                </p>
                            </div>

                            <div className="mb-10">
                                <h4 className="text-xs font-black text-royal uppercase tracking-[0.25em] mb-4">Includes</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {["AHU Installation", "Duct Fabrication", "Insulation", "Testing & Commissioning"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 py-3 px-4 bg-muted rounded-xl border border-slate-50">
                                            <svg className="w-5 h-5 text-royal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                            <span className="font-bold text-primary text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-10">
                                <h4 className="text-xs font-black text-royal uppercase tracking-[0.25em] mb-4">Key Features</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {["Custom Duct Design", "Thermal Insulation", "Air Balancing", "System Commissioning", "Noise Reduction", "GI & Pre-Insulated Ducts"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                                            <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Link href="/contact" className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-black hover:bg-royal transition-all shadow-lg text-sm">
                                Get a Quote <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Link>
                        </div>

                        <ServiceBenefits items={[
                            { title: "Uniform Air Distribution", desc: "Consistent temperature and airflow across every zone in your facility." },
                            { title: "Low Noise Operation", desc: "Acoustically engineered systems that maintain a quiet, productive environment." },
                            { title: "Scalable Design", desc: "Modular duct networks that can be expanded as your facility grows." },
                        ]} />
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4"><div className="border-b border-slate-100"></div></div>

            {/* ============================================================= */}
            {/* SERVICE 3: NON-DUCTED SYSTEMS */}
            {/* ============================================================= */}
            <section id="non-ducted" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-accent font-black text-sm tracking-[0.2em] uppercase">03</span>
                                <div className="h-px w-12 bg-accent/30"></div>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black text-primary mb-8 leading-tight">Non-Ducted Systems</h2>

                            <div className="mb-10">
                                <h4 className="text-xs font-black text-accent uppercase tracking-[0.25em] mb-4">Overview</h4>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    Ideal for smaller spaces requiring flexible installation. Non-ducted systems provide efficient cooling without the need for complex ductwork, offering quick deployment and cost-effective climate control solutions for a variety of environments.
                                </p>
                            </div>

                            <div className="mb-10">
                                <h4 className="text-xs font-black text-royal uppercase tracking-[0.25em] mb-4">System Types</h4>
                                <div className="grid grid-cols-1 gap-3">
                                    {["Split AC Systems", "Cassette Units", "Floor Mounted Units"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 py-3 px-4 bg-muted rounded-xl border border-slate-50">
                                            <svg className="w-5 h-5 text-royal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                            <span className="font-bold text-primary text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-10">
                                <h4 className="text-xs font-black text-royal uppercase tracking-[0.25em] mb-4">Key Features</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {["Wall Mounted Units", "Ceiling Cassette AC", "Floor Standing AC", "Multi-Split Systems", "Inverter Technology", "Remote Monitoring"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                                            <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Link href="/contact" className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-black hover:bg-royal transition-all shadow-lg text-sm">
                                Get a Quote <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Link>
                        </div>

                        <ServiceBenefits items={[
                            { title: "Quick Installation", desc: "Minimal structural requirements allow for rapid deployment." },
                            { title: "Cost Effective", desc: "Lower upfront investment compared to ducted systems while delivering excellent performance." },
                            { title: "Flexible Placement", desc: "Can be installed in any room configuration without major civil work." },
                        ]} />
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4"><div className="border-b border-slate-100"></div></div>

            {/* ============================================================= */}
            {/* SERVICE 4: VRV / VRF / MULTI-V SYSTEMS */}
            {/* ============================================================= */}
            <section id="vrv-vrf" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-accent font-black text-sm tracking-[0.2em] uppercase">04</span>
                                <div className="h-px w-12 bg-accent/30"></div>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black text-primary mb-8 leading-tight">VRV / VRF / Multi-V Systems</h2>

                            <div className="mb-10">
                                <h4 className="text-xs font-black text-accent uppercase tracking-[0.25em] mb-4">Overview</h4>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    Advanced multi-zone cooling systems designed for energy optimization and precise temperature control. VRV/VRF technology allows different zones of a building to be cooled or heated simultaneously, adapting to dynamic load conditions in real-time.
                                </p>
                            </div>

                            <div className="mb-10">
                                <h4 className="text-xs font-black text-royal uppercase tracking-[0.25em] mb-4">Applications</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {["Commercial Buildings", "Hotels & Resorts", "IT Parks & Offices", "Retail Spaces"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 py-3 px-4 bg-muted rounded-xl border border-slate-50">
                                            <svg className="w-5 h-5 text-royal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                            <span className="font-bold text-primary text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-10">
                                <h4 className="text-xs font-black text-royal uppercase tracking-[0.25em] mb-4">Key Features</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {["Variable Speed Compressor", "Heat Recovery", "Smart Controls", "Simultaneous Heating/Cooling"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                                            <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Link href="/contact" className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-black hover:bg-royal transition-all shadow-lg text-sm">
                                Get a Quote <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Link>
                        </div>

                        <ServiceBenefits items={[
                            { title: "Individual Zone Control", desc: "Each zone can be independently controlled for personalized comfort and efficiency." },
                            { title: "Reduced Energy Consumption", desc: "Inverter-driven compressors adjust output to match actual demand, cutting energy use significantly." },
                            { title: "Compact Design", desc: "Smaller outdoor units with lightweight piping reduce space requirements and installation complexity." },
                        ]} />
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4"><div className="border-b border-slate-100"></div></div>

            {/* ============================================================= */}
            {/* SERVICE 5: INDUSTRIAL PROCESS CHILLERS */}
            {/* ============================================================= */}
            <section id="process-chillers" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-accent font-black text-sm tracking-[0.2em] uppercase">05</span>
                                <div className="h-px w-12 bg-accent/30"></div>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black text-primary mb-8 leading-tight">Industrial Process Chillers</h2>

                            <div className="mb-10">
                                <h4 className="text-xs font-black text-accent uppercase tracking-[0.25em] mb-4">Overview</h4>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    Custom-engineered chillers for manufacturing and process cooling requirements. Our industrial chillers deliver precise temperature control critical for production processes, ensuring product quality and operational efficiency across diverse manufacturing environments.
                                </p>
                            </div>

                            <div className="mb-10">
                                <h4 className="text-xs font-black text-royal uppercase tracking-[0.25em] mb-4">Industries</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {["Pharma", "Plastics", "Chemical", "Food Processing"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 py-3 px-4 bg-muted rounded-xl border border-slate-50">
                                            <svg className="w-5 h-5 text-royal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                            <span className="font-bold text-primary text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-10">
                                <h4 className="text-xs font-black text-royal uppercase tracking-[0.25em] mb-4">Key Features</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {["Water Cooled Chillers", "Air Cooled Chillers", "Scroll Compressor", "Screw Compressor", "Custom Engineering", "Remote Monitoring"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                                            <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Link href="/contact" className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-black hover:bg-royal transition-all shadow-lg text-sm">
                                Get a Quote <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Link>
                        </div>

                        <ServiceBenefits items={[
                            { title: "Precision Temperature Control", desc: "Maintain exact process temperatures critical for manufacturing quality." },
                            { title: "High Reliability", desc: "Built for 24/7 industrial operation with minimal downtime." },
                            { title: "Custom Engineering", desc: "Tailored chiller solutions designed to match specific process requirements." },
                        ]} />
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4"><div className="border-b border-slate-100"></div></div>

            {/* ============================================================= */}
            {/* SERVICE 6: COMMERCIAL REFRIGERATION */}
            {/* ============================================================= */}
            <section id="refrigeration" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                        <div>
                            <ServiceHeader num="06" title="Commercial Refrigeration" />
                            <div className="mb-10">
                                <h4 className="text-xs font-black text-accent uppercase tracking-[0.25em] mb-4">Overview</h4>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    Installation of cold rooms, deep freezers, display units, and refrigeration plants for commercial operations. We provide end-to-end refrigeration solutions designed for food safety, cold chain compliance, and energy efficiency.
                                </p>
                            </div>
                            <ServiceApplications items={["Cold Rooms", "Deep Freezers", "Display Units", "Refrigeration Plants"]} />
                            <ServiceFeatures items={["Walk-in Coolers", "Blast Freezers", "Display Cabinets", "Cold Storage Plants", "Temperature Monitoring", "Energy Recovery"]} />
                            <ServiceCTA />
                        </div>
                        <ServiceBenefits items={[
                            { title: "Temperature Accuracy", desc: "Precise temperature maintenance ensuring product safety and quality." },
                            { title: "Energy Efficient", desc: "Modern compressors and insulation reduce running costs significantly." },
                            { title: "Compliance Ready", desc: "Systems designed to meet all food safety and cold chain regulations." },
                        ]} />
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4"><div className="border-b border-slate-100"></div></div>

            {/* ============================================================= */}
            {/* SERVICE 7: INDUSTRIAL WATER COOLERS */}
            {/* ============================================================= */}
            <section id="water-coolers" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                        <div>
                            <ServiceHeader num="07" title="Industrial Water Coolers" />
                            <div className="mb-10">
                                <h4 className="text-xs font-black text-accent uppercase tracking-[0.25em] mb-4">Overview</h4>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    High-capacity water cooling systems for factories, institutions, and large facilities. Our industrial water coolers are built for heavy-duty use, delivering chilled drinking water to hundreds of users with durability and hygienic safety.
                                </p>
                            </div>
                            <ServiceApplications items={["Factories", "Schools & Colleges", "Hospitals", "Government Buildings"]} />
                            <ServiceFeatures items={["Stainless Steel Build", "UV Purification", "Auto Temperature Control", "Bulk Cooling Capacity", "Low Maintenance", "Energy Efficient"]} />
                            <ServiceCTA />
                        </div>
                        <ServiceBenefits items={[
                            { title: "High Capacity", desc: "Designed to serve hundreds of people in large facility environments." },
                            { title: "Durable Build", desc: "Industrial-grade stainless steel construction for long service life." },
                            { title: "Low Maintenance", desc: "Simple, robust design minimizes servicing requirements." },
                        ]} />
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4"><div className="border-b border-slate-100"></div></div>

            {/* ============================================================= */}
            {/* SERVICE 8: DUCT WORK */}
            {/* ============================================================= */}
            <section id="duct-work" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                        <div>
                            <ServiceHeader num="08" title="Duct Work" />
                            <div className="mb-10">
                                <h4 className="text-xs font-black text-accent uppercase tracking-[0.25em] mb-4">Overview</h4>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    Professional duct fabrication and installation services with precision engineering for optimal airflow distribution, minimal energy loss, and long-term performance in all types of commercial and industrial buildings.
                                </p>
                            </div>
                            <ServiceApplications items={["Custom Duct Fabrication", "GI / Aluminum Ducting", "Thermal Insulation", "Air Balancing"]} />
                            <ServiceFeatures items={["GI Ducting", "Pre-Insulated Panels", "Flexible Ducts", "Fire Rated Ducts", "Acoustic Lining", "Precision Fabrication"]} />
                            <ServiceCTA />
                        </div>
                        <ServiceBenefits items={[
                            { title: "Minimal Air Leakage", desc: "Precision-sealed joints ensure maximum airflow efficiency." },
                            { title: "Noise Reduction", desc: "Acoustic insulation for a quiet, comfortable environment." },
                            { title: "Energy Savings", desc: "Proper insulation reduces thermal losses and lowers operational costs." },
                        ]} />
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4"><div className="border-b border-slate-100"></div></div>

            {/* ============================================================= */}
            {/* SERVICE 9: VENTILATION WORK */}
            {/* ============================================================= */}
            <section id="ventilation" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                        <div>
                            <ServiceHeader num="09" title="Ventilation Systems" />
                            <div className="mb-10">
                                <h4 className="text-xs font-black text-accent uppercase tracking-[0.25em] mb-4">Overview</h4>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    Complete ventilation systems ensuring fresh air circulation, smoke extraction, and healthy indoor air quality. We design and install ventilation solutions for all building types, from basements to industrial floors, meeting all safety and compliance standards.
                                </p>
                            </div>
                            <div className="mb-10">
                                <h4 className="text-xs font-black text-royal uppercase tracking-[0.25em] mb-4">Includes</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {["Exhaust Systems", "Fresh Air Systems", "Industrial Ventilation", "Basement Ventilation"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 py-3 px-4 bg-muted rounded-xl border border-slate-50">
                                            <svg className="w-5 h-5 text-royal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                            <span className="font-bold text-primary text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <ServiceFeatures items={["Supply Fans", "Exhaust Fans", "Energy Recovery Ventilators", "Smoke Management Systems", "CO2 Sensors", "BMS Integration"]} />
                            <ServiceCTA />
                        </div>
                        <ServiceBenefits items={[
                            { title: "Improved Air Quality", desc: "Continuous fresh air supply for a healthy indoor environment." },
                            { title: "Code Compliance", desc: "Designed to meet all fire safety and building ventilation codes." },
                            { title: "Energy Recovery", desc: "Heat recovery ventilators reduce energy waste from exhaust air." },
                        ]} />
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4"><div className="border-b border-slate-100"></div></div>

            {/* ============================================================= */}
            {/* SERVICE 10: HVAC PROJECT EXECUTION */}
            {/* ============================================================= */}
            <section id="hvac-project" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                        <div>
                            <ServiceHeader num="10" title="HVAC Project Execution" />
                            <div className="mb-10">
                                <h4 className="text-xs font-black text-accent uppercase tracking-[0.25em] mb-4">Overview</h4>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    Turnkey HVAC project execution from concept to commissioning with complete project management, quality assurance, and compliance documentation. We handle every aspect of your HVAC project so you can focus on your core business.
                                </p>
                            </div>
                            <div className="mb-10">
                                <h4 className="text-xs font-black text-royal uppercase tracking-[0.25em] mb-4">Turnkey Execution</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {["Load Calculation", "System Design", "Equipment Selection", "Installation", "Commissioning", "Compliance Documentation"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 py-3 px-4 bg-muted rounded-xl border border-slate-50">
                                            <svg className="w-5 h-5 text-royal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                            <span className="font-bold text-primary text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <ServiceCTA />
                        </div>
                        <ServiceBenefits items={[
                            { title: "Single Point Responsibility", desc: "One team managing design, procurement, installation, and commissioning." },
                            { title: "Timeline Adherence", desc: "Strict project scheduling with milestone tracking and progress reporting." },
                            { title: "Quality Assurance", desc: "Multi-level quality checks and testing at every project phase." },
                        ]} />
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4"><div className="border-b border-slate-100"></div></div>

            {/* ============================================================= */}
            {/* SERVICE 11: MAINTENANCE & AMC */}
            {/* ============================================================= */}
            <section id="amc" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                        <div>
                            <ServiceHeader num="11" title="Maintenance of HVAC Systems (AMC)" />
                            <div className="mb-10">
                                <h4 className="text-xs font-black text-accent uppercase tracking-[0.25em] mb-4">Overview</h4>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    Comprehensive Annual Maintenance Contracts covering preventive care, emergency breakdown services, performance audits, and system optimization. Our AMC programs ensure your HVAC systems operate at peak efficiency throughout their lifecycle.
                                </p>
                            </div>
                            <div className="mb-10">
                                <h4 className="text-xs font-black text-royal uppercase tracking-[0.25em] mb-4">Services Include</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {["Preventive Maintenance", "Breakdown Services", "Performance Audits", "Gas Refilling", "Electrical Inspection", "System Optimization"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 py-3 px-4 bg-muted rounded-xl border border-slate-50">
                                            <svg className="w-5 h-5 text-royal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                            <span className="font-bold text-primary text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Link href="/contact" className="inline-flex items-center gap-3 bg-accent text-primary px-8 py-4 rounded-2xl font-black hover:scale-[1.02] transition-all shadow-lg shadow-accent/25 text-sm">
                                Request AMC Contract <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Link>
                        </div>
                        <ServiceBenefits items={[
                            { title: "Reduce Downtime", desc: "Preventive maintenance catches issues before they become failures." },
                            { title: "Lower Energy Bills", desc: "Optimized systems consume significantly less energy." },
                            { title: "Extend Equipment Life", desc: "Regular servicing adds years to your HVAC equipment lifespan." },
                            { title: "Ensure Regulatory Compliance", desc: "Stay audit-ready with documented maintenance records and certifications." },
                        ]} />
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-24 bg-muted px-4">
                <div className="max-w-5xl mx-auto bg-primary rounded-[4rem] text-center p-12 md:p-24 relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-royal via-primary to-accent opacity-40"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Need a Custom HVAC Solution?</h2>
                        <p className="text-white/60 text-lg font-medium mb-10 max-w-2xl mx-auto">Our engineering team will design a system tailored to your exact requirements and budget.</p>
                        <Link href="/contact" className="inline-block px-12 py-5 bg-white text-primary font-black text-xl rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl">
                            Talk to Our Engineers →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

/* ============================================ */
/* REUSABLE COMPONENTS */
/* ============================================ */

function ServiceHeader({ num, title }: { num: string; title: string }) {
    return (
        <>
            <div className="flex items-center gap-3 mb-6">
                <span className="text-accent font-black text-sm tracking-[0.2em] uppercase">{num}</span>
                <div className="h-px w-12 bg-accent/30"></div>
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-primary mb-8 leading-tight">{title}</h2>
        </>
    );
}

function ServiceApplications({ items }: { items: string[] }) {
    return (
        <div className="mb-10">
            <h4 className="text-xs font-black text-royal uppercase tracking-[0.25em] mb-4">Applications</h4>
            <div className="grid grid-cols-2 gap-3">
                {items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 py-3 px-4 bg-muted rounded-xl border border-slate-50">
                        <svg className="w-5 h-5 text-royal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                        <span className="font-bold text-primary text-sm">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ServiceFeatures({ items }: { items: string[] }) {
    return (
        <div className="mb-10">
            <h4 className="text-xs font-black text-royal uppercase tracking-[0.25em] mb-4">Key Features</h4>
            <div className="grid grid-cols-2 gap-3">
                {items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

function ServiceBenefits({ items }: { items: { title: string; desc: string }[] }) {
    return (
        <div className="bg-muted p-10 rounded-[2.5rem] border border-slate-50 shadow-xl h-full flex flex-col justify-center">
            <h4 className="text-xs font-black text-accent uppercase tracking-[0.25em] mb-6">Benefits</h4>
            <div className="space-y-6">
                {items.map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white flex items-center justify-center text-royal border border-slate-100 shadow-sm group-hover:bg-royal group-hover:text-white transition-all">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <div>
                            <h5 className="font-black text-primary text-sm mb-1">{item.title}</h5>
                            <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ServiceCTA() {
    return (
        <Link href="/contact" className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-black hover:bg-royal transition-all shadow-lg text-sm">
            Get a Quote <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </Link>
    );
}
