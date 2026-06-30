import Link from 'next/link';
import Image from 'next/image';
import { locations } from '@/data/locations';
import { services } from '@/data/services';

export const metadata = {
  title: 'Locations We Serve | Essex Exterior Cleaning | Raymond Cleaning Services',
  description: 'We offer professional window cleaning, gutter clearance, pressure washing, and soft washing across Essex. Find your local serviced area and request a free quote.',
  alternates: {
    canonical: 'https://raymondcleaning.co.uk/locations',
  }
};

export default function LocationsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary text-white pt-20 pb-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.webp"
            alt="Essex homes cleaned by Raymond Cleaning Services"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-primary/95"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="bg-accent/20 text-accent font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border border-accent/30">
            Coverage Area
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none">
            Locations We Serve
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Proudly delivering premium residential and commercial exterior cleaning services throughout Essex.
          </p>
        </div>

        {/* Custom Shape Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px]">
            <path fill="#ffffff" d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,160L1320,160C1200,160,960,160,720,160C480,160,240,160,120,160L0,160Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-primary">
              Find Your Town
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Click a location below to view local pricing, reviews, and specific services we offer in your area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <div 
                key={loc.slug} 
                className="bg-off-white rounded-2xl p-6 border border-gray-150 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/5 text-primary p-2.5 rounded-xl border border-primary/10">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-primary">{loc.name}</h3>
                  </div>
                  
                  <p className="text-xs text-gray-500 mb-6 italic leading-relaxed">
                    Serving {loc.landmark}.
                  </p>

                  <div className="space-y-2.5">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider block mb-1">
                      Services in {loc.name}:
                    </span>
                    {services.map((service) => (
                      <Link 
                        key={service.slug}
                        href={`/${service.slug}-${loc.slug}`}
                        className="flex items-center justify-between text-xs text-gray-600 hover:text-accent font-semibold py-1 border-b border-gray-200/60 transition-colors group/item"
                      >
                        <span>{service.title}</span>
                        <span className="text-gray-400 group-hover/item:text-accent transition-colors">→</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-200/60">
                  <Link
                    href={`/schedule?loc=${loc.slug}`}
                    className="w-full text-center block bg-primary hover:bg-primary-hover text-white text-xs font-bold py-3 rounded-xl transition-all"
                  >
                    View Rinse & Repeat Schedule
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-off-white py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-primary">
            Don't See Your Location?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Although these are our primary service centers, we frequently undertake larger commercial and residential restoration projects throughout the wider Essex and East London areas.
          </p>
          <div className="pt-4">
            <Link
              href="/schedule"
              className="bg-accent hover:bg-accent/90 text-primary font-extrabold px-8 py-4 rounded-xl shadow-lg transition-all"
            >
              Contact Us for a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
