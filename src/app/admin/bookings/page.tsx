import { redirect } from "next/navigation";
import { AdminBookingSearch } from "@/components/AdminBookingSearch";
import { MemberSignOut } from "@/components/MemberSignOut";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

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

export default async function AdminBookingsPage() {
  const supabase = await createClient();
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError) throw new Error(`Could not verify admin session: ${userError.message}`);
  if (!user) redirect("/membership");
  if (user.email?.toLowerCase() !== "tdean@smokecubano.com") redirect("/member/bookings");

  const { data, error } = await supabase
    .from("event_bookings")
    .select("id, package_name, event_date, guest_count, venue, status, created_at, members(full_name, email), event_contracts(status, contract_data)")
    .order("created_at", { ascending: false });

  if (error) throw new Error(`Could not load admin booking records: ${error.message}`);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">
          Admin
        </p>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl">
            Member bookings &amp; contracts
          </h1>
          <MemberSignOut />
        </div>
        <p className="mb-8 text-[var(--color-text-muted)]">
          Search member event requests and inspect the associated contract data.
          Contract terms and signatures remain unavailable until approved terms are configured.
        </p>
        <AdminBookingSearch bookings={(data ?? []) as AdminBooking[]} />
      </div>
    </div>
  );
}
