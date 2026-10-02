"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export function Header() {
  const [open, setOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-20 bg-[rgba(12,11,10,0.92)] backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-[family-name:var(--font-cormorant)] text-[var(--color-gold)] text-xl tracking-[0.18em] font-semibold">
            CUBANO
          </span>
          <span className="text-[0.65rem] tracking-[0.4em] text-[var(--color-text-muted)]">
            CIGARS
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#story"
            className="text-xs tracking-wider uppercase text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
          >
            Our Story
          </Link>
          <Link
            href="/shop"
            className="text-xs tracking-wider uppercase text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
          >
            Cigars
          </Link>
          <Link
            href="/private-events"
            className="text-xs tracking-wider uppercase text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
          >
            Private Events
          </Link>
          <Link
            href="/membership"
            className="text-xs tracking-wider uppercase text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
          >
            Membership
          </Link>
          <Link
            href="/#heritage"
            className="text-xs tracking-wider uppercase text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
          >
            Heritage
          </Link>
          <Link
            href="/#contact"
            className="text-xs tracking-wider uppercase text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/shop"
            className="px-5 py-2.5 border border-[var(--color-gold)] text-[var(--color-gold)] text-xs tracking-wider uppercase hover:bg-[var(--color-gold)] hover:text-[var(--color-bg)] transition-colors"
          >
            Shop Collection
          </Link>
          <button
            onClick={openCart}
            aria-label="Cart"
            className="relative text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M6 6h15l-1.5 9h-12z" />
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
              <path d="M6 6L5 2H2" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-[var(--color-gold)] text-[var(--color-bg)] text-[10px] font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={openCart}
            aria-label="Cart"
            className="relative text-[var(--color-text-muted)]"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6h15l-1.5 9h-12z" />
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
              <path d="M6 6L5 2H2" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-[var(--color-gold)] text-[var(--color-bg)] text-[10px] font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            className="flex flex-col gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className="w-5 h-0.5 bg-[var(--color-text)]" />
            <span className="w-5 h-0.5 bg-[var(--color-text)]" />
            <span className="w-5 h-0.5 bg-[var(--color-text)]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)] p-6 flex flex-col gap-4">
          <Link href="/#story" onClick={() => setOpen(false)}>Our Story</Link>
          <Link href="/shop" onClick={() => setOpen(false)}>Cigars</Link>
          <Link href="/private-events" onClick={() => setOpen(false)}>Private Events</Link>
          <Link href="/membership" onClick={() => setOpen(false)}>Membership</Link>
          <Link href="/shop" onClick={() => setOpen(false)}>Shop Collection</Link>
          <Link href="/#contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
