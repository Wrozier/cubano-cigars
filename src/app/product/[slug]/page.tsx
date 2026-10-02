import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchProductBySlug, fetchProducts, getAllProducts } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { AddToCartButton } from "@/components/AddToCartButton";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  // Use mock for static generation; live data will still work at runtime
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} — Cubano Cigars`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);
  if (!product) notFound();

  const all = await fetchProducts();
  const related = all.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover"
            />
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-2">
              Premium Cigars
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-4xl mb-1">
              {product.name}
            </h1>
            <p className="text-[var(--color-gold)] text-sm tracking-widest uppercase mb-4">
              {product.type}
            </p>
            <p className="text-[var(--color-text-muted)] text-lg mb-6">
              {product.description}
            </p>

            <div className="flex items-center gap-2 mb-7 text-sm text-[var(--color-text-muted)]">
              <span className="text-[var(--color-gold)] tracking-widest">★★★★★</span>
              <span>
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <div className="mb-7">
              <h4 className="text-xs tracking-[0.12em] uppercase text-[var(--color-text-muted)] mb-3">
                Tasting Notes
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.tastingNotes.map((note) => (
                  <span
                    key={note}
                    className="px-3.5 py-1.5 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-full text-sm"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5 border-y border-[var(--color-border)] mb-8 text-center">
              <div>
                <div className="text-[0.7rem] tracking-wider uppercase text-[var(--color-text-muted)] mb-1">Wrapper</div>
                <div className="text-sm font-medium">{product.wrapper || "—"}</div>
              </div>
              <div>
                <div className="text-[0.7rem] tracking-wider uppercase text-[var(--color-text-muted)] mb-1">Binder</div>
                <div className="text-sm font-medium">{product.binder || "—"}</div>
              </div>
              <div>
                <div className="text-[0.7rem] tracking-wider uppercase text-[var(--color-text-muted)] mb-1">Filler</div>
                <div className="text-sm font-medium">{product.filler || "—"}</div>
              </div>
              <div>
                <div className="text-[0.7rem] tracking-wider uppercase text-[var(--color-text-muted)] mb-1">Strength</div>
                <div className="text-sm font-medium">{product.strength}</div>
              </div>
            </div>

            <div className="flex items-center gap-5 mb-7">
              <span className="text-3xl text-[var(--color-gold)] font-medium">
                ${product.price.toFixed(2)}
              </span>
              {product.badge && (
                <span className="text-[0.7rem] tracking-wider uppercase px-3 py-1.5 border border-[var(--color-gold)] text-[var(--color-gold)]">
                  {product.badge}
                </span>
              )}
            </div>

            <AddToCartButton product={product} />

            <div className="flex flex-wrap gap-5 text-xs text-[var(--color-text-muted)]">
              <span>🚚 Free shipping over $250</span>
              <span>✓ Authenticity guaranteed</span>
              <span>📦 Premium packaging</span>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-2">
              You may also like
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl">
              More from the Collection
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
