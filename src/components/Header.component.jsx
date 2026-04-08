"use client";

import { useTheme } from "next-themes";
import useIsMounted from "hooks/useIsMounted";
import { MoonStar, Sun } from "lucide-react";

const Header = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <header className="mt-8 md:mt-24 flex flex-row justify-between items-center">
      <h1 className="text-2xl font-medium text-neutral-900 dark:text-neutral-50">
        Enis Gültekin
      </h1>
      <button
        className="cursor-pointer text-neutral-600 dark:text-neutral-400"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark" ? (
          <Sun className="w-5 h-5 animate-theme-toggle" />
        ) : (
          <MoonStar className="w-5 h-5 animate-theme-toggle" />
        )}
      </button>
    </header>
  );
};

export default Header;
