import { createClient } from "@supabase/supabase-js";
import { cache } from "react";

// Server-side (Node.js) Supabase client.
// Uses the service_role key for admin-level access.
// Should only be used in server-side code.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  // Intentionally throw to surface misconfiguration in development.
  // In production, ensure these envs are configured in your hosting platform.
  console.warn(
    "Supabase env vars missing. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local"
  );
}

// Using cache to create a singleton client instance.
// This is important for performance in Next.js, especially in the App Router.
// It prevents creating a new client on every server-side render.
const getSupabaseServerClient = cache(() => {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    // Return a dummy client if env vars are missing to avoid crashing the app.
    // This is not ideal, but it's better than nothing.
    return {
      from: () => ({
        select: () => ({
          eq: () => ({
            data: null,
            error: new Error("Supabase client not initialized."),
          }),
        }),
      }),
    };
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      // In server-side environments, it's often useful to disable auto-refreshing
      // of tokens since there's no user session to maintain.
      autoRefreshToken: false,
      persistSession: false,
    },
  });
});

export default getSupabaseServerClient;
