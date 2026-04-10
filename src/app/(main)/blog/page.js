import Link from 'next/link';
import { allPosts } from 'content-collections';
import { BlogListItem } from '@/components';

export default function BlogList() {
  const posts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <section className="flex flex-col">
      <p className="text-neutral-700 dark:text-neutral-400 text-lg mt-4">
        I&apos;m a frontend developer. I consider writing and explaining things
        to be the most important part of truly learning a subject. I write and
        share blog posts about JavaScript and my experiences here. I also keep a
        list of the books I&apos;ve read.
      </p>
      <div className="space-y-8 mt-8">
        {posts.map(post => (
          <BlogListItem key={post._meta.path} post={post} />
        ))}
      </div>
    </section>
  );
}
