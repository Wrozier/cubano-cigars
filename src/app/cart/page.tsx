"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const shipping = 8;
  const salesTax = Math.round(totalPrice * 0.07 * 100) / 100;
  const orderTotal = Math.round((totalPrice + shipping + salesTax) * 100) / 100;
  const [addressOpen, setAddressOpen] = useState(false);
  const [shippingAddress, setShippingAddress] = useState({
    address: "",
    city: "",
    state: "GA",
    zip: "",
  });
  const [addressForm, setAddressForm] = useState(shippingAddress);
  const [locationStatus, setLocationStatus] = useState("");

  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus("Location access is not supported by this browser.");
      return;
    }

    setLocationStatus("Requesting your current location…");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setLocationStatus(
          `Location detected (${coords.latitude.toFixed(4)}, ${coords.longitude.toFixed(4)}). Enter or confirm your delivery address below.`
        );
      },
      (error) => {
        setLocationStatus(
          error.code === error.PERMISSION_DENIED
            ? "Location permission was denied. Enter your delivery address manually."
            : "Could not determine your location. Enter your delivery address manually."
        );
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 }
    );
  };

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
              <div className="w-full sm:max-w-sm rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl mb-5">
                  Cart totals
                </h2>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-[var(--color-text-muted)]">Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-[var(--color-text-muted)]">Shipment</span>
                    <span className="text-right">
                      <span className="block">Flat rate: ${shipping.toFixed(2)}</span>
                      <span className="block text-xs text-[var(--color-text-muted)]">
                        Shipping to{" "}
                        <strong className="text-[var(--color-text)]">
                          {shippingAddress.state || "GA"}
                        </strong>
                        .
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setAddressForm(shippingAddress);
                          setAddressOpen((open) => !open);
                        }}
                        aria-expanded={addressOpen}
                        className="mt-1 inline-block text-xs text-[var(--color-gold)] hover:text-[var(--color-gold-light)]"
                      >
                        Change address
                      </button>
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-[var(--color-text-muted)]">Sales Tax</span>
                    <span>${salesTax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between gap-4 border-t border-[var(--color-border)] pt-4 text-lg font-medium">
                    <span>Total</span>
                    <span className="text-[var(--color-gold)]">${orderTotal.toFixed(2)}</span>
                  </div>
                  {addressOpen && (
                    <form
                      className="mt-5 space-y-3 border-t border-[var(--color-border)] pt-5"
                      onSubmit={(event) => {
                        event.preventDefault();
                        setShippingAddress(addressForm);
                        setAddressOpen(false);
                      }}
                    >
                      <button
                        type="button"
                        onClick={useCurrentLocation}
                        className="w-full border border-[var(--color-gold)] px-4 py-2.5 text-xs font-medium tracking-wider uppercase text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-bg)] transition-colors"
                      >
                        Use Current Location
                      </button>
                      {locationStatus && (
                        <p role="status" className="text-xs text-[var(--color-text-muted)]">
                          {locationStatus}
                        </p>
                      )}
                      <label className="block text-xs text-[var(--color-text-muted)]">
                        Street address
                        <input
                          required
                          autoComplete="street-address"
                          value={addressForm.address}
                          onChange={(event) =>
                            setAddressForm({ ...addressForm, address: event.target.value })
                          }
                          className="mt-1 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-text)]"
                        />
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <label className="block text-xs text-[var(--color-text-muted)]">
                          City
                          <input
                            required
                            autoComplete="address-level2"
                            value={addressForm.city}
                            onChange={(event) =>
                              setAddressForm({ ...addressForm, city: event.target.value })
                            }
                            className="mt-1 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-text)]"
                          />
                        </label>
                        <label className="block text-xs text-[var(--color-text-muted)]">
                          State
                          <input
                            required
                            maxLength={2}
                            autoComplete="address-level1"
                            value={addressForm.state}
                            onChange={(event) =>
                              setAddressForm({
                                ...addressForm,
                                state: event.target.value.toUpperCase(),
                              })
                            }
                            className="mt-1 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm uppercase text-[var(--color-text)]"
                          />
                        </label>
                      </div>
                      <label className="block text-xs text-[var(--color-text-muted)]">
                        ZIP code
                        <input
                          required
                          autoComplete="postal-code"
                          value={addressForm.zip}
                          onChange={(event) =>
                            setAddressForm({ ...addressForm, zip: event.target.value })
                          }
                          className="mt-1 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-text)]"
                        />
                      </label>
                      <button
                        type="submit"
                        className="w-full bg-[var(--color-gold)] px-4 py-2.5 text-xs font-medium tracking-wider uppercase text-[var(--color-bg)] hover:bg-[var(--color-gold-light)] transition-colors"
                      >
                        Update Address
                      </button>
                      <p className="text-xs text-[var(--color-text-muted)]">
                        Shipping remains at the $8 flat rate. Sales tax is unchanged.
                      </p>
                    </form>
                  )}
                </div>
                <a
                  href="https://smokecubano.com/checkout"
                  className="mt-6 inline-flex w-full justify-center px-6 py-4 bg-[var(--color-gold)] text-[var(--color-bg)] text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-gold-light)] transition-colors"
                >
                  Proceed to Checkout →
                </a>
                <p className="text-xs text-[var(--color-text-muted)] mt-3 text-center">
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
