import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import ServicePageClient from '@/components/ServicePageClient';

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}

