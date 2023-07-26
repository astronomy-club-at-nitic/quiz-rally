import type { MetadataRoute } from 'next';
import { getBaseUrl } from '@/util/get-base-url';

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
    disallow: ['/api', '/_next'],
  },
  sitemap: `${getBaseUrl({ forceCustomDomain: true }).toString()}sitemap.xml`,
});

export default robots;
