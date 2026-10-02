import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { fetchProducts } from "@/lib/products";

export default async function HomePage() {
  const products = (await fetchProducts()).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-0 min-h-[90vh] flex flex-col">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center flex-1">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3 font-medium">
              Premium Hand-Rolled Cigars
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl lg:text-7xl text-[var(--color-text)] mb-3 tracking-tight">
              Cubano
              <br />
              Cigars
            </h1>
            <p className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-gold)] italic mb-6">
              — A Legacy of Cuban Craft —
            </p>
            <p className="text-[var(--color-text-muted)] max-w-md mb-9 text-lg">
              Handcrafted in the tradition of Cuba’s finest cigar makers.
              Experience timeless flavor, unmatched quality, and a legacy that
              endures.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-gold)] text-[var(--color-bg)] text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-gold-light)] transition-colors"
            >
              Explore Our Cigars →
            </Link>
          </div>
          <div className="relative flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1599599823227-c802258fd183?auto=format&fit=crop&w=900&q=80"
              alt="Premium Cubano Cigars"
              className="rounded max-h-[520px] object-cover shadow-2xl"
            />
            <div className="absolute inset-[20%_10%] bg-[radial-gradient(circle,rgba(201,162,39,0.15),transparent_70%)] pointer-events-none" />
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 mt-12 py-7 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl">🍃</span>
            <div>
              <strong className="block text-sm font-medium">
                Authentic Cuban Heritage
              </strong>
              <span className="text-xs text-[var(--color-text-muted)]">
                Rooted in tradition
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl">✋</span>
            <div>
              <strong className="block text-sm font-medium">
                Handcrafted Excellence
              </strong>
              <span className="text-xs text-[var(--color-text-muted)]">
                Rolled by master artisans
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl">🌿</span>
            <div>
              <strong className="block text-sm font-medium">
                Premium Tobaccos
              </strong>
              <span className="text-xs text-[var(--color-text-muted)]">
                Only the finest leaves
              </span>
            </div>
          </div>
          <Link
            href="/#story"
            className="text-xs tracking-wider uppercase text-[var(--color-gold)] hover:text-[var(--color-gold-light)] ml-auto"
          >
            Learn Our Story →
          </Link>
        </div>
      </section>

      {/* Featured */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">
              Premium Cigars
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl mb-3">
              Exceptional by Nature
            </h2>
            <p className="text-[var(--color-text-muted)] max-w-md mx-auto">
              Finely crafted cigars made with the world’s finest tobacco.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex px-7 py-3.5 border border-[var(--color-gold)] text-[var(--color-gold)] text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-gold)] hover:text-[var(--color-bg)] transition-colors"
            >
              View All Cigars
            </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="py-24 bg-[var(--color-bg-elevated)]">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1606103920295-9a3020744629?auto=format&fit=crop&w=800&q=80"
              alt="Cigar craftsmanship"
              className="rounded shadow-2xl"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">
              Our Heritage
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl mb-5">
              Five Generations of Craft
            </h2>
            <p className="text-[var(--color-text-muted)] text-lg mb-8 leading-relaxed">
              In the early 1800s, Pastora Rodriguez and Geronimo Falco moved from
              Havana, Cuba to Key West. Geronimo, a skilled torcedor, taught his
              sons the art of cigar rolling. That legacy lives on today through
              Cubano Cigars — a tribute to Cuban heritage, refined for the modern
              connoisseur.
            </p>
            <Link
              href="/#heritage"
              className="inline-flex px-7 py-3.5 bg-[var(--color-gold)] text-[var(--color-bg)] text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-gold-light)] transition-colors"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="heritage" className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                num: "01",
                title: "Family Legacy",
                text: "Rooted in Cuban and Key West cigar-making traditions passed down through generations.",
              },
              {
                num: "02",
                title: "Master Blenders",
                text: "Every blend is carefully developed for complexity, balance, and a memorable finish.",
              },
              {
                num: "03",
                title: "Premium Leaf",
                text: "Only the finest Cuban-seed and New World tobaccos make it into our cigars.",
              },
            ].map((v) => (
              <div
                key={v.num}
                className="text-center p-10 border border-[var(--color-border)] rounded-lg"
              >
                <div className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-gold)] opacity-70 mb-4">
                  {v.num}
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)]">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-[var(--color-bg-elevated)] to-[var(--color-bg)] text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl mb-3">
            Experience the Difference
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg mb-8">
            Discover the Cubano collection and taste a legacy in every draw.
          </p>
          <Link
            href="/shop"
            className="inline-flex px-9 py-4 bg-[var(--color-gold)] text-[var(--color-bg)] text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-gold-light)] transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </>
  );
}
