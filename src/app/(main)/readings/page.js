import { ReadingListItem } from '@/components';

export const metadata = {
  title: 'Readings',
  description: 'A running log of the books I have been reading.'
};

export default function Readings() {
  return (
    <section className="flex flex-col mt-8">
      <p className="text-base md:text-lg text-neutral-900 dark:text-neutral-400">
        A running log of the books I’ve been reading.
      </p>
      <div className="p-6 border rounded-sm flex flex-col mt-8 dark:border-neutral-800 border-neutral-200">
        <div className="flex flex-row items-center gap-3">
          <div className="rounded-full bg-neutral-900 dark:bg-neutral-50 md:w-2 md:h-2 w-1.5 h-1.5 animate-pulse" />
          <p className="text-xs text-neutral-900 dark:text-neutral-400 font-jetbrains-mono tracking-wider">
            CURRENTLY READING
          </p>
        </div>
        <span className="text-xl md:text-2xl text-neutral-900 dark:text-neutral-50 mt-3">
          The Brothers Karamazov
        </span>
        <span className="text-xs md:text-sm text-neutral-900 dark:text-neutral-400 mt-3">
          Fyodor Dostoevsky
        </span>
      </div>

      <div className="flex flex-col mt-12">
        {books.map((item, index) => (
          <ReadingListItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

const books = [
  {
    title: 'Dune',
    author: 'Frank Herbert',
    date: new Date('2026-02-19')
  },
  {
    title: 'Snow Crash',
    author: 'Neal Stephenson',
    date: new Date('2026-01-19')
  },
  {
    title: 'The Left Hand of Darkness',
    author: 'Ursula K. Le Guin',
    date: new Date('2025-12-19')
  }
];
