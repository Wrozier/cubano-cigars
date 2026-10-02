"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function MemberSignOut() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  async function signOut() {
    setErrorMessage("");
    const { error } = await createClient().auth.signOut();
    if (error) {
      setErrorMessage(`Could not sign out: ${error.message}`);
      return;
    }
    router.push("/membership");
    router.refresh();
  }

  return (
    <div>
      <button
        type="button"
        onClick={signOut}
        className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)]"
      >
        Sign Out
      </button>
      {errorMessage && <p role="alert" className="mt-2 text-xs text-red-400">{errorMessage}</p>}
    </div>
  );
}
