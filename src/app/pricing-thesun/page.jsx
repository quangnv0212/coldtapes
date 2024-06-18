"use server";

import Stripe from "stripe";
import { StripeCardComponent } from "../components/StripeCardComponent";
import useAuth from "../../../hooks/useAuth";
import LoggedInHeaderComponent from "../components/LoggedInHeaderComponent";
import FooterComponent from "../components/FooterComponent";
import Image from "next/image";
import BuyNowButton from "../components/BuyNowButton";
import GreyBuyNowButton from "../components/GreyBuyNowButton";

export default async function PricingPage() {
  const user = await useAuth();

  return (
    <div className="overflowx-x-hidden">
      <div className="bg-home-image bg-center bg-cover bg-no-repeat">
        <LoggedInHeaderComponent />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-4 mx-auto pt-56 pb-64 -mb-6 gap-y-24 lg:gap-y-0">
          <div className="xl:col-span-3 text-center -mb-24 lg:mb-4 px-8">
            <p className="text-white font-bold text-4xl mb-4">
              Piece together the clues, motives and alibis
              <br /> to crack the case before it&apos;s too late:
            </p>
          </div>

          <div className="relative w-full flex justify-center items-center mt-4 h-[700px] px-20 mb-20 xl:mb-0">
            <div className="bg-red-500 h-full max-w-[26rem] w-full absolute rotate-[-10deg] rounded-2xl top-20 z-0"></div>
            <div className="bg-black overflow-hidden max-w-[26rem] w-full absolute h-full rounded-2xl top-20 flex z-10 flex-col">
              <p className="leading-0 text-white flex font-semibold pt-4 pb-2 text-2xl text-center mb-0 items-center justify-center">
                LISTEN NOW
              </p>
              <div className="bg-grey-500 p-10 justify-around">
                <h4 className="text-white font-roboto font-medium text-5xl pb-10">
                  FREE
                </h4>
                <div className="border-t border-b py-1.5">
                  <p className="text-white font-roboto font-medium text-sm p-1.5">
                    It&apos;s a marathon not a sprint.
                  </p>
                </div>
              </div>
              <div className="flex-col justify-between h-full pb-10  flex px-10 bg-grey-500">
                <dl className="">
                  <dt className="font-roboto text-white font-semibold  text-base flex mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 mr-1.5"
                    >
                      <path
                        d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                        fill="white"
                      />
                    </svg>
                    New evidence is released each week.
                  </dt>
                  <dt className="font-roboto text-white font-semibold  text-base flex mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 mr-1.5"
                    >
                      <path
                        d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                        fill="white"
                      />
                    </svg>
                    Follow via the links below or wherever you get your
                    podcasts.
                  </dt>
                </dl>
                <div className="flex justify-center gap-x-4 items-center mb-16">
                  <a
                    href="https://open.spotify.com/show/77CwkM5LYg9zWddG5pgYBy"
                    className="text-sm font-semibold leading-6 text-gray-900"
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
          </div>
          <div className="relative w-full flex justify-center items-center mt-4 h-[700px] px-20 mb-20 xl:mb-0">
            <div className="bg-red-500 h-full max-w-[26rem] w-full absolute rotate-[-10deg] rounded-2xl top-20 z-0"></div>
            <div className="bg-black overflow-hidden max-w-[26rem] w-full absolute h-full rounded-2xl top-20 flex z-10 flex-col">
              <p className="leading-0 text-black flex bg-grey-200  font-semibold pt-4 pb-2 text-2xl text-center mb-0 items-center justify-center">
                INSTANT ACCESS
              </p>
              <div className="bg-black p-10">
                <h4 className="text-white font-roboto font-medium text-5xl pb-10">
                  £5.00 <span className="text-sm">ONE TIME</span>
                </h4>
                <div className="border-t border-b py-1.5">
                  <p className="text-white font-roboto font-medium text-sm p-1.5">
                    How quickly can you solve it?
                  </p>
                </div>
              </div>
              <div className="flex-col justify-between h-full pb-10  flex px-10">
                <dl className="">
                  <dt className="font-roboto text-white font-semibold  text-base flex mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 mr-1.5"
                    >
                      <path
                        d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                        fill="white"
                      />
                    </svg>
                    Access all 83 case files immediately and ad-free
                  </dt>
                  <dt className="font-roboto text-white font-semibold  text-base flex mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 mr-1.5"
                    >
                      <path
                        d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                        fill="white"
                      />
                    </svg>
                    Claim your ticket to enter the competition; correctly
                    identify the killer before 6th September for the chance to
                    win £10,000 and Super Sleuth of the Year 2024 (18+ GB
                    residents only)
                  </dt>
                </dl>
                <div className="flex justify-center gap-x-4 items-center mt-16 opacity-70">
                  <GreyBuyNowButton
                    amount={500}
                    product={"Instant"}
                    user_id={user.id}
                    disabled={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full flex justify-center items-center mt-4 h-[700px] px-20">
            <div className="bg-red-500 h-full max-w-[26rem] w-full absolute rotate-[-10deg] rounded-2xl top-20 z-0"></div>
            <div className="bg-black overflow-hidden max-w-[26rem] w-full absolute h-full rounded-2xl top-20 flex z-10 flex-col">
              <div className="leading-0 text-white flex bg-blue-500  font-semibold pt-4 pb-2 text-2xl text-center mb-0 items-center justify-center  flex-col">
                SUPERCHARGED
                <Image
                  height={50}
                  width={200}
                  className="h-8 w-auto mt-3"
                  src="/sun.png"
                  alt="Sun Logo"
                />
                <p className="text-base mt-1">EXCLUSIVE OFFER</p>
              </div>

              <div className="bg-black p-10">
                <h4 className="text-white font-roboto font-medium text-4xl pb-4 line-through">
                  £12.00
                </h4>
                <h4 className="text-white font-roboto font-medium text-5xl pb-10">
                  £5.00 <span className="text-sm">ONE TIME</span>
                </h4>
                <div className="border-t border-b py-1.5">
                  <p className="text-white font-roboto font-medium text-sm p-1.5">
                    The Official COLD TAPES Detective Pack:
                  </p>
                </div>
              </div>
              <div className=" flex-col justify-between h-full pb-10  flex px-10">
                <dl className="">
                  <dt className="font-roboto text-white font-semibold  text-base flex mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 mr-1.5"
                    >
                      <path
                        d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                        fill="white"
                      />
                    </svg>
                    Everything in INSTANT ACCESS
                  </dt>
                  <dt className="font-roboto text-white font-semibold  text-base flex mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 mr-1.5"
                    >
                      <path
                        d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                        fill="white"
                      />
                    </svg>
                    Transcripts
                  </dt>
                  <dt className="font-roboto text-white font-semibold  text-base flex mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 mr-1.5"
                    >
                      <path
                        d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                        fill="white"
                      />
                    </svg>
                    Suspect profiles
                  </dt>
                  <dt className="font-roboto text-white font-semibold  text-base flex mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 mr-1.5"
                    >
                      <path
                        d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                        fill="white"
                      />
                    </svg>
                    A crime solving matrix designed by an ex-murder squad
                    detective
                  </dt>
                </dl>
                <div className="flex justify-center gap-x-4 items-center ">
                  <BuyNowButton
                    amount={500}
                    product={"Supercharged"}
                    user_id={user.id}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}
