import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { weeklySeoPayload } from '@/data/seoIntelligence';
import ServicePageClient from '@/components/ServicePageClient';

export function generateStaticParams() {
  const params = [];
  
  services.forEach((service) => {
    // Base service route
    params.push({ slug: service.slug });
    
    // Location-specific routes
    locations.forEach((loc) => {
      params.push({ slug: `${service.slug}-${loc.slug}` });
    });
  });
  
  return params;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  let matchedService = services.find((s) => s.slug === slug);
  let matchedLocation = null;

  if (!matchedService) {
    for (const service of services) {
      if (slug.startsWith(service.slug + '-')) {
        const locationSlug = slug.substring(service.slug.length + 1);
        const loc = locations.find((l) => l.slug === locationSlug);
        if (loc) {
          matchedService = service;
          matchedLocation = loc;
          break;
        }
      }
    }
  }
  
  if (!matchedService) {
    return {
      title: 'Service Not Found',
    };
  }

  const siteUrl = 'https://raymondcleaning.co.uk'; // Replace with client domain if necessary
  const canonicalUrl = `${siteUrl}/${slug}`;

  if (matchedLocation) {
    return {
      title: `${matchedService.title} Services in ${matchedLocation.name} | Raymond Cleaning`,
      description: `Need professional ${matchedService.title.toLowerCase()} in ${matchedLocation.name}? Raymond Cleaning Services is ${matchedLocation.name}'s trusted local provider. Fully insured exterior care.`,
      keywords: `${matchedService.title.toLowerCase()} ${matchedLocation.name}, professional exterior cleaners ${matchedLocation.name}, Raymond Cleaning ${matchedLocation.name}, exterior cleaning ${matchedLocation.name}`,
      alternates: {
        canonical: canonicalUrl,
      }
    };
  }

  return {
    title: `${matchedService.title} Services Essex | Raymond Cleaning Services`,
    description: `${matchedService.desc} Professional, fully insured exterior cleaning in Essex. Get a free quote.`,
    keywords: matchedService.seoKeywords,
    alternates: {
      canonical: canonicalUrl,
    }
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  
  let matchedService = services.find((s) => s.slug === slug);
  let matchedLocation = null;

  if (!matchedService) {
    for (const service of services) {
      if (slug.startsWith(service.slug + '-')) {
        const locationSlug = slug.substring(service.slug.length + 1);
        const loc = locations.find((l) => l.slug === locationSlug);
        if (loc) {
          matchedService = service;
          matchedLocation = loc;
          break;
        }
      }
    }
  }

  if (!matchedService) {
    notFound();
  }

  const activeSeoService = weeklySeoPayload.services[matchedService.slug] || null;
  const activeSeoLocation = matchedLocation 
    ? (weeklySeoPayload.locationOverrides[`${matchedService.slug}-${matchedLocation.slug}`] || null) 
    : null;

  return (
    <ServicePageClient 
      service={matchedService} 
      location={matchedLocation} 
      seoService={activeSeoService}
      seoLocation={activeSeoLocation}
    />
  );
}
