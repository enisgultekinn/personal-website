import { allPosts } from 'content-collections';
import Link from 'next/link';
import { BlogListItem } from '@/components';

const links = [
  {
    href: 'https://github.com/enisgultekin',
    label: 'GitHub'
  },
  {
    href: 'https://www.linkedin.com/in/enisgultekin/',
    label: 'LinkedIn'
  },
  {
    href: 'mailto:enisgultekin@gmail.com',
    label: 'Email'
  }
];

export default function Home() {
  const latestPosts = allPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="flex flex-col">
      <p className="text-lg mt-8 text-neutral-900 dark:text-neutral-50">
        I&apos;m a frontend developer based in Istanbul. I consider writing and
        explaining things to be the most important part of truly learning a
        subject. I write and share blog posts about JavaScript and my
        experiences here. I also keep a list of the tv series & movies I&apos;ve
        watched.
      </p>
      <span className="text-lg mt-8 text-neutral-900 dark:text-neutral-50">
        My latest blog posts:
      </span>
      <div className="gap-2 mt-4 flex flex-col">
        {latestPosts.map(post => (
          <Link
            key={post._meta.path}
            href={`/blog/${post._meta.path}`}
            className="ml-4 text-lg flex flex-row items-center gap-4 text-neutral-900 dark:text-neutral-50 hover:text-neutral-700 dark:hover:text-neutral-400 transition-colors duration-300"
          >
            <div className="w-1 h-1 rounded-full bg-neutral-900 dark:bg-neutral-50" />
            {post.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
