"use server";

import Stripe from "stripe";
import { StripeCardComponent } from "../components/StripeCardComponent";
import useAuth from "../../../hooks/useAuth";
import LoggedInHeaderComponent from "../components/LoggedInHeaderComponent";
import FooterComponent from "../components/FooterComponent";
import Image from "next/image";
import BuyNowButton from "../components/BuyNowButton";
import GreyBuyNowButton from "../components/GreyBuyNowButton";

export default async function PricingPage() {
  const user = await useAuth();

  return (
    <div className="overflowx-x-hidden bg-black">
      <LoggedInHeaderComponent />
      <div className=" -mb-10 px-8 max-w-5xl mx-auto p-72 flex justify-center items-center flex-col">
        <p className="text-xl text-white text-center font-bold">
          Thanks for your payment. You&apos;ll receive a confirmation email and
          receipt very soon.
        </p>

        <p className="text-lg text-white text-center mt-10">
          Click &apos;Continue&apos; below to access your Operation Antelope
          dashboard. On there, you can follow the link to your favourite podcast
          player and access the COLD TAPES Full Access feed to get all the
          evidence immediately and ad-free. When you are ready, return to the
          dashboard and charge your suspect!
        </p>
        <a
          href="/dashboard"
          className="bg-red-500 text-white py-3 px-6 rounded-lg font-bold text-center mt-6"
        >
          Continue
        </a>
      </div>
      <FooterComponent />
    </div>
  );
}
