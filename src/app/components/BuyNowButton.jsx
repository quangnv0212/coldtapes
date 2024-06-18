"use client";

import PaymentModal from "./PaymentModal";
import { Fragment, useState, useEffect } from "react";

export default function BuyNowButton({ amount, user_id, product }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="text-xl font-semibold leading-6 text-white bg-blue-500 w-full py-4 rounded-lg"
      >
        Buy Now
      </button>
      <PaymentModal
        amount={amount}
        open={open}
        product={product}
        user_id={user_id}
        closeModal={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
