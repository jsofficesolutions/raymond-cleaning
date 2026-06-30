import { services } from '@/data/services';
import { locations } from '@/data/locations';

export default function sitemap() {
  const baseUrl = 'https://raymondcleaning.co.uk';

  // 1. Core static routes
  const routes = ['', '/about', '/schedule'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Base services
  services.forEach((service) => {
    routes.push({
      url: `${baseUrl}/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    // 3. Location pairings
    locations.forEach((loc) => {
      routes.push({
        url: `${baseUrl}/${service.slug}-${loc.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  });

  return routes;
}
