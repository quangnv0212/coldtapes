"use client";
import { useState } from "react";
import AudioPlayerComponent from "./AudioPlayer";
import FAQSectionComponent from "./FAQComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import Image from "next/image";

export default function HomeComponent() {
  const [email, setEmail] = useState("");

  const faqs = [
    {
      q: "How to listen?",
      a: "You can listen to the podcast on Spotify or wherever you get your podcasts. Simply search 'COLD TAPES' or click one of the links at the top of this page to take you straight there. ",
    },
    {
      q: "How to purchase?",
      a: "Hit the ’Start your investigation!’ button above to register. Once you’re registered, you’ll have the option to purchase whichever bundle suits you best. By purchasing, you get access to all the content immediately and a ticket to enter the competition to win £10,000.",
    },
    {
      q: "How to participate?",
      a: "You can listen to COLD TAPES wherever you get your podcasts. If you want to get involved, you can purchase one of the COLD TAPES bundles which gives you access to all the content immediately and a ticket to enter the competition to win £10,000. You can also get involved in the COLD TAPES community via our social channels below. Once you've purchased COLD TAPES, you'll be able to select the suspect you think killed Drew and submit your entry into the competition. The competition closes on Friday 6th September and T&Cs apply.",
    },
    {
      q: "How to solve?",
      a: "You'll need detective-standard listening and analytical skills to evaluate evidence, form theories and hypotheses, and question whether what you're being told is the truth... or a lie. You'll need to piece together the clues, motives and alibis to crack the case and determine which of our 16 suspects is the killer. Once you've cracked it, you can enter the competition to be in with a chance of winning Super Sleuth of the Year and claim the £10,000 reward.",
    },
    {
      q: "How to submit?",
      a: "If you've bought a COLD TAPES bundle you'll be able to select the killer from the list of suspects and hit submit to enter the competition. The competition closes on Friday 6th September and the killer will be revealed on Monday 9th September. To enter you must be over 18 and a resident of Great Britain.",
    },
  ];

  return (
    <main className="bg-grey-100 overflow-x-hidden">
      <div className="md:p-8 h-[86vh] md:h-svh">
        <div className="bg-white rounded-b-xl md:rounded-xl bg-header-image bg-center md:bg-top bg-no-repeat bg-cover h-full">
          <HeaderComponent />
          <div className="md:hidden flex items-center justify-end h-full pb-16 flex-col">
            <div>
              <p className="text-white font-semibold text-center">
                Listen for free:
              </p>
              <div className="flex flex-row gap-x-3 items-center justify-center w-full h-full">
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
          <div className="relative isolate px-6 pt-14 lg:px-8 h-full hidden md:block">
            <div className="mx-auto max-w-7xl flex justify-center pb-8 items-end h-full">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  16 Suspects. 1 Murderer. Only you can solve it...
                </h1>
                <div className="flex flex-row gap-x-3 max-w-2xl mx-auto mt-5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full px-8 rounded-2xl border-0 py-5 text-2xl font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                    placeholder="you@example.com"
                  />
                  <a
                    href={"/register?email=" + email}
                    className="rounded-2xl font-bold justify-center items-center flex whitespace-nowrap bg-teal-500 px-3.5 py-4 text-base text-black shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    Start your investigation!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="px-8 pt-12 pb-20 text-left md:text-center max-w-7xl mx-auto"
        id="what"
      >
        <p className="text-black font-extrabold text-2xl pb-8 leading-10 hidden md:block">
          COLD TAPES is an innovative, first-of-its-kind audio experience. It’s
          part podcast, part murder mystery game; an audio whodunnit competition
          where you can play detective.
        </p>
        <p className="text-black font-extrabold text-left text-3xl pb-8 leading-10 md:hidden">
          16 Suspects.
          <br />1 Murderer.
          <br />
          Only you can solve it...
        </p>
        <p className="text-black font- text-2xl pb-8 leading-10 text-left block md:hidden mb-4">
          COLD TAPES is an innovative, first-of-its-kind audio experience. It’s
          part podcast, part murder mystery game; an audio whodunnit competition
          where you can play detective.
        </p>
        <p className="text-black font- text-2xl pb-8 leading-10">
          Set on an Antarctic research base during a dark and desolate
          &apos;winter over&apos;, British behavioural scientist Andrew
          &apos;Drew&apos; Fairfield has been found murdered. There are 16
          people left on the base and the murderer must be one of them.
        </p>
        <p className="text-black font- text-2xl pb-8 leading-10">
          Your job is to solve the crime.
        </p>

        <p className="text-black font-extrabold text-2xl pb-12 leading-10 hidden md:block">
          Check out File 001: Operation Antelope below to get your brief, or
          search COLD TAPES wherever you get your podcasts.
        </p>
        <div className="mb-12 md:mb-0">
          <AudioPlayerComponent />
        </div>
        <a
          href="/register"
          className="bg-red-500 border text-white py-4 px-6 rounded-lg text-left font-bold md:hidden w-full flex justify-center items-center"
        >
          Start your investigation
        </a>
      </div>
      <div className=" bg-center md:bg-top bg-no-repeat bg-cover h-full px-8 py-16 md:hidden overflow-hidden">
        <h3 className="font-bold text-5xl text-center mb-4 text-black">
          Think you can figure it out?
        </h3>
        <p className="font-roboto font-medium  text-center text-black">
          It’s time you proved to everyone you are the detective you were born
          to be!
        </p>
        <div className="relative w-full flex justify-center items-center h-[420px] px-20 mt-20">
          <div className="bg-red-500 h-full max-w-[20rem] w-full absolute rotate-[-14deg] rounded-2xl"></div>
          <div className="bg-black max-w-[20rem] w-full absolute h-full rounded-2xl p-8 flex flex-col justify-between">
            <p className="font-roboto text-white font-semibold text-2xl">
              Want instant access?
            </p>
            <p className="text-white mt-3 mb-5">
              For £5.00 you can access the full series now and totally ad-free.
              Plus, correctly identify the killer and enter the competition to
              win £10,000.
            </p>

            <h4 className="text-white font-bold text-5xl mb-2">£5.00</h4>
            <a
              href="/register"
              className="rounded-2xl justify-center font-semibold items-center border flex whitespace-nowrap bg-black px-3.5  text-base py-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Sign Up To Listen!
            </a>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 mt-36 md:mt-0" id="how">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h3 className="text-white text-5xl mb-4 font-extrabold">
            How to Play
          </h3>
          <p className="text-2xl leading-10 mb-4 text-white">
            DCI Tessa McCallister and her team have been gathering evidence into
            the murder of behavioural scientist Andrew ‘Drew’ Fairfield.
          </p>
          <p className="text-2xl leading-10 mb-4 text-white">
            This includes the victim’s audio diaries, research and voice notes,
            secret recordings of life on the base and subsequent police
            interview tapes and audio evidence files. You’ll need to immerse
            yourself in these files, piece together the clues and whittle down
            the 16 suspects to find the murderer.
          </p>
          <p className="text-2xl leading-10 mb-4 text-white">
            Evidence files are released every week on Spotify, Apple and all
            major podcast platforms. And if you don’t want to wait, you can
            subscribe to COLD TAPES to get all the evidence immediately.
          </p>
          <p className="text-2xl leading-10 mb-4 text-white">
            The murderer will be revealed by DCI Tessa McCallister on Monday 9th
            September.
          </p>
        </div>
      </div>
      <div className="bg-home-image bg-center md:bg-top bg-no-repeat bg-cover h-full px-8 py-32 hidden md:block">
        <h3 className="text-white font-bold text-5xl text-center mb-4">
          Think you can figure it out?
        </h3>
        <p className="font-roboto font-medium text-white text-2xl text-center">
          It’s time you proved to everyone you are the detective you were born
          to be!
        </p>
        <div className="relative h-[500px] w-full flex justify-center items-center mt-12">
          <div className="bg-red-500 sm:max-h-[360px] h-full max-w-[40rem] w-full absolute rotate-[-10deg] rounded-xl top-20"></div>
          <div className="bg-black max-w-[40rem] absolute rounded-xl  top-16 p-10">
            <div className="flex flex-row gap-x-3">
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full font-bold px-8 rounded-2xl border-0 py-4 text-xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              />
              <a
                href={"/register?email=" + email}
                className="rounded-2xl justify-center items-center flex whitespace-nowrap bg-red-500 px-3.5 py-2.5 text-base font-bold text-black shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Start your investigation!
              </a>
            </div>
            <p className="font-roboto text-white font-semibold mt-6 text-lg mb-5">
              For £5 registered users can access the following:
            </p>

            <dl>
              <dt className="font-roboto text-white font-semibold  flex mb-4">
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
                The full series now! All the files you need to solve the case,
                available immediately.
              </dt>
              <dt className="font-roboto text-white font-semibold  flex mb-4">
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
                A totally ad-free experience.
              </dt>
              <dt className="font-roboto text-white font-semibold flex">
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
                A competition entry*: correctly identify the killer and enter
                the draw to win £10,000 and the prestigious award of Super
                Sleuth of the Year. <br />
                <br />
                *Over 18 only. Must be resident in Great Britain. T&C’s apply.
              </dt>
            </dl>
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-12 px-8 gap-y-8 md:gap-x-8 max-w-7xl mx-auto py-36"
        id="faq"
      >
        <div className="col-span-12 md:col-span-5">
          <h3 className="font-bold text-4xl mb-3 text-black">
            Frequently Asked Questions
          </h3>
          <p className="font-medium text-black">
            Find answers to common questions about the podcast, purchasing
            options, and participation guidelines.
          </p>
        </div>
        <div className="col-span-12 md:col-span-7">
          {faqs.map((faq) => (
            <FAQSectionComponent key={faq.q} faq={faq} />
          ))}
        </div>
      </div>
      <FooterComponent />
    </main>
  );
}
