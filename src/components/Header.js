'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { services } from '@/data/services';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b transition-all duration-300 w-full flex flex-col ${
      isScrolled ? 'shadow-md border-slate-200' : 'shadow-sm border-gray-100'
    }`}>
      {/* Webkit Scrollbar CSS Injection for Tier 2 horizontal list */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />

      {/* Tier 1: Branding & Unified Capsule Phone/Hamburger CTA */}
      <div className="w-full bg-white transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          
          {/* Desktop Layout (md+) */}
          <div className="hidden md:flex items-center justify-between gap-4">
            {/* Left: Branding Block */}
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className="flex items-center relative transition-all duration-300 h-20 w-[240px] md:h-24 md:w-[280px]"
              >
                <Image 
                  src="/images/logo.png" 
                  alt="Raymond Cleaning Services"
                  fill
                  className="object-contain object-left animate-fade-in"
                  priority
                />
              </Link>
            </div>

            {/* Right: Phone CTA Badge & Hamburger menu controls */}
            <div className="flex items-center gap-3">
              {/* Logo-inspired split-pane phone badge (Sharp edges, thick lines, prominent sizing) */}
              <div className="bg-primary border-[3px] border-accent p-1.5 sm:p-2 rounded-none shadow-md flex items-stretch gap-2 max-w-full">
                {/* Left Pane: 24/7 Service */}
                <div className="hidden lg:flex items-center bg-primary border-2 border-accent/80 rounded-none px-6 py-3.5 text-left select-none">
                  <span className="text-sm uppercase tracking-widest font-black text-white leading-none whitespace-nowrap">
                    24/7 Service
                  </span>
                </div>

                {/* Right Pane: Phone CTA Button */}
                <a
                  href="tel:07123456781"
                  className="bg-accent hover:bg-accent-hover text-primary border-2 border-accent rounded-none font-black text-xs sm:text-base md:text-xl px-4 sm:px-7 py-2 sm:py-3.5 flex items-center gap-1.5 sm:gap-2.5 transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-current text-primary flex-shrink-0" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="tracking-tight whitespace-nowrap">07123 456781</span>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Layout (< md) */}
          <div className="flex md:hidden items-center justify-between w-full gap-2">
            {/* Left: Hamburger button */}
            <div className="flex-1 flex justify-start">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex flex-col items-center justify-center w-11 h-11 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 focus:outline-none cursor-pointer"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 5h16M4 12h16M4 19h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Center: Logo (larger & prominent) */}
            <div className="flex-shrink-0 flex justify-center">
              <Link 
                href="/" 
                className="flex items-center relative transition-all duration-300 h-20 w-48"
              >
                <Image 
                  src="/images/logo.png" 
                  alt="Raymond Cleaning Services"
                  fill
                  className="object-contain object-center animate-fade-in"
                  priority
                />
              </Link>
            </div>

            {/* Right: Phone CTA badge/button */}
            <div className="flex-1 flex justify-end">
              <a
                href="tel:07123456781"
                className="bg-accent hover:bg-accent-hover text-primary border-[3px] border-primary rounded-none w-11 h-11 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm"
                aria-label="Call Us"
              >
                <svg className="w-5 h-5 fill-current text-primary flex-shrink-0" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Tier 2: High-Density Service Navigation Lane (hidden on mobile, visible md+) */}
      <div className="hidden md:block w-full bg-white border-t border-slate-100">
        <div 
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar scroll-smooth transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex flex-nowrap items-center justify-start md:justify-between gap-6 md:gap-0 w-full min-w-max md:min-w-0">
            {services.map((service) => {
              const isActive = pathname === `/${service.slug}`;
              return (
                <Link
                  key={service.id}
                  href={`/${service.slug}`}
                  className={`group relative whitespace-nowrap font-black text-sm sm:text-base tracking-wider uppercase transition-all duration-300 py-2.5 px-1 ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-slate-900 hover:text-primary'
                  }`}
                >
                  <span>{service.title}</span>
                  <span className={`absolute bottom-0 left-0 w-full h-[3px] bg-accent transition-transform duration-300 origin-left rounded-full ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Slide-out Navigation Drawer for Mobile/Tablet */}
      <div className={`fixed inset-0 z-50 transition-all duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Drawer Content */}
        <div className={`absolute top-0 left-0 w-80 max-w-[85vw] h-full bg-white shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-slate-100">
              <span className="font-black text-primary uppercase tracking-wider text-sm">Services Menu</span>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="text-slate-500 hover:text-slate-950 p-1 text-2xl font-bold cursor-pointer transition-colors"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            
            <nav className="mt-8 flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`font-black text-base uppercase tracking-wider py-3.5 px-2 border-b border-slate-50 flex items-center justify-between transition-colors ${
                  pathname === '/' ? 'text-primary bg-slate-50' : 'text-slate-800 hover:text-primary'
                }`}
              >
                <span>Home</span>
                <span className="text-accent">→</span>
              </Link>
              
              <div className="mt-4 pt-2 border-t border-slate-100">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2 px-2">Our Cleaning Services</span>
                {services.map((service) => {
                  const isActive = pathname === `/${service.slug}`;
                  return (
                    <Link
                      key={service.id}
                      href={`/${service.slug}`}
                      onClick={() => setIsMenuOpen(false)}
                      className={`font-black text-sm uppercase tracking-wider py-3 px-2 border-b border-slate-50/50 flex items-center justify-between transition-colors ${
                        isActive ? 'text-primary bg-slate-50' : 'text-slate-700 hover:text-primary'
                      }`}
                    >
                      <span>{service.title}</span>
                      <span className="text-accent">→</span>
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-slate-100">
            <a 
              href="tel:07123456781" 
              className="w-full bg-accent hover:bg-accent-hover text-primary text-center font-black py-3.5 block shadow transition-colors"
            >
              Call Us: 07123 456781
            </a>
          </div>
        </div>
      </div>

      {/* Tier 3: Stark, Solid Trust Anchor Ribbon */}
      <div className="hidden md:block w-full bg-accent py-3.5 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3.5 text-xs font-black tracking-wider text-center uppercase">
          
          <div className="flex items-center gap-2.5">
            <div className="p-1 rounded bg-black/10 text-slate-950">
              <svg className="w-4.5 h-4.5 fill-none stroke-current stroke-[2.5] flex-shrink-0" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <span className="text-slate-950">Fully Insured</span>
          </div>
          
          <div className="hidden md:block text-slate-950/20 font-normal">|</div>
          
          <div className="flex items-center gap-2.5">
            <div className="p-1 rounded bg-black/10 text-slate-950">
              <svg className="w-4.5 h-4.5 fill-none stroke-current stroke-[2.5] flex-shrink-0" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.25 6-7.5 9-7.5 11.25a7.5 7.5 0 0015 0c0-2.25-2.25-5.25-7.5-11.25z" />
              </svg>
            </div>
            <span className="text-slate-950">Pure Water System</span>
          </div>
          
          <div className="hidden md:block text-slate-950/20 font-normal">|</div>
          
          <div className="flex items-center gap-2.5">
            <div className="p-1 rounded bg-black/10 text-slate-950">
              <svg className="w-4.5 h-4.5 fill-none stroke-current stroke-[2.5] flex-shrink-0" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <span className="text-slate-950">100% Satisfaction</span>
          </div>
          
        </div>
      </div>
    </header>
  );
}
