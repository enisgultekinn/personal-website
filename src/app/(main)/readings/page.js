import { WatchHistoryListItem } from '@/components';

export default function WatchHistory() {
  return (
    <section className="flex flex-col mt-8">
      <p className="text-base md:text-lg text-neutral-900 dark:text-neutral-400">
        A running log of what I’ve been watching. Ratings are my own and
        probably wrong.
      </p>
      <div className="p-6 border rounded-sm flex flex-col mt-8 dark:border-neutral-800 border-neutral-200">
        <div className="flex flex-row items-center gap-3">
          <div className="rounded-full bg-neutral-900 dark:bg-neutral-50 md:w-2 md:h-2 w-1.5 h-1.5 animate-pulse" />
          <p className="text-xs text-neutral-900 dark:text-neutral-400 font-jetbrains-mono tracking-wider">
            CURRENTLY WATCHING
          </p>
        </div>
        <span className="text-xl md:text-2xl text-neutral-900 dark:text-neutral-50 mt-3">
          The Sopranos
        </span>
        <span className="text-xs md:text-sm text-neutral-900 dark:text-neutral-400 mt-3">
          S2 · TV Series
        </span>
      </div>

      <span className="text-sm mt-12 text-neutral-900 dark:text-neutral-400 font-jetbrains-mono tracking-wider mb-4">
        MOVIES
      </span>
      {movies.map((item, index) => (
        <WatchHistoryListItem key={index} item={item} />
      ))}

      <span className="text-sm mt-12 text-neutral-900 dark:text-neutral-400 font-jetbrains-mono tracking-wider">
        TV SERIES
      </span>
      {tvSeries.map((item, index) => (
        <WatchHistoryListItem key={index} item={item} />
      ))}
    </section>
  );
}

const movies = [
  {
    title: 'The Meg',
    year: 2018,
    rating: 5.4,
    date: new Date('2026-02-19')
  },
  {
    title: 'Jurassic World',
    year: 2016,
    rating: 5.4,
    date: new Date('2026-01-19')
  },
  {
    title: 'Spectre',
    year: 2015,
    rating: 5.4,
    date: new Date('2026-02-19')
  }
];

const tvSeries = [
  {
    title: 'Severance',
    season: 'S1',
    rating: 9.0,
    date: new Date('2026-01-19')
  },
  {
    title: 'Severance',
    season: 'S2',
    rating: 7.6,
    date: new Date('2026-02-19')
  }
];
