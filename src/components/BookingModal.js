'use client';

import { useState, useEffect } from 'react';
import { services } from '@/data/services';

export default function BookingModal({ isOpen, onClose, initialService, initialPostcode }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [postcode, setPostcode] = useState('');
  const [service, setService] = useState('');
  const [details, setDetails] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Synchronize state when the modal opens with initial values from the hero widget
  useEffect(() => {
    if (isOpen) {
      setService(initialService || '');
      setPostcode(initialPostcode || '');
      setFormSubmitted(false); // Reset form state
    }
  }, [isOpen, initialService, initialPostcode]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !email || !service || !postcode) {
      alert("Please fill in all required fields.");
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        {/* Modal Container */}
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden relative my-auto animate-in fade-in zoom-in-95 duration-200">
          
          {/* Absolute Exit button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white md:text-gray-400 hover:text-accent md:hover:text-gray-600 text-xl sm:text-2xl font-bold cursor-pointer z-15 transition-colors"
            aria-label="Close booking modal"
          >
            ✕
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Left Column: Direct-Call Header Block */}
            <div className="md:col-span-5 bg-primary text-white text-center py-8 px-6 md:p-8 flex flex-col justify-center items-center relative">
              <h3 className="text-2xl sm:text-3xl md:text-xl lg:text-2xl font-extrabold uppercase tracking-wide">
                Make a Booking
              </h3>
              <div className="w-12 h-0.5 bg-accent my-3 md:my-4"></div>
              <p className="text-sm sm:text-base font-bold text-blue-100 mt-1">
                Simply call and we'll book you in now:
              </p>
              <a
                href="tel:07123456781"
                className="block text-3xl sm:text-4xl md:text-2xl lg:text-3xl font-black mt-2 tracking-tight hover:scale-105 transition-transform duration-200"
              >
                07123 456781
              </a>

              {/* Trust Badges */}
              <div className="hidden md:flex flex-col mt-8 space-y-3.5 text-left w-full max-w-[200px]">
                <div className="flex items-center gap-2.5 text-xs font-bold text-blue-100">
                  <span className="text-accent text-sm font-extrabold">✓</span> Fast Scheduling
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-blue-100">
                  <span className="text-accent text-sm font-extrabold">✓</span> Vetted Cleaners
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-blue-100">
                  <span className="text-accent text-sm font-extrabold">✓</span> Fully Insured (£5M)
                </div>
              </div>
            </div>

            {/* Right Column: Form Body */}
            <div className="md:col-span-7 p-6 sm:p-8 bg-slate-50/50">
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold">Booking Request Sent!</h4>
                  <p className="text-sm text-green-700 max-w-md mx-auto">
                    Thank you, <strong>{name}</strong>. Aaron has received your booking request for <strong>{service}</strong> in <strong>{postcode}</strong>. We will review your request and contact you at <strong>{phone}</strong> within 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      onClose();
                    }}
                    className="bg-primary hover:bg-primary-hover text-white font-extrabold px-6 py-2.5 rounded-lg uppercase text-sm mt-4 cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h4 className="text-base sm:text-lg font-black uppercase tracking-wider text-primary">
                      Or Request an Estimate Online
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
                      We'll review your details and contact you with a suitable quote option.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name Field */}
                    <div>
                      <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-blue-900 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="First Name, Surname"
                        className="w-full h-14 md:h-10 px-4 md:px-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-base md:text-xs text-slate-800 placeholder:text-sm md:placeholder:text-xs placeholder-gray-400 shadow-sm"
                      />
                    </div>

                    {/* Contact Number Field */}
                    <div>
                      <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-blue-900 mb-2">
                        Contact Number *
                      </label>
                      <div className="relative flex items-center bg-white border border-gray-200 rounded-xl shadow-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 transition-all overflow-hidden h-14 md:h-10">
                        <div className="flex items-center gap-1.5 px-3 border-r border-gray-150 bg-slate-50 text-xs md:text-[10px] text-slate-500 font-bold select-none h-full animate-in fade-in duration-200">
                          <span className="text-base md:text-sm">🇬🇧</span>
                          <svg className="w-3 h-3 md:w-2.5 md:h-2.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="07400 123456"
                          className="w-full px-4 py-2 bg-transparent outline-none text-base md:text-xs text-slate-800 placeholder:text-sm md:placeholder:text-xs placeholder-gray-400"
                        />
                      </div>
                    </div>

                    {/* Email Address Field */}
                    <div>
                      <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-blue-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@server.co.uk"
                        className="w-full h-14 md:h-10 px-4 md:px-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-base md:text-xs text-slate-800 placeholder:text-sm md:placeholder:text-xs placeholder-gray-400 shadow-sm"
                      />
                    </div>

                    {/* Postcode Field */}
                    <div>
                      <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-blue-900 mb-2">
                        Postcode
                      </label>
                      <input
                        type="text"
                        required
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                        placeholder="RM38HQ"
                        className="w-full h-14 md:h-10 px-4 md:px-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-base md:text-xs text-slate-800 placeholder:text-sm md:placeholder:text-xs placeholder-gray-400 shadow-sm uppercase placeholder:normal-case"
                      />
                    </div>

                  </div>

                  {/* Service Select (Full Width) */}
                  <div>
                    <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-blue-900 mb-2">
                      Service *
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full h-14 md:h-10 px-4 md:px-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-base md:text-xs text-slate-800 appearance-none shadow-sm"
                      >
                        <option value="">-- Choose a Service --</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 md:pr-3.5 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4 md:w-3.5 md:h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Issue Details (Full Width) */}
                  <div>
                    <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-blue-900 mb-2">
                      Details about the issue you're having
                    </label>
                    <textarea
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Describe the issue you are experiencing, when it happens, etc"
                      className="w-full px-4 md:px-3.5 py-3 md:py-2 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-base md:text-xs text-slate-800 placeholder:text-sm md:placeholder:text-xs placeholder-gray-400 shadow-sm min-h-[100px] md:min-h-[60px] max-h-[150px] md:max-h-[100px] resize-y"
                    />
                  </div>

                  {/* T&C Subtext */}
                  <p className="text-[10px] sm:text-xs text-gray-400 leading-normal">
                    By using this contact form you agree to the Raymond Cleaning Services Ltd{' '}
                    <span className="underline cursor-pointer hover:text-primary transition-colors">Terms & Conditions</span>
                    , and use of your details in accordance with our{' '}
                    <span className="underline cursor-pointer hover:text-primary transition-colors">Privacy Policy</span>.
                  </p>

                  {/* Submit Button (Full-width on mobile) */}
                  <div className="flex justify-start pt-1 w-full">
                    <button
                      type="submit"
                      className="w-full md:w-auto bg-primary hover:bg-primary-hover text-white font-black px-8 py-5 md:py-3.5 rounded-xl uppercase tracking-wider text-base md:text-xs cursor-pointer shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      Send Booking Request
                    </button>
                  </div>

                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
