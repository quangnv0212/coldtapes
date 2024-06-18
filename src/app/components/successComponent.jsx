"use client";

import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { useSearchParams } from "next/navigation";

export default function SuccessComponent() {
  const searchParams = useSearchParams();

  const success = searchParams.get("success");
  const title = searchParams.get("title");
  const message = searchParams.get("message");

  return (
    <>
      {success && (
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
                <h3 className="text-sm font-medium text-green-800 text-left">
                  {title ? title : "Success"}
                </h3>
                <div className="mt-2 text-sm text-green-700 text-left">
                  <p>{message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
