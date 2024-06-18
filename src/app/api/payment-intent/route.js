import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import useAuth from "../../../../hooks/useAuth";

export async function GET(request) {
  const user = await useAuth();

  const stripe = new Stripe(process.env.STRIPE_SK);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Number(request.nextUrl.searchParams.get("amount")),
    currency: "gbp",
    receipt_email: user.email,
    metadata: {
      product: request.nextUrl.searchParams.get("product"),
      user_id: user.id,
      credits: request.nextUrl.searchParams.get("credits"),
    },
  });

  return NextResponse.json(paymentIntent);
}
