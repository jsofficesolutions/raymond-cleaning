import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center h-12 sm:h-16 relative w-48 sm:w-56 mb-2">
              <Image 
                src="/images/logo.png" 
                alt="Raymond Cleaning Services"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Essex's premier exterior cleaning specialists. Providing commercial and residential cleaning with pure-water technology and professional eco-friendly soft washes.
            </p>
            <div className="flex items-center gap-2 pt-2 text-accent font-black tracking-wide uppercase text-sm">
              <span>"Think Clean"</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5 pb-2 border-b border-white/10 w-fit">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-accent transition-colors">
                  Rinse & Repeat Schedule
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5 pb-2 border-b border-white/10 w-fit">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={`/${service.slug}`} className="hover:text-accent transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5 pb-2 border-b border-white/10 w-fit">
              Get In Touch
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a href="tel:07123456781" className="hover:text-accent transition-colors text-base font-bold">
                    07123 456781
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:info@raymondcleaning.co.uk" className="hover:text-accent transition-colors">
                    info@raymondcleaning.co.uk
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4 text-center md:text-left">
          <div>
            <p>&copy; {new Date().getFullYear()} Raymond Cleaning Services. All rights reserved.</p>
          </div>
          <div className="max-w-2xl">
            <p className="leading-relaxed">
              Raymond Cleaning Services Ltd is a registered company in England and Wales. Company Registration Number: 12345678. Registered Office: 12 High Street, Chelmsford, Essex, CM1 1XB.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
