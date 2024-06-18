"use client";

import { useFormState } from "react-dom";
import { signup } from "./actions";
import { Suspense, useEffect, useState } from "react";
import ErrorComponent from "../components/errorComponent";
import { SubmitButton } from "../components/submitButton";
import { useSearchParams } from "next/navigation";

const initialState = {
  status: 0,
  error: "",
};

export default function RegisterPage() {
  const [state, registerAction] = useFormState(signup, initialState);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterForm />
    </Suspense>
  );
}

function RegisterForm() {
  const [state, registerAction] = useFormState(signup, initialState);
  const searchParams = useSearchParams();

  return (
    <div className="flex bg-home-image  min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-black min-h-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-28 w-auto" src="/logo.png" alt="Cold Tapes" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Register for Cold Tapes
        </h2>
        <p className="mt-2 text-center text-sm text-white max-w">
          Already have an account?{" "}
          <a href="/login" className="font-semibold leading-6 underline">
            Sign in
          </a>
        </p>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 pb-12 pt-8 shadow sm:rounded-lg sm:px-12">
          <form className="space-y-6" action={registerAction}>
            <input
              type="hidden"
              name="sun"
              value={searchParams.get("sun") ? true : false}
            />
            <div>
              <label
                htmlFor="first_name"
                className="block text-sm font-medium leading-6 font-roboto text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  autoComplete="first_name"
                  required
                  className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="last_name"
                className="block text-sm font-medium leading-6 font-roboto text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  autoComplete="last_name"
                  required
                  className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 font-roboto text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  defaultValue={useSearchParams().get("email")}
                  required
                  className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 font-roboto text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password_confimation"
                className="block text-sm font-medium leading-6 font-roboto text-gray-900"
              >
                Confirm password
              </label>
              <div className="mt-2">
                <input
                  id="password_confimation"
                  name="password_confimation"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="text-black">
              <input
                type="checkbox"
                required
                className="mr-2 text-black"
                name="terms"
              />
              I have read the Terms & Conditions and confirm I am 18 years or
              older and a resident of Great Britain.
            </div>

            <div>
              <SubmitButton text={"Register"} />
            </div>
          </form>
          <ErrorComponent error={state.error} />
        </div>

        {/* <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?{" "}
      <a
        href="#"
        className="font-semibold leading-6 text-red-600 hover:text-red-500"
      >
        Start a 14 day free trial
      </a>
    </p> */}
      </div>
    </div>
  );
  // rest of your code
}
