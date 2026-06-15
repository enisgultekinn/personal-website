import { url } from '@/config';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/'
    },
    sitemap: `${url}/sitemap.xml`,
    host: url
  };
}
