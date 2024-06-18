"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createClient } from "../../../utils/supabase/server";

export async function reset(prevState, formData) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  console.log(supabase);
  await supabase.auth.refreshSession();
  if (formData.get("password") !== formData.get("password_confimation")) {
    return { error: "Please make sure the passwords match", status: 429 };
  }

  const { error } = await supabase.auth.updateUser({
    password: formData.get("password"),
  });

  if (error) {
    return { error: error.message, status: error.status };
  }

  revalidatePath("/login", "layout");
  redirect("/login");
}
