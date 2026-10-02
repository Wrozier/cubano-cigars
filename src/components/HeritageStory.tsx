"use client";

import { useState } from "react";

export function HeritageStory() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="story" className="py-24 bg-[var(--color-bg-elevated)]">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <img
            src="/Thad-2.jpg"
            alt="Thaddeus Thomas Dean Jr., founder and CEO of Cubano Cigars"
            className="rounded shadow-2xl w-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">
            Our Heritage
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl mb-5">
            A Heritage Passed Through Generations
          </h2>
          <div className="text-[var(--color-text-muted)] text-lg mb-8 leading-relaxed space-y-5">
            <p>
              Cubano Cigars honors a family legacy of cigar craftsmanship that
              began generations ago in Key West, rooted in Havana and carried
              forward by founder Thaddeus Thomas Dean, Jr.
            </p>
            {expanded && (
              <>
                <p>
                  In the early 1800s, Pastora Rodriquez and Geronimo Falco moved
                  from Havana, Cuba, to Key West, Florida. Geronimo was a skilled
                  torcedor (cigar roller) who taught the craft to their four
                  sons: Waukin Falco (1834), Amelio Falco (1841), Rafael Falco
                  (1842), and Antonio Falco.
                </p>
                <p>
                  Our great-great-great-grandfather Rafael Falco married
                  Valentine Falco-Rodriquez, and they had a son, Emilo Falco.
                  Emilo learned the craft of cigar rolling from his father. He
                  married Julia Valdez, and together they had three children:
                  Claudina, Barbara, and Mario Falco.
                </p>
                <p>
                  In the early 1900s, Thomas Valdez came to Key West from Mexico
                  as a merchant marine and married Claudina Falco, a Cuban-Key
                  West, Florida native. Thomas and Claudina had four children:
                  Eugene, Francisco, Pedro (Peter), and Julia Valdez (Deane).
                  Julia had seven children; the oldest was Thaddeus Thomas Dean,
                  Sr., who married Diane Marie Butler. Thaddeus and Diane had
                  three children, including Thaddeus Thomas Dean, Jr., founder
                  and CEO of Cubano Cigars.
                </p>
                <p>
                  Thaddeus Thomas Dean, Jr. created Cubano Cigars as a tribute
                  to his Cuban cigar heritage—a legacy for generations to come.
                  His focus is delivering an exceptional selection of vintage
                  Cuban and New World cigars. Each Cubano cigar has its own
                  distinctive aroma and blend, carrying you back through Cuban
                  cigar history on the island of Key West.
                </p>
              </>
            )}
          </div>
          <button
            type="button"
            aria-expanded={expanded}
            onClick={() => setExpanded((isExpanded) => !isExpanded)}
            className="inline-flex px-7 py-3.5 bg-[var(--color-gold)] text-[var(--color-bg)] text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-gold-light)] transition-colors"
          >
            {expanded ? "Show Less" : "Read Our Full Story"}
          </button>
        </div>
      </div>
    </section>
  );
}
