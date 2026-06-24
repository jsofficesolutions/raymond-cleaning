'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';

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
  const [location, setLocation] = useState('');
  const [service, setService] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location || !service || !phone || !name) {
      alert("Please fill in all fields.");
      return;
    }
    // Simulate successful form submission
    setFormSubmitted(true);
  };

  return (
    <div className="relative">
      {/* 1. Hero Section */}
      <section className="relative bg-primary text-white pt-24 pb-40 overflow-hidden">
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
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trustpilot Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-bold tracking-wide">
                  5.0 Rated on Trustpilot
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Exterior Cleaning <br className="hidden sm:inline" />
                <span className="text-accent">Services Essex</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl font-light">
                Professional, fully insured exterior cleaning solutions tailored for homes and businesses across Essex. We restore your property's shine and protect it from structural damage with specialized equipment.
              </p>

              {/* USP Checklist */}
              <ul className="space-y-3 font-semibold text-gray-200 text-sm sm:text-base">
                <li className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent text-primary">
                    <svg className="w-3.5 h-3.5 fill-current font-bold" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Fully Insured up to £5 Million
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent text-primary">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  No-Streak Pure Water fed Pole Technology
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent text-primary">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Reliable & Screened Staff (Aaron's Guarantee)
                </li>
              </ul>
            </div>

            {/* Right Column: Lead Card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-slate-dark rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-accent"></div>
                <h3 className="text-2xl font-extrabold text-primary mb-2">
                  Get a Free Quote
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Save 15% when you schedule a 6-month routine cleaning package!
                </p>

                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 text-center space-y-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold">Quote Request Received!</h4>
                    <p className="text-sm text-green-700">
                      Thank you, <strong className="font-semibold">{name}</strong>. Aaron will review your request for <strong className="font-semibold">{service}</strong> in <strong className="font-semibold">{location}</strong> and call you back on <strong className="font-semibold">{phone}</strong> within 2 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="07123 456789"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                          Select Service
                        </label>
                        <select
                          required
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full px-3 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary bg-white transition-all text-sm"
                        >
                          <option value="">-- Choose --</option>
                          {services.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                          Essex Location
                        </label>
                        <select
                          required
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="w-full px-3 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary bg-white transition-all text-sm"
                        >
                          <option value="">-- Choose --</option>
                          {ESSEX_LOCATIONS.map((loc) => (
                            <option key={loc} value={loc}>
                              {loc}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-hover text-white font-extrabold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 mt-4 cursor-pointer text-center"
                    >
                      Get My Free Quote
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Custom Shape Divider Asset A (Deep Blue to White) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[120px]">
            <path fill="#ffffff" d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,160L1320,160C1200,160,960,160,720,160C480,160,240,160,120,160L0,160Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. Services Section ("Rinse & Repeat") */}
      <section className="bg-white py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
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

        {/* Map over services alternating layouts */}
        <div>
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            // Alternating backgrounds: White -> Blue -> White -> Blue -> White
            const bgClass = isEven ? 'bg-white text-slate-dark py-16' : 'bg-primary text-white py-24';
            const textMutedClass = isEven ? 'text-gray-500' : 'text-gray-200';
            const titleClass = isEven ? 'text-primary' : 'text-accent';
            const btnClass = isEven 
              ? 'bg-primary hover:bg-primary-hover text-white' 
              : 'bg-accent hover:bg-accent-hover text-primary';

            return (
              <div key={service.id} className="relative">
                {/* Content Block */}
                <div className={`${bgClass} transition-all duration-300`}>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                      
                      {/* Image block (Left or Right) */}
                      <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>

                      {/* Text block (Right or Left) */}
                      <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20 text-accent">
                          {/* Mock Service Icon based on id */}
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

                {/* Divider B (Asset B - Fluid Wave) is used between sections */}
                {index < services.length - 1 && (
                  <div className={`w-full overflow-hidden leading-none z-10 relative ${isEven ? '' : 'rotate-180 scale-y-[-1]'}`}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px]">
                      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,3.93,56.12,10.93,86.68,17,171,33.72,256,68.55,321.39,56.44Z" fill="#1948a0"></path>
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
    </div>
  );
}
