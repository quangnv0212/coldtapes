import { useState } from "react";

export default function FAQSectionComponent({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-black rounded-lg p-6 mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-row w-full items-center justify-between focus:outline-none"
      >
        <h4 className="font-semibold w-[240px] md:w-auto font-roboto text-[18px] text-left leading-[27px] mb-0 text-black">
          {faq.q}
        </h4>
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-black"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        )}
      </button>
      {open && <p className="mt-1.5 text-black">{faq.a}</p>}
    </div>
  );
}
