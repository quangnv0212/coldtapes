"use client";

import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  useStripe,
  useElements,
  PaymentElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import ErrorComponent from "./errorComponent";

export function StripeCardComponent({ secret, credits = false }) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  // const hubs = await getHubs();

  const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
      // setPending(true);
      // We don't want to let default form submission happen here,
      // which would refresh the page.
      event.preventDefault();
      // setPending(true);
      if (!stripe || !elements) {
        // Stripe.js hasn't yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        setPending(false);
        return;
      }

      let redirect_url;

      if (credits) {
        redirect_url =
          process.env.NODE_ENV == "production"
            ? "https://coldtapes.com/credits-payment-confirmation"
            : "http://localhost:3000/credits-payment-confirmation";
      } else {
        redirect_url =
          process.env.NODE_ENV == "production"
            ? "https://coldtapes.com/payment-confirmation"
            : "http://localhost:3000/payment-confirmation";
      }

      const result = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        confirmParams: {
          return_url: redirect_url,
        },
      });

      if (result.error) {
        // Show error to your customer (for example, payment details incomplete)
        console.log(result.error.message);
        setError(result.error.message);
        setPending(false);
      } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
      }
      setPending(false);
    };

    const loading = () => {
      return (
        <>
          <svg
            className="animate-spin -ml-1 mr-3 h-3.5 w-3.5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Processing...
        </>
      );
    };

    return (
      <form onSubmit={handleSubmit}>
        <PaymentElement />

        <button
          disabled={!stripe}
          className="text-lg font-semibold leading-6 text-white bg-grey-500 w-full py-4 rounded-lg mt-5 flex justify-center items-center"
        >
          {pending ? loading() : "Pay Now"}
        </button>
        {/* <ErrorComponent error={error} /> */}
      </form>
    );
  };

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK);

  const options = {
    // passing the client secret obtained from the server
    clientSecret: secret,
  };

  return (
    <div>
      <div className="p-8">
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
}
