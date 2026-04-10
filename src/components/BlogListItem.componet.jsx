import Link from 'next/link';

const BlogListItem = ({ post }) => {
  return (
    <Link href={`/blog/${post._meta.path}`} className="flex flex-col">
      <span className="text-neutral-950 text-xl dark:text-neutral-50 font-medium">
        {post.title}
      </span>
      <div className="flex flex-row items-center gap-2.5 mt-0.5 text-neutral-700 dark:text-neutral-400 text-sm">
        <time>
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
        </time>
        <span>•</span>
        <span>{post.readingTime} min read</span>
      </div>
      <p className="text-neutral-700 dark:text-neutral-400 text-base mt-2">
        {post.description}
      </p>
    </Link>
  );
};

export default BlogListItem;
