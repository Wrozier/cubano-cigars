import Link from "next/link";
import { PrivateEventContactDialog } from "@/components/PrivateEventContactDialog";

export const metadata = {
  title: "Private Events — Cubano Cigars",
  description:
    "Host unforgettable private cigar tastings, corporate gatherings, and elevated celebrations with Cubano Cigars.",
};

const experiences = [
  {
    title: "Private Tastings",
    text: "Intimate cigar experiences for friends, clients, and collectors with guided pairings and product education.",
  },
  {
    title: "Corporate Gatherings",
    text: "Elegant hospitality for client dinners, team appreciation events, and executive entertaining in a refined setting.",
  },
  {
    title: "Celebrations",
    text: "From wedding receptions to milestone birthdays, we create memorable moments with custom cigar service and ambiance.",
  },
];

const details = [
  "Curated cigar selections tailored to your guests and event style",
  "Hands-on guidance from cigar experts and hospitality professionals",
  "Flexible event planning for intimate lounges, private rooms, and on-site experiences",
  "Custom recommendations for pairing with spirits, coffee, and premium hors d'oeuvres",
];

const packageIdeas = [
  "Birthdays, weddings and anniversaries",
  "Bachelors and Bachelorette parties",
  "Private or corporate holiday parties",
  "Private whiskey or wine tasting parties",
  "Evening entertainment for executive off-site meetings",
  "Client appreciation and incentive events",
  "Corporate team building events",
];

const packageIncludes = [
  "An Experienced Tobacconist",
  "Cutters",
  "Lighters",
  "Ashtrays",
  "Displays For Each Cigar",
  "2Hrs of Service",
  "30 Cigars",
];

const whiskeyExperience = [
  "Paired To The Cigar",
  "2 Hours of Service",
  "Official Whisky Ambassador",
  "Presentation Table",
  "3 Regional Spirits",
  "30 People",
];

export default function PrivateEventsPage() {
  return (
    <div className="pt-28 pb-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,39,0.18),transparent_40%)]" />
        <div className="relative max-w-[1200px] mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-4">
                Private Events
              </p>
              <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl mb-5 leading-none">
                Crafted gatherings for unforgettable moments.
              </h1>
              <p className="text-lg text-[var(--color-text-muted)] max-w-xl mb-8 leading-relaxed">
                Host an elevated cigar experience designed around your guests,
                your story, and your occasion. From intimate tastings to
                signature corporate events, Cubano Cigars brings warmth,
                craft, and hospitality to every gathering.
              </p>
              <div className="flex flex-wrap gap-4">
                <PrivateEventContactDialog />
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-[var(--color-gold)] text-[var(--color-gold)] text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-gold)] hover:text-[var(--color-bg)] transition-colors"
                >
                  Explore Cigars
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="/Trailer-New-6-29-1.jpeg"
                alt="Private cigar event setup"
                className="rounded-lg shadow-2xl object-cover w-full h-[540px]"
              />
              <div className="absolute -bottom-6 left-6 right-6 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg p-5 shadow-2xl">
                <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-2">
                  Experience
                </p>
                <p className="text-lg font-medium leading-relaxed">
                  Tailored hospitality, premium cigars, and elevated atmospheres
                  for every guest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">
            Event Types
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl mb-4">
            Elevated experiences for every occasion
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((experience) => (
            <div
              key={experience.title}
              className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl p-8"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 flex items-center justify-center text-[var(--color-gold)] mb-5 text-2xl">
                ✦
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl mb-3">
                {experience.title}
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                {experience.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-bg-elevated)] py-20">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">
              What We Offer
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl mb-6">
              Every detail, thoughtfully curated.
            </h2>
            <div className="space-y-4">
              {details.map((item) => (
                <div key={item} className="flex gap-4 items-start">
                  <span className="mt-1 text-[var(--color-gold)]">✓</span>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-8 shadow-2xl">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">
              Event Planning
            </p>
            <h3 className="font-[family-name:var(--font-cormorant)] text-3xl mb-5">
              Ready to host something exceptional?
            </h3>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
              Share your vision and we&apos;ll help shape a memorable guest
              experience tailored to your occasion, guest count, and atmosphere.
            </p>
            <div className="space-y-3 text-sm text-[var(--color-text-muted)]">
              <p>
                <span className="text-[var(--color-text)] font-medium">Email:</span>{" "}
                <a href="mailto:tdean@smokecubano.com" className="hover:text-[var(--color-gold)]">
                  tdean@smokecubano.com
                </a>
              </p>
              <p>
                <span className="text-[var(--color-text)] font-medium">Phone:</span>{" "}
                <a href="tel:18334282266" className="hover:text-[var(--color-gold)]">
                  1-(833)-4CUBANO
                </a>
              </p>
              <p>
                <span className="text-[var(--color-text)] font-medium">Location:</span> Atlanta, Georgia
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-8">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">
              Our packages are ideal for:
            </p>
            <ul className="space-y-3 text-[var(--color-text-muted)] leading-relaxed">
              {packageIdeas.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="text-[var(--color-gold)] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-8">
            <h3 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl mb-4">
              Exquisite Cigar Lounge Experience
            </h3>
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)] mb-2">
                Pricing
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-4xl text-[var(--color-gold)]">
                $1,000
              </p>
            </div>
            <a
              href="https://smokecubano.com/private-events/#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjI0MiIsInRvZ2dsZSI6ZmFsc2V9"
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-7 py-3.5 bg-[var(--color-gold)] text-[var(--color-bg)] text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-gold-light)] transition-colors"
            >
              Book Here
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-8">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-4">
              Each Package includes:
            </p>
            <ul className="space-y-3 text-[var(--color-text-muted)] leading-relaxed">
              {packageIncludes.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="text-[var(--color-gold)] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-8">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">
              Whiskey &amp; Cigar Experience
            </p>
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)] mb-2">
                Pricing
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-4xl text-[var(--color-gold)]">
                $500
              </p>
            </div>
            <img
              src="/Whiskey-and-Cigars.jpeg"
              alt="Whiskey and cigars pairing"
              className="rounded-lg w-full object-cover mb-6"
            />
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
              A whisky bar is a great addition to any event, add this on to have a truly unique experience. Explore the world of Scotch, Bourbon, or Whisky!
            </p>
            <ul className="space-y-3 text-[var(--color-text-muted)] leading-relaxed mb-6">
              {whiskeyExperience.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="text-[var(--color-gold)] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://smokecubano.com/private-events/#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjI0NSIsInRvZ2dsZSI6ZmFsc2V9"
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-7 py-3.5 bg-[var(--color-gold)] text-[var(--color-bg)] text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-gold-light)] transition-colors"
            >
              Book Here
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(135deg,rgba(201,162,39,0.08),rgba(201,162,39,0.02))] p-8 md:p-12 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">
            Let&apos;s Plan Your Event
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl mb-4">
            A memorable gathering starts with the right atmosphere.
          </h2>
          <a
            href="mailto:tdean@smokecubano.com?subject=Private%20Event%20Inquiry"
            className="inline-flex px-7 py-3.5 bg-[var(--color-gold)] text-[var(--color-bg)] text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-gold-light)] transition-colors"
          >
            Inquire Today
          </a>
        </div>
      </section>
    </div>
  );
}
