import { useRef } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { type Product, formatPrice } from "@/lib/jewellery-data";
import { SectionHeading } from "./SectionHeading";

interface ProductCarouselProps {
  title: string;
  products: Product[];
  action?: { label: string; href: string };
  showPrice?: boolean;
}

export function ProductCarousel({ title, products, action, showPrice = true }: ProductCarouselProps) {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
      <div className="flex items-end justify-between gap-4">
        <SectionHeading title={title} action={action} />
        <div className="mb-8 hidden sm:flex gap-2">
          <CarouselButton dir={-1} onClick={() => scroll(-1)} />
          <CarouselButton dir={1} onClick={() => scroll(1)} />
        </div>
      </div>

      <div
        ref={scroller}
        className="flex gap-5 overflow-x-auto pb-4 no-scrollbar scroll-smooth"
      >
        {products.map((p, i) => (
          <ProductCard key={`${p.name}-${i}`} product={p} showPrice={showPrice} />
        ))}
      </div>
    </section>
  );
}

function CarouselButton({ dir, onClick }: { dir: number; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir < 0 ? "Previous" : "Next"}
      className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground/70 hover:border-gold hover:text-gold transition-colors"
    >
      {dir < 0 ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
    </button>
  );
}

function ProductCard({ product, showPrice }: { product: Product; showPrice: boolean }) {
  return (
    <a
      href="#"
      className="group flex w-52 shrink-0 flex-col sm:w-60"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-secondary shadow-soft">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-gradient-gold px-3 py-1 text-[10px] uppercase tracking-wide text-primary-foreground">
            {product.badge}
          </span>
        )}
        <button
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/80 text-foreground/70 opacity-0 transition-opacity group-hover:opacity-100 hover:text-gold"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>
      <h3 className="mt-3 font-serif text-lg text-foreground group-hover:text-gold transition-colors">
        {product.name}
      </h3>
      {showPrice && (
        <p className="mt-0.5 text-sm font-medium text-muted-foreground">
          {formatPrice(product.price)}
        </p>
      )}
    </a>
  );
}
