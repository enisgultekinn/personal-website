import { allPosts } from 'content-collections';
import { url } from '@/config';

export default function sitemap() {
  const routes = ['', '/about-me', '/blog', '/readings'].map(route => ({
    url: `${url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8
  }));

  const posts = allPosts.map(post => ({
    url: `${url}/blog/${post._meta.path}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly',
    priority: 0.6
  }));

  return [...routes, ...posts];
}
