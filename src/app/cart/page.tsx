"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-[900px] mx-auto px-6">
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl mb-10 text-center">
          Your Cart
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[var(--color-text-muted)] mb-6">Your cart is empty</p>
            <Link
              href="/shop"
              className="inline-flex px-7 py-3.5 bg-[var(--color-gold)] text-[var(--color-bg)] text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-gold-light)] transition-colors"
            >
              Shop Cigars
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6 mb-10">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-5 items-center border-b border-[var(--color-border)] pb-6"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded bg-[var(--color-bg-card)]"
                  />
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/product/${item.product.slug}`}
                      className="font-[family-name:var(--font-cormorant)] text-xl hover:text-[var(--color-gold)]"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      {item.product.type}
                    </p>
                    <p className="text-[var(--color-gold)] mt-1">
                      ${item.product.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="w-8 h-8 border border-[var(--color-border)] rounded hover:border-[var(--color-gold)]"
                    >
                      −
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="w-8 h-8 border border-[var(--color-border)] rounded hover:border-[var(--color-gold)]"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right min-w-[80px]">
                    <p className="text-[var(--color-gold)] font-medium">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-xs text-[var(--color-text-muted)] hover:text-red-400 mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-t border-[var(--color-border)] pt-8">
              <button
                onClick={clearCart}
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)]"
              >
                Clear cart
              </button>
              <div className="text-right">
                <p className="text-2xl mb-1">
                  Subtotal:{" "}
                  <span className="text-[var(--color-gold)]">
                    ${totalPrice.toFixed(2)}
                  </span>
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mb-5">
                  Shipping calculated at next step
                </p>
                <a
                  href="https://smokecubano.com/checkout"
                  className="inline-flex px-8 py-4 bg-[var(--color-gold)] text-[var(--color-bg)] text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-gold-light)] transition-colors"
                >
                  Proceed to Checkout →
                </a>
                <p className="text-xs text-[var(--color-text-muted)] mt-3">
                  (Checkout currently redirects to the existing WooCommerce store)
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
