import { allPosts } from 'content-collections';
import { BlogListItem } from '@/components';

export default function BlogList() {
  const posts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <section className="flex flex-col">
      <p className="text-lg mt-8 text-neutral-900 dark:text-neutral-400">
        Notes on JavaScript, experiences and the occasional tangent.
      </p>
      <div className="flex flex-col mt-8">
        {posts.map(post => (
          <BlogListItem key={post._meta.path} post={post} />
        ))}
      </div>
    </section>
  );
}
