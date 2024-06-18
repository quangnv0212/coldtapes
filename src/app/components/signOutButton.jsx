"use client";

import { logOut } from "../logout/actions";

export default function SignOutButton() {
  const handleLogOut = async (e) => {
    e.preventDefault();
    await logOut();
  };

  return (
    <form onSubmit={handleLogOut}>
      <button
        type="submit"
        className="text-xl font-medium leading-6 text-white font-roboto"
      >
        Log out
      </button>
    </form>
  );
}
