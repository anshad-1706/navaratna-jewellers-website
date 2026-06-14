import { Search, User, BadgePercent, Heart, ShoppingBag, Menu, ChevronDown } from "lucide-react";
import { navItems } from "@/lib/jewellery-data";

export function AnnouncementBar() {
  return (
    <div className="bg-olive text-olive-foreground text-center text-xs sm:text-sm py-2.5 px-4 tracking-wide font-light">
      Naturally flawless diamonds, shaped by exceptional mastery. Rare in Origin, Refined to Perfection.
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center gap-4 py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-gold text-3xl">◆</span>
            <span className="font-serif leading-none">
              <span className="block text-lg sm:text-xl font-semibold tracking-[0.15em] text-foreground">
                NAVARATNA
              </span>
              <span className="block text-xs sm:text-sm tracking-[0.45em] text-gold">
                JEWELLERS
              </span>
            </span>
          </a>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-auto">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search Rings, Earrings, Necklaces..."
                className="w-full rounded-full border border-border bg-card py-2.5 pl-5 pr-12 text-sm outline-none focus:border-gold transition-colors"
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 grid h-8 w-8 place-items-center rounded-full bg-gradient-gold text-primary-foreground">
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Icons */}
          <nav className="ml-auto flex items-center gap-5 sm:gap-7">
            <IconLink icon={<User className="h-5 w-5" />} label="Profile" />
            <IconLink icon={<BadgePercent className="h-5 w-5" />} label="Scheme" />
            <IconLink icon={<Heart className="h-5 w-5" />} label="Wishlist" />
            <IconLink icon={<ShoppingBag className="h-5 w-5" />} label="Cart" />
            <button className="md:hidden text-foreground">
              <Menu className="h-6 w-6" />
            </button>
          </nav>
        </div>

        {/* Nav menu */}
        <ul className="hidden md:flex items-center justify-center gap-10 pb-3 -mt-1">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#collections"
                className="flex items-center gap-1 text-sm tracking-[0.12em] text-foreground/80 hover:text-gold transition-colors uppercase"
              >
                {item}
                <ChevronDown className="h-3.5 w-3.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function IconLink({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <a href="#" className="flex flex-col items-center gap-0.5 text-foreground/80 hover:text-gold transition-colors">
      {icon}
      <span className="hidden sm:block text-[10px] tracking-wide">{label}</span>
    </a>
  );
}
