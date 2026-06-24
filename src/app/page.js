'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import BookingModal from '@/components/BookingModal';

const ESSEX_LOCATIONS = [
  "Chelmsford",
  "Southend-on-Sea",
  "Colchester",
  "Basildon",
  "Rayleigh",
  "Brentwood",
  "Braintree",
  "Harlow",
  "Clacton-on-Sea",
  "Epping"
];

export default function Home() {
  const [service, setService] = useState('');
  const [postcode, setPostcode] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative bg-white overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative bg-primary text-white pt-24 pb-44 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Pristine house in Essex"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Value Proposition & Inline Conversion Widget */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
                Exterior Cleaning <br className="hidden sm:inline" />
                Services Essex
              </h1>
              <div className="w-16 h-0.5 bg-red-600 mt-4"></div>

              <p className="text-lg md:text-xl text-white leading-relaxed max-w-2xl font-semibold mt-6">
                Professional, fully insured exterior cleaning solutions tailored for homes and businesses across Essex. We restore your property's shine and protect it from structural damage with specialized equipment.
              </p>

              {/* Pimlico-Style Inline Horizontal Conversion Widget Bar */}
              <div className="bg-white rounded-sm shadow-xl p-2.5 flex flex-col lg:flex-row items-stretch lg:items-center gap-2.5 max-w-3xl w-full border border-white/10">
                
                {/* Dropdown Selector */}
                <div className="flex items-center gap-2.5 px-4 py-3 flex-grow w-full lg:w-auto relative bg-slate-100 rounded-sm">
                  <svg className="w-5 h-5 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <div className="relative flex-grow">
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-transparent focus:outline-none text-slate-900 font-bold text-sm cursor-pointer appearance-none pr-8 py-1.5"
                    >
                      <option value="" className="text-slate-900">I need help with...</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title} className="text-slate-900">
                          {s.title}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none text-slate-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Postcode Input */}
                <div className="flex items-center gap-2.5 px-4 py-3 flex-grow w-full lg:w-auto bg-slate-100 rounded-sm">
                  <svg className="w-5 h-5 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Enter postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                    className="w-full bg-transparent focus:outline-none text-slate-900 font-bold text-sm uppercase placeholder:normal-case placeholder-slate-500 py-1.5"
                  />
                </div>

                {/* Action Button */}
                <div className="w-full lg:w-auto flex-shrink-0">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-black px-8 py-3.5 rounded-sm transition-all duration-200 text-sm uppercase tracking-widest cursor-pointer"
                  >
                    BOOK NOW
                  </button>
                </div>

              </div>

              {/* Google Reviews Badge Framework */}
              <div className="flex items-center gap-3 mt-4">
                <div className="flex items-center gap-1.5 bg-white/95 px-2.5 py-1 rounded-sm shadow-sm">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span className="text-[10px] font-black tracking-wider text-slate-800 uppercase">Reviews</span>
                </div>
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-bold text-white tracking-wide">
                  4.9 / 5.0 Rating <span className="text-blue-200 font-normal text-xs ml-1">(based on 248 Google reviews)</span>
                </span>
              </div>

              {/* USP Checklist horizontal stack/grid */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 font-bold text-blue-50 text-xs sm:text-sm pt-6 border-t border-white/10 max-w-2xl">
                <li className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-5.5 h-5.5 rounded-full bg-accent text-primary flex-shrink-0 shadow-sm">
                    <svg className="w-3.5 h-3.5 fill-current font-bold" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Fully Insured up to £5 Million</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-5.5 h-5.5 rounded-full bg-accent text-primary flex-shrink-0 shadow-sm">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>No-Streak Pure Water fed Pole Technology</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-5.5 h-5.5 rounded-full bg-accent text-primary flex-shrink-0 shadow-sm">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Reliable & Screened Staff (Aaron's Guarantee)</span>
                </li>
              </ul>
            </div>

            {/* Right Column: Empty to showcase backdrop imagery */}
            <div className="hidden lg:block lg:col-span-5 h-[300px]"></div>
          </div>
        </div>

        {/* Hero Bottom Fluid Wave (Smooth Bezier Curve) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" preserveAspectRatio="none" className="relative block w-full h-[80px] sm:h-[130px]">
            <path fill="#ffffff" d="M0,96 C360,160 720,32 1080,128 C1260,176 1380,144 1440,128 L1440,200 L0,200 Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. Services Section */}
      <section className="bg-white py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <span className="text-accent font-black tracking-widest uppercase text-xs sm:text-sm">
            Professional Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mt-2">
            Our Cleaning Services
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base sm:text-lg">
            Aaron's reliable team uses industry-leading technology to maintain your properties in pristine condition.
          </p>
        </div>

        {/* Dynamic alternating fluid rows */}
        <div className="space-y-0">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            
            // Layout styling configuration
            const bgClass = isEven ? 'bg-white text-slate-dark py-16' : 'bg-primary text-white py-20';
            const textMutedClass = isEven ? 'text-gray-500' : 'text-gray-200';
            const titleClass = isEven ? 'text-primary' : 'text-accent';
            const btnClass = isEven 
              ? 'bg-primary hover:bg-primary-hover text-white' 
              : 'bg-accent hover:bg-accent-hover text-primary';

            // Next row's color dictates what this separator's fill should match
            const nextIsEven = (index + 1) % 2 === 0;
            const waveFillColor = nextIsEven ? '#ffffff' : '#1948a0';

            return (
              <div key={service.id} className="relative">
                {/* Content Block with organic border frame aesthetic */}
                <div className={`${bgClass} relative z-10`}>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                      
                      {/* Image block (Asymmetric Frame applied using custom border radiuses) */}
                      <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div 
                          className="relative h-[300px] sm:h-[400px] w-full overflow-hidden shadow-2xl border-4 border-white/10 group transition-all duration-500"
                          style={{ borderRadius: isEven ? '30% 70% 70% 30% / 30% 30% 70% 70%' : '70% 30% 30% 70% / 60% 40% 60% 40%' }}
                        >
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      </div>

                      {/* Text block */}
                      <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20 text-accent">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        
                        <h3 className={`text-3xl font-extrabold ${titleClass}`}>
                          {service.title}
                        </h3>
                        
                        <p className={`text-lg leading-relaxed ${textMutedClass}`}>
                          {service.longDesc}
                        </p>

                        <div className="pt-2">
                          <Link
                            href={`/${service.slug}`}
                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all duration-300 ${btnClass}`}
                          >
                            Explore {service.title}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Intelligent Dynamic Fluid Wave Separator */}
                {index < services.length - 1 && (
                  <div className={`w-full overflow-hidden leading-none relative z-20 pointer-events-none ${isEven ? 'translate-y-[1px]' : 'rotate-180 -translate-y-[1px]'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px] sm:h-[80px]">
                      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,3.93,56.12,10.93,86.68,17,171,33.72,256,68.55,321.39,56.44Z" fill={waveFillColor}></path>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Call to Action Banner */}
      <section className="bg-accent text-primary py-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Ready to schedule your recurring 6-month maintenance?
          </h2>
          <p className="text-primary/80 font-medium max-w-xl mx-auto text-base sm:text-lg">
            Ensure your gutters, windows, and patio stay sparkling year-round. Get 15% off recurring schedules.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/schedule"
              className="bg-primary hover:bg-primary-hover text-white font-extrabold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Learn About Schedules
            </Link>
            <a
              href="tel:07123456781"
              className="bg-white hover:bg-gray-50 text-primary font-extrabold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Call Aaron: 07123 456781
            </a>
          </div>
        </div>
      </section>

      {/* Booking Lightbox modal portal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={service}
        initialPostcode={postcode}
      />
    </div>
  );
}