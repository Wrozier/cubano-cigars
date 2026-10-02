import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const next = request.nextUrl.searchParams.get("next");
  const destination =
    next?.startsWith("/") && !next.startsWith("//") && !next.includes("\\")
      ? next
      : "/member/bookings";

  if (!code) {
    return NextResponse.redirect(new URL("/membership?error=confirmation", request.url));
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    console.error("[auth] Email confirmation failed", error.message);
    return NextResponse.redirect(new URL("/membership?error=confirmation", request.url));
  }

  return NextResponse.redirect(new URL(destination, request.url));
}
