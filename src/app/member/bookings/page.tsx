import Link from "next/link";
import { redirect } from "next/navigation";
import { MemberSignOut } from "@/components/MemberSignOut";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type BookingRecord = {
  id: string;
  package_name: string;
  event_date: string;
  guest_count: number;
  venue: string;
  status: string;
  created_at: string;
  event_contracts: { status: string }[] | null;
};

export default async function MemberBookingsPage() {
  const supabase = await createClient();
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError) throw new Error(`Could not verify member session: ${userError.message}`);
  if (!user) redirect("/membership");

  const { data, error } = await supabase
    .from("event_bookings")
    .select("id, package_name, event_date, guest_count, venue, status, created_at, event_contracts(status)")
    .eq("member_id", user.id)
    .order("created_at", { ascending: false });

  if (error) throw new Error(`Could not load member bookings: ${error.message}`);
  const bookings = (data ?? []) as BookingRecord[];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-5 mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">
              Member Portal
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl">
              Your event bookings
            </h1>
            <p className="mt-2 text-[var(--color-text-muted)]">{user.email}</p>
          </div>
          <div className="flex items-center gap-5">
            <MemberSignOut />
            <Link
              href="/member/book"
              className="inline-flex px-6 py-3 bg-[var(--color-gold)] text-[var(--color-bg)] text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-gold-light)]"
            >
              Request an Event
            </Link>
          </div>
        </div>

        {bookings.length === 0 ? (
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-8 text-[var(--color-text-muted)]">
            No event bookings yet.
          </div>
        ) : (
          <div className="space-y-5">
            {bookings.map((booking) => (
              <article
                key={booking.id}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 md:p-8"
              >
                <div className="flex flex-wrap justify-between gap-4">
                  <h2 className="font-[family-name:var(--font-cormorant)] text-2xl">
                    {booking.package_name}
                  </h2>
                  <span className="text-sm capitalize text-[var(--color-gold)]">
                    {booking.status.replaceAll("_", " ")}
                  </span>
                </div>
                <dl className="mt-5 grid sm:grid-cols-2 gap-4 text-sm">
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
                    <dt className="text-[var(--color-text-muted)]">Contract</dt>
                    <dd>
                      {booking.event_contracts?.[0]?.status.replaceAll("_", " ") ??
                        "Not yet available"}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
