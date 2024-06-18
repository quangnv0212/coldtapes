"use client";

import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { StripeCardComponent } from "../components/StripeCardComponent";

export default function PaymentModal({
  amount,
  open,
  product,
  user_id,
  credits = 0,
  closeModal,
}) {
  const [modalOpen, setModalOpen] = useState(open);
  const [intent, setIntent] = useState("");

  useEffect(() => {
    // setModalOpen(open);
    if (open && amount) {
      fetch(
        "/api/payment-intent?amount=" +
          amount +
          "&user_id=" +
          user_id +
          "&product=" +
          product +
          "&credits=" +
          credits
      )
        .then((res) => res.json())
        .then((data) => {
          setIntent(data.client_secret);
        });
    }
  }, [open, amount]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 w-full max-w-lg sm:p-6">
                <h3 className="px-8 mt-4 text-lg font-semibold text-black">
                  Make a payment
                </h3>
                <p className="px-8 mt-3 text-lg font-normal -mb-3 text-black">
                  Amount: £{amount / 100}
                </p>
                {intent ? (
                  <StripeCardComponent secret={intent} credits={credits} />
                ) : (
                  <p className="text-center my-3 text-xl font-bold">
                    Loading...
                  </p>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
