"use client";

import Link from "next/link";
import type { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="group bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(201,162,39,0.4)]">
      <Link
        href={`/product/${product.slug}`}
        className="block aspect-square overflow-hidden bg-[#111]"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="p-5">
        <h3 className="font-[family-name:var(--font-cormorant)] text-lg mb-1">
          {product.name}
        </h3>
        <p className="text-xs text-[var(--color-text-muted)] mb-4">
          {product.type}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[var(--color-gold)] font-medium">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-9 h-9 border border-[var(--color-gold)] text-[var(--color-gold)] rounded-full flex items-center justify-center text-lg hover:bg-[var(--color-gold)] hover:text-[var(--color-bg)] transition-colors"
            aria-label="Add to cart"
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}
