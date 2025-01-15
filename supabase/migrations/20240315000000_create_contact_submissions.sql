create table public.contact_submissions (
    id uuid default gen_random_uuid() primary key,
    first_name text not null,
    last_name text not null,
    email text not null,
    subject text not null,
    message text not null,
    submitted_at timestamp with time zone default timezone('utc'::text, now()) not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up Row Level Security (RLS)
alter table public.contact_submissions enable row level security;

-- Create policy to allow inserts from authenticated and anonymous users
create policy "Allow anonymous submissions" on public.contact_submissions
    for insert
    with check (true);

-- Create policy to allow select only for authenticated users
create policy "Allow authenticated users to view submissions" on public.contact_submissions
    for select
    using (auth.role() = 'authenticated');