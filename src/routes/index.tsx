import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar, Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ShopByDesign } from "@/components/site/ShopByDesign";
import { ProductCarousel } from "@/components/site/ProductCarousel";
import { TrustBadges } from "@/components/site/TrustBadges";
import { CollectionBanners } from "@/components/site/CollectionBanners";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { bestSellers, newArrivals, inStock } from "@/lib/jewellery-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Navaratna Jewellers — Premium Lab Grown Diamond Jewellery" },
      {
        name: "description",
        content:
          "Discover the art of fine jewellery at Navaratna Jewellers. Certified diamonds, BIS hallmarked gold, and bespoke craftsmanship in rings, necklaces, bangles and more.",
      },
      { property: "og:title", content: "Navaratna Jewellers — Luxury Redefined" },
      {
        property: "og:description",
        content:
          "Naturally flawless diamonds, shaped by exceptional mastery. Rare in origin, refined to perfection.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <ShopByDesign />
        <ProductCarousel
          title="Best Sellers"
          products={bestSellers}
          action={{ label: "View All", href: "#" }}
        />
        <TrustBadges />
        <ProductCarousel
          title="New Arrivals"
          products={newArrivals}
          action={{ label: "View All", href: "#" }}
          showPrice={false}
        />
        <CollectionBanners />
        <ProductCarousel
          title="In Stock Now"
          products={inStock}
          action={{ label: "View All", href: "#" }}
        />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
