import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import ServicePageClient from '@/components/ServicePageClient';

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} Services Essex | Raymond Cleaning Services`,
    description: `${service.desc} Professional, fully insured exterior cleaning in Essex. Get a free quote.`,
    keywords: service.seoKeywords,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}

