import { getBaseUrl } from '@usa/core/util/get-base-url';
import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
    disallow: ['/api', '/_next'],
  },
  sitemap: `${getBaseUrl({ forceCustomDomain: true }).toString()}sitemap.xml`,
});

export default robots;
