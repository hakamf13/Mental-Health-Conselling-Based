import { createClient } from "@supabase/supabase-js";

// URL and Key from environtment variables that it has built at Phase 2
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create and export the function to create client
export const createSupabaseClient = () => {
    return createClient(supabaseUrl, supabaseAnonKey);
};