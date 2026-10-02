"use client";

import { useRef } from "react";

export function PrivateEventContactDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-gold)] text-[var(--color-bg)] text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-gold-light)] transition-colors"
      >
        Book an Event
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby="event-contact-title"
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            dialogRef.current.close();
          }
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-md rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-0 text-[var(--color-text)] shadow-2xl backdrop:bg-black/75"
      >
        <div className="p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">
                Private Events
              </p>
              <h2
                id="event-contact-title"
                className="font-[family-name:var(--font-cormorant)] text-3xl"
              >
                Let&apos;s plan your event
              </h2>
            </div>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close contact dialog"
              className="text-2xl leading-none text-[var(--color-text-muted)] hover:text-[var(--color-gold)]"
            >
              ×
            </button>
          </div>
          <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed">
            Contact the owner to start planning a private cigar experience.
          </p>
          <a
            href="mailto:tdean@smokecubano.com?subject=Private%20Event%20Inquiry"
            className="mt-6 inline-flex w-full justify-center px-6 py-3.5 bg-[var(--color-gold)] text-[var(--color-bg)] text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-gold-light)] transition-colors"
          >
            Email tdean@smokecubano.com
          </a>
        </div>
      </dialog>
    </>
  );
}
