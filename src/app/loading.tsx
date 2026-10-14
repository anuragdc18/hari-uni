/** Route-level skeleton shown while a page streams in. */
export default function Loading() {
  return (
    <div className="container-x pb-24 pt-[calc(var(--header-height)+3rem)]" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading page…</span>
      <div className="skeleton h-5 w-40" />
      <div className="skeleton mt-6 h-14 w-3/4 max-w-2xl" />
      <div className="skeleton mt-4 h-14 w-1/2 max-w-xl" />
      <div className="skeleton mt-10 aspect-[21/9] w-full" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <div className="skeleton aspect-[4/3] w-full" />
            <div className="skeleton h-5 w-2/3" />
            <div className="skeleton h-4 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
