import { allPosts } from 'content-collections';
import { Mdx, ViewTracker } from '@/components';
import { notFound } from 'next/navigation';
import Balancer from 'react-wrap-balancer';

export async function generateStaticParams() {
  return allPosts.map(post => ({
    slug: post._meta.path
  }));
}

export default async function Blog({ params }) {
  const { slug } = await params;
  const post = allPosts.find(post => post._meta.path === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="mt-8 md:mt-24">
      <h1 className="md:text-3xl text-2xl font-semibold">{post.title}</h1>
      <div className="flex flex-row items-center gap-2.5 text-neutral-700 dark:text-neutral-400 md:text-base text-sm mt-2  mb-4 md:mb-6">
        <time>
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
        </time>
        <span>•</span>
        <span>{post.readingTime} min read</span>
        <div className="ml-auto">
          <ViewTracker slug={slug} />
        </div>
      </div>
      <Mdx content={post.mdx} />
    </section>
  );
}
