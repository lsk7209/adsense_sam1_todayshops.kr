-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- stores_index: Lightweight search index
create table public.stores_index (
  id uuid not null default uuid_generate_v4(),
  original_id text not null, -- ID from source data
  name text not null,
  category_large text not null,
  category_middle text not null,
  region text not null,
  address text not null,
  lat double precision,
  lng double precision,
  created_at timestamp with time zone not null default now(),
  
  constraint stores_index_pkey primary key (id),
  constraint stores_index_original_id_key unique (original_id)
);

-- Indexes for filtering/searching
create index idx_stores_index_category_large on public.stores_index (category_large);
create index idx_stores_index_region on public.stores_index (region);
create index idx_stores_index_category_middle on public.stores_index (category_middle);
create index idx_stores_index_original_id on public.stores_index (original_id);


-- stores_detail: Heavy content
create table public.stores_detail (
  id uuid not null, -- Same ID as stores_index
  description text, -- 4 lines of AI content
  faq jsonb,        -- 5 FAQs
  original_data jsonb, -- Full raw data
  content_generated boolean default false,
  updated_at timestamp with time zone not null default now(),
  
  constraint stores_detail_pkey primary key (id),
  constraint stores_detail_id_fkey foreign key (id) references public.stores_index (id) on delete cascade
);

-- RLS (Row Level Security) - Basic Setup
alter table public.stores_index enable row level security;
alter table public.stores_detail enable row level security;

-- Policies (Public Read, Service Role Write)
create policy "Public stores are viewable by everyone"
  on public.stores_index for select
  using (true);

create policy "Public store details are viewable by everyone"
  on public.stores_detail for select
  using (true);
