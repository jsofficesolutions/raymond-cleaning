'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Schedule() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative bg-primary text-white pt-20 pb-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Beautiful property header"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-primary/90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="bg-accent/20 text-accent font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border border-accent/30">
            Subscribe & Save 15%
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Rinse & Repeat Maintenance
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Protect your property investment. Our scheduled 6-month cleaning intervals ensure your exterior is always gleaming, preventing costly water damage and algae stains.
          </p>
        </div>

        {/* Custom Shape Divider Asset A (Deep Blue to White) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px]">
            <path fill="#ffffff" d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,160L1320,160C1200,160,960,160,720,160C480,160,240,160,120,160L0,160Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. Content Block 1: Trust Anchors */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-black tracking-wider uppercase text-xs sm:text-sm">
              Why Schedule Ahead?
            </span>
            <h2 className="text-3xl font-extrabold text-slate-dark mt-2">
              The Cost-Benefit of Routine Maintenance
            </h2>
            <p className="text-gray-500 mt-3 text-base sm:text-lg">
              One-off emergency cleans cost up to 40% more. Regular maintenance keeps your property structurally sound and looking brand new.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-off-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-primary"></div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Fully Insured & Vetted</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Sleep easy knowing your property is protected by our £5 Million Public Liability Insurance. Every technician on Aaron's team is background-checked, vetted, and thoroughly trained.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-off-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-accent"></div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Lock In 15% Savings</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                By subscribing to our 6-month routine schedule, you guarantee the lowest rates. We lock in your discount, and you avoid the price hikes typical of peak cleaning seasons.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-off-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-primary"></div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Damage Prevention</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Standing water in gutters cracks brickwork, and algae compromises render. Regular maintenance eliminates damp ingress, save thousands in structural repairs down the line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Content Block 2: Timeline Infographic */}
      <section className="bg-off-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-black tracking-wider uppercase text-xs sm:text-sm">
              Maintenance Timeline
            </span>
            <h2 className="text-3xl font-extrabold text-primary mt-2">
              Your 6-Month Maintenance Cycle (2025–2026)
            </h2>
            <p className="text-gray-500 mt-3 text-base sm:text-lg">
              Here is how we schedule your cleanings over the next two years to guarantee optimal protection and beauty.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative border-l-2 border-primary/20 max-w-3xl mx-auto pl-8 space-y-12">
            {/* Timeline Item 1 */}
            <div className="relative">
              <div className="absolute -left-[38px] top-1 bg-white w-5 h-5 rounded-full border-4 border-primary flex items-center justify-center z-10"></div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-accent tracking-widest">
                    Interval 1
                  </span>
                  <span className="text-xs font-extrabold bg-primary/10 text-primary px-3 py-1 rounded-full">
                    Spring 2025
                  </span>
                </div>
                <h4 className="text-lg font-bold text-primary">Window Polish & Soft Washing Prep</h4>
                <p className="text-sm text-gray-500">
                  After the harsh winter winds, we clean all windows, frames, and sills, and apply a gentle soft wash treatment to north-facing render to kill spring algae spores.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative">
              <div className="absolute -left-[38px] top-1 bg-white w-5 h-5 rounded-full border-4 border-accent flex items-center justify-center z-10"></div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-accent tracking-widest">
                    Interval 2
                  </span>
                  <span className="text-xs font-extrabold bg-primary/10 text-primary px-3 py-1 rounded-full">
                    Autumn 2025
                  </span>
                </div>
                <h4 className="text-lg font-bold text-primary">Pre-Winter Gutter Clearance & Window Polish</h4>
                <p className="text-sm text-gray-500">
                  We vacuum-clear all gutter runs of leaves and twigs before winter rains start, checking downpipes with cameras and polishing all windows to let in maximum winter sunlight.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative">
              <div className="absolute -left-[38px] top-1 bg-white w-5 h-5 rounded-full border-4 border-primary flex items-center justify-center z-10"></div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-accent tracking-widest">
                    Interval 3
                  </span>
                  <span className="text-xs font-extrabold bg-primary/10 text-primary px-3 py-1 rounded-full">
                    Spring 2026
                  </span>
                </div>
                <h4 className="text-lg font-bold text-primary">Driveway/Patio Powerwash & Seal</h4>
                <p className="text-sm text-gray-500">
                  High-powered washing of paving and concrete areas. We treat joint gaps for weeds, re-sand the block paving, and wash all white fascia boards and soffits.
                </p>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="relative">
              <div className="absolute -left-[38px] top-1 bg-white w-5 h-5 rounded-full border-4 border-accent flex items-center justify-center z-10"></div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-accent tracking-widest">
                    Interval 4
                  </span>
                  <span className="text-xs font-extrabold bg-primary/10 text-primary px-3 py-1 rounded-full">
                    Autumn 2026
                  </span>
                </div>
                <h4 className="text-lg font-bold text-primary">Full Gutter Flush & Render Sanitization</h4>
                <p className="text-sm text-gray-500">
                  Annual gutter clearance check, complete exterior washdown, and application of residual algae inhibitors to keep walls spotless throughout the damp winter months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Content Block 3: Before/After Interactive Slider */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-primary font-black tracking-wider uppercase text-xs sm:text-sm">
                Interactive Proof
              </span>
              <h2 className="text-3xl font-extrabold text-primary leading-tight">
                See the Dramatic Difference We Make
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Drag the slider handle on the image to compare a stained cladding surface with a freshly soft-washed exterior. 
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our eco-friendly sanitizing solutions dissolve algae at the root. Surfaces stay clean up to 4 times longer compared to high-pressure water alone, which leaves microscopic algae spores active inside porous surfaces.
              </p>
              <div className="pt-2">
                <Link
                  href="/"
                  className="bg-primary hover:bg-primary-hover text-white font-extrabold px-8 py-3.5 rounded-full shadow-md transition-all inline-block"
                >
                  Book My Cleaning Now
                </Link>
              </div>
            </div>

            {/* Right: Slider Column */}
            <div className="lg:col-span-7">
              <div 
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onMouseDown={() => setIsDragging(true)}
                onTouchStart={() => setIsDragging(true)}
                className="slider-container relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white cursor-ew-resize"
              >
                {/* Before Image (Base) */}
                <Image
                  src="/images/before-after-dirty.png"
                  alt="Dirty wall before cleaning"
                  fill
                  className="slider-image"
                />

                {/* Label Before */}
                <div className="absolute top-4 left-4 bg-red-600/90 text-white font-extrabold text-xs px-3 py-1.5 rounded uppercase tracking-wider select-none z-20 shadow">
                  Before Clean
                </div>

                {/* After Image (Overlay, width controlled by slider position) */}
                <div 
                  className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none z-10"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div className="absolute inset-y-0 left-0 w-[100vw] h-full aspect-video">
                    <Image
                      src="/images/before-after-clean.png"
                      alt="Clean wall after cleaning"
                      fill
                      className="slider-image"
                    />
                  </div>
                  
                  {/* Label After */}
                  <div className="absolute top-4 left-4 bg-green-600/90 text-white font-extrabold text-xs px-3 py-1.5 rounded uppercase tracking-wider select-none shadow">
                    After Clean
                  </div>
                </div>

                {/* Slider Handle Line */}
                <div 
                  className="slider-handle"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="slider-handle-button select-none font-bold text-lg">
                    ↔
                  </div>
                </div>
              </div>
              <p className="text-center text-xs text-gray-400 mt-3 font-semibold">
                Tip: Drag the white slider circle back and forth to compare!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
