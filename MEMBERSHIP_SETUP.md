# Membership and private event bookings

The membership portal uses Supabase Auth and Postgres. Members can sign up for
free, create event requests, and view their own booking/contract records. The
$49.95 monthly cigar subscription details are informational only; this app does
not yet collect payments, create subscriptions, or process cancellations.
`tdean@smokecubano.com` is the only admin account configured in the database
policies and can search all member bookings and inspect their associated
contract data at `/admin/bookings`.

## Configure Supabase

1. Create a Supabase project and add its project URL and anon/publishable key
   to `.env.local`:

   ```text
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-or-publishable-key
   ```
2. Apply `supabase/migrations/20261002130000_membership_event_bookings.sql`
   in the Supabase SQL Editor.
3. In Supabase Auth, enable email/password sign-in and set the site URL to the
   deployed website origin. Add `<site-origin>/auth/callback` to the allowed
   redirect URLs. Configure SMTP before production so confirmation emails are
   reliably delivered.
4. Register `tdean@smokecubano.com` as a member using the membership page.
   That exact verified email receives admin access.
5. Restart the Next.js application after setting `.env.local`.

Do not expose a Supabase service-role key in the browser or commit project
credentials. Row-level security is enabled for profiles, bookings, and
contracts; admin visibility is enforced in Postgres as well as the admin page.

## Contract terms

New bookings automatically receive a contract data record linked to the booking
and member. It is marked `awaiting_approved_terms` until approved contract
terms are supplied. The application does not generate or request signatures
yet; add the legally approved template and signing workflow before using
contracts with customers.

Event requests are not payments or confirmed reservations. Admins review and
confirm bookings through the database/admin tooling.
