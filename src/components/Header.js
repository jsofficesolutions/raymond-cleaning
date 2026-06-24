'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { services } from '@/data/services';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo (Left) */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-primary tracking-tight leading-none">
                RAYMOND
              </span>
              <span className="text-xs font-bold tracking-widest text-accent uppercase leading-none mt-1">
                Cleaning Services
              </span>
            </Link>
          </div>

          {/* Tagline (Center - hidden on mobile) */}
          <div className="hidden md:flex items-center justify-center">
            <span className="text-accent font-extrabold text-lg uppercase tracking-widest px-4 py-1 border-x border-gray-200">
              "Think Clean"
            </span>
          </div>

          {/* Navigation Links & Phone CTA (Right) */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-8 text-base font-semibold text-slate-dark">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 hover:text-primary transition-colors focus:outline-none cursor-pointer"
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        href={`/${service.slug}`}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-3 hover:bg-gray-50 text-sm hover:text-primary transition-colors"
                      >
                        <span className="font-semibold block">{service.title}</span>
                        <span className="text-xs text-gray-500 font-normal">{service.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/schedule" className="hover:text-primary transition-colors">
                Schedule
              </Link>
              <Link href="/about" className="hover:text-primary transition-colors">
                About
              </Link>
            </nav>

            {/* Phone Button CTA */}
            <a
              href="tel:07123456781"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-extrabold px-6 py-3 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              07123 456781
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center space-x-3">
            {/* Phone Button CTA (Small screen variant) */}
            <a
              href="tel:07123456781"
              className="inline-flex items-center justify-center p-2.5 rounded-full bg-primary text-white hover:bg-primary-hover shadow-sm transition-all"
              aria-label="Call Raymond Cleaning Services"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </a>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-primary focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle main menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 pt-2 pb-6 space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-bold text-slate-dark hover:bg-gray-50 hover:text-primary"
            >
              Home
            </Link>

            {/* Collapsible Mobile Services Section */}
            <div className="border-t border-gray-100 pt-3 mt-3">
              <span className="block px-3 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-widest">
                Our Services
              </span>
              <div className="pl-3 space-y-1">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/${service.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/schedule"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-bold text-slate-dark hover:bg-gray-50 hover:text-primary border-t border-gray-100 pt-3 mt-3"
            >
              Schedule (Subscribe & Save)
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-bold text-slate-dark hover:bg-gray-50 hover:text-primary"
            >
              About
            </Link>

            {/* Large Mobile Phone CTA */}
            <div className="pt-4">
              <a
                href="tel:07123456781"
                className="flex items-center justify-center gap-3 w-full bg-primary hover:bg-primary-hover text-white font-extrabold py-3.5 rounded-xl shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Aaron: 07123 456781
              </a>
              <p className="text-center text-xs text-gray-500 mt-2 font-medium uppercase tracking-wider">
                Tagline: "Think Clean"
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
