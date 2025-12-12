import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase URL or Anon Key is missing. Check .env.local')
}

// Client for standard interactions (RLS protected)
export const supabase = createClient(
    supabaseUrl || '',
    supabaseAnonKey || ''
)

// Admin client for server-side batch operations (Bypass RLS)
// Only use this in server contexts (API routes, Scripts)
export const supabaseAdmin = createClient(
    supabaseUrl || '',
    supabaseServiceKey || supabaseAnonKey || ''
)
