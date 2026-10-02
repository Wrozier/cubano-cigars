import Link from "next/link";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#080706] border-t border-[var(--color-border)] pt-20 pb-10"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="font-[family-name:var(--font-cormorant)] text-[var(--color-gold)] text-xl tracking-[0.18em] font-semibold">
                CUBANO
              </span>
              <span className="text-[0.65rem] tracking-[0.4em] text-[var(--color-text-muted)]">
                CIGARS
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] max-w-[260px]">
              Premium handcrafted cigars rooted in Cuban heritage. Atlanta,
              Georgia.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.12em] uppercase mb-5">
              Explore
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-[var(--color-text-muted)]">
              <Link href="/shop" className="hover:text-[var(--color-gold)]">
                Shop Cigars
              </Link>
              <Link href="/#story" className="hover:text-[var(--color-gold)]">
                Our Story
              </Link>
              <Link href="/#" className="hover:text-[var(--color-gold)]">
                Accessories
              </Link>
              <Link href="/#" className="hover:text-[var(--color-gold)]">
                Journal
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.12em] uppercase mb-5">
              Support
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-[var(--color-text-muted)]">
              <Link href="/#" className="hover:text-[var(--color-gold)]">
                Shipping & Returns
              </Link>
              <Link href="/#" className="hover:text-[var(--color-gold)]">
                FAQ
              </Link>
              <Link href="/#contact" className="hover:text-[var(--color-gold)]">
                Contact Us
              </Link>
              <Link href="/#" className="hover:text-[var(--color-gold)]">
                Age Verification
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.12em] uppercase mb-5">
              Visit & Contact
            </h4>
            <div className="text-sm text-[var(--color-text-muted)] space-y-1.5">
              <p>Atlanta, Georgia</p>
              <p>11:00 AM – 8:00 PM</p>
              <p>
                <a
                  href="tel:18334282266"
                  className="hover:text-[var(--color-gold)]"
                >
                  1-(833)-4CUBANO
                </a>
              </p>
              <p>
                <a
                  href="mailto:tdean@smokecubano.com"
                  className="hover:text-[var(--color-gold)]"
                >
                  tdean@smokecubano.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--color-border)] text-center text-xs text-[var(--color-text-muted)]">
          © 2026 Cubano Cigars. All rights reserved. Must be 21+ to purchase.
        </div>
      </div>
    </footer>
  );
}
