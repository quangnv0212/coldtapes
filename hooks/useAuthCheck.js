"use client";

import { createClient } from "../utils/supabase/client";

export default async function AuthCheck() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  return data?.user ? true : false;
}
