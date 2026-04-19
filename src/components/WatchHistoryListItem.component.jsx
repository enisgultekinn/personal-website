const WatchHistoryListItem = ({ item }) => {
  return (
    <div
      key={item.title}
      className="py-4 border-b border-neutral-200 dark:border-neutral-800 flex-row flex items-center group justify-between"
    >
      <div className="flex flex-col translate-x-0 hover:translate-x-2 transition-transform duration-200 flex-grow">
        <span className="text-neutral-900 dark:text-neutral-50 text-lg dark:group-hover:text-neutral-200 group-hover:text-neutral-600 transition-colors duration-200">
          {item.title}
          <span className="text-sm text-neutral-900 dark:text-neutral-400 ml-2 italic">
            {item.year}
          </span>
        </span>
      </div>
      <div className="flex flex-row items-center">
        <span className="text-lg text-neutral-900 dark:text-neutral-50 flex">
          {Number(item.rating).toFixed(1)}
          <span className="text-base text-neutral-900 dark:text-neutral-500 ml-4 flex w-20 justify-end">
            {item.date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </span>
        </span>
      </div>
    </div>
  );
};

export default WatchHistoryListItem;
