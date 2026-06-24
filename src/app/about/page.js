import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';

export default function About() {
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
          <div className="absolute inset-0 bg-primary/95"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="bg-accent/20 text-accent font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border border-accent/30">
            About Raymond Cleaning Services
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Meet Aaron & The Team
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Building trust across Essex with high-quality, professional, and reliable exterior cleaning services.
          </p>
        </div>

        {/* Custom Shape Divider Asset A (Deep Blue to White) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px]">
            <path fill="#ffffff" d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,160L1320,160C1200,160,960,160,720,160C480,160,240,160,120,160L0,160Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. My Story (Background) */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-accent font-black tracking-wider uppercase text-sm">
                01. The Beginning
              </span>
              <h2 className="text-3xl font-extrabold text-primary">
                My Story
              </h2>
              <div className="text-gray-500 space-y-4 leading-relaxed">
                <p>
                  Raymond Cleaning Services was founded by Aaron Raymond. Starting as a local, independent window washer with a single squeegee and bucket in Chelmsford, Aaron focused on a simple formula: do an exceptional job, arrive on schedule, and charge a fair price.
                </p>
                <p>
                  As homeowners began requesting gutter clearings and driveway cleaning, Aaron realized there was a severe lack of reliable, professional service providers who combined high-grade industrial cleaning equipment with five-star customer care. By investing in modern pole systems and commercial soft washing chemical systems, Raymond Cleaning Services grew from a one-man round into a professional team.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="/images/about-me.png"
                  alt="Aaron Raymond standing by his service van"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. My Goals (Mission Statement) */}
      <section className="bg-off-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <span className="text-accent font-black tracking-wider uppercase text-sm">
                02. Our Core Mission
              </span>
              <h2 className="text-3xl font-extrabold text-primary">
                My Goals
              </h2>
              <div className="text-gray-500 space-y-4 leading-relaxed">
                <p>
                  Our primary goal is to establish extreme trust with our clients. We mimic the high standard of top service companies by arriving in clean, branded uniforms and sign-written vans, keeping customer communication clear and transparent.
                </p>
                <p>
                  We are driven by three fundamental targets:
                </p>
                <ul className="space-y-3 font-semibold text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Deliver a streak-free, double-checked finish on every job.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Push for recurring maintenance packages to save homeowners money.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Educate clients on property longevity through routine gutter and render treatments.
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-6 lg:order-1">
              <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-150">
                <Image
                  src="/images/hero-bg.png"
                  alt="Spotless Essex suburban house cleaned by Raymond Cleaning Services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What I Do (Scope of Work) */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-accent font-black tracking-wider uppercase text-sm">
                03. Professional Scope
              </span>
              <h2 className="text-3xl font-extrabold text-primary">
                What I Do
              </h2>
              <div className="text-gray-500 space-y-4 leading-relaxed">
                <p>
                  Raymond Cleaning Services provides a comprehensive suite of exterior property maintenance. We do not just wash surfaces; we restore them.
                </p>
                <p>
                  Our capabilities cover high-reach window cleaning using mineral-free pure water, heavy-duty gutter clearing with carbon fiber vacuums and real-time inspect cameras, block paving pressure washing, K-Rend render soft washing to eliminate black and green mold, and roofline fascia scrubbing. We have the training and specialized chemicals to handle any residential or light commercial exterior wash job safely.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="/images/window-cleaning.png"
                  alt="Professional window cleaning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. What I Have Done (Portfolio Gallery) */}
      <section className="bg-off-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-black tracking-wider uppercase text-sm">
              04. Work History
            </span>
            <h2 className="text-3xl font-extrabold text-primary mt-2">
              What I Have Done
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              A gallery of our core services showing the pristine results we bring to residential homes and commercial blocks across Essex.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-[220px] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-extrabold text-primary text-lg mb-1">
                    {service.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <Link
                    href={`/${service.slug}`}
                    className="text-xs font-bold text-accent hover:underline flex items-center gap-1"
                  >
                    View Details & Rates
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/"
              className="bg-primary hover:bg-primary-hover text-white font-extrabold px-8 py-4 rounded-xl shadow-lg transition-all"
            >
              Get a Free Quote Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
