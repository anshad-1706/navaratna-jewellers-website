import { collections } from "@/lib/jewellery-data";

export function CollectionBanners() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
      <div className="grid gap-5 sm:grid-cols-2">
        {collections.map((c, i) => (
          <a
            key={c.name}
            href="#"
            className={`group relative overflow-hidden rounded-lg shadow-card ${
              i === 0 ? "sm:row-span-2 sm:aspect-auto aspect-[4/3]" : "aspect-[16/9]"
            }`}
          >
            <img
              src={c.image}
              alt={c.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-left">
              <h3 className="font-serif text-2xl sm:text-3xl text-background">{c.name}</h3>
              <p className="mt-1 max-w-xs text-sm text-background/80">
                Discover timeless elegance and masterful craftsmanship.
              </p>
              <span className="mt-3 inline-block text-xs uppercase tracking-[0.15em] text-background border-b border-background/50 pb-0.5">
                Explore Collection
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
