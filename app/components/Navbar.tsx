"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change or resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen
                ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 py-3 shadow-lg shadow-slate-200/20'
                : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Brand Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="relative w-12 h-12 bg-white rounded-2xl shadow-sm p-1.5 transition-transform group-hover:scale-110">
                                <Image
                                    src="/logo.png"
                                    alt="Cooling Solutions Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-primary' : 'text-white'
                                    }`}>
                                    COOLING
                                </span>
                                <span className="text-[0.65rem] font-black leading-none tracking-[0.3em] text-accent transition-colors duration-300">
                                    SOLUTIONS
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-2">
                        <div className={`flex items-center space-x-8 px-8 py-2.5 rounded-2xl transition-all duration-500 ${isScrolled ? 'bg-transparent' : 'bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/5'
                            }`}>
                            {navLinks.map((link) => (
                                <NavLink key={link.href} href={link.href} label={link.label} isScrolled={isScrolled} />
                            ))}
                        </div>

                        <Link
                            href="tel:+919717195161"
                            className={`ml-6 px-8 py-3.5 rounded-xl font-black text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 ${isScrolled
                                    ? 'bg-royal text-white shadow-xl shadow-royal/20'
                                    : 'bg-white text-primary shadow-2xl shadow-black/10'
                                }`}
                        >
                            +91 97171 95161
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`p-2 rounded-lg transition-colors ${isScrolled || isMobileMenuOpen ? 'text-primary' : 'text-white'
                                }`}
                            aria-label="Toggle Menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className="bg-white border-t border-slate-100 px-4 py-6 space-y-2 shadow-inner">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-5 py-3.5 rounded-xl text-slate-700 font-bold text-base hover:bg-slate-50 hover:text-royal transition-all"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-4 border-t border-slate-100 mt-4">
                        <Link
                            href="tel:+919717195161"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-center gap-3 px-6 py-4 bg-royal text-white font-black text-base rounded-xl shadow-lg shadow-royal/20 hover:shadow-xl transition-all"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +91 97171 95161
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

function NavLink({ href, label, isScrolled }: { href: string; label: string; isScrolled: boolean }) {
    return (
        <Link
            href={href}
            className={`relative group font-black text-[0.8rem] uppercase tracking-widest transition-all duration-300 
                ${isScrolled
                    ? 'text-primary hover:text-royal'
                    : 'text-white hover:text-accent'}`}
        >
            {label}
            <span className={`absolute -bottom-1.5 left-0 w-0 h-0.5 transition-all duration-500 group-hover:w-full 
                ${isScrolled ? 'bg-royal' : 'bg-accent shadow-[0_0_8px_rgba(56,189,248,0.6)]'}`} />
        </Link>
    );
}
