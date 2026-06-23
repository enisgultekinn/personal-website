import { Header } from '@/components';
import Link from 'next/link';

const socialLinks = [
  {
    href: 'https://github.com/enisgultekinn',
    label: 'github'
  },
  {
    href: 'https://www.linkedin.com/in/enisgultekin/',
    label: 'linkedin'
  },
  {
    href: 'mailto:enisgultekin@gmail.com',
    label: 'email'
  }
];

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <footer className="pt-8 md:pt-16 flex flex-row text-neutral-600 dark:text-neutral-400">
        <div className="flex flex-row items-center gap-4">
          {socialLinks.map(({ href, label }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
        <Link href="/rss.xml" className="ml-auto">
          rss
        </Link>
      </footer>
    </>
  );
}
