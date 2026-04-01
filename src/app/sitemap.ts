import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ayoub-ouldrouis-avocat.com';
  const locales = ['fr', 'ar'];
  const routes = ['', '/services', '/contact'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      const url = `${baseUrl}/${locale}${route}`;
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
        // Alternates support in sitemap (standard Next.js field)
        // Note: MetadataRoute.Sitemap allows objects with 'languages' field in newer Next.js versions
        // but here we follow the standard structure
      });
    });
  });

  return sitemapEntries;
}
