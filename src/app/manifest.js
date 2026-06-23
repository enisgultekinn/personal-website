import { title, description } from '@/config';

export default function manifest() {
  return {
    name: title,
    short_name: 'Enis',
    description,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#f5f3ee',
    theme_color: '#f5f3ee',
    lang: 'en',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ]
  };
}
