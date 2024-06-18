"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import AuthCheck from "../../../hooks/useAuthCheck";
import Link from "next/link";

export default function HeaderComponent() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const loggedIn = await AuthCheck();
      setLoggedIn(loggedIn);
    };

    checkAuth();
  }, []);

  const navigation = [
    { name: "The Story", href: "/#what" },
    { name: "Listen", href: "/#how" },
    { name: "The Competition", href: "/#faq" },
    { name: "FAQs", href: "/#faq" },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="inset-x-0 top-0 z-50 p-8 lg:p-0 absolute md:relative">
      <nav
        className="flex items-center lg:justify-between justify-end p-6 lg:px-[45px] lg:py-[32px]"
        aria-label="Global"
      >
        <div className="desktop">
          <div className="flex">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Cold Tapes</span>
              <div className="desktop">
                <Image
                  height={50}
                  width={200}
                  className=" md:block h-16 lg:w-[78px] lg:h-[42px] w-auto"
                  src="/logo.png"
                  alt="Cold Tapes Logo"
                />
              </div>
              <div className="tablet">
                <Image
                  height={50}
                  width={200}
                  className=" md:block h-16 w-auto"
                  src="/logo.png"
                  alt="Cold Tapes Logo"
                />
              </div>
              <div className="mobile">
                <Image
                  height={50}
                  width={200}
                  className="hidden md:block h-16 w-auto"
                  src="/logo.png"
                  alt="Cold Tapes Logo"
                />
              </div>
            </a>
          </div>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 bg-white bg-opacity-90"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-black" aria-hidden="true" />
          </button>
        </div>
        {/* Desktop */}
        <div className="desktop">
          <div className="lg:flex lg:gap-[35px]">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[20px] leading-[30px] font-medium text-white font-roboto"
              >
                {item.name}
              </a>
            ))}
            {!loggedIn ? (
              <a
                href={"/login"}
                className="text-[20px] leading-[30px] font-medium text-white font-roboto"
              >
                Login
              </a>
            ) : (
              <a
                href={"/dashboard"}
                className="text-xl font-bold leading-6 text-white font-roboto"
              >
                Dashboard
              </a>
            )}
          </div>
        </div>
        {/* Tablet */}
        <div className="tablet">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl font-bold leading-6 text-white font-roboto"
              >
                {item.name}
              </a>
            ))}
            {!loggedIn ? (
              <a
                href={"/login"}
                className="text-xl font-bold leading-6 text-white font-roboto"
              >
                Login
              </a>
            ) : (
              <a
                href={"/dashboard"}
                className="text-xl font-bold leading-6 text-white font-roboto"
              >
                Dashboard
              </a>
            )}
          </div>
        </div>
        {/* Mobile */}
        <div className="mobile">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl font-bold leading-6 text-white font-roboto"
              >
                {item.name}
              </a>
            ))}
            {!loggedIn ? (
              <a
                href={"/login"}
                className="text-xl font-bold leading-6 text-white font-roboto"
              >
                Login
              </a>
            ) : (
              <a
                href={"/dashboard"}
                className="text-xl font-bold leading-6 text-white font-roboto"
              >
                Dashboard
              </a>
            )}
          </div>
        </div>

        {/* Desktop */}
        <div className="desktop">
          <div className=" lg:flex lg:flex-1 flex-col justify-end items-end ">
            {/* <p className="text-white mr-[140px] font-semibold">
              Listen for free:
            </p> */}
            <div className="lg:flex lg:flex-1 lg:justify-end lg:gap-[13px] items-center">
              <a
                href="https://open.spotify.com/show/77CwkM5LYg9zWddG5pgYBy"
                className="text-sm font-semibold leading-6 text-gray-900"
                target="_blank"
              >
                <Image
                  src={"/spotify.png"}
                  height={30}
                  width={30}
                  alt="Spotify logo"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://itunes.apple.com/podcast/id1738635218"
                className="text-sm font-semibold leading-6 text-gray-900"
                target="_blank"
              >
                <Image
                  src={"/apple.png"}
                  height={30}
                  width={30}
                  alt="Apple logo"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://www.youtube.com/playlist?list=PLVBZLHOfBoFt5oBjkdbDplWzmapzMT8eG"
                className="text-sm font-semibold leading-6 text-gray-900"
                target="_blank"
              >
                <Image
                  src={"/youtube.png"}
                  height={30}
                  width={30}
                  alt="YouTube logo"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://www.iheart.com/podcast/165717701"
                className="text-sm font-semibold leading-6 text-gray-900"
                target="_blank"
              >
                <Image
                  src={"/heart.png"}
                  height={60}
                  width={60}
                  alt="Heart logo"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://music.amazon.co.uk/podcasts/32faccad-d04c-4d7b-b558-839e5e7c5e57/cold-tapes"
                className="text-sm font-semibold leading-6 text-gray-900"
                target="_blank"
              >
                <Image
                  src={"/amazon.png"}
                  height={60}
                  width={60}
                  alt="Amazon logo"
                  className="w-10 h-auto object-cover"
                />
              </a>
            </div>
          </div>
        </div>
        {/* Tablet  */}
        <div className="tablet">
          <div className="hidden lg:flex lg:flex-1 flex-col justify-end items-end ">
            <p className="text-white mr-[140px] font-semibold">
              Listen for free:
            </p>
            <div className="lg:flex lg:flex-1 lg:justify-end gap-x-4 items-center">
              <a
                href="https://open.spotify.com/show/77CwkM5LYg9zWddG5pgYBy"
                className="text-sm font-semibold leading-6 text-gray-900"
                target="_blank"
              >
                <Image
                  src={"/spotify.png"}
                  height={30}
                  width={30}
                  alt="Spotify logo"
                />
              </a>
              <a
                href="https://itunes.apple.com/podcast/id1738635218"
                className="text-sm font-semibold leading-6 text-gray-900"
                target="_blank"
              >
                <Image
                  src={"/apple.png"}
                  height={30}
                  width={30}
                  alt="Apple logo"
                />
              </a>
              <a
                href="https://www.youtube.com/playlist?list=PLVBZLHOfBoFt5oBjkdbDplWzmapzMT8eG"
                className="text-sm font-semibold leading-6 text-gray-900"
                target="_blank"
              >
                <Image
                  src={"/youtube.png"}
                  height={30}
                  width={30}
                  alt="YouTube logo"
                />
              </a>
              <a
                href="https://www.iheart.com/podcast/165717701"
                className="text-sm font-semibold leading-6 text-gray-900"
                target="_blank"
              >
                <Image
                  src={"/heart.png"}
                  height={60}
                  width={60}
                  alt="Heart logo"
                  className="w-10 h-auto object-cover"
                />
              </a>
              <a
                href="https://music.amazon.co.uk/podcasts/32faccad-d04c-4d7b-b558-839e5e7c5e57/cold-tapes"
                className="text-sm font-semibold leading-6 text-gray-900"
                target="_blank"
              >
                <Image
                  src={"/amazon.png"}
                  height={60}
                  width={60}
                  alt="Amazon logo"
                  className="w-14 h-auto"
                />
              </a>
            </div>
          </div>
        </div>
        {/* Mobile  */}
        <div className="mobile">
          <div className="hidden lg:flex lg:flex-1 flex-col justify-end items-end ">
            <p className="text-white mr-[140px] font-semibold">
              Listen for free:
            </p>
            <div className="lg:flex lg:flex-1 lg:justify-end gap-x-4 items-center">
              <a
                href="https://open.spotify.com/show/77CwkM5LYg9zWddG5pgYBy"
                className="text-sm font-semibold leading-6 text-gray-900"
                target="_blank"
              >
                <Image
                  src={"/spotify.png"}
                  height={30}
                  width={30}
                  alt="Spotify logo"
                />
              </a>
              <a
                href="https://itunes.apple.com/podcast/id1738635218"
                className="text-sm font-semibold leading-6 text-gray-900"
                target="_blank"
              >
                <Image
                  src={"/apple.png"}
                  height={30}
                  width={30}
                  alt="Apple logo"
                />
              </a>
              <a
                href="https://www.youtube.com/playlist?list=PLVBZLHOfBoFt5oBjkdbDplWzmapzMT8eG"
                className="text-sm font-semibold leading-6 text-gray-900"
                target="_blank"
              >
                <Image
                  src={"/youtube.png"}
                  height={30}
                  width={30}
                  alt="YouTube logo"
                />
              </a>
              <a
                href="https://www.iheart.com/podcast/165717701"
                className="text-sm font-semibold leading-6 text-gray-900"
                target="_blank"
              >
                <Image
                  src={"/heart.png"}
                  height={60}
                  width={60}
                  alt="Heart logo"
                  className="w-10 h-auto object-cover"
                />
              </a>
              <a
                href="https://music.amazon.co.uk/podcasts/32faccad-d04c-4d7b-b558-839e5e7c5e57/cold-tapes"
                className="text-sm font-semibold leading-6 text-gray-900"
                target="_blank"
              >
                <Image
                  src={"/amazon.png"}
                  height={60}
                  width={60}
                  alt="Amazon logo"
                  className="w-14 h-auto"
                />
              </a>
            </div>
          </div>
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
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Cold Tapes</span>
              <Image
                height={50}
                width={200}
                className="h-16 w-auto"
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
            <div className="-my-6 divide-gray-500/10">
              <div className="space-y-2 pt-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="">
                {!loggedIn ? (
                  <div className="">
                    <a
                      href="/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                    {/* <div className="">
                      <Link
                        href="/sign-up"
                        className="capitalize px-6 py-3 rounded-[6px] text-base font-semibold leading-7 text-black bg-[#FE0000]"
                      >
                        Sign up to listen!
                      </Link>
                    </div> */}
                  </div>
                ) : (
                  <a
                    href="/dashboard"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Dashboard
                  </a>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
