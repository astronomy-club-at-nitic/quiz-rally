import type { MetadataRoute } from 'next';
import { getBaseUrl } from '@/util/get-base-url';

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: getBaseUrl({ forceCustomDomain: true }).toString(),
    lastModified: new Date(),
  },
];

export default sitemap;
