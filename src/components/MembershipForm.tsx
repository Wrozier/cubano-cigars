"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function MembershipForm({ nextPath }: { nextPath: string }) {
  const router = useRouter();
  const [isSignup, setIsSignup] = useState(true);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [pending, setPending] = useState(false);

  async function submit(formData: FormData) {
    setPending(true);
    setMessage("");
    setErrorMessage("");

    try {
      const supabase = createClient();
      const email = String(formData.get("email") ?? "").trim().toLowerCase();
      const password = String(formData.get("password") ?? "");

      if (isSignup) {
        const fullName = String(formData.get("fullName") ?? "").trim();
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName },
            emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(nextPath)}`,
          },
        });

        if (error) throw error;
        if (!data.session) {
          setMessage("Check your email to confirm your account, then sign in.");
          return;
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }

      router.push(nextPath);
      router.refresh();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Membership sign-in could not be completed. Please try again."
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
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-2">
          Member Account
        </p>
        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl">
          {isSignup ? "Join Cubano Cigars" : "Welcome back"}
        </h2>
      </div>
      {isSignup && (
        <label className="block text-sm text-[var(--color-text-muted)]">
          Full name
          <input
            name="fullName"
            required
            autoComplete="name"
            minLength={2}
            className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-3 text-[var(--color-text)]"
          />
        </label>
      )}
      <label className="block text-sm text-[var(--color-text-muted)]">
        Email
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-3 text-[var(--color-text)]"
        />
      </label>
      <label className="block text-sm text-[var(--color-text-muted)]">
        Password
        <input
          name="password"
          type="password"
          required
          minLength={8}
          autoComplete={isSignup ? "new-password" : "current-password"}
          className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-3 text-[var(--color-text)]"
        />
        {isSignup && <span className="mt-1 block text-xs">Use at least 8 characters.</span>}
      </label>
      {message && <p role="status" className="text-sm text-[var(--color-gold-light)]">{message}</p>}
      {errorMessage && <p role="alert" className="text-sm text-red-400">{errorMessage}</p>}
      <button
        type="submit"
        disabled={pending}
        className="w-full bg-[var(--color-gold)] px-6 py-3.5 text-sm font-medium tracking-wider uppercase text-[var(--color-bg)] hover:bg-[var(--color-gold-light)] disabled:opacity-60"
      >
        {pending ? "Please wait…" : isSignup ? "Create Free Account" : "Sign In"}
      </button>
      <button
        type="button"
        onClick={() => {
          setIsSignup((current) => !current);
          setMessage("");
          setErrorMessage("");
        }}
        className="w-full text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)]"
      >
        {isSignup ? "Already a member? Sign in" : "Need an account? Join free"}
      </button>
    </form>
  );
}
