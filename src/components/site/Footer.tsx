import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

const shopLinks = ["Rings", "Necklaces", "Earrings", "Bangles", "Bracelets", "Pendants"];
const helpLinks = ["Contact Us", "FAQ", "Shipping Policy", "Returns & Exchange", "Track Order"];
const aboutLinks = ["Our Story", "Certifications", "Custom Design", "Schemes", "Store Locator"];

export function Footer() {
  return (
    <footer className="bg-olive text-olive-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">◆</span>
              <span className="font-serif">
                <span className="block text-lg font-semibold tracking-[0.15em]">NAVARATNA</span>
                <span className="block text-xs tracking-[0.45em]">JEWELLERS</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-olive-foreground/75">
              Crafting timeless elegance with certified gold, diamonds and precious gemstones.
              Where heritage craftsmanship meets contemporary luxury.
            </p>
            <div className="mt-6 space-y-2 text-sm text-olive-foreground/75">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" /> Navaratna Towers, Main Road, India
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" /> +91 97900 00575
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" /> care@navaratnajewellers.com
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-olive-foreground/30 hover:bg-olive-foreground hover:text-olive transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Shop" links={shopLinks} />
          <FooterColumn title="Help" links={helpLinks} />
          <FooterColumn title="About" links={aboutLinks} />
        </div>
      </div>

      <div className="border-t border-olive-foreground/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:px-6 py-5 text-xs text-olive-foreground/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Navaratna Jewellers. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-olive-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-olive-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-serif text-lg mb-4">{title}</h4>
      <ul className="space-y-2.5 text-sm text-olive-foreground/75">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="hover:text-olive-foreground transition-colors">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
