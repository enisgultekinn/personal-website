import { Feed } from 'feed';
import { allPosts } from 'content-collections';
import { author, url, title, description } from '@/config';

export async function GET() {
  const feed = new Feed({
    title: `${title} - RSS Feed`,
    description,
    id: url,
    link: url,
    language: 'tr',
    favicon: `${url}/favicon.ico`,
    generator: 'Next.js',
    author
  });

  const posts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  for (const post of posts) {
    feed.addItem({
      title: post.title,
      id: `${url}/blog/${post._meta.path}`,
      link: `${url}/blog/${post._meta.path}`,
      description: post.description,
      content: post.content,
      date: new Date(post.date)
    });
  }

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8'
    }
  });
}
