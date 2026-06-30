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
            <Link href="/" className="flex items-center h-12 sm:h-20 md:h-24 relative w-48 sm:w-64 md:w-80 mb-2">
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

        {/* Trust Badges and Payment Options */}
        <div className="border-t border-white/10 pt-8 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-6">
          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
            <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 flex items-center gap-3 text-left">
              <svg className="w-6 h-6 text-accent shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold leading-none">Companies House</p>
                <p className="text-xs font-black text-white mt-0.5">Official Reg: 12345678</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 flex items-center gap-3 text-left">
              <svg className="w-6 h-6 text-accent shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold leading-none">Fully Insured</p>
                <p className="text-xs font-black text-white mt-0.5">£5M Liability Cover</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 flex items-center gap-3 text-left">
              <svg className="w-6 h-6 text-accent shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0110.089 18M14.214 16.058A9.39 9.39 0 0018 15.001a5.002 5.002 0 00-8.374-4.56M12 10.75a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0zM5.5 21a4.75 4.75 0 009.034-2" />
              </svg>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold leading-none">Professional Staff</p>
                <p className="text-xs font-black text-white mt-0.5">100% Vetted & Trained</p>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-end">
            <span className="text-xs text-gray-400 font-semibold">Accepted Payments:</span>
            <div className="flex items-center gap-3">
              {/* Visa */}
              <div className="bg-white px-2 py-1 rounded text-primary font-black text-xs select-none">VISA</div>
              {/* Mastercard */}
              <div className="bg-white px-2 py-1 rounded text-red-600 font-black text-xs select-none">MC</div>
              {/* BACS / Bank Transfer */}
              <div className="bg-white/10 px-2 py-1 rounded border border-white/20 text-white font-bold text-xs select-none">BANK TRANSFER</div>
              {/* Direct Debit */}
              <div className="bg-accent px-2 py-1 rounded text-primary font-black text-xs select-none">DIRECT DEBIT</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4 text-center md:text-left">
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
