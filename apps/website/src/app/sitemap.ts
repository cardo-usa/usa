import { getBaseUrl } from '@usa/core/util/get-base-url';
import type { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: getBaseUrl({ forceCustomDomain: true }).toString(),
    lastModified: new Date(),
  },
];

export default sitemap;
