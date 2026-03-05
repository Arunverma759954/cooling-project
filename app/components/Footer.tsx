import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-24 pb-12 relative overflow-hidden">
            {/* Subtle background element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                    {/* Brand Section */}
                    <div className="md:col-span-4">
                        <Link href="/" className="flex items-center gap-4 mb-8 group">
                            <div className="relative w-12 h-12 bg-white rounded-2xl p-1.5 transition-transform group-hover:rotate-12">
                                <Image
                                    src="/logo.png"
                                    alt="Cooling Solutions Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black tracking-tighter">COOLING</span>
                                <span className="text-[0.65rem] font-black leading-none tracking-[0.3em] text-accent">SOLUTIONS</span>
                            </div>
                        </Link>
                        <p className="text-white/60 font-medium leading-relaxed mb-8 max-w-sm">
                            Setting the gold standard in industrial and commercial HVAC engineering since 1993. Precision-engineered for high-performance environments.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>} />
                            <SocialIcon icon={<><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></>} />
                            <SocialIcon icon={<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>} />
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-sm font-black uppercase tracking-widest text-accent mb-8">Navigation</h4>
                            <ul className="space-y-4">
                                <FooterLink href="/" label="Home" />
                                <FooterLink href="/about" label="Our Legacy" />
                                <FooterLink href="/services" label="Solutions" />
                                <FooterLink href="/contact" label="Inquiry" />
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-black uppercase tracking-widest text-accent mb-8">Specialties</h4>
                            <ul className="space-y-4">
                                <FooterItem label="Central DX Ops" />
                                <FooterItem label="VRF Infrastructure" />
                                <FooterItem label="Clean Room AHU" />
                                <FooterItem label="HVAC Forensics" />
                            </ul>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h4 className="text-sm font-black uppercase tracking-widest text-accent mb-8">Contact</h4>
                            <ul className="space-y-6">
                                <li className="flex gap-4 group">
                                    <div className="text-accent shrink-0 mt-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>
                                    <p className="text-white/60 font-medium group-hover:text-white transition-colors">Sector 12, Palam Vihar, <br />Delhi NCR, India</p>
                                </li>
                                <li className="flex gap-4 group">
                                    <div className="text-accent shrink-0 mt-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div>
                                    <p className="text-white/60 font-medium group-hover:text-white transition-colors">+91 97171 95161</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-white/30 uppercase tracking-[0.2em]">
                    <p>© {new Date().getFullYear()} Cooling Solutions Pvt. Ltd. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, label }: { href: string; label: string }) {
    return (
        <li>
            <Link href={href} className="text-white/60 font-medium hover:text-accent hover:translate-x-2 transition-all inline-block">
                {label}
            </Link>
        </li>
    );
}

function FooterItem({ label }: { label: string }) {
    return (
        <li className="text-white/60 font-medium hover:text-white transition-colors cursor-default">
            {label}
        </li>
    );
}

function SocialIcon({ icon }: { icon: any }) {
    return (
        <button className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-white/60 hover:bg-accent hover:text-primary transition-all group">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">{icon}</svg>
        </button>
    );
}
