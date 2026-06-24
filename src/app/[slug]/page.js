'use client';

import { use, useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';

const ESSEX_TOWNS = [
  "Chelmsford", "Southend-on-Sea", "Colchester", "Basildon", 
  "Rayleigh", "Brentwood", "Braintree", "Harlow", "Epping", "Saffron Walden"
];

export default function ServicePage({ params }) {
  // Await page params in Next.js 15 using use()
  const { slug } = use(params);
  
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [town, setTown] = useState('');
  const [schedule, setSchedule] = useState('6-months');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !town) {
      alert("Please fill in all required fields.");
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="relative">
      {/* 1. Large Hero Section specific to the Service */}
      <section className="relative bg-primary text-white pt-32 pb-44 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/60"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-accent font-black tracking-widest uppercase text-xs sm:text-sm">
            Professional Exterior Care
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-white">
            Professional {service.title} Essex
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
            {service.longDesc}
          </p>
        </div>

        {/* Custom Shape Divider Asset A (Deep Blue to White) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px]">
            <path fill="#ffffff" d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,160L1320,160C1200,160,960,160,720,160C480,160,240,160,120,160L0,160Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. Immediate Lead-Capture Form (Right below the fold) */}
      <section className="bg-white py-12 relative z-20 -mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-accent"></div>
            
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
                Book a Free {service.title} Quote
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mt-2">
                Fill in the form below and Aaron will get back to you with a personalized estimate.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-600">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Booking Inquiry Submitted!</h3>
                <p className="text-sm sm:text-base text-green-700 leading-relaxed">
                  Thank you, <strong className="font-semibold">{name}</strong>. Aaron has received your quote request for <strong className="font-semibold">{service.title}</strong> in <strong className="font-semibold">{town}</strong>. We will contact you at <strong className="font-semibold">{phone}</strong> or <strong className="font-semibold">{email}</strong> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Full Name *
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
                      Phone Number *
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
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                        Essex Location *
                      </label>
                      <select
                        required
                        value={town}
                        onChange={(e) => setTown(e.target.value)}
                        className="w-full px-3 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary bg-white transition-all text-sm"
                      >
                        <option value="">-- Choose --</option>
                        {ESSEX_TOWNS.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                        Cleaning Interval
                      </label>
                      <select
                        value={schedule}
                        onChange={(e) => setSchedule(e.target.value)}
                        className="w-full px-3 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary bg-white transition-all text-sm font-semibold text-primary"
                      >
                        <option value="one-off">One-off clean</option>
                        <option value="6-months">6-Month Cycle (Save 15%)</option>
                        <option value="12-months">Yearly checkup</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    Job Details / Notes (Optional)
                  </label>
                  <textarea
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details about your property (e.g. 3-bedroom detached house, number of gutters, double-glazing window count...)"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  ></textarea>
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary-hover text-white font-extrabold px-12 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto cursor-pointer"
                  >
                    Submit Booking Request
                  </button>
                  <p className="text-gray-400 text-xs mt-3">
                    No payment details required. We'll contact you to arrange a suitable site quote.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. SEO-Rich Localized Section */}
      <section className="bg-off-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Key Benefits & Local details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-primary font-black tracking-wider uppercase text-xs sm:text-sm">
                Local Expertise
              </span>
              <h2 className="text-3xl font-extrabold text-slate-dark leading-tight">
                Trusted {service.title} in Chelmsford & Across Essex
              </h2>
              
              <div className="text-gray-500 space-y-4 text-base leading-relaxed">
                <p>
                  Raymond Cleaning Services provides professional <strong>{service.title}</strong> across the South East. We have established an excellent reputation for reliability, safety, and pristine cleaning results in residential suburbs and commercial centers.
                </p>
                <p>
                  Whether your home requires maintenance in <strong>Chelmsford</strong>, a window polish in <strong>Southend-on-Sea</strong>, cladding soft washing in <strong>Colchester</strong>, or gutter clearances in <strong>Basildon</strong>, Aaron's team covers your postal area. We understand the specific regional dirt patterns, from seaside salt sprays on the coast to metropolitan traffic films in busy Essex hubs.
                </p>
              </div>

              {/* Benefits Bullet Points */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mt-6">
                <h4 className="font-extrabold text-primary mb-4 text-lg">
                  Key Benefits of our {service.title} Package:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold text-gray-700">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/20 text-accent shrink-0 mt-0.5">
                        ✓
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: FAQs */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-accent font-black tracking-wider uppercase text-xs sm:text-sm">
                Got Questions?
              </span>
              <h3 className="text-2xl font-extrabold text-primary">
                Frequently Asked Questions
              </h3>

              <div className="space-y-4">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl border border-gray-150 shadow-sm">
                    <h5 className="font-extrabold text-slate-dark text-base mb-2">
                      {faq.q}
                    </h5>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>

              {/* Call out box */}
              <div className="bg-primary text-white p-6 rounded-2xl shadow-md border-b-4 border-accent">
                <h4 className="font-bold text-lg mb-2">Ready to order?</h4>
                <p className="text-xs text-gray-200 mb-4 leading-relaxed">
                  Call Aaron directly for immediate emergency cleaning bookings or special custom quote packages.
                </p>
                <a
                  href="tel:07123456781"
                  className="bg-accent hover:bg-accent-hover text-primary font-black py-2.5 px-6 rounded-full inline-flex items-center gap-2 text-sm shadow transition-all duration-300"
                >
                  Call 07123 456781
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
