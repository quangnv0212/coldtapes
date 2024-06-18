"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({ text, full_width = true }) {
  const { pending } = useFormStatus();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

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
    <button
      type="submit"
      aria-disabled={pending}
      className={classNames(
        full_width ? "w-full" : "ml-3 w-auto",
        "flex justify-center items-center rounded-md bg-red-600 px-3 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-red-500 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      )}
    >
      {pending ? loading() : text}
    </button>
  );
}
