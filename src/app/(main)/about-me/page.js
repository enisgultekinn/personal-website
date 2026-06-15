import { alternates } from '@/config';

export const metadata = {
  title: 'About Me',
  description:
    'Frontend developer based in Istanbul, building interfaces with TypeScript and React.',
  alternates: alternates('/about-me')
};

export default function AboutMe() {
  return (
    <section className="flex flex-col mt-8">
      <p className="text-base md:text-lg text-neutral-900 dark:text-neutral-50">
        Hi, I'm Enis. I'm a software developer who genuinely enjoys what I
        build. I work with JavaScript and the ecosystem it brings, crafting web
        and mobile applications with clean architecture, reusable components,
        and interfaces that feel right to use.
      </p>
      <p className="text-base md:text-lg md:mt-8 mt-4 text-neutral-900 dark:text-neutral-50">
        I'm drawn to projects that solve real problems: apps people open every
        day, products with subscription logic and live data, systems that need
        to scale without falling apart.
      </p>
      <p className="text-base md:text-lg md:mt-8 mt-4 text-neutral-900 dark:text-neutral-50">
        I love to bring both a technical and a product mindset to everything I
        touch. I like thinking about how things look, how they perform, and why
        they matter — not just making them work.
      </p>
    </section>
  );
}
