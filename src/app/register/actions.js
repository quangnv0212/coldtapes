"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createClient } from "../../../utils/supabase/server";
import axios from "axios";

export async function signup(prevState, formData) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  if (formData.get("password") !== formData.get("password_confimation")) {
    return { error: "Please make sure the passwords match", status: 429 };
  }

  const { error, user } = await supabase.auth.signUp({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (error) {
    return { error: error.message, status: error.status };
  }

  let tag;
  const sun = formData.get("sun");

  if (sun == "true") {
    tag = "TheSun";
  } else {
    tag = "Website";
  }

  //Highlevel setup
  const res = await axios.post(
    "https://rest.gohighlevel.com/v1/contacts/",
    {
      firstName: formData.get("first_name"),
      lastName: formData.get("last_name"),
      email: formData.get("email"),
      tags: [tag],
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6IjhyNjU3T3lKazlEQ2o5cm1Qd1BIIiwidmVyc2lvbiI6MSwiaWF0IjoxNzEzMDk0MzE3ODc4LCJzdWIiOiJCZnhEbFFvU1ZPVzZoZXl2UURHTCJ9.Xlk54xwddSJlcqYoM0PMLT5pkugMvl0hjupcbGJjHu8`,
      },
    }
  );

  const { data, error: updateError } = await supabase.from("profiles").insert({
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    sun: formData.get("sun"),
    terms: formData.get("terms"),
    crm_id: res.data.contact.id,
  });

  if (updateError) {
    console.error("Error updating user profile:", updateError);
    return;
  }

  revalidatePath("/dashboard", "layout");
  redirect("/dashboard");
}
