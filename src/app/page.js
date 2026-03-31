import Link from "next/link";

const links = [
  {
    href: "https://github.com/enisgultekin",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/enisgultekin/",
    label: "LinkedIn",
  },
  {
    href: "mailto:enisgultekin@gmail.com",
    label: "Email",
  },
];

const blogPosts = [
  {
    href: "https://www.example.com/post-1",
    title: "Introduction to React Conciliations",
  },
  {
    href: "https://www.example.com/post-2",
    title: "React Conciliations - A Comprehensive Guide",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col ">
      <h1 className="text-2xl font-medium text-neutral-900 dark:text-neutral-50">
        Enis Gültekin
      </h1>
      <p className="text-neutral-900 dark:text-neutral-400 mt-4 text-lg">
        I&apos;m a frontend developer. I consider writing and explaining things
        to be the most important part of truly learning a subject. I write and
        share blog posts about JavaScript and my experiences here. I also keep a
        list of the books I&apos;ve read.
      </p>
      <div className="flex flex-row justify-between items-center mt-8">
        <p className="text-neutral-900 dark:text-neutral-400 text-lg">
          My latest blog posts:
        </p>
        <Link
          href="/blog"
          className="text-neutral-400 dark:hover:text-neutral-500 transition-colors duration-200 underline underline-offset-4 decoration-neutral-700"
        >
          All blog posts
        </Link>
      </div>
      <ul className="list-disc list-inside mt-4 ml-4 flex flex-col gap-1">
        {blogPosts.map((post) => (
          <li key={post.title}>
            <Link
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-50 dark:hover:text-neutral-400 transition-colors duration-200"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>

      <p className="text-neutral-900 dark:text-neutral-400 mt-8 text-lg">
        You can find me on the following platforms:
      </p>
      <ul className="list-disc list-inside mt-4 ml-4 flex flex-col gap-1">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-50 dark:hover:text-neutral-400 transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
