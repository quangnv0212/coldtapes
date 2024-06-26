"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SignOutButton from "./signOutButton";
import { logOut } from "../logout/actions";

export default function LoggedInHeaderComponent() {
  const navigation = [
    { name: "What Is It?", href: "/#what" },
    { name: "How To Play", href: "/#how" },
    { name: "FAQ's", href: "/#faq" },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogOut = async (e) => {
    e.preventDefault();
    await logOut();
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 p-8">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1"></div>

        <div className="gap-x-12">
          <Image
            src="/logo.png"
            alt="Cold Tapes Logo"
            width={200}
            height={50}
            className="text-center mx-auto mb-8"
          />
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-8 items-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xl font-medium leading-6 text-white font-roboto"
            >
              {item.name}
            </a>
          ))}
          <SignOutButton />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Cold Tapes</span>
              <Image
                height={50}
                width={200}
                className="h-12 w-auto"
                src="/logo_black.png"
                alt="Cold Tapes Logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <form onSubmit={handleLogOut}>
                  <button
                    type="submit"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log out
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
