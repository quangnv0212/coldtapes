"use client";

import PaymentModal from "./PaymentModal";
import { useState } from "react";

export default function AdditionalCreditsButton({ amount, user_id, product }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="rounded-2xl mt-8 font-bold justify-center items-center flex whitespace-nowrap bg-teal-500 px-3.5 py-4 text-base text-black shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        Charge Another Suspect
      </button>
      <PaymentModal
        amount={amount}
        open={open}
        product={product}
        user_id={user_id}
        credits={1}
        closeModal={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
