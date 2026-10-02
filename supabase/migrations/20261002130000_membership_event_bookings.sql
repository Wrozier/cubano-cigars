create or replace function public.is_cubano_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select lower(coalesce(auth.jwt() ->> 'email', '')) = 'tdean@smokecubano.com';
$$;

revoke all on function public.is_cubano_admin() from public;
grant execute on function public.is_cubano_admin() to authenticated;

create table public.members (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text not null default '',
  created_at timestamptz not null default now()
);

alter table public.members enable row level security;

create policy "Members and admins can view member profiles"
  on public.members for select to authenticated
  using (id = (select auth.uid()) or (select public.is_cubano_admin()));

create policy "Admins can update member profiles"
  on public.members for update to authenticated
  using ((select public.is_cubano_admin()))
  with check ((select public.is_cubano_admin()));

create or replace function public.handle_new_member()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.members (id, email, full_name)
  values (
    new.id,
    coalesce(new.email, ''),
    coalesce(new.raw_user_meta_data ->> 'full_name', '')
  );
  return new;
end;
$$;

create trigger on_auth_user_created_add_member
  after insert on auth.users
  for each row execute procedure public.handle_new_member();

insert into public.members (id, email, full_name)
select
  id,
  coalesce(email, ''),
  coalesce(raw_user_meta_data ->> 'full_name', '')
from auth.users
on conflict (id) do nothing;

create table public.event_bookings (
  id uuid primary key default gen_random_uuid(),
  member_id uuid not null references public.members(id) on delete cascade,
  package_name text not null check (
    package_name in (
      'Exquisite Cigar Lounge Experience — $1,000',
      'Whiskey & Cigar Experience — $500',
      'Cigar Lounge + Whiskey & Cigar Experiences — $1,500'
    )
  ),
  event_date date not null,
  guest_count integer not null check (guest_count between 1 and 500),
  venue text not null,
  notes text not null default '',
  status text not null default 'requested'
    check (status in ('requested', 'confirmed', 'completed', 'cancelled')),
  created_at timestamptz not null default now()
);

alter table public.event_bookings enable row level security;

create policy "Members and admins can view event bookings"
  on public.event_bookings for select to authenticated
  using (member_id = (select auth.uid()) or (select public.is_cubano_admin()));

create policy "Members can create their own event bookings"
  on public.event_bookings for insert to authenticated
  with check (
    member_id = (select auth.uid())
    and event_date >= current_date
  );

create policy "Admins can update event bookings"
  on public.event_bookings for update to authenticated
  using ((select public.is_cubano_admin()))
  with check ((select public.is_cubano_admin()));

create policy "Admins can delete event bookings"
  on public.event_bookings for delete to authenticated
  using ((select public.is_cubano_admin()));

create table public.event_contracts (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null unique references public.event_bookings(id) on delete cascade,
  member_id uuid not null references public.members(id) on delete cascade,
  status text not null default 'awaiting_approved_terms'
    check (status in ('awaiting_approved_terms', 'draft', 'sent', 'signed', 'void')),
  contract_data jsonb not null default '{}'::jsonb,
  terms_version text,
  created_at timestamptz not null default now()
);

alter table public.event_contracts enable row level security;

create policy "Members and admins can view event contracts"
  on public.event_contracts for select to authenticated
  using (member_id = (select auth.uid()) or (select public.is_cubano_admin()));

create policy "Admins can manage event contracts"
  on public.event_contracts for all to authenticated
  using ((select public.is_cubano_admin()))
  with check ((select public.is_cubano_admin()));

create or replace function public.create_event_contract_record()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.event_contracts (booking_id, member_id, contract_data)
  values (
    new.id,
    new.member_id,
    jsonb_build_object(
      'package_name', new.package_name,
      'event_date', new.event_date,
      'guest_count', new.guest_count,
      'venue', new.venue,
      'notes', new.notes
    )
  );
  return new;
end;
$$;

create trigger on_event_booking_create_contract_record
  after insert on public.event_bookings
  for each row execute procedure public.create_event_contract_record();

revoke all on function public.handle_new_member() from public;
revoke all on function public.create_event_contract_record() from public;

grant select on public.members to authenticated;
grant update on public.members to authenticated;
grant select, insert, update, delete on public.event_bookings to authenticated;
grant select, insert, update, delete on public.event_contracts to authenticated;
