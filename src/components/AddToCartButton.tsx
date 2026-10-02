"use client";

import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/products";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <button
      onClick={() => addItem(product)}
      className="w-full max-w-xs px-8 py-4 bg-[var(--color-gold)] text-[var(--color-bg)] text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-gold-light)] transition-colors mb-6"
    >
      Add to Cart +
    </button>
  );
}
