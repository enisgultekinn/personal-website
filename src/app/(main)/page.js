import { allPosts } from 'content-collections';
import Link from 'next/link';

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
      <p className="text-neutral-950 dark:text-neutral-400 mt-4 text-lg">
        I&apos;m a frontend developer. I consider writing and explaining things
        to be the most important part of truly learning a subject. I write and
        share blog posts about JavaScript and my experiences here. I also keep a
        list of the books I&apos;ve read.
      </p>
      <div className="flex flex-row justify-between items-center mt-8">
        <p className="text-neutral-950 dark:text-neutral-400 text-lg">
          My latest blog posts:
        </p>
        <Link
          href="/blog"
          className="ml-auto text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-500 transition-colors duration-200 underline underline-offset-5 dark:decoration-neutral-700 decoration-neutral-400 font-medium"
        >
          All blog posts
        </Link>
      </div>
      <ul className="list-disc list-inside mt-4 ml-4 flex flex-col gap-1">
        {latestPosts.map(post => (
          <li key={post.title}>
            <Link
              href={`/blog/${post._meta.path}`}
              className="text-neutral-950 hover:text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-400 text-lg transition-colors duration-200"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>

      <p className="text-neutral-950 dark:text-neutral-400 mt-8 text-lg">
        You can find me on the following platforms:
      </p>
      <ul className="list-disc list-inside mt-4 ml-4 flex flex-col gap-1">
        {links.map(link => (
          <li key={link.label}>
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-950 hover:text-neutral-600 dark:text-neutral-50  dark:hover:text-neutral-400 text-lg transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex flex-row items-center mt-8">
        <p className="text-neutral-950 dark:text-neutral-400 font-medium text-lg">
          Reading:
        </p>
        <span className="text-neutral-950 dark:text-neutral-50 ml-1 italic text-lg">
          Alex Ferguson: My Autobiography - Sir Alex Ferguson
        </span>
        <Link
          href="/readings"
          className="ml-auto text-neutral-700 dark:text-neutral-400  dark:hover:text-neutral-500 transition-colors duration-200 underline underline-offset-5 dark:decoration-neutral-700 decoration-neutral-400 font-medium"
        >
          All readings
        </Link>
      </div>
    </section>
  );
}
