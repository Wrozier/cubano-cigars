"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
    isOpen,
    closeCart,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-50"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-[var(--color-bg-elevated)] border-l border-[var(--color-border)] z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl">
            Your Cart ({totalItems})
          </h2>
          <button
            onClick={closeCart}
            className="text-[var(--color-text-muted)] hover:text-[var(--color-gold)] text-2xl leading-none"
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {items.length === 0 ? (
            <div className="text-center py-16 text-[var(--color-text-muted)]">
              <p className="mb-4">Your cart is empty</p>
              <button
                onClick={closeCart}
                className="text-[var(--color-gold)] text-sm tracking-wider uppercase hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 border-b border-[var(--color-border)] pb-5"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded bg-[var(--color-bg-card)]"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-lg truncate">
                    {item.product.name}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] mb-2">
                    {item.product.type}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="w-7 h-7 border border-[var(--color-border)] rounded text-sm hover:border-[var(--color-gold)]"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-7 h-7 border border-[var(--color-border)] rounded text-sm hover:border-[var(--color-gold)]"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-[var(--color-gold)] font-medium">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.product.id)}
                  className="text-[var(--color-text-muted)] hover:text-red-400 text-sm self-start"
                  aria-label="Remove"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[var(--color-border)] space-y-4">
            <div className="flex justify-between text-lg">
              <span>Subtotal</span>
              <span className="text-[var(--color-gold)] font-medium">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-muted)]">
              Shipping & taxes calculated at checkout
            </p>
            <Link
              href="/cart"
              onClick={closeCart}
              className="block w-full text-center px-6 py-3.5 bg-[var(--color-gold)] text-[var(--color-bg)] text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-gold-light)] transition-colors"
            >
              View Cart & Checkout
            </Link>
            <button
              onClick={closeCart}
              className="block w-full text-center text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)]"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
