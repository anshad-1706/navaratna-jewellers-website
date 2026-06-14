import heroImage from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Luxury diamond earring and gold ring on cream silk"
        width={1920}
        height={1080}
        className="h-[58vw] max-h-[680px] min-h-[360px] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-background/10 via-transparent to-background/20" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          <div className="ml-auto max-w-md text-right">
            <h1 className="font-serif font-semibold leading-[0.95] text-foreground text-4xl sm:text-6xl lg:text-7xl tracking-tight">
              LUXURY
              <br />
              REDEFINED
            </h1>
            <p className="mt-4 font-serif text-lg sm:text-2xl text-foreground/70 italic">
              Discover the art of fine jewellery
            </p>
            <div className="mt-7 flex justify-end">
              <a
                href="#collections"
                className="inline-block rounded-full bg-gradient-gold px-8 py-3 text-sm tracking-[0.15em] uppercase text-primary-foreground shadow-soft hover:opacity-90 transition-opacity"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
