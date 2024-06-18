import { ChevronRightIcon } from "@heroicons/react/20/solid";
import SignOutButton from "../components/signOutButton";
import useAuth from "../../../hooks/useAuth";

import { cookies } from "next/headers";
import { createClient } from "../../../utils/supabase/server";
import { redirect } from "next/navigation";
import LoggedInHeaderComponent from "../components/LoggedInHeaderComponent";
import SelectionComponent from "../components/SelectionComponent";
import FooterComponent from "../components/FooterComponent";
import AdditionalCreditsButton from "../components/AdditionalCreditsButton";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import Script from "next/script";

export default async function DashboardPage({ searchParams }) {
  const user = await useAuth();

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  if (searchParams.spotify) {
    const { data, error } = await supabase
      .from("accounts")
      .update({ spotify_connected: true }) // replace with your column names and new values
      .eq("user_id", user.id);
  }

  const { data, error } = await supabase
    .from("accounts")
    .select()
    .eq("user_id", user.id)
    .single();

  const { data: profile } = await supabase
    .from("profiles")
    .select()
    .eq("id", user.id)
    .single();

  if (!data) {
    if (profile.sun) {
      return redirect("/pricing-thesun");
    }
    return redirect("/pricing");
  }

  console.log("Credits", data.credits);

  const { data: selectedSuspects } = await supabase
    .from("users_suspects")
    .select("suspect_id")
    .eq("user_id", user.id);

  const suspects = await supabase.from("suspects").select();

  const appleDeepLink = data.private_feed.replace("https://", "podcast://");

  // const secret = "sdgegerwhrtjrtyu3645y46rtjr45e";
  // const userId = user.id; // replace with actual user id

  // const hmac = crypto.createHmac("sha256", secret);
  // hmac.update(userId);

  // const digest = hmac.digest("base64");
  // console.log(digest);

  return (
    <>
      {process.env.NODE_ENV == "production" ? (
        <>
          <Script id="google-analytics" strategy="afterInteractive">
            {`
gtag('event', 'conversion', {'send_to': 'AW-16549895089/tIPKCIeA56sZELG3zdM9'});
`}
          </Script>
        </>
      ) : null}

      <div className="overflowx-x-hidden bg-grey-100">
        <div className="bg-home-image bg-center bg-cover bg-no-repeat flex justify-center items-center py-96 flex-col font-roboto">
          <LoggedInHeaderComponent />
          <h3 className="text-white text-6xl font-bold max-w-6xl mx-auto px-8 text-center ">
            Welcome to Operation Antelope
          </h3>
          <p className="mt-8 text-white text-xl max-w-6xl mx-auto px-8 text-center">
            All the evidence is now available (and totally ad-free). Unlock all
            the files by clicking the link to your favourite podcast player,
            below.
          </p>
          <div className="mt-8 flex flex-row items-center">
            <a
              target="_blank"
              href={
                data.spotify_connected
                  ? "https://open.spotify.com/show/1WSsfNkyJ9WjF5qhzhU5Xc"
                  : "https://api.pod.space/premium/spotify?user_id=" + user.id
              }
              className="text-sm font-semibold leading-6 mx-2.5 text-gray-900"
            >
              <Image
                src={"/spotify.png"}
                height={40}
                width={40}
                alt="Spotify logo"
              />
            </a>
            <a
              target="_blank"
              href={appleDeepLink}
              className="text-sm font-semibold leading-6 mx-2.5 text-gray-900"
            >
              <Image
                src={"/apple.png"}
                height={40}
                width={40}
                alt="Apple logo"
              />
            </a>
            <a
              target="_blank"
              href={data.private_feed}
              className="bg-white rounded-full h-10 w-10 flex justify-center items-center relative mx-2.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 absolute top-[5px] left-[8px] text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="py-36 text-center">
          <h3 className="text-5xl font-bold mb-4 text-black">
            You have all the evidence
          </h3>
          <p className="text-lg text-black max-w-5xl mx-auto">
            Select who you think killed Drew below, and hit submit below to
            charge your suspect. You can change your mind right up until the
            competition closes on 6th September.
          </p>
          <SelectionComponent
            suspects={suspects.data}
            account={data}
            selectedSuspects={selectedSuspects.map(
              (suspect) => suspect.suspect_id
            )}
          />
          <div className="px-8 text-center flex flex-col">
            <h4 className="text-3xl font-bold mt-28 text-black">
              Want to increase your chances? Not totally sure who killed Drew?
            </h4>
            <p className="mt-6 text-lg text-black">
              For only £2 add another credit to select the same name… or a
              different one.
            </p>
            <div className="flex justify-center">
              <AdditionalCreditsButton
                amount={200}
                user_id={user.id}
                product={"Additional"}
              />
            </div>
          </div>
        </div>

        <FooterComponent />
      </div>
    </>
  );
}
