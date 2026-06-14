import { designTypes } from "@/lib/jewellery-data";
import { SectionHeading } from "./SectionHeading";

export function ShopByDesign() {
  return (
    <section id="collections" className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
      <SectionHeading
        title="Shop By Design Type"
        action={{ label: "View All Collections", href: "#" }}
      />
      <div className="flex gap-5 overflow-x-auto pb-4 no-scrollbar sm:grid sm:grid-cols-3 lg:grid-cols-5 sm:gap-6 sm:overflow-visible">
        {designTypes.map((cat) => (
          <a
            key={cat.name}
            href="#"
            className="group flex w-36 shrink-0 flex-col items-center gap-3 sm:w-auto"
          >
            <div className="aspect-square w-full overflow-hidden rounded-full border border-border bg-card p-1.5 shadow-soft transition-transform group-hover:-translate-y-1">
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <span className="text-sm tracking-[0.1em] uppercase text-foreground/80 group-hover:text-gold transition-colors">
              {cat.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
