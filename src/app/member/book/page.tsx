import { redirect } from "next/navigation";
import { BookingForm } from "@/components/BookingForm";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function NewBookingPage() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) throw new Error(`Could not verify member session: ${error.message}`);
  if (!user) redirect("/membership?next=/member/book");

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">
          Member Booking
        </p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-8">
          Request a private event
        </h1>
        <BookingForm />
      </div>
    </div>
  );
}
