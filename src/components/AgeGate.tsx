"use client";

import { useState, useEffect } from "react";

export function AgeGate({ children }: { children: React.ReactNode }) {
  const [verified, setVerified] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("ageVerified");
    setVerified(stored === "true");
  }, []);

  const handleYes = () => {
    sessionStorage.setItem("ageVerified", "true");
    setVerified(true);
  };

  const handleNo = () => {
    window.location.href = "https://www.google.com";
  };

  // Still checking
  if (verified === null) {
    return (
      <div className="fixed inset-0 bg-[var(--color-bg)] flex items-center justify-center">
        <div className="text-[var(--color-gold)] tracking-widest text-sm">
          CUBANO CIGARS
        </div>
      </div>
    );
  }

  if (!verified) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(12,11,10,0.88), rgba(12,11,10,0.96)), url(https://images.unsplash.com/photo-1599599823227-c802258fd183?auto=format&fit=crop&w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center max-w-md">
          <div className="font-[family-name:var(--font-cormorant)] text-[var(--color-gold)] tracking-[0.35em] text-sm mb-10 leading-relaxed">
            CUBANO
            <br />
            <span className="text-xs tracking-[0.5em]">CIGARS</span>
          </div>
          <h1 className="text-lg text-[var(--color-text-muted)] font-normal mb-2">
            You look so young!
          </h1>
          <p className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-10 text-[var(--color-text)]">
            Are you over 21?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleYes}
              className="px-8 py-3.5 bg-[var(--color-gold)] text-[var(--color-bg)] text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-gold-light)] transition-colors"
            >
              Yes
            </button>
            <button
              onClick={handleNo}
              className="px-8 py-3.5 border border-[var(--color-gold)] text-[var(--color-gold)] text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-gold)] hover:text-[var(--color-bg)] transition-colors"
            >
              No, get me out
            </button>
          </div>
          <p className="text-xs text-[var(--color-text-muted)] opacity-70">
            By entering this site you confirm you are of legal smoking age in
            your jurisdiction.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
