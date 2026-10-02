"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type AdminBooking = {
  id: string;
  package_name: string;
  event_date: string;
  guest_count: number;
  venue: string;
  status: string;
  created_at: string;
  members: { full_name: string; email: string } | { full_name: string; email: string }[] | null;
  event_contracts: { status: string; contract_data: Record<string, unknown> }[] | null;
};

export function AdminBookingSearch({ bookings }: { bookings: AdminBooking[] }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [statuses, setStatuses] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<Record<string, string>>({});
  const [savingId, setSavingId] = useState("");
  const getMember = (booking: AdminBooking) =>
    Array.isArray(booking.members) ? booking.members[0] : booking.members;

  const filtered = bookings.filter((booking) => {
    const member = getMember(booking);
    return `${member?.full_name ?? ""} ${member?.email ?? ""} ${booking.package_name}`
      .toLowerCase()
      .includes(query.trim().toLowerCase());
  });

  async function saveStatus(bookingId: string, currentStatus: string) {
    setSavingId(bookingId);
    setFeedback((current) => ({ ...current, [bookingId]: "" }));
    const supabase = createClient();
    const { error } = await supabase
      .from("event_bookings")
      .update({ status: statuses[bookingId] ?? currentStatus })
      .eq("id", bookingId);
    setFeedback((current) => ({
      ...current,
      [bookingId]: error ? `Could not save status: ${error.message}` : "Status saved.",
    }));
    setSavingId("");
    if (!error) router.refresh();
  }

  return (
    <>
      <label className="mb-6 block text-sm text-[var(--color-text-muted)]">
        Find by member name or email
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          type="search"
          className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3 text-[var(--color-text)]"
        />
      </label>
      {filtered.length === 0 ? (
        <p className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 text-[var(--color-text-muted)]">
          No matching bookings.
        </p>
      ) : (
        <div className="space-y-5">
          {filtered.map((booking) => {
            const member = getMember(booking);
            return (
              <article
                key={booking.id}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 md:p-8"
              >
                <div className="flex flex-wrap justify-between gap-4">
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-gold)]">
                      {member?.full_name || "Member"}
                    </p>
                    {member?.email ? (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)]"
                      >
                        {member.email}
                      </a>
                    ) : (
                      <span className="text-sm text-[var(--color-text-muted)]">
                        Email unavailable
                      </span>
                    )}
                  </div>
                  <span className="text-sm capitalize text-[var(--color-gold)]">
                    {booking.status.replaceAll("_", " ")}
                  </span>
                </div>
                <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-2xl">
                  {booking.package_name}
                </h2>
                <dl className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div>
                    <dt className="text-[var(--color-text-muted)]">Event date</dt>
                    <dd>{booking.event_date}</dd>
                  </div>
                  <div>
                    <dt className="text-[var(--color-text-muted)]">Guests</dt>
                    <dd>{booking.guest_count}</dd>
                  </div>
                  <div>
                    <dt className="text-[var(--color-text-muted)]">Venue</dt>
                    <dd>{booking.venue}</dd>
                  </div>
                  <div>
                    <dt className="text-[var(--color-text-muted)]">Contract record</dt>
                    <dd>
                      {booking.event_contracts?.[0]?.status.replaceAll("_", " ") ??
                        "No contract record"}
                    </dd>
                  </div>
                </dl>
                <details className="mt-5 border-t border-[var(--color-border)] pt-4">
                  <summary className="cursor-pointer text-sm text-[var(--color-gold)]">
                    View booking and contract data
                  </summary>
                  <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-words rounded bg-[var(--color-bg)] p-4 text-xs text-[var(--color-text-muted)]">
                    {JSON.stringify(
                      {
                        bookingId: booking.id,
                        member,
                        package: booking.package_name,
                        eventDate: booking.event_date,
                        guestCount: booking.guest_count,
                        venue: booking.venue,
                        bookingStatus: booking.status,
                        contract: booking.event_contracts?.[0] ?? null,
                      },
                      null,
                      2
                    )}
                  </pre>
                </details>
                <div className="mt-5 flex flex-wrap items-end gap-3 border-t border-[var(--color-border)] pt-4">
                  <label className="text-xs text-[var(--color-text-muted)]">
                    Booking status
                    <select
                      value={statuses[booking.id] ?? booking.status}
                      onChange={(event) =>
                        setStatuses((current) => ({
                          ...current,
                          [booking.id]: event.target.value,
                        }))
                      }
                      className="mt-1 block rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-text)]"
                    >
                      <option value="requested">Requested</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </label>
                  <button
                    type="button"
                    disabled={savingId === booking.id}
                    onClick={() => saveStatus(booking.id, booking.status)}
                    className="rounded bg-[var(--color-gold)] px-4 py-2 text-xs font-medium uppercase tracking-wider text-[var(--color-bg)] hover:bg-[var(--color-gold-light)] disabled:opacity-60"
                  >
                    {savingId === booking.id ? "Saving…" : "Save Status"}
                  </button>
                  {feedback[booking.id] && (
                    <p role="status" className="text-xs text-[var(--color-text-muted)]">
                      {feedback[booking.id]}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </>
  );
}
