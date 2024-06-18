"use client";

import SelectionCard from "./SelectionCard";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import { updateSelections } from "../dashboard/actions";
import { GreySubmitButton } from "./GreySubmitButton";
import SuccessComponent from "./successComponent";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const initialState = {
  status: 0,
  error: "",
};

export default function SelectionComponent({
  suspects,
  selectedSuspects,
  account,
}) {
  const [state, udpateSelectionAction] = useFormState(
    updateSelections,
    initialState
  );
  console.log(account);
  const [suspectList, setSuspectList] = useState(selectedSuspects);
  const [success, setSuccess] = useState(false);

  const updateSuspectList = (suspect) => {
    if (suspectList.includes(suspect)) {
      setSuspectList(suspectList.filter((item) => item !== suspect));
    } else {
      setSuspectList([...suspectList, suspect]);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <span className="mt-3 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-base font-medium text-red-500 ring-1 ring-inset ring-red-600/10">
        {account.credits - suspectList.length}{" "}
        {account.credits - suspectList.length == 1 ? "Selection" : "Selections"}{" "}
        Remaining
      </span>

      <div
        className="gap-y-4 flex flex-col  my-10 md:h-[700px] md:overflow-y-scroll  px-8"
        id="suspects"
      >
        {suspects.map((suspect) => (
          <SelectionCard
            key={suspect.id}
            suspect={suspect}
            creditsRemaining={account.credits - suspectList.length}
            defaultSelected={selectedSuspects.includes(suspect.id)}
            onSelection={(s) => updateSuspectList(s)}
          />
        ))}
      </div>
      {/* <button className="text-lg font-semibold leading-6 text-white bg-grey-500 w-full py-4 rounded-lg mt-6 max-w-lg" onClick={() => }>
        Submit
      </button> */}

      <form
        className="space-y-6 flex justify-center flex-col items-center max-w-5xl mx-auto px-8 w-full"
        action={udpateSelectionAction}
      >
        <input
          type="hidden"
          name="selections"
          value={JSON.stringify(suspectList)}
        />

        <GreySubmitButton text="Submit" />
        {state.status == 200 ? (
          <div className="max-w-6xl mx-auto mt-8 w-full justify-start">
            <div className="rounded-md bg-green-50 p-4 mb-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <CheckCircleIcon
                    className="h-5 w-5 text-green-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-medium text-green-800 text-left">
                    Detective, you&apos;ve charged your suspect.
                  </h3>
                  <div className="mt-2 text-sm text-green-700 text-left">
                    <p>
                      The murderer will be announced on 9th September 2024. If
                      you guessed correctly, you&apos;ll automatically be
                      entered into the draw to claim the £10,000 reward and win
                      Super Sleuth of the Year. Best of luck!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </form>
    </div>
  );
}
