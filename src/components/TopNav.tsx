const NAV_ITEMS = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "We Serve", href: "#we-serve" },
  { label: "Contact", href: "#contact" }
];

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone bg-paper/95">
      <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-6 px-6 py-5">
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#top"
            className="text-sm font-semibold uppercase tracking-[0.28em] text-oxford"
          >
            Nathan &amp; Co.
          </a>
          <span className="inline-flex items-center rounded-md border border-brass/70 px-3 py-1 text-[0.55rem] uppercase tracking-[0.32em] text-teal">
            Since • Over six decades
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.32em] text-oxford md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-teal"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none text-xs uppercase tracking-[0.3em] text-oxford">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-52 rounded-md border border-stone bg-paper p-4">
            <nav className="flex flex-col gap-3 text-xs uppercase tracking-[0.3em] text-oxford">
              {NAV_ITEMS.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-teal">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
