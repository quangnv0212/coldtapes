"use client";

import { useFormState } from "react-dom";
import { login } from "./actions";
import { useEffect, useState } from "react";
import ErrorComponent from "../components/errorComponent";
import { SubmitButton } from "../components/submitButton";
import { createClient } from "../../../utils/supabase/client";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const initialState = {
  status: 0,
  error: "",
};

export default function ForgotPassword() {
  const [state, loginAction] = useFormState(login, initialState);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const supabase = createClient();

  const sendPasswordResetEmail = async () => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "https://coldtapes.com/reset-password",
    });

    if (!error) {
      setSuccess(true);
    }
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event == "PASSWORD_RECOVERY") {
        const newPassword = prompt(
          "What would you like your new password to be?"
        );
        const { data, error } = await supabase.auth.updateUser({
          password: newPassword,
        });

        if (data) alert("Password updated successfully!");
        if (error) alert("There was an error updating your password.");
      }
    });
  }, []);

  return (
    <div className="bg-home-image  flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-blue-50 h-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-28 w-auto" src="/logo.png" alt="Checkout" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Forgotten Password
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={sendPasswordResetEmail}
                className={
                  "w-full flex justify-center items-center rounded-md bg-red-600 px-3 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-red-500 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                }
              >
                Send Password Reset Email
              </button>
            </div>
          </form>
          <ErrorComponent error={state.error} />
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
                      Success
                    </h3>
                    <div className="mt-2 text-sm text-green-700 text-left">
                      <p>
                        Password reset email sent, please check your emails.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
