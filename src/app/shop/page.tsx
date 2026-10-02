import { ProductCard } from "@/components/ProductCard";
import { fetchProducts } from "@/lib/products";

export const metadata = {
  title: "Shop Cigars — Cubano Cigars",
  description: "Browse our premium handcrafted cigar collection.",
};

export default async function ShopPage() {
  const products = await fetchProducts();

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">
            Premium Cigars
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-3">
            Exceptional by Nature
          </h1>
          <p className="text-[var(--color-text-muted)]">
            Finely crafted cigars made with the world’s finest tobacco.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", "Robusto", "Toro", "Churchill", "Limited"].map((f) => (
            <button
              key={f}
              className={`px-5 py-2 rounded-full text-xs border transition-colors ${
                f === "All"
                  ? "border-[var(--color-gold)] text-[var(--color-gold)]"
                  : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
