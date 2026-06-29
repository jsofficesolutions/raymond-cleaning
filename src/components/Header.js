'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { services } from '@/data/services';

export default function Header() {
  const pathname = usePathname();

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-5 sm:py-6">
          
          {/* Left: Branding Block */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center h-24 sm:h-36 relative w-80 sm:w-[420px]">
              <Image 
                src="/images/logo.png" 
                alt="Raymond Cleaning Services"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>
          </div>

          {/* Right: Logo-inspired split-pane phone badge (Sharp edges, thick lines, prominent sizing) */}
          <div className="bg-primary border-[3px] border-accent p-2 rounded-none shadow-md flex items-stretch gap-2 max-w-full">
            {/* Left Pane: 24/7 Service */}
            <div className="hidden sm:flex items-center bg-primary border-2 border-accent/80 rounded-none px-6 py-3.5 text-left select-none">
              <span className="text-sm uppercase tracking-widest font-black text-white leading-none whitespace-nowrap">
                24/7 Service
              </span>
            </div>

            {/* Right Pane: Phone CTA Button */}
            <a
              href="tel:07123456781"
              className="bg-accent hover:bg-accent-hover text-primary border-2 border-accent rounded-none font-black text-base sm:text-lg md:text-xl px-7 py-3.5 flex items-center gap-2.5 transition-all duration-200 cursor-pointer shadow-sm"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-primary flex-shrink-0" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="tracking-tight whitespace-nowrap">07123 456781</span>
            </a>
          </div>

        </div>
      </div>

      {/* Tier 2: High-Density Service Navigation Lane */}
      <div className="w-full bg-white border-t border-slate-100">
        <div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar py-5 scroll-smooth"
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

      {/* Tier 3: Stark, Solid Trust Anchor Ribbon */}
      <div className="w-full bg-accent py-3.5 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3.5 text-xs font-black tracking-wider text-center uppercase">
          
          <div className="flex items-center gap-2.5">
            <div className="p-1 rounded bg-black/10 text-slate-950">
              <svg className="w-4.5 h-4.5 fill-none stroke-current stroke-[2.5] flex-shrink-0" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <span className="text-slate-950">Fully Insured up to £5 Million</span>
          </div>
          
          <div className="hidden md:block text-slate-950/20 font-normal">|</div>
          
          <div className="flex items-center gap-2.5">
            <div className="p-1 rounded bg-black/10 text-slate-950">
              <svg className="w-4.5 h-4.5 fill-none stroke-current stroke-[2.5] flex-shrink-0" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.25 6-7.5 9-7.5 11.25a7.5 7.5 0 0015 0c0-2.25-2.25-5.25-7.5-11.25z" />
              </svg>
            </div>
            <span className="text-slate-950">Pure Water Reach & Wash System</span>
          </div>
          
          <div className="hidden md:block text-slate-950/20 font-normal">|</div>
          
          <div className="flex items-center gap-2.5">
            <div className="p-1 rounded bg-black/10 text-slate-950">
              <svg className="w-4.5 h-4.5 fill-none stroke-current stroke-[2.5] flex-shrink-0" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <span className="text-slate-950">100% Satisfaction Guarantee</span>
          </div>
          
        </div>
      </div>
    </header>
  );
}

