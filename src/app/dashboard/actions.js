"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createClient } from "../../../utils/supabase/server";

export async function updateSelections(prevState, formData) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data } = await supabase.auth.getUser();

  let user = data.user.id;

  const selections = JSON.parse(formData.get("selections"));

  const { data: account } = await supabase
    .from("accounts")
    .select()
    .eq("user_id", data.user.id)
    .single();

  if (account.credits < selections.length) {
    if (error) {
      console.error("Error adding selection:", error);
      return { error: "Not enough credits", status: 401 };
    }
  }

  const { error } = await supabase
    .from("users_suspects")
    .delete()
    .eq("user_id", data.user.id);

  console.log("Selection", selections);

  if (selections) {
    // Add new selections
    for (let suspectId of selections) {
      const { data, error } = await supabase
        .from("users_suspects")
        .insert({ user_id: user.id, suspect_id: suspectId });

      if (error) {
        console.error("Error adding selection:", error);
        return { error: error.message, status: error.status };
      }
    }
  }

  return { status: 200 };

  revalidatePath("/dashboard", "layout");
  redirect("/dashboard?");
}
