"use client";

import { createClient } from "@supabase/supabase-js";

// Frontend (browser) Supabase client.
// Requires env vars to be set in `.env.local`:
// NEXT_PUBLIC_SUPABASE_URL
// NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string | undefined;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string | undefined;

if (!supabaseUrl || !supabaseAnonKey) {
  // Intentionally throw to surface misconfiguration in development.
  // In production, ensure these envs are configured in your hosting platform.
  console.warn(
    "Supabase env vars missing. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local"
  );
}

// Create a singleton client to avoid multiple instances during Fast Refresh.
let browserClient: ReturnType<typeof createClient> | undefined;

export function getSupabaseClient() {
  if (!browserClient) {
    browserClient = createClient(supabaseUrl ?? "", supabaseAnonKey ?? "");
  }
  return browserClient;
}

export default getSupabaseClient;
