import { MembershipForm } from "@/components/MembershipForm";

export const metadata = {
  title: "Membership — Cubano Cigars",
  description:
    "Explore the Cubano Cigars monthly cigar membership, its benefits, shipping schedule, and membership rules.",
};

const membershipBenefits = [
  "Two traditional cigars and one special-edition cigar for $49.95 per month",
  "10% off purchases at every retail location",
  "Members-only perks",
  "Three featured cigars selected each month and shipped to your doorstep",
  "A Cubano Cigar accessory gift and introduction to our blends with your initial order",
];

const membershipRules = [
  "The subscription automatically bills monthly and has a two-month minimum. After two months, you may cancel anytime.",
  "Assorted packages ship between the 22nd and 24th of each month. Sign up before the 22nd to receive that month's shipment; sign up after the 22nd and your first shipment rolls over to the next month.",
  "We ship in partnership with the U.S. Postal Service. U.S. deliveries typically take 3–5 days from shipment.",
  "Once a package ships, we cannot issue a refund. All sales are final.",
];

export default async function MembershipPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) {
  const { next, error } = await searchParams;
  const nextPath =
    next?.startsWith("/") && !next.startsWith("//") ? next : "/member/bookings";

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">
            Cubano Cigars Membership
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-5">
            Three cigars. A new experience every month.
          </h1>
          <p className="text-lg leading-relaxed text-[var(--color-text-muted)]">
            Explore our monthly cigar subscription and its member benefits.
            Create a separate free account below to request private events and
            keep your booking and contract records connected to your profile.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div className="space-y-8">
            <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-7 md:p-9">
              <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-2">
                    How It Works
                  </p>
                  <h2 className="font-[family-name:var(--font-cormorant)] text-3xl">
                    Your monthly cigar delivery
                  </h2>
                </div>
                <p className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-gold)]">
                  $49.95 <span className="text-base text-[var(--color-text-muted)]">/ month</span>
                </p>
              </div>
              <ul className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
                {membershipBenefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3">
                    <span aria-hidden="true" className="text-[var(--color-gold)]">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-[var(--color-border)] pt-5 text-sm text-[var(--color-gold-light)]">
                Cut, light, smoke, enjoy!
              </p>
            </section>

            <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-7 md:p-9">
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-2">
                Membership Rules
              </p>
              <ul className="mt-5 space-y-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
                {membershipRules.map((rule) => (
                  <li key={rule} className="flex gap-3">
                    <span aria-hidden="true" className="text-[var(--color-gold)]">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div>
            {error === "confirmation" && (
              <p role="alert" className="mb-5 text-sm text-red-400">
                We could not confirm that sign-in link. Try signing in again or
                request a new confirmation email.
              </p>
            )}
            <MembershipForm nextPath={nextPath} />
            <p className="mt-4 text-xs leading-relaxed text-[var(--color-text-muted)]">
              This form creates a free account for event booking and records. It
              does not start or bill the $49.95 monthly cigar subscription.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
