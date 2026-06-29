import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import ServicePageClient from '@/components/ServicePageClient';

// This safely runs on the server side during build time
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }) {
  // Await page params in Next.js 15+
  const { slug } = await params;
  
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  // Pass the data down to the client component
  return <ServicePageClient service={service} />;
}
