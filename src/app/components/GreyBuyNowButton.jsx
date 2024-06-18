"use client";

import PaymentModal from "./PaymentModal";
import { Fragment, useState, useEffect } from "react";

export default function GreyBuyNowButton({
  amount,
  user_id,
  product,
  disabled = false,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}
        disabled={disabled}
        className="text-xl font-semibold leading-6 text-black bg-grey-200 w-full py-4 rounded-lg"
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
