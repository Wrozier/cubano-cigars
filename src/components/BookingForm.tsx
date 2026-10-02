"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const packages = [
  "Exquisite Cigar Lounge Experience — $1,000",
  "Whiskey & Cigar Experience — $500",
  "Cigar Lounge + Whiskey & Cigar Experiences — $1,500",
];

export function BookingForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [pending, setPending] = useState(false);

  async function submit(formData: FormData) {
    setPending(true);
    setErrorMessage("");
    try {
      const supabase = createClient();
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError) throw userError;
      if (!user) throw new Error("Please sign in before requesting an event.");

      const { error } = await supabase.from("event_bookings").insert({
        member_id: user.id,
        package_name: String(formData.get("packageName")),
        event_date: String(formData.get("eventDate")),
        guest_count: Number(formData.get("guestCount")),
        venue: String(formData.get("venue")).trim(),
        notes: String(formData.get("notes") ?? "").trim(),
      });

      if (error) throw error;
      router.push("/member/bookings?requested=1");
      router.refresh();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Your booking request could not be saved. Please try again."
      );
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      action={submit}
      className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-8 space-y-5"
    >
      <h2 className="font-[family-name:var(--font-cormorant)] text-3xl">Event request</h2>
      <label className="block text-sm text-[var(--color-text-muted)]">
        Package
        <select
          name="packageName"
          required
          className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-3 text-[var(--color-text)]"
        >
          {packages.map((eventPackage) => (
            <option key={eventPackage}>{eventPackage}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm text-[var(--color-text-muted)]">
        Event date
        <input
          name="eventDate"
          type="date"
          required
          min={new Date().toISOString().slice(0, 10)}
          className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-3 text-[var(--color-text)]"
        />
      </label>
      <label className="block text-sm text-[var(--color-text-muted)]">
        Number of guests
        <input
          name="guestCount"
          type="number"
          required
          min={1}
          max={500}
          className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-3 text-[var(--color-text)]"
        />
      </label>
      <label className="block text-sm text-[var(--color-text-muted)]">
        Venue or event address
        <input
          name="venue"
          required
          maxLength={300}
          autoComplete="street-address"
          className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-3 text-[var(--color-text)]"
        />
      </label>
      <label className="block text-sm text-[var(--color-text-muted)]">
        Event details
        <textarea
          name="notes"
          maxLength={3000}
          rows={4}
          className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-3 text-[var(--color-text)]"
        />
      </label>
      {errorMessage && <p role="alert" className="text-sm text-red-400">{errorMessage}</p>}
      <p className="text-xs text-[var(--color-text-muted)]">
        This is a booking request, not a payment or signed contract. The owner
        will follow up to confirm availability and terms.
      </p>
      <button
        type="submit"
        disabled={pending}
        className="w-full bg-[var(--color-gold)] px-6 py-3.5 text-sm font-medium tracking-wider uppercase text-[var(--color-bg)] hover:bg-[var(--color-gold-light)] disabled:opacity-60"
      >
        {pending ? "Sending request…" : "Submit Event Request"}
      </button>
    </form>
  );
}
