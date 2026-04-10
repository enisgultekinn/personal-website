'use client';

import { useTheme } from 'next-themes';
import useIsMounted from '@/hooks/useIsMounted';
import { MoonStar, Sun } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const isMounted = useIsMounted();
  if (!isMounted) return null;

  return (
    <header className="mt-8 md:mt-24">
      <div className="flex flex-row justify-between items-center">
        <Link
          className="text-2xl font-medium text-neutral-950 dark:text-neutral-50 cursor-pointer"
          href="/"
        >
          Enis Gültekin
        </Link>
        <button
          className="cursor-pointer text-neutral-600 dark:text-neutral-400"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {resolvedTheme === 'dark' ? (
            <Sun className="w-5 h-5 animate-theme-toggle" />
          ) : (
            <MoonStar className="w-5 h-5 animate-theme-toggle" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
