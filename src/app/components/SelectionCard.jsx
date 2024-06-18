"use client";
import { useState } from "react";

export default function SelectionComponent({
  suspect,
  onSelection,
  defaultSelected,
  creditsRemaining,
}) {
  const [selected, setSelected] = useState(defaultSelected);

  return (
    <div className="flex flex-col md:flex-row justify-between items px-6 py-8 border border-black rounded-xl ">
      <div className="text-left">
        <h4 className="text-lg font-semibold text-black">{suspect.name}</h4>
        <p className=" text-black">{suspect.role}</p>
      </div>
      <button
        disabled={!creditsRemaining && !selected}
        className={
          selected
            ? "border border-red-500 p-3 text-white bg-red-500 rounded mt-2.5 md:mt-0"
            : "border border-black p-3 text-black rounded mt-2 mt-2.5 md:mt-0"
        }
        onClick={() => {
          setSelected(!selected);
          onSelection(suspect.id);
        }}
      >
        Select
      </button>
    </div>
  );
}
