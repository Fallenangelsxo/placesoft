"use client";

import { useEffect } from "react";
import getSupabaseClient from "@/lib/supabase/client";

/**
 * Lightweight connectivity probe. Logs "connected" to the browser console
 * when Supabase env vars are present and the client can reach the API.
 *
 * It attempts a HEAD-style select on the optional `projects` table.
 * Even if the table does not yet exist, we still treat the API as reachable
 * and log "connected" (table-missing is not a network/auth failure).
 */
export default function SupabasePing() {
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!url || !key) {
      console.warn("Supabase env missing: set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY");
      return;
    }

    const supabase = getSupabaseClient();

    // Perform a minimal request. Use HEAD mode to avoid payloads.
    void (async () => {
      try {
        const { error } = await supabase
          .from("projects")
          .select("id", { head: true, count: "exact" });

        if (!error) {
          console.log("connected");
          return;
        }

        // If the table doesn't exist yet, it's still a good signal that the API and key work.
        const status = (error as unknown as { status?: number }).status;
        const msg = (error as unknown as { message?: string }).message ?? "";
        const code = (error as unknown as { code?: string }).code;
        const tableMissing = code === "42P01" || msg.toLowerCase().includes("relation \"projects\" does not exist");
        const acceptableStatuses = [404, 406, 400]; // PostgREST may return these for head/select edge cases
        if (tableMissing || (status && acceptableStatuses.includes(status))) {
          console.log("connected");
          return;
        }

        // Auth or network-level problems
        console.error("supabase connection issue:", { status, code, message: msg });
      } catch (err) {
        console.error("supabase network error:", err);
      }
    })();
  }, []);

  return null;
}
