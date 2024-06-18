"use client";

import { useFormState } from "react-dom";
import { reset } from "./actions";
import ErrorComponent from "../components/errorComponent";
import { SubmitButton } from "../components/submitButton";
import { useState } from "react";
import { createClient } from "../../../utils/supabase/client";
import { useRouter } from "next/navigation";

const initialState = {
  status: 0,
  error: "",
};

export default function ResetPassword() {
  // const [state, resetAction] = useFormState(reset, initialState);
  const [formData, setFormData] = useState({
    password: "",
    password_confimation: "",
  });

  const router = useRouter();

  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (formData.password !== formData.password_confimation) {
      // return { error: , status: 429 };
      setError("Please make sure the passwords match");
    }

    const supabase = createClient();

    const { error, data } = await supabase.auth.updateUser({
      password: formData.password,
    });

    if (error) {
      setError(error.message);
    } else {
      return router.push("/dashboard");
    }
  };

  return (
    <div className="bg-home-image  flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-blue-50 h-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-28 w-auto" src="/logo.png" alt="Checkout" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Reset Password
        </h2>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 pb-12 pt-8 shadow sm:rounded-lg sm:px-12">
          <div className="space-y-6">
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
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password_confimation: e.target.value,
                    })
                  }
                  required
                  className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={handleSubmit}
                className={
                  "w-full flex justify-center items-center rounded-md bg-red-600 px-3 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-red-500 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                }
              >
                Reset Password
              </button>
            </div>
          </div>
          <ErrorComponent error={error} />
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
