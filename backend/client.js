import { createClient } from "@supabase/supabase-js";

export const supabaseClient=createClient(
  import.meta.env.VITE_APP_SUPABASE_URL,
  import.meta.env.VITE_APP_SUPABASE_AMON_KEY
);
