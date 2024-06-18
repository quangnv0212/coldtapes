"use client";

import { useFormState } from "react-dom";
import { login } from "./actions";
import { useEffect, useState } from "react";
import ErrorComponent from "../components/errorComponent";
import { SubmitButton } from "../components/submitButton";

const initialState = {
  status: 0,
  error: "",
};

export default function LoginPage() {
  const [state, loginAction] = useFormState(login, initialState);

  return (
    <div className="bg-home-image  flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-blue-50 h-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-28 w-auto" src="/logo.png" alt="Checkout" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 pb-12 pt-8 shadow sm:rounded-lg sm:px-12">
          <form className="space-y-6" action={loginAction}>
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
                  required
                  className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              {/* <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm leading-6 text-gray-900"
                >
                  Remember me
                </label>
              </div> */}

              <div className="text-sm leading-6">
                <a
                  href="/forgot-password"
                  className="font-semibold text-red-600 hover:text-red-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <SubmitButton text={"Login"} />
            </div>
          </form>
          <ErrorComponent error={state.error} />
        </div>

        {/* <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
          >
            Start a 14 day free trial
          </a>
        </p> */}
      </div>
    </div>
  );
}
