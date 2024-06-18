import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from "../../../../utils/supabase/server";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";

export async function POST(request) {
  const event = await request.json();

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  switch (event.type) {
    case "charge.succeeded":
      if (event.data.object.metadata.product === "Additional") {
        const user_id = event.data.object.metadata.user_id;

        const { data: credits } = await supabase
          .from("accounts")
          .select("credits")
          .eq("user_id", event.data.object.metadata.user_id)
          .single();

        const { data, error } = await supabase
          .from("accounts")
          .update({
            credits:
              Number(credits.credits) +
              Number(event.data.object.metadata.credits),
          }) // replace 1 with the number of credits you want to add
          .eq("user_id", user_id);

        return NextResponse.json({ received: true });
      }

      const url = "https://api.pod.space/premium/feed"; // replace with your API endpoint

      //Podspace setup
      let res = await axios.post(
        url,
        { user_id: event.data.object.metadata.user_id },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer efe290772a3861e91ca8f5b452c86d616a023e7ec6e78693195a53a0e93283ac2b344ec34f2b5f1331864c75447cae0b9b658d72`,
          },
        }
      );

      const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", event.data.object.metadata.user_id)
        .single();

      let private_feed = res.data.feed_url;

      const insert = {
        credits: 1,
        product_name: event.data.object.metadata.product,
        private_feed: private_feed,
        user_id: event.data.object.metadata.user_id,
      };

      const { error, data } = await supabase
        .from("accounts")
        .insert(insert)
        .select()
        .single();

      let tag;

      if (profile.sun) {
        tag = "PaidSun";
      } else if (event.data.object.metadata.product === "Instant") {
        tag = "Paid5";
      } else if (event.data.object.metadata.product === "Supercharged") {
        tag = "Paid12";
      }

      //Highlevel setup
      const high_level = await axios.get(
        "https://rest.gohighlevel.com/v1/contacts/" + profile.crm_id,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6IjhyNjU3T3lKazlEQ2o5cm1Qd1BIIiwidmVyc2lvbiI6MSwiaWF0IjoxNzEzMDk0MzE3ODc4LCJzdWIiOiJCZnhEbFFvU1ZPVzZoZXl2UURHTCJ9.Xlk54xwddSJlcqYoM0PMLT5pkugMvl0hjupcbGJjHu8`,
          },
        }
      );

      let tags = high_level.data.contact.tags;

      let new_tags = [...tags, tag];

      await axios.put(
        "https://rest.gohighlevel.com/v1/contacts/" + profile.crm_id,
        {
          tags: new_tags,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6IjhyNjU3T3lKazlEQ2o5cm1Qd1BIIiwidmVyc2lvbiI6MSwiaWF0IjoxNzEzMDk0MzE3ODc4LCJzdWIiOiJCZnhEbFFvU1ZPVzZoZXl2UURHTCJ9.Xlk54xwddSJlcqYoM0PMLT5pkugMvl0hjupcbGJjHu8`,
          },
        }
      );

      console.log(data);

      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json(
    { received: true },
    {
      status: 200,
    }
  );
}
