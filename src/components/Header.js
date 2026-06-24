'use client';

import Link from 'next/link';
import { services } from '@/data/services';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm w-full flex flex-col">
      {/* Webkit Scrollbar CSS Injection for Tier 2 horizontal list */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />

      {/* Tier 1: Branding & Unified Capsule Phone CTA */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
          
          {/* Left: Branding Block */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex flex-col group">
              <span className="text-2xl sm:text-3xl font-black text-primary tracking-tight leading-none">
                RAYMOND
              </span>
              <span className="text-xs font-bold tracking-widest text-accent uppercase leading-none mt-1.5">
                Cleaning Services
              </span>
            </Link>
          </div>

          {/* Right: Sharp split-block phone badge */}
          <div className="flex items-stretch rounded-sm shadow-[0_4px_15px_rgba(25,72,160,0.12)] overflow-hidden max-w-full border border-slate-200/50">
            {/* Left Block: Solid Dark Brand Blue */}
            <div className="hidden sm:flex bg-primary items-center px-4 py-2.5 text-left select-none">
              <span className="text-[10px] md:text-xs uppercase tracking-wider font-black text-white leading-none whitespace-nowrap">
                24/7 AVAILABILITY / ESSEX & SOUTH EAST
              </span>
            </div>

            {/* Right Block: Solid Flat Brand Gold/Yellow */}
            <a
              href="tel:07123456781"
              className="bg-accent hover:bg-accent-hover text-slate-dark font-black text-xs sm:text-sm md:text-base px-4 sm:px-5 py-2.5 flex items-center gap-2 transition-colors duration-200 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-slate-dark flex-shrink-0" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="tracking-tight whitespace-nowrap">07123 456781</span>
            </a>
          </div>

        </div>
      </div>

      {/* Tier 2: High-Density Service Navigation Lane (Horizontal Scrollable) */}
      <div className="w-full bg-white">
        <div 
          className="max-w-7xl mx-auto overflow-x-auto no-scrollbar py-4 px-4 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex flex-nowrap items-center justify-start md:justify-center gap-6 sm:gap-10 min-w-max">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/${service.slug}`}
                className="whitespace-nowrap font-semibold text-[11px] sm:text-xs text-slate-800 hover:text-primary tracking-wider uppercase transition-all duration-300 py-2 px-1"
              >
                {service.title.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Tier 3: Stark, Solid Trust Anchor Ribbon */}
      <div className="w-full bg-slate-900 py-3 px-4 shadow-sm border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-around gap-3 text-[10px] font-extrabold tracking-[0.15em] text-center uppercase">
          
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-emerald-400 fill-none stroke-current stroke-[3] flex-shrink-0" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span className="text-white">FULLY INSURED UP TO £5 MILLION</span>
          </div>
          
          <div className="hidden md:block text-slate-700">|</div>
          
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-emerald-400 fill-none stroke-current stroke-[3] flex-shrink-0" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span className="text-white">PURE WATER REACH & WASH SYSTEM</span>
          </div>
          
          <div className="hidden md:block text-slate-700">|</div>
          
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-emerald-400 fill-none stroke-current stroke-[3] flex-shrink-0" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span className="text-white">100% SATISFACTION GUARANTEE</span>
          </div>
          
        </div>
      </div>
    </header>
  );
}
