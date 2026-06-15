'use client';

import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import useIsMounted from '@/hooks/useIsMounted';
import { MoonStar, Sun } from 'lucide-react';
import Link from 'next/link';
import classNames from 'classnames';

const MENU = [
  {
    label: 'About',
    href: '/about-me'
  },
  {
    label: 'Blog',
    href: '/blog'
  },
  {
    label: 'Readings',
    href: '/readings'
  }
];

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const isMounted = useIsMounted();
  const currentPath = `/${pathname.split('/')[1]}`;

  if (!isMounted) return null;

  const handleThemeToggle = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    document.startViewTransition(() => setTheme(newTheme));
  };

  return (
    <header className="mt-8 md:mt-24">
      <div className="flex flex-row justify-between items-center">
        <Link
          className="text-lg md:text-2xl font-medium cursor-pointer text-neutral-900 dark:text-neutral-50"
          href="/"
        >
          Enis Gültekin
        </Link>
        <div className="flex flex-row items-center">
          <nav className="flex flex-row items-center gap-4 md:gap-6">
            {MENU.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={classNames(
                  'relative text-sm md:text-base pb-0.5 group transition-colors duration-300',
                  {
                    'text-neutral-900 dark:text-neutral-50':
                      currentPath === href,
                    'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50':
                      currentPath !== href
                  }
                )}
              >
                {label}
                <span
                  className={classNames(
                    'absolute bottom-0 left-0 h-px dark:bg-neutral-50 bg-neutral-900 transition-all duration-300 ease-out',
                    {
                      'w-full': currentPath === href,
                      'w-0 group-hover:w-full': currentPath !== href
                    }
                  )}
                />
              </Link>
            ))}
          </nav>
          <button
            className="cursor-pointer ml-4 md:ml-8"
            onClick={handleThemeToggle}
          >
            {resolvedTheme === 'dark' ? (
              <Sun
                className="w-4 h-4 md:w-5 md:h-5 animate-theme-toggle dark:text-neutral-50 text-neutral-900"
                strokeWidth={1.5}
              />
            ) : (
              <MoonStar
                className="w-4 h-4 md:w-5 md:h-5 animate-theme-toggle dark:text-neutral-50 text-neutral-900"
                strokeWidth={1.5}
              />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
