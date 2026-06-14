import { ShieldCheck, Gem, Sparkles, RefreshCw } from "lucide-react";

const items = [
  { icon: Gem, title: "Certified Diamonds", desc: "IGI & GIA certified brilliance" },
  { icon: ShieldCheck, title: "BIS Hallmarked Gold", desc: "22K & 18K guaranteed purity" },
  { icon: Sparkles, title: "Bespoke Craftsmanship", desc: "Custom designs made for you" },
  { icon: RefreshCw, title: "Exchange & Buyback", desc: "Transparent lifetime policies" },
];

export function TrustBadges() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 py-10 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex flex-col items-center gap-3 text-center">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-primary-foreground">
              <Icon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-serif text-base text-foreground">{title}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
