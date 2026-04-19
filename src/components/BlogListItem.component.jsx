import Link from 'next/link';

const BlogListItem = ({ post }) => {
  return (
    <Link
      href={`/blog/${post._meta.path}`}
      className="flex flex-col translate-x-0 hover:translate-x-2 transition-transform duration-200 group py-2"
    >
      <span className="text-neutral-900 dark:text-neutral-50 text-lg dark:group-hover:text-neutral-200 group-hover:text-neutral-600 transition-colors duration-200">
        {post.title}
      </span>
    </Link>
  );
};

export default BlogListItem;
