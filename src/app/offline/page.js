export const metadata = {
  title: 'Offline'
};

export default function Offline() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center min-h-[70vh] text-center gap-3 py-24">
      <h1 className="text-2xl md:text-3xl font-medium">You&apos;re offline</h1>
      <p className="text-neutral-600 dark:text-neutral-400">
        This page isn&apos;t available right now. Check your connection and try
        again.
      </p>
    </main>
  );
}
